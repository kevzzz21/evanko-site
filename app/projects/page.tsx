/* eslint-disable next/no-img-element -- self-hosted optimized assets in a static export without an image optimizer. */
import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedIcon } from '../../components/animated-icon';
import { LanguageScroller } from '../../components/language-scroller';
import { SiteFooter, SiteHeader } from '../../components/site-chrome';

export const metadata: Metadata = {
  title: 'FlashFluent | Free language flashcards and practice games',
  description: 'Learn with FlashFluent: six free language courses, more than 1,600 illustrated terms per course, and Study, Match, and Listen activities. Choose a language and start practicing.',
  alternates: { canonical: '/projects' },
};

const projects=[['More language support','green-planet.json','Our next product goal is ten live language courses, giving more people access to practical language support for school, work, and daily life.'],['More classrooms','purple-planet.json','We are seeking volunteers to help onboard teachers and schools to FlashFluent and bring free language practice to more learners.'],['Broader access','blue-teal-planet.json','We are seeking volunteers to create custom curriculum that matches what schools are teaching, helping more teachers make FlashFluent part of their lessons.']];

const courses = [
  { slug: 'mandarin', flag: 'chinese-flag.png', name: 'Mandarin Chinese', native: '中文', lang: 'zh', copy: 'Explore Chinese characters with pinyin reading support and a choice of simplified or traditional script.' },
  { slug: 'japanese', flag: 'japanese-flag.png', name: 'Japanese', native: '日本語', lang: 'ja', copy: 'Connect Japanese words with illustrations, pronunciation, and rōmaji reading support.' },
  { slug: 'korean', flag: 'korean-flag.png', name: 'Korean', native: '한국어', lang: 'ko', copy: 'Practice Korean vocabulary with Hangul, pronunciation, and romanization to help you get started.' },
  { slug: 'spanish', flag: 'mexican-flag.png', name: 'Spanish', native: 'Español', lang: 'es', copy: 'Build everyday vocabulary in Latin American Spanish through pictures, words, and listening practice.' },
  { slug: 'french', flag: 'french-flag.png', name: 'French', native: 'Français', lang: 'fr', copy: 'Get familiar with French words and their pronunciation, then put them to use in practice games.' },
  { slug: 'german', flag: 'german-flag.png', name: 'German', native: 'Deutsch', lang: 'de', copy: 'Discover German vocabulary one collection at a time, with illustrated cards and audio practice.' },
];

const modes = [
  { title: 'Study', icon: 'green-planet.json', subtitle: 'Meet the words.', copy: 'Explore illustrated flashcards at your own pace. See the word, hear its pronunciation, and check its English meaning. Mark words you know and revisit the ones that need another look.', detail: 'A place to begin, review, and get comfortable with a collection.' },
  { title: 'Match', icon: 'global-plane.json', subtitle: 'Make the connection.', copy: 'Match a picture to its word, or a word to its picture, by choosing from a grid of answers. Each round gives you another chance to recognize vocabulary, with feedback on your choices and a streak to build.', detail: 'Switch the prompt style to practice recognition in both directions.' },
  { title: 'Listen', icon: 'trophy-celebration.json', subtitle: 'Let your ears lead.', copy: 'Listen to a word and choose the matching answer. Replay the pronunciation when you need another listen, then keep going through the collection. It is a different way to practice the same vocabulary.', detail: 'Adjust the picture and text hints as you become more familiar with the sounds.' },
];

const topics = [
  ['Food & ingredients', 'apple', 'From fruit and vegetables to drinks and ingredients, explore the words behind everyday meals.'],
  ['Animals & nature', 'elephant', 'Discover animals, landscapes, and the natural world through illustrated vocabulary.'],
  ['People & family', 'mother', 'Learn words for family members, people, feelings, and the relationships around you.'],
  ['Travel & places', 'bicycle', 'Practice transport and places around town, from bicycles and buses to your next destination.'],
  ['Home & daily life', 'coming-home', 'Build vocabulary for daily actions, household spaces, clothing, and familiar routines.'],
  ['School & work', 'school-bus', 'Explore collections about school, professions, technology, and the working world.'],
];

const progressFeatures = [
  ['Collect your words', 'When a term feels familiar, collect it as a trophy. Your Trophy Case brings those collected cards together so you can see the vocabulary you have chosen to keep.'],
  ['Give tricky words another turn', 'At the end of a Study deck, Review Missed Words brings you back to the terms you marked for more practice. You can also redo a deck rather than move on before you feel ready.'],
  ['Pick up where you left off', 'Create a free account to save and sync your progress across devices. Your collections and practice streaks give you a way to see your own progress as you return.'],
];

