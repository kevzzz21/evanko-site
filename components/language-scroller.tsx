'use client';

/* eslint-disable next/no-img-element -- responsive assets are prepared at build time. */
/* eslint-disable jsx-a11y/prefer-tag-over-role -- the illustrated collage is one composite image. */
import { useEffect, useRef } from 'react';
const rows = [
  ['elephant', 'apple', 'bicycle', 'mother', 'mountain', 'fox', 'avocado', 'bus'],
  ['friend', 'coral-reef', 'koala', 'banana', 'ferry', 'aunt', 'geyser', 'panda'],
  ['bagel', 'bullet-train', 'people', 'glacier', 'tiger', 'artichoke', 'sailboat', 'daughter'],
  ['aurora', 'owl', 'almond', 'plane', 'neighbor', 'beach', 'dolphin', 'blueberry'],
  ['skateboard', 'older-sister', 'forest', 'giraffe', 'beans', 'subway', 'adult', 'island'],
];

/** A compact preview avoids downloading a duplicated 200-image carousel above the fold. */
export function LanguageScroller({ label = 'A collection of illustrated language terms' }: { label?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const wall = ref.current;
    if (!wall) return;
    let visible = false;
    const update = () => wall.toggleAttribute('data-paused', !visible || document.hidden);
    const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; update(); });
    observer.observe(wall);
    document.addEventListener('visibilitychange', update);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', update); };
  }, []);
  return <div ref={ref} className="collection-wall" role="img" aria-label={label}>{rows.map((row, rowIndex) => <div className="collection-row" key={row[0]}><div className="collection-track">{[...row, ...row].map((name, index) => <span className="collection-cell" key={`${name}-${index}`}><img src={`/flashfluent-assets/collection/${name}-256.webp`} srcSet={`/flashfluent-assets/collection/${name}-96.webp 96w, /flashfluent-assets/collection/${name}-128.webp 128w, /flashfluent-assets/collection/${name}-192.webp 192w, /flashfluent-assets/collection/${name}-256.webp 256w`} sizes="(max-width: 588px) calc((100vw - 126px) / 5), (max-width: 760px) 93px, 68px" width={256} height={256} alt="" loading={rowIndex === 0 && index < 5 ? 'eager' : 'lazy'} decoding="async" /></span>)}</div></div>)}</div>;
}
