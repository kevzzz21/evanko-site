import { AnimatedIcon } from '../../components/animated-icon';
import { SiteFooter, SiteHeader } from '../../components/site-chrome';

const ways = [
  ['01', 'earth-like-planet.json', 'Review language', 'Help us review vocabulary, examples, and practical language packs with the care real learners deserve.', 'Ask about reviewing', 'Language review'],
  ['02', 'coin.json', 'Support free access', 'Ask how you can help keep practical language tools free and available to more learners.', 'Ask about supporting access', 'Supporting free access'],
  ['03', 'teamwork.json', 'Build a partnership', 'For schools, community organizations, and future tutoring collaborators who want to make language access wider.', 'Start a partnership conversation', 'Partnership inquiry'],
];

export default function GetInvolved(){return <div className="site-page"><SiteHeader/><main className="involved"><section className="shell involved__hero"><p className="eyebrow">Get involved</p><h1>Help further<br/>our mission.</h1><p>Help make free language learning more useful, accurate, and widely available.</p></section><section className="involved__ways"><div className="shell"><div className="involved__grid">{ways.map(([number,icon,title,copy,label,subject])=><article className="involved-card" key={title}><p className="involved-card__number">{number}</p><AnimatedIcon path={icon} className="involved-card__icon"/><h3>{title}</h3><p>{copy}</p><a href={`mailto:kyle@evanko.co?subject=${encodeURIComponent(subject)}`}>{label} <span>→</span></a></article>)}</div></div></section><section className="involved__contact"><div className="shell"><p>Have another way to contribute? Reach out about a school, community, or mission-aligned partnership.</p><a className="involved__email" href="mailto:kyle@evanko.co?subject=Evanko%20Foundation%20inquiry">kyle@evanko.co <span>↗</span></a></div></section></main><SiteFooter/></div>}
