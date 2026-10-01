import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from '../../components/site-chrome';
import { DonationSection, FundingPriorities } from '../../components/support-sections';
import { foundation } from '../../lib/foundation';

export const metadata: Metadata = { title: 'Donate & support free learning | Evanko Foundation', description: 'Support servers, hosting, development, language expansion, and wider access to FlashFluent. Give your time through tutoring and language review.', alternates: { canonical: '/donate' } };

export default function Donate() {
  return <div className="site-page"><SiteHeader currentPath="/donate" /><main className="involved support-page donate-page">
    <section className="shell support-panel">
      <div className="support-panel__copy">
        <p className="eyebrow">Donate to expand access</p>
        <h1>Help keep language learning free.</h1>
        <p>Your gift helps cover servers, hosting, software development, and language expansion so more people have a free place to learn.</p>
        <p>Help bring FlashFluent to more teachers, schools, and learners. You can also support the mission by sharing your time and skills.</p>
        <div className="button-row"><a className="button button--red" href="#make-a-gift">Make a donation</a><a className="text-link" href="/get-involved">Explore volunteer roles <span>→</span></a></div>
      </div>
      <figure className="support-photo">
        <img src="/images/flashfluent-practice-1046.webp" srcSet="/images/flashfluent-practice-320.webp 320w, /images/flashfluent-practice-480.webp 480w, /images/flashfluent-practice-640.webp 640w, /images/flashfluent-practice-800.webp 800w, /images/flashfluent-practice-1046.webp 1046w" sizes="(max-width: 588px) calc(100vw - 76px), (max-width: 760px) 512px, (max-width: 1200px) calc((100vw - 160px) / 2.15), 484px" width={1046} height={696} loading="eager" fetchPriority="high" decoding="async" alt="A learner practicing Mandarin vocabulary with FlashFluent on a laptop." />
        <figcaption>A place to practice, one word at a time.</figcaption>
      </figure>
    </section>
    <DonationSection />
    <section className="shell involved__hero support-intro"><p className="eyebrow">Support the Foundation</p><h2>Help make more learning possible.</h2><p>Language opens doors to opportunity, connection, and belonging. Your support helps keep the tools free, expand the languages we offer, and make learning available to more people.</p></section>
    <FundingPriorities />
    <section className="shell support-note">
      <p className="eyebrow">Why it matters</p><h2>Language should make life bigger.</h2>
      <p>A new language can make room for a conversation, a relationship, or an opportunity that once felt out of reach. The ability to learn should be available wherever someone starts.</p>
      <p>We create, fund, and maintain free language-learning tools because cost and geography should not decide who gets the chance to begin. We have 106 active students across three classes in San Gabriel Valley school districts, and access expansion is at the heart of the work ahead.</p>
      <div className="button-row support-note__actions"><a className="button button--red" href="#make-a-gift">Make a donation</a><a className="button button--outline" href="/get-involved">Get involved</a></div>
      <p>Read <a href="/about">about our mission</a> or explore <a href="/get-involved">ways to volunteer</a>. For general inquiries: <a href={'mailto:' + foundation.email}>{foundation.email}</a>.</p>
    </section>
  </main><SiteFooter currentPath="/donate" /></div>;
}
