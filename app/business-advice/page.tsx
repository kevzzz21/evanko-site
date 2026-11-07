import type { Metadata } from 'next';
import { AnimatedIcon } from '../../components/animated-icon';
import { BusinessAdviceForm } from '../../components/business-advice-form';
import { BusinessPhotoStack } from '../../components/business-photo-stack';
import { SiteFooter, SiteHeader } from '../../components/site-chrome';

export const metadata: Metadata = {
  title: 'Free Business Advice | Evanko Foundation',
  description: 'Free, practical business advice from the Evanko Foundation for entrepreneurs and small-business owners.',
  alternates: { canonical: '/business-advice' },
};

const areas = [
  ['Revenue & Ops', 'dollarupdown.json', 'We can help analyze P&Ls, identify profitability, explore routes to higher margins, and understand cost drivers, pricing, and capacity. We advise on workflow, outsourcing, or macro-operational trends that support additional growth.'],
  ['Digital Marketing', 'heroconsulting-blue.json', 'Social ads, Google Ads, connected TV, web design, and email are all familiar territory. We can talk through performance, reporting, creative, and what you are learning as you go. If you advertise, we can advise.'],
  ['AI & Automation', 'aianimation.json', 'AI is everywhere, but relatively few businesses have integrated it well into everyday work. We can discuss where it can reduce repetitive effort, support a team, or connect cleanly with the systems you already use.'],
  ['Software Dev & APIs', 'api.json', 'Websites, internal tools, apps, and APIs can be simple or become unexpectedly complicated. We can help make sense of the technical choices, dependencies, and tradeoffs involved before more time is spent building.'],
];

export default function BusinessAdvicePage() {
  return <div className="site-page business-advice-page"><SiteHeader currentPath="/business-advice" businessAdvice /><main>
    <section className="business-hero shell">
      <div className="business-hero__copy"><h1>Free business advice for entrepreneurs.</h1><p>The Evanko Foundation is a 501(c)(3) nonprofit. This program offers small-business owners a practical way to ask questions, talk through a challenge, and get an informed outside perspective.</p><div className="button-row"><a className="button button--primary button--cycle" href="#request">Get free advice <span aria-hidden="true">→</span></a><a className="business-hero__text-link" href="#about">About the advisor <span aria-hidden="true">↓</span></a></div></div><BusinessPhotoStack />
    </section>

    <section className="business-lottie-feature"><div className="shell"><div><h2>Expert outside perspectives.</h2><p>Consultants haven’t gone anywhere... yet. AI chatbots are a great starting point for business advice. The problem is they often oversimplify and provide generic advice. They also don’t pose the questions that help owners figure out solutions.</p></div><AnimatedIcon path="digitalmarketing.json" className="business-lottie-feature__art" /></div></section>

    <section className="pillar-section business-pillars"><div className="shell"><div className="section-heading"><p className="eyebrow">What we can help with</p><h2 className="section-heading__title">Our usual areas of advice.</h2></div><div className="pillar-grid">{areas.map(([title, icon, copy], index) => <article className={`pillar-card business-pillar-card pillar-card--${index + 1}`} key={title}><div className="business-pillar-card__top"><AnimatedIcon path={icon} className="pillar-card__icon" /><h3>{title}</h3></div><p>{copy}</p></article>)}</div></div></section>

    <section className="business-about shell" id="about"><aside className="business-giving-note"><strong>Okay, wait — but why are you doing this?</strong><p>This is my way of giving back after a successful run in consulting. I also enjoy helping owners solve problems and keeping a pulse on the small business world.</p><span>— Kyle</span></aside><div className="business-about__copy"><p className="eyebrow">Meet the founder</p><h2>Kyle Evanko</h2><div className="business-about__art business-about__art--reviews" aria-hidden="true"><AnimatedIcon path="5star.json" /></div><p>Kyle was an early member of Hugging Face, acquired by NVIDIA in 2026 for approximately $12.9 billion, and the sixth U.S. employee at ByteDance (TikTok).</p><p>He has consulted for more than 500 small businesses and four Fortune 10 companies. His work has included building and growing early-stage companies, along with marketing, operations, software development, AI, growth, and enterprise strategy.</p><p>He now runs the Evanko Foundation, a 501(c)(3) nonprofit focused on helping support future generations through unlocking economic opportunity and education.</p><div className="business-credentials"><div><strong>40+</strong><span>five-star reviews on Upwork</span></div><div><strong>100%</strong><span>Upwork Job Success</span></div><div><strong>500+</strong><span>companies consulted for</span></div></div><div className="business-about__links"><a href="https://www.linkedin.com/in/kyle-evanko-63731b118" target="_blank" rel="noreferrer">View Kyle’s LinkedIn <span aria-hidden="true">↗</span></a><a href="https://www.upwork.com/freelancers/~018089597d58ee7348" target="_blank" rel="noreferrer">View verified Upwork reviews <span aria-hidden="true">↗</span></a></div></div></section>

    <section className="business-request" id="request"><div className="shell"><div className="business-request__intro"><p className="eyebrow">Request free business advice</p><h2>What’s your blocker?</h2><p>Tell us about what’s on your mind. We’ll start a discussion via email and try our best to advise and point you in the right direction.</p><p className="business-request__note">Please do not include sensitive financial, customer, or account information in your first message.</p><p className="business-request__free"><strong>Free means free.</strong> There is no consultation fee, sales call, or any services to sell you.</p></div><BusinessAdviceForm /></div></section>
  </main><SiteFooter currentPath="/business-advice" /></div>;
}
