'use client';

import { useEffect, useState } from 'react';

const messages = [
  ['Unlocking', 'opportunities'],
  ['Expanding', 'minds'],
  ['Growing', 'careers'],
  ['Making', 'connections'],
  ['Easing', 'loneliness'],
  ['Getting', 'a head start'],
  ['Earning', 'more income'],
  ['Building', 'belonging'],
  ['Connecting', 'generations'],
  ['Starting', 'businesses'],
];

export function HeroHeading() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const onWorldChange = (event: Event) => setIndex((event as CustomEvent<number>).detail);
    window.addEventListener('evanko-world-change', onWorldChange);
    return () => window.removeEventListener('evanko-world-change', onWorldChange);
  }, []);
  const [first, second] = messages[index] ?? messages[0];
  return <h1 className="hero-headline"><span>{first}</span><span>{second}</span><span>with language.</span></h1>;
}
