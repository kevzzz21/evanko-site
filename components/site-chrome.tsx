import { BrandLockup } from './brand-lockup';
import SiteLink from './site-link';
import { SupportCallout } from './support-callout';

const navigation = [
  ['/mission', 'Mission'],
  ['/projects', 'Our work'],
  ['/impact', 'Impact'],
  ['/articles', 'Articles'],
  ['/about', 'About'],
] as const;

const footerGroups = [
  { title: 'About the foundation', links: [['/about', 'About us'], ['/mission', 'Our mission'], ['/impact', 'Our impact']] },
  { title: 'Explore our work', links: [['/projects', 'FlashFluent'], ['/articles', 'Articles'], ['/resources/teacher-guide', 'Teacher guide']] },
  { title: 'Get involved', links: [['/get-involved', 'Volunteer & partner'], ['/donate', 'Donate'], ['/contact', 'Contact us']] },
];

function currentLink(href: string, currentPath: string): 'page' | true | undefined {
  if (href === currentPath) return 'page';
  if (href === '/articles' && currentPath.startsWith('/articles/')) return true;
  return undefined;
}

export function SiteHeader({ currentPath }: { currentPath: string }) {
  return <header className="site-header shell">
    <BrandLockup controlsTheme />
    <nav className="site-nav" aria-label="Main navigation">
      {navigation.map(([href, label]) => <SiteLink href={href} key={href} aria-current={currentLink(href, currentPath)}>{label}</SiteLink>)}
      <div className="site-header__actions">
        <SiteLink href="/get-involved" className="header-link" aria-current={currentLink('/get-involved', currentPath)}>Get involved</SiteLink>
        <SiteLink href="/donate" className="header-link header-donate" aria-current={currentLink('/donate', currentPath)}>Donate</SiteLink>
      </div>
    </nav>
    <div className="site-header__mobile-actions">
      <SiteLink href="/donate" className="header-link header-donate site-header__mobile-donate" aria-current={currentLink('/donate', currentPath)}>Donate</SiteLink>
      <details className="site-nav__mobile">
        <summary><span className="site-menu__icon" aria-hidden="true"><i></i><i></i><i></i></span><span>Menu</span></summary>
        <nav aria-label="Mobile navigation">
          {navigation.map(([href, label]) => <SiteLink href={href} key={href} aria-current={currentLink(href, currentPath)}>{label}</SiteLink>)}
          <SiteLink href="/get-involved" aria-current={currentLink('/get-involved', currentPath)}>Get involved</SiteLink>
          <SiteLink href="/donate" className="header-donate" aria-current={currentLink('/donate', currentPath)}>Donate</SiteLink>
        </nav>
      </details>
    </div>
  </header>;
}

export function SiteFooter({ currentPath }: { currentPath: string }) {
  // These pages already end with a dedicated support section.
  const hasSupportSection = ['/', '/projects', '/mission', '/impact', '/donate', '/get-involved'].includes(currentPath);
  return <>
    {!hasSupportSection && <SupportCallout />}
    <footer className="site-footer"><div className="shell">
      <div className="site-footer__top">
        <div className="site-footer__brand"><BrandLockup /><p>Free language tools for learning, opportunity, connection, and lifelong mental engagement.</p></div>
        <nav className="site-footer__navigation" aria-label="Footer navigation">
          {footerGroups.map(group => <div key={group.title} className="site-footer__group">
            <h2>{group.title}</h2>
            <ul>{group.links.map(([href, label]) => <li key={href}><SiteLink href={href} aria-current={currentLink(href, currentPath)} className={href === '/donate' ? 'site-footer__donate' : undefined}>{label}</SiteLink></li>)}</ul>
          </div>)}
        </nav>
      </div>
      <div className="site-footer__bottom"><span><strong>The Evanko Foundation</strong> · 501(c)(3) nonprofit · EIN 33-2430782 · 24124 Decorah Rd, Diamond Bar, CA 91765</span><span>© 2026 Evanko Foundation</span></div>
    </div></footer>
  </>;
}
