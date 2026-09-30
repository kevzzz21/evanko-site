import type { Metadata } from 'next';
import { AnimatedIcon } from '../../components/animated-icon';
import { FoundationBeliefs, LanguagePillars } from '../../components/foundation-beliefs';
import { SiteFooter, SiteHeader } from '../../components/site-chrome';
import { LanguageAccessEvidence } from '../../components/why-language-content';
import { foundation } from '../../lib/foundation';

export const metadata: Metadata = {
  title: 'Our mission | Evanko Foundation',
  description: 'Our mission is to make language learning accessible to everyone, everywhere, for free. We create, fund, and maintain tools for learning, opportunity, connection, and lifelong growth.',
  alternates: { canonical: '/mission' },
};

const actions = [
  ['Create free ways to begin', 'We create, fund, and maintain FlashFluent, with six language courses, illustrated vocabulary, and Study, Match, and Listen activities. Free tools give learners an approachable place to start and a way to practice at their own pace.'],
  ['Build around the classroom', 'We develop custom FlashFluent courses around what teachers are teaching: vocabulary, lesson topics, grade levels, and learning goals. Classroom access means giving educators resources that fit the lessons their students are already learning.'],
  ['Expand languages and access', 'Our next priority is to bring free learning to more teachers, schools, and learners. That means improving language content, developing more courses, and helping educators get started with software that can serve their classrooms.'],
  ['Bring people into the work', 'We are seeking volunteers for tutoring, language review, teacher and school onboarding, and custom curriculum. Donations support servers, hosting, software development, language expansion, and, most importantly, wider access.'],
];

export default function Mission() {
  return <div className="site-page">
    <SiteHeader />
    <main className="mission-page">
      <section className="shell mission__hero">
        <div className="mission__hero-copy">
        <p className="eyebrow">Our mission</p>
        <h1>Make language learning accessible to everyone, everywhere, for free</h1>
        <p className="mission__statement">The Evanko Foundation creates, funds, and maintains free language-learning tools so more people can learn, communicate, and take part in the world around them.</p>
        <p>We believe language can open doors to education, work, meaningful connection, and lifelong growth. Cost, geography, and stage of life should not decide who gets the chance to begin.</p>
        <div className="button-row"><a className="button button--primary button--cycle" href="/projects">Explore our free learning tools</a><a className="text-link" href="/get-involved">Help expand access <span>→</span></a></div>
        <nav className="mission__section-links" aria-label="On this page"><a href="#what-we-believe">What we believe</a><a href="#how-language-shapes-our-lives">How language shapes our lives</a><a href="#language-access-barriers">Where access breaks down</a></nav>
        </div>
        <AnimatedIcon path="earth-like-planet.json" className="mission__globe" />
      </section>
      <FoundationBeliefs />
      <LanguagePillars />
      <LanguageAccessEvidence />
      <section className="mission__action"><div className="shell">
        <div className="mission__action-intro"><p className="eyebrow">Our mission in practice</p><h2>Access becomes real when there is a place to learn.</h2><p>FlashFluent puts our mission into practice. We have {foundation.students} active students across three classes in San Gabriel Valley school districts, with wider classroom access at the heart of the work ahead.</p><p>The Foundation is a 501(c)(3) nonprofit. Our purpose guides both the tools we build and the support we seek: keep learning free, make it useful, and bring it to more people.</p><a className="text-link" href="/impact">See our classroom impact <span>→</span></a></div>
        <div className="about__commitments-list">{actions.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
      </div></section>
      <section className="shell mission__invitation"><p className="eyebrow">Be part of the mission</p><h2>Help more people find a place to begin.</h2><p>Your time and knowledge can help a learner practice, a course become more accurate, or a teacher bring language learning into the classroom. Financial support helps keep the tools running and makes room for more languages and wider access.</p><div className="button-row"><a className="button button--primary button--cycle" href="/get-involved">Give your time & skills</a><a className="text-link" href="/donate">Support the Foundation <span>→</span></a></div><p className="mission__contact">For general inquiries: <a href={'mailto:' + foundation.email}>{foundation.email}</a>. <a href="/about">Learn more about the Foundation</a>.</p></section>
    </main>
    <SiteFooter />
  </div>;
}
