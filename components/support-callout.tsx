import SiteLink from './site-link';

/** A shared support invitation rendered into the exported HTML, with no client script. */
export function SupportCallout() {
  return <section className="support-callout" aria-labelledby="support-callout-heading">
    <div className="shell support-callout__inner">
      <div><p className="eyebrow">Be part of the mission</p><h2 id="support-callout-heading">Help keep language learning free.</h2><p className="support-callout__copy">Donate to expand access, or share your time and skills through tutoring, language review, and school support.</p></div>
      <div className="button-row support-callout__actions"><SiteLink href="/donate" className="button button--red">Donate</SiteLink><SiteLink href="/get-involved" className="button button--outline">Get involved</SiteLink></div>
    </div>
  </section>;
}
