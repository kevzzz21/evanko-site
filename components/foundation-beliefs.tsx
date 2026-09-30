import { AnimatedIcon } from './animated-icon';

const commitments = [
  ['Language opens doors', 'It can give a child a head start, help a worker reach new opportunities, and make it easier for people to participate in the world around them.'],
  ['Fluency is more than translation', 'Technology can translate a message. Learning a language lets us build trust, express ourselves, and connect without friction.'],
  ['The mind is worth investing in', 'Language learning builds critical thinking, keeps the mind engaged, and gives people a way to keep growing throughout life.'],
  ['Access changes lives', 'The ability to learn a language should not depend on where someone lives, what they earn, or what stage of life they are in.'],
];

const pillars = [
  ['Early development', 'green-planet.json', 'The years when language is absorbed most readily are also the years when it can change the shape of learning.', 'Explore the research', '/articles/learning-early'],
  ['Opportunity', 'global-plane.json', 'Functional language opens a practical path into work, service, travel, and the global economy.', 'See the projects', '/projects'],
  ['Connection', 'teamwork.json', 'Translation can complete a transaction. Shared language is what lets a relationship deepen.', 'Read the perspective', '/articles/translation-and-connection'],
  ['Higher income', 'coin.json', 'Language can make valuable skills easier to see, helping people reach better-paying work and wider markets.', 'Read the research', '/articles/economics-of-bilingualism'],
];

export function FoundationBeliefs() {
  return <section className="shell about__commitments" id="what-we-believe"><div className="about__commitments-intro"><p className="eyebrow">The Foundation’s point of view</p><h2>What we believe.</h2><p>Language learning should make life bigger, not just easier.</p></div><div className="about__commitments-list">{commitments.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>;
}

export function LanguagePillars() {
  return <section className="pillar-section about__pillars" id="how-language-shapes-our-lives"><div className="shell"><div className="section-heading"><p className="eyebrow">Our focus</p><h2 className="section-heading__title">How language shapes our lives.</h2></div><div className="pillar-grid">{pillars.map(([title, icon, copy, label, href], index) => <article className={`pillar-card pillar-card--${index + 1}`} key={title}><AnimatedIcon path={icon} className="pillar-card__icon" /><p className="card-number">0{index + 1}</p><h3>{title}</h3><p>{copy}</p><a href={href}>{label} <span>→</span></a></article>)}</div></div></section>;
}
