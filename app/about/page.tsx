import { AnimatedIcon } from '../../components/animated-icon';
import { SiteFooter, SiteHeader } from '../../components/site-chrome';

const pillars = [
  ['Early development', 'green-planet.json', 'The years when language is absorbed most readily are also the years when it can change the shape of learning.', 'Explore the research', '/articles/learning-early'],
  ['Opportunity', 'global-plane.json', 'Functional language opens a practical path into work, service, travel, and the global economy.', 'See the projects', '/projects'],
  ['Connection', 'teamwork.json', 'Translation can complete a transaction. Shared language is what lets a relationship deepen.', 'Read the perspective', '/articles/translation-and-connection'],
  ['Higher income', 'coin.json', 'Language can make valuable skills easier to see, helping people reach better-paying work and wider markets.', 'Read the research', '/articles/economics-of-bilingualism'],
];

const commitments = [
  ['Language opens doors', 'It can give a child a head start, help a worker reach new opportunities, and make it easier for people to participate in the world around them.'],
  ['Fluency is more than translation', 'Technology can translate a message. Learning a language lets us build trust, express ourselves, and connect without friction.'],
  ['The mind is worth investing in', 'Language learning builds critical thinking, keeps the mind engaged, and gives people a way to keep growing throughout life.'],
  ['Access changes lives', 'The ability to learn a language should not depend on where someone lives, what they earn, or what stage of life they are in.'],
];

export default function About() {
  return <div className="site-page">
    <SiteHeader />
    <main className="about">
      <section className="about__hero shell"><h1>Enriching lives,<br />one word at a time.</h1></section>
      <section className="shell about__mission"><p>The Evanko Foundation is a 501(c)(3) nonprofit built on a simple idea: language opens doors, deepens connection, and keeps the mind engaged throughout life.</p><p>We believe expanding access to meaningful language learning programs improves lives. From increasing critical thinking and cognitive ability to unlocking economic opportunities and earning potential, the ability to communicate is paramount.</p><p>While technology increasingly makes translation easier and more accessible, we reaffirm our belief in the economic importance of learning a language. The service, travel and hospitality industries depend on people who can communicate with customers, coworkers and communities every day, without technological friction.</p><p>And if technology eventually replaces the need for fluency at work, learning a language will still matter. The research is clear: it benefits our cognitive health, keeps the mind engaged, and gives us a deeper way to connect with family, other cultures, and the world around us. That is something no amount of artificial intelligence will ever change.</p></section>
      <section className="about__quote"><div className="shell"><blockquote>“In a world where social interaction is increasingly replaced by social media, AI and technology, the core human experiences of expression, conversation, and meaningful connection are becoming more important than ever for our <em>mental health</em>, <em>economic opportunity</em> and <em>quality of life</em>.”</blockquote><cite><strong>Kyle Evanko</strong><span>Founder</span></cite></div></section>
      <section className="shell about__commitments"><div className="about__commitments-intro"><p className="eyebrow">The Foundation’s point of view</p><h2>What we believe.</h2><p>Language learning should make life bigger, not just easier.</p></div><div className="about__commitments-list">{commitments.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>
      <section className="pillar-section about__pillars"><div className="shell"><div className="section-heading"><p className="eyebrow">Our focus</p><h2 className="section-heading__title">How language shapes our lives.</h2></div><div className="pillar-grid">{pillars.map(([title, icon, copy, label, href], index) => <article className={`pillar-card pillar-card--${index + 1}`} key={title}><AnimatedIcon path={icon} className="pillar-card__icon" /><p className="card-number">0{index + 1}</p><h3>{title}</h3><p>{copy}</p><a href={href}>{label} <span>→</span></a></article>)}</div></div></section>
    </main>
    <SiteFooter />
  </div>;
}