const questions = [
  ['Is FlashFluent free?', 'Yes. FlashFluent is a free learning tool provided by the Evanko Foundation. Try the first world without an account; create a free account to access later worlds and sync your progress.'],
  ['Do I need to download an app?', 'You can start in your browser at learn.flashfluent.app. Choose one of the language cards on this page to open that course directly.'],
  ['Where should a beginner start?', 'Choose a language and a familiar topic in the first world, such as food, animals, or colors. Begin with Study to meet the words, then try Match and Listen with the same collection.'],
  ['Can I change the hints on the cards?', 'Yes. Display controls let you adjust artwork, English meanings, and reading support where available. Mandarin has pinyin and script options; Japanese and Korean offer reading guides.'],
];

export default function Projects() {
  return <div className="site-page">
    <SiteHeader />
    <main className="flashfluent-page">
      <section className="flash-hero shell">
        <div>
          <p className="eyebrow">FlashFluent · An Evanko Foundation program</p>
          <h1>Flashcards for<br /><em>faster learning.</em></h1>
          <p className="flash-hero__copy">See a word. Hear it. Put it into practice. FlashFluent combines illustrated flashcards with matching and listening games to make a new language feel approachable from the very first card.</p>
          <p className="flash-hero__copy">Six free language courses. More than 1,600 illustrated terms in each. Choose a topic, try a game, and build a vocabulary you can keep coming back to.</p>
          <div className="button-row flashfluent__hero-actions"><a className="button button--red" href="#courses">Choose your language</a><a className="text-link" href="#practice-modes">Explore the games <span aria-hidden="true">→</span></a></div>
        </div>
        <LanguageScroller label="A collection of FlashFluent illustrated terms" />
      </section>

      <section className="courses-section shell" id="courses" aria-labelledby="courses-heading">
        <div className="section-heading"><p className="eyebrow">Six languages · Free to learn</p><h2 id="courses-heading">Your next language<br />starts here.</h2><p className="flashfluent__intro">Each course includes illustrated vocabulary, pronunciation, and all three practice modes. Pick a language to open its first world and start exploring.</p></div>
        <div className="course-grid">{courses.map(({ slug, flag, name, native, lang, copy }) => <a className="course" href={`https://learn.flashfluent.app/?course=${slug}`} key={slug} aria-label={`Start learning ${name} with FlashFluent`}>
          <div className="course__heading"><img src={`/flashfluent-assets/course-flags/${flag}`} alt="" width="57" height="57" loading="lazy" decoding="async" /><div><h3>{name}</h3><span className="course__native" lang={lang}>{native}</span></div></div>
          <p>{copy}</p><span className="course__action">Start learning <span aria-hidden="true">→</span></span>
        </a>)}</div>
        <p className="flashfluent__course-note">Start the first world without an account. A free account opens later worlds and lets you save and sync your progress.</p>
      </section>

      <section className="flash-modes" id="practice-modes" aria-labelledby="modes-heading"><div className="shell">
        <div className="section-heading"><p className="eyebrow">Three ways to practice</p><h2 id="modes-heading">Study, Match,<br />and Listen.</h2><p className="flashfluent__intro">Get to know a collection with flashcards, then practice recognizing its words by sight and sound. You can move between activities using the same vocabulary.</p></div>
        <div className="modes-grid">{modes.map(({ title, icon, subtitle, copy, detail }) => <article className="mode-card" key={title}>
          <AnimatedIcon path={icon} className="mode-card__icon" /><h3>{title}</h3><p className="mode-card__subtitle">{subtitle}</p><p>{copy}</p><p className="mode-card__detail">{detail}</p><a className="text-link" href="#courses">Choose a course <span aria-hidden="true">→</span></a>
        </article>)}</div>
        <p className="flashfluent__course-note">Once you open a language, choose a collection and select Study, Match, or Listen inside FlashFluent.</p>
      </div></section>

      <section className="flashfluent__feature shell" aria-labelledby="illustrations-heading">
        <div className="flashfluent__photo"><img src="/images/flashfluent-practice.webp" srcSet="/images/flashfluent-practice-640.webp 640w, /images/flashfluent-practice.webp 1046w" sizes="(max-width: 760px) calc(100vw - 28px), (max-width: 1200px) 45vw, 530px" alt="A learner practicing Mandarin vocabulary with illustrated color cards in FlashFluent" width="1046" height="696" loading="lazy" decoding="async" /></div>
        <div><p className="eyebrow">Pictures, pronunciation, and reading support</p><h2 id="illustrations-heading">More ways to<br />meet a word.</h2><p>An illustration gives you something concrete to connect with a new word. Audio adds its pronunciation. The written term and English meaning help you check the connection as you learn.</p><p>Make the cards work for you: adjust the picture, meaning, and reading hints instead of using the same setup forever. Keep a reading guide visible while you are getting started, then try practicing with fewer hints.</p><p>Mandarin offers pinyin and simplified or traditional characters. Japanese and Korean include reading support alongside their scripts, so unfamiliar writing does not have to stop you from beginning.</p><a className="text-link" href="#courses">Find your course <span aria-hidden="true">→</span></a></div>
      </section>

      <section className="flashfluent__topics" aria-labelledby="topics-heading"><div className="shell">
        <div className="section-heading"><p className="eyebrow">79 collections across 10 worlds in each course</p><h2 id="topics-heading">Words for the world<br />around you.</h2><p className="flashfluent__intro">Vocabulary is organized into themed collections, so you can focus on one area at a time. Start with familiar things and explore more topics as you go.</p></div>
        <div className="flashfluent__topic-grid">{topics.map(([title, image, copy]) => <article className="flashfluent__topic" key={title}><img src={`/flashfluent-assets/collection/${image}.webp`} alt="" width="76" height="76" loading="lazy" decoding="async" /><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
        <a className="text-link" href="#courses">Choose a language and explore its collections <span aria-hidden="true">→</span></a>
      </div></section>

      <section className="flashfluent__progress shell" aria-labelledby="progress-heading">
        <div className="section-heading"><p className="eyebrow">Practice you can return to</p><h2 id="progress-heading">Build your vocabulary.<br />Keep your progress.</h2></div>
        <div className="flashfluent__progress-grid">{progressFeatures.map(([title, copy], index) => <article key={title}><span className="flashfluent__number" aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="flashfluent__getting-started" aria-labelledby="getting-started-heading"><div className="shell">
        <div><p className="eyebrow">A simple place to begin</p><h2 id="getting-started-heading">One collection.<br />A few new words.</h2><p>You do not need to tackle an entire language at once. Here is a starting routine you can make your own.</p><ol className="flashfluent__steps"><li><strong>Choose a language and a topic.</strong> Open the first world and pick something familiar, such as food or colors.</li><li><strong>Meet the words in Study.</strong> Look at the cards, play the pronunciation, and notice which words need more practice.</li><li><strong>Try Match and Listen.</strong> Practice the same words in a different way, then return to the ones you want to review.</li></ol><a className="text-link" href="#courses">Take the first step <span aria-hidden="true">→</span></a></div>
        <div className="flashfluent__faq"><h3>Before you start</h3>{questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </div></section>

      <section className="flash-cta shell"><div className="flash-cta__box"><p className="eyebrow">Made available by the Evanko Foundation</p><h2>Start with your<br />first card.</h2><p>Our mission is to make language learning accessible to everyone, everywhere, for free. FlashFluent gives you a place to begin today.</p><a className="button" href="#courses">Choose a language</a></div></section>

      <section className="projects__future shell" aria-labelledby="projects-future-heading">
        <div className="projects__next"><p className="eyebrow">The work ahead</p><h2 id="projects-future-heading">More languages.<br />More ways to learn.</h2><p>We are building toward ten live language courses and wider access. Volunteers can help onboard teachers and schools, review language content, offer tutoring support, and create custom curriculum aligned with school lessons.</p></div>
        <div className="project-grid">{projects.map(([title, icon, copy]) => <article className="project-card" key={title}><AnimatedIcon path={icon} className="project-card__icon" /><h3>{title}</h3><p>{copy}</p><span className="status">Next focus</span></article>)}</div>
        <div className="projects__involved"><p className="eyebrow">Help expand access</p><h2>Help bring free practice to more learners.</h2><p>Offer tutoring or language review, help onboard a school, or contribute curriculum experience. Donations help cover servers, hosting, development, language expansion, and, most importantly, wider access.</p><div className="button-row"><Link href="/get-involved" className="button button--primary">Get involved</Link><Link href="/donate" className="text-link">Support the foundation <span aria-hidden="true">→</span></Link></div></div>
      </section>
    </main>
    <SiteFooter />
  </div>;
}
