/* eslint-disable next/no-img-element -- optimized local images served by the static export. */
import type { Metadata } from 'next';
import Link from '../components/site-link';
import { AnimatedIcon } from '../components/animated-icon';
import { SiteFooter, SiteHeader } from '../components/site-chrome';
import { LanguageScroller } from '../components/language-scroller';
import { HeroHeading } from '../components/hero-heading';
import { WhyLanguageContent } from '../components/why-language-content';
import { foundation } from '../lib/foundation';
import { HomeSupportCallout } from '../components/home-support-callout';
import { NewsletterFeature } from '../components/newsletter-feature';

export const metadata: Metadata = {
  title: 'Evanko Foundation | Free language learning for everyone',
  description: 'Make language learning accessible to everyone, everywhere, for free. Explore FlashFluent, our classroom impact, custom courses, and ways to volunteer or support wider access.',
  alternates: { canonical: '/' },
};

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
const programFacts = [
  ['6', 'live language courses'],
  ['1,600+', 'illustrated terms per language'],
  ['106', 'active students across 3 classes'],
];
export default function Home() { return <div className="site-page"><SiteHeader currentPath="/" /><main className="home-page">
  <section className="home-hero shell"><div className="home-hero__copy"><p className="eyebrow">A 501(c)(3) nonprofit</p><HeroHeading /><p className="lede">The Evanko Foundation creates and supports free language-learning tools to help students of all ages, backgrounds, abilities and locations learn faster &amp; more efficiently. Learn more about expanding language access below</p><div className="button-row"><Link className="button button--primary" href="/get-involved">Get involved</Link><Link className="button button--outline" href="/donate">Donate</Link><Link className="button button--outline home-hero__impact-link" href="/impact">See our 2026 impact <span>→</span></Link></div></div><LanguageScroller /></section>
  <section className="program-facts"><div className="shell"><div><p className="eyebrow">Our active program · FlashFluent</p><p>Free, illustrated language practice—created, funded, and maintained by the Evanko Foundation.</p></div><div className="program-facts__grid">{programFacts.map(([number, label]) => <div key={label}><strong>{number}</strong><span>{label}</span></div>)}</div></div></section>
  <section className="shell home-mission" aria-labelledby="home-mission-heading">
    <div><p className="eyebrow">Our mission</p><h2 id="home-mission-heading">Make language learning accessible to everyone, everywhere, for free</h2><p>Language opens doors to opportunity, connection, and belonging. The Evanko Foundation creates, funds, and maintains free learning tools so cost, geography, and stage of life do not decide who gets the chance to begin.</p><p>We turn that mission into practical work: building FlashFluent, developing classroom courses, improving language content, and helping more teachers and learners find a place to start.</p><Link className="button button--primary" href="/mission">Explore our mission <span aria-hidden="true">→</span></Link></div>
    <AnimatedIcon path="earth-like-planet.json" className="home-mission__globe" />
  </section>
  <section className="feature-project home-program" aria-labelledby="home-program-heading"><div className="shell">
    <div className="home-photo-story">
      <div><p className="eyebrow">Our free language-learning tool</p><h2 id="home-program-heading">FlashFluent makes<br />the first card easy.</h2><p>Connect a picture with a word, hear how it sounds, and put it into practice. FlashFluent brings illustrated flashcards, matching games, and listening activities together in one approachable place.</p><p>Explore Mandarin Chinese, Japanese, Korean, Spanish, French, and German. Each course has more than 1,600 illustrated terms organized into everyday topics, from food and family to travel, school, and work.</p><p>Try the first world without an account. A free account opens later worlds and saves and syncs your progress across devices.</p><div className="button-row"><Link className="button button--red" href="/projects">Explore FlashFluent</Link><Link className="button button--outline" href="/projects#courses">See all six languages <span aria-hidden="true">→</span></Link></div></div>
      <figure className="home-photo"><img src="/images/flashfluent-practice-1046.webp" srcSet="/images/flashfluent-practice-320.webp 320w, /images/flashfluent-practice-480.webp 480w, /images/flashfluent-practice-640.webp 640w, /images/flashfluent-practice-800.webp 800w, /images/flashfluent-practice-1046.webp 1046w" sizes="(max-width: 760px) calc(100vw - 28px), (max-width: 1200px) 44vw, 520px" width={1046} height={696} loading="lazy" decoding="async" alt="A learner practicing Mandarin with FlashFluent’s illustrated color cards on a laptop." /><figcaption>See the word, hear it, and practice making the connection.</figcaption></figure>
    </div>
    <div className="home-mode-grid">{[
      ['Study', 'Meet the words.', 'Explore illustrated cards, hear pronunciation, and check the meaning. Keep track of familiar words and return to those that need another look.'],
      ['Match', 'Make the connection.', 'Choose the word that matches a picture, or the picture that matches a word. Get feedback on each choice and build a practice streak.'],
      ['Listen', 'Let your ears lead.', 'Hear a word and choose the matching answer. Replay the pronunciation and adjust the hints as you become more familiar with the sounds.'],
    ].map(([title, subtitle, copy], index) => <Link className="home-mode-card" href="/projects#practice-modes" key={title}><span className="home-mode-card__number" aria-hidden="true">0{index + 1}</span><h3>{title}</h3><strong>{subtitle}</strong><p>{copy}</p><span className="home-card-action">Explore {title} <b aria-hidden="true">→</b></span></Link>)}</div>
  </div></section>
  <HomeSupportCallout kind="volunteer" />
  <section className="shell home-photo-story home-impact" aria-labelledby="home-impact-heading">
    <figure className="home-photo home-photo--district"><img src="/images/temple-city-school-district-636.webp" srcSet="/images/temple-city-school-district-320.webp 320w, /images/temple-city-school-district-480.webp 480w, /images/temple-city-school-district-636.webp 636w" sizes="(max-width: 588px) calc(100vw - 28px), (max-width: 760px) 560px, (max-width: 1200px) 44vw, 520px" width={636} height={632} loading="lazy" decoding="async" alt="Temple City Unified School District building and community mural in the San Gabriel Valley." /><figcaption>Local roots in the San Gabriel Valley, California.</figcaption></figure>
    <div><p className="eyebrow">Our 2026 impact</p><h2 id="home-impact-heading">Learning starts<br />close to home.</h2><p>We have {foundation.students} active students across three classes in San Gabriel Valley school districts. FlashFluent gives these learners a free place to practice vocabulary through pictures, words, and sound.</p><p>Our next priority is access expansion: bringing useful language practice to more teachers, schools, and learners. That means helping educators get started and developing content that fits the lessons students are already learning.</p><p>Our teacher guide offers a short vocabulary routine with a worked example, adaptation notes, and an exit check. Educators can use it as a starting point and shape the activity around their class.</p><div className="button-row"><Link className="button button--primary" href="/impact">See our 2026 impact</Link><Link className="button button--outline" href="/resources/teacher-guide">Use the teacher guide <span aria-hidden="true">→</span></Link></div></div>
  </section>
  <section className="home-educators" aria-labelledby="home-educators-heading"><div className="shell home-photo-story">
    <div><p className="eyebrow">Calling all teachers and educators</p><h2 id="home-educators-heading">Your classroom.<br />Your curriculum.</h2><p className="home-story-label">Custom program design</p><p>We develop custom FlashFluent courses around what you teach. Vocabulary, lesson topics, grade level, and learning goals shape the course, giving students a way to practice material that belongs in your classroom.</p><p>So far, we’ve seen an increase in overall test and quiz performance in classrooms using FlashFluent. We want to help more educators find a useful place for language practice in their lessons.</p><p>Tell us your language, the topics you are teaching, and what you want your students to practice. Contact <a className="home-inline-link" href={'mailto:' + foundation.contacts.teachers}>{foundation.contacts.teachers}</a> to learn more about how we can help.</p><Link className="button button--primary" href="/get-involved">Get classroom support <span aria-hidden="true">→</span></Link></div>
    <figure className="home-photo"><img src="/images/flashfluent-classroom-1078.webp" srcSet="/images/flashfluent-classroom-320.webp 320w, /images/flashfluent-classroom-480.webp 480w, /images/flashfluent-classroom-640.webp 640w, /images/flashfluent-classroom-800.webp 800w, /images/flashfluent-classroom-1078.webp 1078w" sizes="(max-width: 760px) calc(100vw - 28px), (max-width: 1200px) 44vw, 520px" width={1078} height={714} loading="lazy" decoding="async" alt="FlashFluent’s Mandarin topic collections open on a laptop in a classroom." /><figcaption>Language practice that can fit what a classroom is already learning.</figcaption></figure>
  </div></section>
  <section className="pillar-section"><div className="shell"><div className="section-heading"><p className="eyebrow">A lifelong capability</p><h2 className="section-heading__title">How language shapes our lives.</h2></div><div className="pillar-grid">{pillars.map(([title, icon, copy, link], index) => <article className={`pillar-card pillar-card--${index + 1}`} key={title}><AnimatedIcon path={icon} className="pillar-card__icon" /><p className="card-number">0{index + 1}</p><h3>{title}</h3><p>{copy}</p><Link className="button button--outline" href={index === 1 ? '/projects' : '/articles'}>{link} <span>→</span></Link></article>)}</div></div></section>
  <WhyLanguageContent includeProgram={false} />
  <HomeSupportCallout kind="donate" />

  <section className="home-articles"><div className="shell"><div className="home-articles__heading"><div className="home-articles__intro"><p className="eyebrow">From the foundation</p><h2>Read the research.</h2><p>Evidence-led writing on language, work, connection, childhood, and life over time.</p></div><Link className="button button--outline" href="/articles">All articles <span>→</span></Link></div><NewsletterFeature /><div className="home-articles__grid">{articles.map(([title, copy, href, icon, tone, eyebrow]) => <Link className={`home-article-card home-article-card--${tone}`} href={href} key={title}><div className="home-article-card__art"><AnimatedIcon path={icon} /></div><div className="home-article-card__copy"><p className="eyebrow">{eyebrow}</p><h3>{title}</h3><p>{copy}</p><span>Read article <b>→</b></span></div></Link>)}</div></div></section>
  <section className="shell article-tease principles"><div className="article-tease__intro"><p className="eyebrow">The Foundation’s point of view</p><h2>What we<br />believe.</h2><p>Language learning should make life bigger, not just easier.</p></div><div className="article-list">{principles.map(([title, copy], index) => <Link className="article-preview" href="/about" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div><b>→</b></Link>)}</div></section>
  <section className="home-support" aria-labelledby="home-support-heading"><div className="shell">
    <div className="section-heading"><p className="eyebrow">The most valuable way to give</p><h2 id="home-support-heading">Give your time.<br />Share what you know.</h2><p className="home-support__intro">Tutoring and language review are the most valuable ways to support our mission. Your knowledge can help learners practice, make courses more accurate, and help teachers find a clear path into free language learning.</p></div>
    <div className="home-support__grid">{[
      ['Offer tutoring support', 'Help learners practice, explain unfamiliar words, and build confidence. Share the languages you know and the time you can offer.', 'Tutoring and educator support', foundation.contacts.teachers],
      ['Review language content', 'Help refine vocabulary, translations, pronunciation, and examples. Language reviewers support existing courses and future language expansion.', 'Language review partnerships', foundation.contacts.partnerships],
      ['Help a school get started', 'Introduce an educator, help with onboarding, or contribute curriculum experience. Custom courses can connect FlashFluent with the lessons a school is teaching.', 'School onboarding and curriculum volunteering', foundation.contacts.partnerships],
    ].map(([title, copy, subject, email]) => <article key={title}><h3>{title}</h3><p>{copy}</p><a className="button button--outline" href={'mailto:' + email + '?subject=' + encodeURIComponent(subject)}>Email us about this role <span aria-hidden="true">→</span></a></article>)}</div>
    <div className="home-support__giving"><div><p className="eyebrow">Keep it free. Bring it further.</p><h3>Help expand languages and access.</h3><p>Financial gifts help cover servers, hosting, software development, and ongoing maintenance. They also support new language content and, most importantly, bringing FlashFluent to more teachers, schools, and learners.</p><p>Give through PayPal or a major debit or credit card on our Donate page, or contact <a className="home-inline-link" href={'mailto:' + foundation.contacts.donations}>{foundation.contacts.donations}</a> with questions about giving.</p></div><div className="home-support__actions"><Link className="button button--primary" href="/get-involved">Get involved</Link><Link className="button button--red" href="/donate">Donate</Link><img src="/images/paypal-and-card-logos.png" width={316} height={40} loading="lazy" decoding="async" alt="PayPal, Mastercard, Visa, Discover, and American Express" /></div></div>
    <p className="home-support__contact">For general inquiries: <a href={'mailto:' + foundation.email}>{foundation.email}</a>. For partnerships: <a href={'mailto:' + foundation.contacts.partnerships}>{foundation.contacts.partnerships}</a>.</p>
  </div></section>
</main><SiteFooter currentPath="/" /></div>; }
