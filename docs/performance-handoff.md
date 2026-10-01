# Performance handoff — October 1, 2026

The optimizations are local and ready to commit with the new image assets. Nothing has been committed, pushed, or published.

The existing layout, colors, content, illustrations, and 3.4-second color/headline cycle remain. Detailed illustrations retain their SVG renderer, including the plane's shadow. Small brand planets use canvas.

Changes:

- Load optional animations near the viewport after the first content paints. Pause offscreen animations and hidden tabs, share player/data downloads, and respect reduced motion.
- Serve smaller responsive WebP illustrations and photo variants while keeping the original assets.
- Limit Tailwind scanning to the actual site and remove unused/duplicate custom CSS. Compressed CSS is about 61% smaller.
- Use ordinary links for exported HTML pages, removing speculative RSC requests and their console errors.

Matching mobile Lighthouse 13.5.0 tests against local production builds:

| Metric | Original | Optimized final |
| --- | ---: | ---: |
| Performance | 45 | 97 |
| First contentful paint | 2.21 s | 1.77 s |
| Largest contentful paint | 13.16 s | 2.24 s |
| Total blocking time | 1,446 ms | 62 ms |
| Layout shift | 0 | 0 |
| Initial transfer | 2.31 MB | 1.08 MB |

These are local lab results, not a new live PageSpeed Insights result. Rerun Google after Cloudflare rebuilds from your GitHub push.

Validation: production export completed for 20 routes; TypeScript and `git diff --check` passed. Desktop/mobile layout comparisons across 11 representative pages found no changes above a 1 px tolerance in the measured content geometry, typography, or spacing. Mobile navigation, visible/offscreen animation playback, footer initialization, and console errors were checked. Full repository lint still reports existing site/template findings; it is not a passing check.

Generated image variants are checked-in source assets and must be included in your commit. The optional `scripts/optimize-images.mjs` utility regenerates them with Sharp; Cloudflare does not need to run it.

Navigation and CTA follow-up: the header now highlights the current section, emphasizes Donate, and labels the mobile Menu. The footer groups its links, the homepage offers both support paths near the top, and pages without an existing closing support section receive a shared Donate/Get involved invitation. Existing support sections have clearer donation actions, and email links describe what they open. These additions use exported HTML and CSS with no new client scripts, libraries, images, or network requests. The production export and TypeScript check passed after these changes. The Lighthouse figures above precede this follow-up; no additional performance audit was run, as requested.

## Further refinement — October 1, 2026

Animation setup now uses a shared queue that initializes one instance per idle turn, leaving paint opportunities between instances. Artwork loads within 120 px of the viewport instead of 240 px. Pending initialization is canceled when artwork moves away or the tab becomes hidden; returning to it resumes loading. Visibility handling reuses intersection state instead of forcing a fresh layout measurement. The Lottie player, every animation JSON file, renderers, playback frame rates, and 3.4-second color/headline cycle are unchanged.

The carousel has new 96 px image variants, and the school photo has a 528 px variant. Responsive illustrations and photos use WebP quality 78, regenerated from the preserved original assets. The full set of 96 px illustrations totals 128,772 bytes versus 235,064 bytes for the previous smallest 128 px variants, a 45% reduction. The browser still selects larger variants for higher-density displays. Include the new image files in the GitHub push.

Matching local Lighthouse 13.5.0 runs against the current static production export:

| Metric | Desktop before | Desktop after | Mobile before | Mobile after, two runs |
| --- | ---: | ---: | ---: | ---: |
| Performance | 96 | 100 | 95 | 94–95 |
| Largest contentful paint | 1.389 s | 0.630 s | 2.796 s | 2.718–2.873 s |
| Total blocking time | 0 ms | 0 ms | 7 ms | 0–12 ms |
| Layout shift | 0 | 0 | 0 | 0 |
| Initial transfer | 1.281 MB | 0.998 MB | 1.082 MB | 1.036 MB |

These are local lab comparisons, not updated live Google scores. The mobile results show a one-point variation rather than an established score increase. Recheck PageSpeed Insights after Cloudflare rebuilds from the user's push.

Validation: 21 routes prerendered, TypeScript and `git diff --check` passed, and all 175 responsive variants have the expected dimensions. Queue checks covered staggered release, cancellation, empty-queue cleanup, and restart. The measured homepage geometry was identical before/after. Browser checks confirmed the initial brand planet, the globe after scrolling, the newsletter trophy, all four first-row article illustrations, and the SVG effect filter. No browser console errors were recorded. Image comparisons were reviewed at display sizes. Nothing has been committed, pushed, or published by the agent.
