'use client';

import { useEffect, useRef } from 'react';
import { afterPaintIdle, loadAnimationData, loadLottie, type LottieAnimation } from '../lib/lottie-runtime';

export function AnimatedIcon({ path, className = '' }: { path: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    let disposed = false;
    let loading = false;
    let visible = false;
    let animation: LottieAnimation | undefined;
    let cancelIdle: (() => void) | undefined;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePlayback = () => {
      if (!animation) return;
      if (motion.matches) animation.goToAndStop(0, true);
      else if (visible && !document.hidden) animation.play();
      else animation.pause();
    };
    const mount = async () => {
      if (loading || animation || disposed || document.hidden) return;
      loading = true;
      try {
        const [player, animationData] = await Promise.all([loadLottie(), loadAnimationData(path)]);
        if (disposed) return;
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
      } finally { loading = false; }
    };
    const near = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        cancelIdle?.();
        cancelIdle = afterPaintIdle(() => { void mount(); });
      } else cancelIdle?.();
    }, { rootMargin: '240px 0px' });
    const inView = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      updatePlayback();
    });
    const onVisibility = () => {
      updatePlayback();
      const rect = host.getBoundingClientRect();
      if (!document.hidden && rect.bottom > -240 && rect.top < window.innerHeight + 240) {
        cancelIdle?.();
        cancelIdle = afterPaintIdle(() => { void mount(); });
      }
    };
    near.observe(host);
    inView.observe(host);
    document.addEventListener('visibilitychange', onVisibility);
    motion.addEventListener('change', updatePlayback);
    return () => {
      disposed = true;
      cancelIdle?.();
      near.disconnect();
      inView.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      motion.removeEventListener('change', updatePlayback);
      animation?.destroy();
    };
  }, [path]);
  return <div ref={ref} className={`animated-icon ${className}`} aria-hidden="true" />;
}
