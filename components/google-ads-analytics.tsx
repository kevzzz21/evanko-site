'use client';

import { useEffect } from 'react';

const ADS_DESTINATION = 'AW-18496123081';
const GA4_DESTINATION = 'G-0QDYT5EN8K';
const LINKED_DOMAINS = ['evanko.co', 'www.evanko.co', 'learn.flashfluent.app'];

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }
}

function configureGoogleTag() {
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = window.gtag ?? ((...args: unknown[]) => window.dataLayer?.push(args));
  window.gtag('js', new Date());
  const options = { linker: { domains: LINKED_DOMAINS, accept_incoming: true } };
  window.gtag('config', GA4_DESTINATION, options);
  window.gtag('config', ADS_DESTINATION, options);
}

/** Adds the Google Ads base tag and records a learner's outbound course choice.
 * No identity, contact, or donation data is sent from this marketing site. */
export function GoogleAdsAnalytics() {
  useEffect(() => {
    configureGoogleTag();
    let script = document.getElementById('flashfluent-google-ads-tag') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'flashfluent-google-ads-tag';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_DESTINATION}`;
      document.head.append(script);
    }

    const trackOutboundAppClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest('a[href]') : null;
      if (!target) return;
      const href = new URL(target.getAttribute('href') ?? '', window.location.href);
      const courseCta = href.hostname === 'learn.flashfluent.app';
      const googlePlayCta = href.hostname === 'play.google.com'
        && href.pathname === '/store/apps/details'
        && href.searchParams.get('id') === 'com.evankofoundation.flashfluent';
      if (!courseCta && !googlePlayCta) return;

      const eventName = courseCta ? 'flashfluent_course_cta_clicked' : 'google_play_cta_clicked';
      const parameters = courseCta
        ? {
          source_page: window.location.pathname,
          course: href.searchParams.get('course') ?? 'unspecified',
          base_language: href.searchParams.get('base') ?? 'unspecified',
          onboarding: href.searchParams.get('onboarding') === 'instructions'
        }
        : {
          source_page: window.location.pathname,
          app_id: href.searchParams.get('id')
        };

      // Give GA4 a short chance to send the outbound click before leaving this
      // document. Modified/new-tab clicks retain their normal browser behavior.
      const normalNavigation = event.button === 0
        && !event.defaultPrevented
        && !event.metaKey
        && !event.ctrlKey
        && !event.shiftKey
        && !event.altKey
        && (!target.target || target.target === '_self');
      if (!normalNavigation) {
        window.gtag?.('event', eventName, parameters);
        return;
      }

      event.preventDefault();
      let navigated = false;
      const continueToDestination = () => {
        if (navigated) return;
        navigated = true;
        window.location.assign(href.toString());
      };
      window.gtag?.('event', eventName, { ...parameters, event_callback: continueToDestination });
      window.setTimeout(continueToDestination, 750);
    };


    document.addEventListener('click', trackOutboundAppClick);
    return () => document.removeEventListener('click', trackOutboundAppClick);
  }, []);

  return null;
}
