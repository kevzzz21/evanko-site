/* eslint-disable next/no-img-element -- this static export has no image optimizer. */
const rows = [
  ['elephant', 'apple', 'bicycle', 'mother', 'mountain', 'fox', 'avocado', 'bus'],
  ['friend', 'coral-reef', 'koala', 'banana', 'ferry', 'aunt', 'geyser', 'panda'],
  ['bagel', 'bullet-train', 'people', 'glacier', 'tiger', 'artichoke', 'sailboat', 'daughter'],
  ['aurora', 'owl', 'almond', 'plane', 'neighbor', 'beach', 'dolphin', 'blueberry'],
  ['skateboard', 'older-sister', 'forest', 'giraffe', 'beans', 'subway', 'adult', 'island'],
];

/** A compact preview avoids downloading a duplicated 200-image carousel above the fold. */
export function LanguageScroller({ label = 'A collection of illustrated language terms' }: { label?: string }) {
  return <div className="collection-wall" aria-label={label}>{rows.map((row, rowIndex) => <div className="collection-row" key={row[0]}><div className="collection-track">{[...row, ...row].map((name, index) => <span className="collection-cell" key={`${name}-${index}`}><img src={`/flashfluent-assets/collection/${name}.webp`} alt="" loading={rowIndex === 0 && index < 8 ? 'eager' : 'lazy'} decoding="async" /></span>)}</div></div>)}</div>;
}
