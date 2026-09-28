import { SiteFooter, SiteHeader } from '../../components/site-chrome';
import { WhyLanguageContent } from '../../components/why-language-content';

export default function Impact() {
  return <div className="site-page"><SiteHeader /><main className="why-language">
    <section className="shell why-language__hero"><p className="eyebrow">Why language access</p><h1>Language unlocks doors.</h1><p>For a student, a job seeker, or a newcomer, the ability to understand and be understood can determine whether they can participate. It shapes what someone can learn, what work they can pursue, and how fully they can take part in the world around them.</p><div className="why-language__hero-links"><a className="button button--primary button--cycle" href="/projects/flashfluent">Start learning free</a><a className="text-link" href="/articles">Explore the research <span>→</span></a></div></section>
    <WhyLanguageContent />
  </main><SiteFooter /></div>;
}
