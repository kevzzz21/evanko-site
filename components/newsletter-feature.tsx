import { AnimatedIcon } from './animated-icon';
import SiteLink from './site-link';
import { octoberNewsletter } from '../lib/october-newsletter';

export function NewsletterFeature() {
  return <section className="newsletter-feature" aria-labelledby="newsletter-feature-heading">
    <div className="newsletter-feature__art"><AnimatedIcon path={octoberNewsletter.icon} /></div>
    <div className="newsletter-feature__copy">
      <p className="eyebrow">Latest from the foundation · <time dateTime={octoberNewsletter.published.iso}>October 2026</time></p>
      <h2 id="newsletter-feature-heading">{octoberNewsletter.title}</h2>
      <p>September was a huge month for us. Catch up on the new site, FlashFluent’s launch, expanding school access, and what’s next for English and our mobile apps.</p>
      <SiteLink className="button button--primary" href={octoberNewsletter.path}>Read the October update <span aria-hidden="true">→</span></SiteLink>
    </div>
  </section>;
}
