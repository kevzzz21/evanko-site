import type { Metadata } from 'next';
import { AnimatedIcon } from '../../components/animated-icon';
import { SiteFooter, SiteHeader } from '../../components/site-chrome';
import { DonationSection, FundingPriorities } from '../../components/support-sections';
import { foundation } from '../../lib/foundation';

export const metadata: Metadata = { title: 'Volunteer & get involved | Evanko Foundation', description: 'Give your time through tutoring, language review, and school onboarding. Develop custom classroom courses or donate to expand access to free language learning.', alternates: { canonical: '/get-involved' } };

const ways = [
  { number: '01', icon: 'teamwork.json', title: 'Offer tutoring support', copy: 'Share your language skills to help learners practice and build confidence. We are seeking volunteer tutors who can explain ideas clearly, answer questions, and make language practice approachable. Tell us which languages you can support, how you would like to contribute, and when you are available.', label: 'Volunteer to tutor', email: foundation.contacts.teachers, subject: 'Volunteer tutoring' },
  { number: '02', icon: 'earth-like-planet.json', title: 'Review language content', copy: 'Help improve the language content learners see and hear in FlashFluent. Review vocabulary, translations, pronunciation, and examples for clarity and accuracy. With six languages available, your knowledge can help us refine existing courses and prepare content for future language expansion.', label: 'Offer language review', email: foundation.contacts.partnerships, subject: 'Volunteer language review' },
  { number: '03', icon: 'global-plane.json', title: 'Bring FlashFluent to schools', copy: 'Help introduce teachers and schools to FlashFluent’s free learning tools. Explain the courses, help educators explore useful features, and connect the software with classroom needs. Volunteers can also contribute curriculum experience and help create custom courses that match what schools are teaching.', label: 'Help expand school access', email: foundation.contacts.partnerships, subject: 'School onboarding and curriculum volunteering' },
];

