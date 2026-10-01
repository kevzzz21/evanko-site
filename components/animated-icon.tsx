'use client';

import { useEffect, useRef } from 'react';
import { afterPaintIdle, loadAnimationData, loadLottie, queueAnimationSetup, type LottieAnimation } from '../lib/lottie-runtime';

const preloadMargin = 120;

export function AnimatedIcon({ path, className = '' }: { path: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    let disposed = false;
    let loading = false;
    let visible = false;
    let nearby = false;
    let generation = 0;
    let animation: LottieAnimation | undefined;
    let cancelIdle: (() => void) | undefined;
    let cancelSetup: (() => void) | undefined;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePlayback = () => {
      if (!animation) return;
      if (motion.matches) animation.goToAndStop(0, true);
      else if (visible && !document.hidden) animation.play();
      else animation.pause();
    };
    const cancelPending = () => {
      cancelIdle?.();
      cancelIdle = undefined;
      cancelSetup?.();
      cancelSetup = undefined;
      ++generation;
      loading = false;
    };
    const mount = async () => {
      if (loading || animation || disposed || !nearby || document.hidden) return;
      loading = true;
      const request = ++generation;
      const isCurrent = () => !disposed && request === generation && nearby && !document.hidden;
      try {
        const [player, animationData] = await Promise.all([loadLottie(), loadAnimationData(path)]);
        if (!isCurrent()) return;
        const setup = queueAnimationSetup();
        cancelSetup = setup.cancel;
        if (!await setup.ready || !isCurrent()) return;
        cancelSetup = undefined;
        animation = player.loadAnimation({
          container: host,
          // Preserve SVG effects, including the plane's drop shadow.
          renderer: 'svg',
          loop: true,
          autoplay: false,
          animationData,
          rendererSettings: { dpr: Math.min(window.devicePixelRatio || 1, 3) },
        });
        animation.addEventListener('DOMLoaded', updatePlayback);
        updatePlayback();
      } catch {
        // Optional artwork must not interrupt reading or navigation.
      } finally { if (request === generation) loading = false; }
    };
    const queueMount = () => {
      if (animation || loading) return;
      cancelIdle?.();
      cancelIdle = afterPaintIdle(() => { void mount(); });
    };
    const near = new IntersectionObserver(entries => {
      nearby = entries[0].isIntersecting;
      if (nearby) queueMount();
      else cancelPending();
    }, { rootMargin: `${preloadMargin}px 0px` });
    const inView = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      updatePlayback();
    });
    const onVisibility = () => {
      if (document.hidden) cancelPending();
      else if (nearby) queueMount();
      updatePlayback();
    };
    near.observe(host);
    inView.observe(host);
    document.addEventListener('visibilitychange', onVisibility);
    motion.addEventListener('change', updatePlayback);
    return () => {
      disposed = true;
      cancelPending();
      near.disconnect();
      inView.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      motion.removeEventListener('change', updatePlayback);
      animation?.destroy();
    };
  }, [path]);
  return <div ref={ref} className={`animated-icon ${className}`} aria-hidden="true" />;
}
