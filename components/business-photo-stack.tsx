'use client';

import { useEffect, useState } from 'react';

const photos = [
  'business-stack-airfocus.webp',
  'business-stack-green-brand.webp',
  'business-stack-workshop.webp',
  'business-stack-planning.webp',
  'business-stack-team.webp',
  'business-stack-laptop.webp',
  'business-stack-whiteboard.webp',
  'business-stack-store.webp',
];

const positions = ['is-current', 'is-middle', 'is-back', 'is-exiting'];

export function BusinessPhotoStack() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const advance = () => setCurrent((index) => (index + 1) % photos.length);
    window.addEventListener('evanko-world-change', advance);
    return () => window.removeEventListener('evanko-world-change', advance);
  }, []);

  return <div className="business-photo-stack" aria-hidden="true">
    {positions.map((position, depth) => {
      const index = (current - depth + photos.length) % photos.length;
      const photo = photos[index];
      return <div className={`business-photo-stack__card ${position} angle-${index % 3}`} key={photo}><img src={`/images/${photo}`} alt="" /></div>;
    })}
  </div>;
}