export default function GetInvolved() {
  return <div className="site-page"><SiteHeader /><main className="involved support-page get-involved-page">
    <section className="shell support-panel">
      <div className="support-panel__copy">
        <p className="eyebrow">For teachers & schools</p><h1>Calling all teachers and educators</h1>
        <p className="eyebrow">Custom program design</p>
        <p>We develop custom courses with FlashFluent to match what you teach. From vocabulary and lesson topics to grade level and learning goals, we shape each course around your classroom’s curriculum.</p>
        <p>So far, we’ve seen an increase in overall test and quiz performance in classrooms using FlashFluent.</p>
        <p>Contact us at <a className="text-link" href={'mailto:' + foundation.contacts.teachers + '?subject=Custom%20FlashFluent%20course%20for%20our%20classroom'}>{foundation.contacts.teachers}</a> to learn more about how we can help your classroom.</p>
        <div className="support-panel__links"><a className="text-link" href="/resources/teacher-guide">Explore our teacher guide <span>→</span></a></div>
      </div>
      <figure className="support-photo">
        <img src="/images/flashfluent-classroom.webp" srcSet="/images/flashfluent-classroom-640.webp 640w, /images/flashfluent-classroom.webp 1078w" sizes="(max-width: 588px) calc(100vw - 76px), (max-width: 760px) 512px, (max-width: 1200px) calc((100vw - 160px) / 2.15), 484px" width={1078} height={714} loading="eager" fetchPriority="high" decoding="async" alt="FlashFluent Mandarin courses open on a laptop in a classroom." />
        <figcaption>Language practice that can fit the classroom.</figcaption>
      </figure>
    </section>
    <section className="shell involved__hero support-intro"><p className="eyebrow">The most valuable way to give</p><h2>Give your time. Share what you know.</h2><p>Tutoring and language review are the most valuable ways to support our mission. Your knowledge can help learners practice and help us make language content more useful and accurate.</p><p>We are also seeking volunteers to onboard teachers and schools to FlashFluent and create custom curriculum that matches what they are teaching. Whether you can offer language knowledge, teaching experience, or a school introduction, there is a practical way to help expand access.</p></section>
    <section className="involved__ways"><div className="shell"><div className="involved__grid">{ways.map(way => <article className="involved-card" key={way.title}><p className="involved-card__number">{way.number}</p><AnimatedIcon path={way.icon} className="involved-card__icon" /><h3>{way.title}</h3><p>{way.copy}</p><a href={'mailto:' + way.email + '?subject=' + encodeURIComponent(way.subject)}>{way.label} <span>→</span></a></article>)}</div></div></section>
    <section className="shell support-panel">
      <div className="support-panel__copy">
        <p className="eyebrow">Teacher & school access</p><h2>Help bring learning to more classrooms.</h2>
        <p>We have {foundation.students} active students across three classes in San Gabriel Valley school districts. Our next priority is to make FlashFluent available to more teachers, schools, and learners.</p>
        <p>Custom courses make room for the vocabulary, lesson topics, and learning goals a classroom already has. Educators and curriculum volunteers can help shape that content so students have a useful way to practice what they are learning.</p>
        <p>A school introduction, a thoughtful course review, or help getting a teacher started can open the door to wider access. Contact <a className="text-link" href={'mailto:' + foundation.contacts.teachers}>{foundation.contacts.teachers}</a> about classroom courses and educator support.</p>
      </div>
      <div className="volunteer-steps">
        <h3>Ways to help a school get started</h3>
        <ul>
          <li><strong>Make an introduction.</strong><p>Connect a teacher or school with the Foundation and help us understand their language, grade range, and curriculum goals.</p></li>
          <li><strong>Shape a classroom course.</strong><p>Contribute vocabulary selections, lesson topics, and curriculum knowledge that reflect what students are being taught.</p></li>
          <li><strong>Support the first steps.</strong><p>Help educators explore FlashFluent’s Study, Match, and Listen activities and find a useful place for practice in their lessons.</p></li>
        </ul>
      </div>
    </section>
    <section className="shell support-note volunteer-start">
      <p className="eyebrow">Start volunteering</p><h2>Tell us what you can share.</h2>
      <p>Start with the role that interests you, the languages you know, and the experience you would like to contribute. Let us know your availability and whether you would prefer tutoring, content review, school onboarding, or curriculum support.</p>
      <p>For tutoring and classroom curriculum, contact <a href={'mailto:' + foundation.contacts.teachers}>{foundation.contacts.teachers}</a>. For language review, school introductions, and volunteer partnerships, contact <a href={'mailto:' + foundation.contacts.partnerships}>{foundation.contacts.partnerships}</a>.</p>
      <p>Your time can help someone practice with more confidence, make a course more accurate, or give a teacher a clearer path into free language learning. Choose the contribution that fits your skills.</p>
      <div className="button-row"><a className="button button--primary" href={'mailto:' + foundation.contacts.partnerships + '?subject=Volunteering%20with%20the%20Foundation'}>Offer your time</a><a className="text-link" href="#make-a-gift">Make a financial gift <span>→</span></a></div>
    </section>
    <FundingPriorities />
    <DonationSection />
    <section className="shell support-note">
      <p className="eyebrow">Why your support matters</p><h2>Language should make life bigger.</h2>
      <p>A new language can make room for a conversation, a relationship, or an opportunity that once felt out of reach. The ability to learn should be available wherever someone starts.</p>
      <p>The Evanko Foundation creates, funds, and maintains free language-learning tools because cost and geography should not decide who gets the chance to begin. FlashFluent offers six language courses, with illustrated vocabulary and ways to study, match, and listen.</p>
      <p>Donations keep the technology running and help us expand languages and access. Volunteers bring the knowledge and personal support that make those tools more useful. Both forms of giving help more people find a place to begin.</p>
      <p><a href="/about">Learn about our mission</a> or <a href="/projects">explore FlashFluent</a>.</p>
    </section>
    <section className="involved__contact"><div className="shell">
      <div className="support-intro"><p className="eyebrow">Get in touch</p><h2>Let’s put your skills to work.</h2></div>
      <p>Tell us how you would like to support free language learning. Use the contact that fits your contribution, whether you are an educator, a language reviewer, a school partner, or a donor.</p>
      <dl className="volunteer-contacts">
        <div><dt>Teachers, tutoring & curriculum</dt><dd><a href={'mailto:' + foundation.contacts.teachers}>{foundation.contacts.teachers}</a></dd></div>
        <div><dt>Volunteers & school partnerships</dt><dd><a href={'mailto:' + foundation.contacts.partnerships}>{foundation.contacts.partnerships}</a></dd></div>
        <div><dt>Donations & financial support</dt><dd><a href={'mailto:' + foundation.contacts.donations}>{foundation.contacts.donations}</a></dd></div>
        <div><dt>General inquiries</dt><dd><a href={'mailto:' + foundation.email}>{foundation.email}</a></dd></div>
      </dl>
    </div></section>
  </main><SiteFooter /></div>;
}
