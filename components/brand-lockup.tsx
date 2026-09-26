'use client';

import { useEffect, useRef } from 'react';

type World = { background: string; foreground: string; shadow: string; highlight: string; planet: string; scale: number; offsetX: number; offsetY: number };
type LottieAnimation = { destroy: () => void };
declare global { interface Window { lottie?: { loadAnimation: (options: { container: HTMLElement; renderer: string; loop: boolean; autoplay: boolean; path: string }) => LottieAnimation } } }

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
    let index = 0;
    let timer: number | undefined;
    let active: { layer: HTMLSpanElement; animation: LottieAnimation } | undefined;
    const applyTheme = (world: World) => {
      const root = document.documentElement;
      root.style.setProperty('--world-color', world.background);
      root.style.setProperty('--world-shadow', world.shadow);
    };
    const mountPlanet = (world: World) => {
      if (!window.lottie || !host.current) return;
      const previous = active;
      const layer = document.createElement('span');
      layer.className = 'brand-planet__layer';
      layer.style.setProperty('--world-planet-scale', String(world.scale));
      layer.style.setProperty('--world-planet-offset-x', `${world.offsetX}px`);
      layer.style.setProperty('--world-planet-offset-y', `${world.offsetY}px`);
      host.current.append(layer);
      const animation = window.lottie.loadAnimation({ container: layer, renderer: 'svg', loop: true, autoplay: true, path: `/flashfluent-assets/lottie/${world.planet}` });
      active = { layer, animation };
      requestAnimationFrame(() => layer.classList.add('is-visible'));
      if (previous) window.setTimeout(() => { previous.animation.destroy(); previous.layer.remove(); }, 480);
    };
    const applyWorld = () => { const world = worlds[index]; if (controlsTheme) { applyTheme(world); window.dispatchEvent(new CustomEvent('evanko-world-change', { detail: index })); } mountPlanet(world); };
    const start = () => { applyWorld(); if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) timer = window.setInterval(() => { index = (index + 1) % worlds.length; applyWorld(); }, 3400); };
    const existing = document.querySelector<HTMLScriptElement>('script[data-ff-lottie]');
    if (window.lottie) start(); else if (existing) existing.addEventListener('load', start, { once: true }); else { const script = document.createElement('script'); script.src = '/flashfluent-assets/lottie/lottie.min.js'; script.dataset.ffLottie = 'true'; script.addEventListener('load', start, { once: true }); document.head.append(script); }
    return () => { if (timer) window.clearInterval(timer); active?.animation.destroy(); };
  }, []);
  return <a className="site-brand" href="/"><span className="brand-orbit" aria-hidden="true"><span ref={host} className="brand-planet" /></span>Evanko Foundation</a>;
}
