'use client';

import { useEffect, useRef } from 'react';

import { afterPaintIdle, loadAnimationData, loadLottie, type LottieAnimation } from '../lib/lottie-runtime';

type World = { background: string; foreground: string; shadow: string; highlight: string; planet: string; scale: number; offsetX: number; offsetY: number };

const worlds: World[] = [
  { background:'#c23d26', foreground:'#94291a', shadow:'#7d2114', highlight:'#df654d', planet:'planet-orbit.json', scale:1.15, offsetX:-40, offsetY:-5 },
  { background:'#267489', foreground:'#0e4959', shadow:'#09313e', highlight:'#5794a4', planet:'blue-teal-planet.json', scale:.59, offsetX:-40, offsetY:0 },
  { background:'#3d7320', foreground:'#21700f', shadow:'#124008', highlight:'#649a47', planet:'green-planet.json', scale:.45, offsetX:-40, offsetY:0 },
  { background:'#7a3d75', foreground:'#572152', shadow:'#451740', highlight:'#a1669c', planet:'purple-planet.json', scale:.48, offsetX:-40, offsetY:0 },
  { background:'#c35b1b', foreground:'#84390e', shadow:'#6a2a09', highlight:'#dc824b', planet:'orange-planet.json', scale:.45, offsetX:-40, offsetY:0 },
  { background:'#0fa385', foreground:'#076d59', shadow:'#045040', highlight:'#48bca5', planet:'earth-like-planet.json', scale:.49, offsetX:-40, offsetY:0 },
  { background:'#702222', foreground:'#4a1313', shadow:'#310a0a', highlight:'#9b5050', planet:'redstar-planet.json', scale:.64, offsetX:-40, offsetY:0 },
  { background:'#163c71', foreground:'#0b254a', shadow:'#07182f', highlight:'#496a96', planet:'dark-blue-planet.json', scale:.45, offsetX:-40, offsetY:0 },
  { background:'#814d1f', foreground:'#542e11', shadow:'#3b1d08', highlight:'#aa774b', planet:'yellow-planet.json', scale:.62, offsetX:-40, offsetY:0 },
  { background:'#2c3924', foreground:'#192016', shadow:'#10170c', highlight:'#58674e', planet:'black-planet.json', scale:.53, offsetX:-40, offsetY:0 },
];

export function BrandLockup({ controlsTheme = false }: { controlsTheme?: boolean }) {
  const host = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const container = host.current;
    if (!container) return;
    let disposed = false;
    let visible = false;
    let nearby = false;
    let index = Number(document.documentElement.dataset.worldIndex ?? 0);
    let timer: number | undefined;
    let cancelIdle: (() => void) | undefined;
    let generation = 0;
    let active: { index: number; layer: HTMLSpanElement; animation: LottieAnimation } | undefined;
    const retiring = new Map<LottieAnimation, { layer: HTMLSpanElement; timer: number }>();
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePlayback = () => {
      if (!active) return;
      if (motion.matches) active.animation.goToAndStop(0, true);
      else if (visible && !document.hidden) active.animation.play();
      else active.animation.pause();
    };
    const mountPlanet = async () => {
      if (disposed || !nearby || document.hidden || active?.index === index) {
        updatePlayback();
        return;
      }
      const request = ++generation;
      const nextIndex = index;
      const world = worlds[nextIndex];
      try {
        const [player, animationData] = await Promise.all([loadLottie(), loadAnimationData(world.planet)]);
        if (disposed || request !== generation || !nearby || document.hidden) return;
        const layer = document.createElement('span');
        layer.className = 'brand-planet__layer';
        layer.style.setProperty('--world-planet-scale', String(world.scale));
        layer.style.setProperty('--world-planet-offset-x', `${world.offsetX}px`);
        layer.style.setProperty('--world-planet-offset-y', `${world.offsetY}px`);
        container.appendChild(layer);
        const animation = player.loadAnimation({ container: layer, renderer: 'canvas', loop: true,
          autoplay: false, animationData, rendererSettings: { dpr: Math.min(window.devicePixelRatio || 1, 3) } });
        const previous = active;
        active = { index: nextIndex, layer, animation };
        let revealed = false;
        const reveal = () => {
          if (disposed || revealed || active?.animation !== animation) return;
          revealed = true;
          layer.classList.add('is-visible');
          updatePlayback();
          if (previous) {
            previous.animation.pause();
            const removal = window.setTimeout(() => {
              previous.animation.destroy();
              previous.layer.remove();
              retiring.delete(previous.animation);
            }, 480);
            retiring.set(previous.animation, { layer: previous.layer, timer: removal });
          }
        };
        animation.addEventListener('DOMLoaded', reveal);
        if (animation.isLoaded) reveal();
      } catch {
        // Keep the current planet if an optional animation cannot load.
      }
    };
    const queuePlanet = () => {
      cancelIdle?.();
      cancelIdle = afterPaintIdle(() => { void mountPlanet(); });
    };
    const applyWorld = () => {
      const world = worlds[index];
      const root = document.documentElement;
      root.style.setProperty('--world-color', world.background);
      root.style.setProperty('--world-shadow', world.shadow);
      root.dataset.worldIndex = String(index);
      window.dispatchEvent(new CustomEvent('evanko-world-change', { detail: index }));
    };
    const startTimer = () => {
      if (!controlsTheme || timer !== undefined || motion.matches || document.hidden) return;
      timer = window.setInterval(() => {
        index = (index + 1) % worlds.length;
        applyWorld();
        if (nearby) queuePlanet();
      }, 3400);
    };
    const stopTimer = () => {
      if (timer !== undefined) window.clearInterval(timer);
      timer = undefined;
    };
    const onVisibility = () => {
      if (document.hidden) { stopTimer(); cancelIdle?.(); ++generation; }
      else { startTimer(); if (nearby) queuePlanet(); }
      updatePlayback();
    };
    const onMotionChange = () => {
      stopTimer();
      startTimer();
      updatePlayback();
    };
    const onWorldChange = (event: Event) => {
      if (controlsTheme) return;
      index = (event as CustomEvent<number>).detail;
      if (nearby) queuePlanet();
    };
    const near = new IntersectionObserver(entries => {
      nearby = entries[0].isIntersecting;
      if (nearby) queuePlanet();
      else { cancelIdle?.(); ++generation; }
    }, { rootMargin: '240px 0px' });
    const inView = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      updatePlayback();
    });
    near.observe(container);
    inView.observe(container);
    document.addEventListener('visibilitychange', onVisibility);
    motion.addEventListener('change', onMotionChange);
    window.addEventListener('evanko-world-change', onWorldChange);
    const cancelStart = afterPaintIdle(() => { if (controlsTheme) { applyWorld(); startTimer(); } });
    return () => {
      disposed = true;
      ++generation;
      cancelStart();
      cancelIdle?.();
      stopTimer();
      near.disconnect();
      inView.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      motion.removeEventListener('change', onMotionChange);
      window.removeEventListener('evanko-world-change', onWorldChange);
      active?.animation.destroy();
      active?.layer.remove();
      retiring.forEach(({ layer, timer: removal }, animation) => {
        window.clearTimeout(removal);
        animation.destroy();
        layer.remove();
      });
    };
  }, [controlsTheme]);
  return <a className="site-brand" href="/"><span className="brand-orbit" aria-hidden="true"><span ref={host} className="brand-planet" /></span>Evanko Foundation</a>;
}
