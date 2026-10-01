import type { ComponentProps } from 'react';

/** Exported HTML pages use normal links, without an RSC router or speculative fetches. */
export default function SiteLink({ children, ...props }: ComponentProps<'a'>) {
  return <a {...props}>{children}</a>;
}
