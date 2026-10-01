import SiteLink from './site-link';

const callouts = {
  volunteer: {
    eyebrow: 'We are recruiting volunteers',
    heading: 'Your skills can open doors.',
    copy: 'Help a learner practice, improve a language course, or connect a school with free learning. Or want to help us develop a new language?',
    primary: { href: '/get-involved#volunteer-roles', label: 'Volunteer with us' },
    secondary: { href: '/donate', label: 'Donate' },
  },
  donate: {
    eyebrow: 'Keep it free. Bring it further.',
    heading: 'Help free learning reach more people.',
    copy: 'Your donation helps keep FlashFluent running, expand language content, and bring free practice to more teachers, schools, and learners.',
    primary: { href: '/donate', label: 'Make a donation' },
    secondary: { href: '/get-involved', label: 'Give your time & skills' },
  },
};

/** Distinct support invitations made entirely from static text, links, and CSS. */
export function HomeSupportCallout({ kind }: { kind: keyof typeof callouts }) {
  const item = callouts[kind];
  return <section className={`home-action-callout home-action-callout--${kind}`} aria-labelledby={`home-${kind}-callout-heading`}>
    <div className="shell home-action-callout__inner">
      <div className="home-action-callout__copy"><p className="eyebrow">{item.eyebrow}</p><h2 id={`home-${kind}-callout-heading`}>{item.heading}</h2><p>{item.copy}</p>
        <div className="button-row"><SiteLink className="button button--callout-light" href={item.primary.href}>{item.primary.label}</SiteLink><SiteLink className="button button--callout-outline" href={item.secondary.href}>{item.secondary.label}</SiteLink></div>
      </div>
    </div>
  </section>;
}
