import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from '../../components/site-chrome';
import { foundation } from '../../lib/foundation';

export const metadata: Metadata = { title: 'Contact | Evanko Foundation', description: 'Contact the Foundation about teacher onboarding, curriculum, volunteering, language review, partnerships, or donations.', alternates: { canonical: '/contact' } };

export default function Contact() {
  return <div className="site-page"><SiteHeader currentPath="/contact" /><main className="contact-page shell"><div className="contact-page__box"><p className="eyebrow">Contact the Foundation</p><h1>Start a<br />conversation.</h1><p>Help us bring free language learning to more people. Reach the team for the kind of support you want to offer or the questions you have.</p>
    <p><strong>Teachers, schools & tutoring</strong><br />Getting started with FlashFluent, custom curriculum, teacher feedback, and volunteer tutoring.<br /><a className="text-link" href={'mailto:' + foundation.contacts.teachers}>{foundation.contacts.teachers}</a></p>
    <p><strong>Volunteering & partnerships</strong><br />Language review, school introductions, onboarding volunteers, and community partnerships.<br /><a className="text-link" href={'mailto:' + foundation.contacts.partnerships}>{foundation.contacts.partnerships}</a></p>
    <p><strong>Donations</strong><br />Financial gifts, funding priorities, and support for development and access expansion.<br /><a className="text-link" href={'mailto:' + foundation.contacts.donations}>{foundation.contacts.donations}</a></p>
    <p><strong>Contact Kyle directly</strong><br /><a className="contact-email" href={'mailto:' + foundation.email}>{foundation.email}</a></p>
    <p>{foundation.name}<br />{foundation.address[0]}<br />{foundation.address[1]}</p><p>501(c)(3) nonprofit · EIN {foundation.ein}</p>
  </div></main><SiteFooter currentPath="/contact" /></div>;
}
