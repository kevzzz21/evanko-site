import { AnimatedIcon } from './animated-icon';
import { donationUrl, foundation } from '../lib/foundation';

const priorities = [
  ['01', 'coin.json', 'Keep free learning available', 'Donations help pay for server costs, hosting, software development, and ongoing maintenance so learners can continue to access FlashFluent.'],
  ['02', 'earth-like-planet.json', 'Expand language support', 'Gifts support development and language expansion: adding courses, improving learning content, and building more useful ways to practice.'],
  ['03', 'teamwork.json', 'Expand access', 'Most importantly, donations support bringing FlashFluent to more teachers, schools, and learners. That includes teacher onboarding and developing custom curriculum aligned with what schools are teaching.'],
];

export function FundingPriorities() {
  return <section className="involved__ways"><div className="shell"><div className="section-heading"><p className="eyebrow">How financial gifts help</p><h2 className="section-heading__title">Keep it free.<br />Bring it further.</h2></div><div className="involved__grid">{priorities.map(([number, icon, title, copy]) => <article className="involved-card" key={title}><p className="involved-card__number">{number}</p><AnimatedIcon path={icon} className="involved-card__icon" /><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>;
}

function secureDonationLink() {
  if (!donationUrl) return null;
  try { const url = new URL(donationUrl); return url.protocol === 'https:' && !url.username && !url.password ? url.href : null; } catch { return null; }
}

export function DonationSection() {
  const paymentLink = secureDonationLink();
  return <section className="involved__contact donate-gift" id="make-a-gift"><div className="shell donate-gift__layout">
    <div className="donate-gift__copy">
      <p className="eyebrow">Make a financial gift</p>
      <h2>{paymentLink ? 'Help open more doors.' : 'Online giving is being set up.'}</h2>
      <p>{paymentLink ? 'Help keep FlashFluent free, expand language support, and bring learning to more teachers, schools, and students.' : 'Contact us about making a gift. Our online donation option will be added here when it is available.'}</p>
      {paymentLink && <div className="donate-payments"><img src="/images/paypal-and-card-logos.png" width={316} height={40} alt="PayPal, Mastercard, Visa, Discover, and American Express" /><p>Give with PayPal or a major debit or credit card through PayPal checkout.</p></div>}
      <div className="donate-gift__actions">
        {paymentLink ? <a className="button button--red" href={paymentLink} target="_blank" rel="noopener noreferrer">Donate with PayPal <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a> : <a className="button button--red" href={'mailto:' + foundation.contacts.donations + '?subject=Supporting%20the%20Evanko%20Foundation'}>Email us about a donation</a>}
      </div>
      <p className="donate-gift__questions">Questions about giving? <a className="donate-gift__email" href={'mailto:' + foundation.contacts.donations}>{foundation.contacts.donations}</a></p>
      <p className="donate-gift__organization"><strong>The Evanko Foundation</strong> · 501(c)(3) nonprofit<br />EIN {foundation.ein}</p>
    </div>
    {paymentLink && <aside className="donate-gift__qr" aria-label="Scan to donate">
      <h3>Prefer to scan?</h3>
      <a href={paymentLink} target="_blank" rel="noopener noreferrer" aria-label="Open the PayPal donation page (opens in a new tab)"><img src="/images/paypal-donation-qr.png" width={256} height={256} loading="lazy" decoding="async" alt="QR code for the Foundation’s PayPal donation page" /></a>
      <p>Open your phone’s camera and scan to give through PayPal.</p>
    </aside>}
  </div></section>;
}
