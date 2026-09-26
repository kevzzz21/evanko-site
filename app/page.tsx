import { AnimatedIcon } from '../components/animated-icon';
import { SiteFooter, SiteHeader } from '../components/site-chrome';
import { LanguageScroller } from '../components/language-scroller';
import { HeroHeading } from '../components/hero-heading';

const pillars = [
  ['Early development', 'green-planet.json', 'The years when language is absorbed most readily are also the years when it can change the shape of learning.', 'Explore the research'],
  ['Opportunity', 'global-plane.json', 'Functional language opens a practical path into work, service, travel, and the global economy.', 'See the projects'],
  ['Connection', 'purple-planet.json', 'Translation can complete a transaction. Shared language is what lets a relationship deepen.', 'Read the perspective'],
  ['Longevity', 'yellow-planet.json', 'Sustained language use keeps asking something meaningful of the mind across a lifetime.', 'Read the research'],
];
const articles = [
  ['The economics of bilingualism', 'What the pay-premium evidence actually shows', '/articles/economics-of-bilingualism', 'global-plane.json', 'blue'],
  ['Language is part of the freelance economy', 'Why skill alone is not always enough to compete globally', '/articles/language-and-global-work', 'orange-planet.json', 'orange'],
  ['Translation is not connection', 'Why social connection needs more than functional exchange', '/articles/translation-and-connection', 'purple-planet.json', 'purple'],
  ['Language and cognitive longevity', 'What the research can—and cannot—say about later life', '/articles/language-and-longevity', 'yellow-planet.json', 'gold'],
  ['The language of belonging', 'Why being able to join a conversation changes a place', '/articles/language-of-belonging', 'green-planet.json', 'green'],
  ['What service language really means', 'The practical phrases that help work feel possible', '/articles/service-language', 'earth-like-planet.json', 'earth'],
  ['Why free tools matter', 'Access should not depend on where someone starts', '/articles/why-free-tools', 'blue-teal-planet.json', 'teal'],
  ['Connection needs practice', 'What a recurring conversation can make room for', '/articles/connection-needs-practice', 'redstar-planet.json', 'rose'],
];
const principles = [
  ['Access before advantage', 'Useful language support should be available regardless of income, geography, or stage of life.'],
  ['Practical, not performative', 'We focus on the words and confidence people need for the real moments in front of them.'],
  ['Connection is earned', 'Technology can help people communicate; sustained attention is what helps relationships deepen.'],
  ['Curiosity across a lifetime', 'Language offers a durable way to keep learning, participating, and engaging with the world.'],
];
export default function Home() { return <div className="site-page"><SiteHeader /><main>
  <section className="home-hero shell"><div className="home-hero__copy"><p className="eyebrow">A 501(c)(3) nonprofit</p><HeroHeading /><p className="lede">Language is more than communication. It opens doors, deepens connection, and keeps the mind engaged throughout life.</p><div className="button-row"><a className="button button--primary" href="/projects">Explore our projects</a><a className="text-link" href="/about">About the foundation <span>→</span></a></div></div><LanguageScroller /></section>
  <section className="pillar-section"><div className="shell"><div className="section-heading"><p className="eyebrow">A lifelong capability</p><h2>Four ways language<br />shapes a life.</h2></div><div className="pillar-grid">{pillars.map(([title, icon, copy, link], index) => <article className={`pillar-card pillar-card--${index + 1}`} key={title}><AnimatedIcon path={icon} className="pillar-card__icon" /><p className="card-number">0{index + 1}</p><h3>{title}</h3><p>{copy}</p><a href={index === 1 ? '/projects' : '/articles'}>{link} <span>→</span></a></article>)}</div></div></section>
  <section className="feature-project"><div className="shell feature-project__grid"><div><p className="eyebrow">Featured project · Available now</p><h2>FlashFluent makes<br />the first card easy.</h2><p>Illustrated language practice, free to explore. A playful entry point for a much larger human capability.</p><a className="button button--red" href="/projects/flashfluent">Explore FlashFluent</a></div><div className="mini-collection" aria-hidden="true"><div className="mini-collection__title">FlashFluent</div><div className="mini-collection__grid">{['elephant','giraffe','fox','koala','lion','tiger','panda','penguin','owl'].map((name, index) => <span key={name} className={`mini-collection__cell mini-collection__cell--${index % 5}`}><img src={`/flashfluent-assets/collection/${name}.webp`} alt="" /></span>)}</div><AnimatedIcon path="trophy-celebration.json" className="mini-collection__trophy" /></div></div></section>
  <section className="home-articles"><div className="shell"><div className="home-articles__heading"><div><p className="eyebrow">From the foundation</p><h2>Read the<br />research.</h2></div><p>Evidence-led writing on language, work, connection, childhood, and life over time.</p><a className="text-link" href="/articles">All articles <span>→</span></a></div><div className="home-articles__grid">{articles.map(([title, copy, href, icon, tone]) => <a className={`home-article-card home-article-card--${tone}`} href={href} key={title}><div className="home-article-card__art"><AnimatedIcon path={icon} /></div><div className="home-article-card__copy"><p className="eyebrow">Foundation perspective</p><h3>{title}</h3><p>{copy}</p><span>Read article <b>→</b></span></div></a>)}</div></div></section>
  <section className="shell article-tease principles"><div className="article-tease__intro"><p className="eyebrow">How we build</p><h2>Our core<br />principles.</h2><p>Small commitments that keep the Foundation’s work practical, generous, and grounded in real life.</p></div><div className="article-list">{principles.map(([title, copy], index) => <div className="article-preview" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div><b>→</b></div>)}</div></section>
</main><SiteFooter /></div>; }
