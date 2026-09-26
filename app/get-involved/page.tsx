import { AnimatedIcon } from '../../components/animated-icon';
import { SiteFooter, SiteHeader } from '../../components/site-chrome';

const ways = [
  ['01', 'earth-like-planet.json', 'Review language', 'We are looking for fluent speakers and language learners who can help review vocabulary, examples, and practical language packs.', 'Inquire about reviewing'],
  ['02', 'coin.json', 'Fund access', 'Donations help us keep tools free and expand language access where it can open more opportunity and connection.', 'Contact about giving'],
  ['03', 'teamwork.json', 'Volunteer to tutor', 'A structured language tutoring program is in development. Join the early volunteer list and help shape what it becomes.', 'Join the tutor list'],
];

export default function GetInvolved(){return <div className="site-page"><SiteHeader/><main className="involved"><section className="shell involved__hero"><p className="eyebrow">Get involved</p><h1>Help further<br/>our mission.</h1></section><section className="involved__ways"><div className="shell"><div className="involved__grid">{ways.map(([number,icon,title,copy,label])=><article className="involved-card" key={title}><p className="involved-card__number">{number}</p><AnimatedIcon path={icon} className="involved-card__icon"/><h3>{title}</h3><p>{copy}</p><a href="mailto:kyle@evanko.co">{label} <span>→</span></a></article>)}</div></div></section><section className="involved__contact"><div className="shell"><p>We are just getting started. To inquire about partnerships, expanding access, school partnerships, and more, email Kyle below.</p><a className="involved__email" href="mailto:kyle@evanko.co">kyle@evanko.co <span>↗</span></a></div></section></main><SiteFooter/></div>}
