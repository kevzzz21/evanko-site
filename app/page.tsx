import { AnimatedIcon } from '../components/animated-icon';
import { SiteFooter, SiteHeader } from '../components/site-chrome';
import { LanguageScroller } from '../components/language-scroller';
import { HeroHeading } from '../components/hero-heading';

const pillars = [
  ['Early development', 'green-planet.json', 'The years when language is absorbed most readily are also the years when it can change the shape of learning.', 'Explore the research'],
  ['Opportunity', 'global-plane.json', 'Functional language opens a practical path into work, service, travel, and the global economy.', 'See the projects'],
  ['Connection', 'teamwork.json', 'Translation can complete a transaction. Shared language is what lets a relationship deepen.', 'Read the perspective'],
  ['Higher income', 'coin.json', 'Language can make valuable skills easier to see, helping people reach better-paying work and wider markets.', 'Read the research'],
];
const articles = [
  ['The economics of bilingualism', 'What the evidence says about work, hiring, and opportunity', '/articles/economics-of-bilingualism', 'global-plane.json', 'blue', 'Opportunity'],
  ['The economic case for learning a language.', 'Why communication can shape who gets to compete, contribute, and grow', '/articles/language-and-global-work', 'orange-planet.json', 'orange', 'Opportunity'],
  ["Translation can help. It doesn't connect us.", 'Why meaningful connection asks for more than a functional exchange', '/articles/translation-and-connection', 'purple-planet.json', 'purple', 'Connection'],
  ['Language and cognitive longevity', 'What the research can—and cannot—say about later life', '/articles/language-and-longevity', 'yellow-planet.json', 'gold', 'Longevity'],
  ['What early language access makes possible', 'Why children deserve a genuine chance to learn and communicate', '/articles/learning-early', 'green-planet.json', 'green', 'Early development'],
  ['The language of belonging', 'Why being able to join a conversation changes a place', '/articles/language-of-belonging', 'earth-like-planet.json', 'earth', 'Connection'],
  ['What service language really means', 'The practical phrases that help work feel possible', '/articles/service-language', 'blue-teal-planet.json', 'teal', 'Opportunity'],
  ['Why free tools matter', 'Access should not depend on where someone starts', '/articles/why-free-tools', 'black-planet.json', 'black', 'Access'],
];
const principles = [
  ['Language opens doors', 'It can give a child a head start, help a worker reach new opportunities, and make it easier for people to participate in the world around them.'],
  ['Fluency is more than translation', 'Technology can translate a message. Learning a language lets us build trust, express ourselves, and connect without friction.'],
  ['The mind is worth investing in', 'Language learning builds critical thinking, keeps the mind engaged, and gives people a way to keep growing throughout life.'],
  ['Access changes lives', 'The ability to learn a language should not depend on where someone lives, what they earn, or what stage of life they are in.'],
];
export default function Home() { return <div className="site-page"><SiteHeader /><main>
  <section className="home-hero shell"><div className="home-hero__copy"><p className="eyebrow">A 501(c)(3) nonprofit</p><HeroHeading /><p className="lede">Language is more than communication. It opens doors, deepens connection, and keeps the mind engaged throughout life.</p><div className="button-row"><a className="button button--primary" href="/projects">Explore our projects</a><a className="text-link" href="/about">About the foundation <span>→</span></a></div></div><LanguageScroller /></section>
  <section className="pillar-section"><div className="shell"><div className="section-heading"><p className="eyebrow">A lifelong capability</p><h2 className="section-heading__title">How language shapes our lives.</h2></div><div className="pillar-grid">{pillars.map(([title, icon, copy, link], index) => <article className={`pillar-card pillar-card--${index + 1}`} key={title}><AnimatedIcon path={icon} className="pillar-card__icon" /><p className="card-number">0{index + 1}</p><h3>{title}</h3><p>{copy}</p><a href={index === 1 ? '/projects' : '/articles'}>{link} <span>→</span></a></article>)}</div></div></section>
  <section className="feature-project"><div className="shell feature-project__grid"><div><p className="eyebrow">Featured project · Available now</p><h2>FlashFluent makes<br />the first card easy.</h2><p>Illustrated language practice, free to explore. A playful entry point for a much larger human capability.</p><a className="button button--red" href="https://flashfluent.app">Explore FlashFluent</a></div><div className="mini-collection" aria-hidden="true"><div className="mini-collection__title">FlashFluent</div><div className="mini-collection__grid">{['elephant','giraffe','fox','koala','lion','tiger','panda','penguin','owl'].map((name, index) => <span key={name} className={`mini-collection__cell mini-collection__cell--${index % 5}`}><img src={`/flashfluent-assets/collection/${name}.webp`} alt="" /></span>)}</div><AnimatedIcon path="trophy-celebration.json" className="mini-collection__trophy" /></div></div></section>
  <section className="home-articles"><div className="shell"><div className="home-articles__heading"><div className="home-articles__intro"><p className="eyebrow">From the foundation</p><h2>Read the research.</h2><p>Evidence-led writing on language, work, connection, childhood, and life over time.</p></div><a className="text-link" href="/articles">All articles <span>→</span></a></div><div className="home-articles__grid">{articles.map(([title, copy, href, icon, tone, eyebrow]) => <a className={`home-article-card home-article-card--${tone}`} href={href} key={title}><div className="home-article-card__art"><AnimatedIcon path={icon} /></div><div className="home-article-card__copy"><p className="eyebrow">{eyebrow}</p><h3>{title}</h3><p>{copy}</p><span>Read article <b>→</b></span></div></a>)}</div></div></section>
  <section className="shell article-tease principles"><div className="article-tease__intro"><p className="eyebrow">The Foundation’s point of view</p><h2>What we<br />believe.</h2><p>Language learning should make life bigger, not just easier.</p></div><div className="article-list">{principles.map(([title, copy], index) => <a className="article-preview" href="/about" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div><b>→</b></a>)}</div></section>
</main><SiteFooter /></div>; }
