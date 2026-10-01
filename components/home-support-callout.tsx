import SiteLink from './site-link';

const callouts = {
  volunteer: {
    eyebrow: 'We are recruiting volunteers',
    heading: 'Your skills can open doors.',
    copy: 'Help a learner practice, improve a language course, or connect a school with free learning. Share what you know and help us expand access.',
    primary: { href: '/get-involved#volunteer-roles', label: 'Volunteer with us' },
    secondary: { href: '/donate', label: 'Donate' },
    ways: ['Tutoring & language practice', 'Language content review', 'School introductions & support'],
  },
  donate: {
    eyebrow: 'Keep it free. Bring it further.',
    heading: 'Help free learning reach more people.',
    copy: 'Your donation helps keep FlashFluent running, expand language content, and bring free practice to more teachers, schools, and learners.',
    primary: { href: '/donate', label: 'Make a donation' },
    secondary: { href: '/get-involved', label: 'Give your time & skills' },
    ways: ['Servers, hosting & development', 'More language content', 'Wider school & learner access'],
  },
};

/** Distinct support invitations made entirely from static text, links, and CSS. */
export function HomeSupportCallout({ kind }: { kind: keyof typeof callouts }) {
  const item = callouts[kind];
  return <section className={`home-action-callout home-action-callout--${kind}`} aria-labelledby={`home-${kind}-callout-heading`}>
    <div className="shell home-action-callout__inner">
      <div className="home-action-callout__copy"><p className="eyebrow">{item.eyebrow}</p><h2 id={`home-${kind}-callout-heading`}>{item.heading}</h2><p>{item.copy}</p>
        <div className="button-row"><SiteLink className={`button ${kind === 'donate' ? 'button--callout-light' : 'button--primary'}`} href={item.primary.href}>{item.primary.label}</SiteLink><SiteLink className={`button ${kind === 'donate' ? 'button--callout-outline' : 'button--outline'}`} href={item.secondary.href}>{item.secondary.label}</SiteLink></div>
      </div>
      <ul className="home-action-callout__ways">{item.ways.map((way, index) => <li key={way}><span aria-hidden="true">0{index + 1}</span>{way}</li>)}</ul>
    </div>
  </section>;
}
