'use client';

import { useEffect, useRef, useState } from 'react';

type World = { background: string; foreground: string; shadow: string; planet: string; scale: number };
const worlds: World[] = [
  { background: '#c23d26', foreground: '#94291a', shadow: '#7d2114', planet: 'planet-orbit.json', scale: 1.15 },
  { background: '#267489', foreground: '#0e4959', shadow: '#09313e', planet: 'blue-teal-planet.json', scale: 0.59 },
  { background: '#3d7320', foreground: '#21700f', shadow: '#124008', planet: 'green-planet.json', scale: 0.45 },
  { background: '#7a3d75', foreground: '#572152', shadow: '#451740', planet: 'purple-planet.json', scale: 0.48 },
  { background: '#c35b1b', foreground: '#84390e', shadow: '#6a2a09', planet: 'orange-planet.json', scale: 0.45 },
];
const thumbnails = ['elephant','giraffe','fox','koala','lion','tiger','panda','penguin','owl','monkey','zebra','wolf','dolphin','orca','toucan','turtle','rabbit','horse','bear','sloth','walrus','manatee','tree-frog','chameleon','iguana','alligator','alpaca','ant','apple','avocado','badger','banana','beaver','bee','bicycle','bird','black-panther','boat','butterfly','capybara','cat','cheetah','chicken','chimpanzee','clownfish','cobra','cockatoo','coral-reef','cow','caterpillar'];
const courses = [['mandarin','chinese-flag.png','中文 (Mandarin)'],['japanese','japanese-flag.png','日本語 (Japanese)'],['korean','korean-flag.png','한국어 (Korean)'],['spanish','mexican-flag.png','Español'],['french','french-flag.png','Français'],['german','german-flag.png','Deutsch']];

declare global { interface Window { lottie?: { loadAnimation: (options: Record<string, unknown>) => { destroy: () => void } } } }

export default function Home() {
  const planet = useRef<HTMLSpanElement>(null);
  const [worldIndex, setWorldIndex] = useState(0);
  const world = worlds[worldIndex];

  useEffect(() => {
    const script = document.createElement('script'); script.src = '/flashfluent-assets/lottie/lottie.min.js'; script.async = true; document.body.append(script);
    let cleanup: (() => void) | undefined;
    const load = () => { if (!window.lottie) return; const animations = [['feature-planet','green-planet.json'],['feature-plane','global-plane.json'],['feature-trophy','trophy-celebration.json']].map(([id,path]) => window.lottie!.loadAnimation({ container: document.getElementById(id), renderer: 'svg', loop: true, autoplay: true, path: `/flashfluent-assets/lottie/${path}` })); cleanup = () => animations.forEach((a) => a.destroy()); };
    script.addEventListener('load', load); return () => { cleanup?.(); script.remove(); };
  }, []);
  useEffect(() => { if (!planet.current || !window.lottie) return; planet.current.innerHTML = ''; const animation = window.lottie.loadAnimation({ container: planet.current, renderer: 'svg', loop: true, autoplay: true, path: `/flashfluent-assets/lottie/${world.planet}` }); return () => animation.destroy(); }, [world]);
  useEffect(() => { const timer = window.setInterval(() => setWorldIndex((i) => (i + 1) % worlds.length), 3400); return () => window.clearInterval(timer); }, []);

  return <div className="foundation-page" style={{ '--world':world.background, '--world-deep':world.foreground, '--world-shadow':world.shadow, '--planet-scale':world.scale } as React.CSSProperties}>
    <section className="foundation-intro" aria-label="About the Evanko Foundation"><div className="shell foundation-intro__inner"><p className="foundation-kicker">The Evanko Foundation</p><h1>A 501(c)(3) nonprofit<br />presents</h1><span className="foundation-rule" aria-hidden="true" /></div></section>
    <div className="flashfluent">
      <header className="shell ff-header"><a className="ff-brand" href="#top"><span className="ff-orbit" aria-hidden="true"><span className="ff-planet" ref={planet} /></span>FlashFluent</a><nav aria-label="FlashFluent navigation"><a href="#how">How It Works</a><a href="#courses">Courses</a><a href="mailto:kyle@evanko.co">Contact</a></nav><a className="ff-button ff-button--primary" href="#courses">Start Learning</a></header>
      <main id="top"><section className="ff-hero shell"><div><p className="ff-eyebrow">Over 1,600 illustrated terms</p><h2>Flashcards for<br />faster learning</h2><p className="ff-copy">Enjoy one month of Premium membership free, provided by the Evanko Foundation, a 501(c)(3) nonprofit.</p><div className="ff-actions"><a className="ff-button ff-button--primary" href="#courses">Explore FlashFluent</a><a className="ff-button ff-button--secondary" href="mailto:kyle@evanko.co">For Teachers</a></div></div><div className="collection-wall" aria-label="A moving collection of FlashFluent illustrated terms">{Array.from({length:5},(_,row) => { const items=thumbnails.slice(row*10,row*10+10); return <div className="collection-row" key={row}><div className="collection-track">{[...items,...items,...items,...items].map((name,i) => <span className="collection-cell" key={`${name}-${i}`}><img src={`/flashfluent-assets/collection/${name}.webp`} alt="" /></span>)}</div></div>; })}</div></section>
      <section id="how" className="shell ff-how"><div className="ff-section-heading"><p className="ff-eyebrow">Three practice modes</p><h2>Study, Match, and Listen.<span>for up to 2.7× faster learning</span></h2></div><div className="ff-steps"><article className="ff-step"><div className="ff-step-icon" id="feature-planet" /><h3>Study</h3><p>Browse illustrated flashcards and reveal the answer when you’re ready.</p></article><article className="ff-step"><div className="ff-step-icon" id="feature-plane" /><h3>Match</h3><p>Pair terms and illustrations in a quick matching exercise.</p></article><article className="ff-step"><div className="ff-step-icon" id="feature-trophy" /><h3>Listen</h3><p>Hear the language and choose the matching illustrated term.</p></article></div></section>
      <section id="courses" className="ff-courses"><div className="shell"><div className="ff-section-heading"><h2>Learn for Free</h2></div><div className="course-grid">{courses.map(([slug,flag,name]) => <a className="course" href={`https://learn.flashfluent.app/?course=${slug}`} key={slug}><img src={`/flashfluent-assets/course-flags/${flag}`} alt="" /><strong>{name}</strong></a>)}</div></div></section><section className="shell ff-cta"><div className="ff-cta-box"><h2>Start with your first card.</h2><p>Choose a language course and begin learning.</p><a className="ff-button" href="#courses">Start Learning</a></div></section></main>
      <footer className="shell ff-footer"><span><strong>FlashFluent</strong> · Presented by <strong>The Evanko Foundation</strong>, a 501(c)(3) nonprofit.</span><span>EIN 33-2430782 · 24124 Decorah Rd, Diamond Bar, CA 91765 · <a href="mailto:kyle@evanko.co">Contact</a></span></footer>
    </div></div>;
}
