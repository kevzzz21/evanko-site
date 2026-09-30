import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from '../../components/site-chrome';
import { DonationSection, FundingPriorities } from '../../components/support-sections';
import { foundation } from '../../lib/foundation';

export const metadata: Metadata = { title: 'Donate & support free learning | Evanko Foundation', description: 'Support servers, hosting, development, language expansion, and wider access to FlashFluent. Give your time through tutoring and language review.', alternates: { canonical: '/donate' } };

export default function Donate() {
  return <div className="site-page"><SiteHeader /><main className="involved support-page donate-page">
    <section className="shell support-panel">
      <div className="support-panel__copy">
        <p className="eyebrow">The most valuable way to give</p>
        <h1>Give your time. Share what you know.</h1>
        <p>Tutoring and language review are the most valuable ways to support our mission. Your knowledge can help learners practice and help us make language content more useful and accurate.</p>
        <p>We are also seeking volunteers to onboard teachers and schools to FlashFluent and create custom curriculum that matches what they are teaching.</p>
        <div className="button-row"><a className="button button--primary" href="/get-involved">Explore volunteer roles</a><a className="text-link" href="#make-a-gift">Make a donation <span>→</span></a></div>
      </div>
      <figure className="support-photo">
        <img src="/images/flashfluent-practice.webp" srcSet="/images/flashfluent-practice-640.webp 640w, /images/flashfluent-practice.webp 1046w" sizes="(max-width: 588px) calc(100vw - 76px), (max-width: 760px) 512px, (max-width: 1200px) calc((100vw - 160px) / 2.15), 484px" width={1046} height={696} loading="eager" fetchPriority="high" decoding="async" alt="A learner practicing Mandarin vocabulary with FlashFluent on a laptop." />
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
      <p>Read <a href="/about">about our mission</a> or explore <a href="/get-involved">ways to volunteer</a>. For general inquiries: <a href={'mailto:' + foundation.email}>{foundation.email}</a>.</p>
    </section>
  </main><SiteFooter /></div>;
}
