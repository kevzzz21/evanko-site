import Link from "next/link";
import { ReadingProgress } from "./article-reader";
import { AnimatedIcon } from "./animated-icon";
import { SiteFooter, SiteHeader } from "./site-chrome";

type ArticleKey = "economics" | "freelance" | "connection" | "longevity" | "early" | "belonging" | "service" | "freeTools" | "practice";

type Source = { label: string; href: string };
type Article = {
  eyebrow: string;
  title: string;
  dek: string;
  icon: string;
  sections: { heading: string; paragraphs: string[] }[];
  sources: Source[];
};

const articles: Record<ArticleKey, Article> = {
  economics: {
    eyebrow: "Opportunity",
    title: "The economics of bilingualism",
    dek: "What the evidence says about work, hiring, and opportunity.",
    icon: "global-plane.json",
    sections: [
      { heading: "A language barrier is not a talent barrier", paragraphs: ["A person can know how to do the work and still not get the chance to do it. Before an employer sees a portfolio, a work history, or a recommendation, there may be an application to complete, an interview to navigate, or a client call to handle.", "When those moments happen in a language someone is still learning, communication can become the thing that decides who gets through. That does not mean the person lacks skill, judgment, or work ethic. It means the path to having those things recognized has become narrower."] },
      { heading: "Hiring often begins with communication", paragraphs: ["A field experiment on immigrant hiring sent thousands of applications to real job openings while varying the language proficiency shown in applicants’ cover letters. Moving from the lowest proficiency level to a level comparable with native speakers had a strong positive effect on interview callbacks, nearly doubling them in the study.", "That result is useful because it focuses on the first gate. It is not a story about someone becoming more talented overnight. It is evidence that language proficiency can change whether an employer decides to start a conversation in the first place."] },
      { heading: "The demand is not imaginary", paragraphs: ["Language requirements are already visible in the labor market. An OECD study of online vacancies across 27 European Union countries and the United Kingdom found that English was explicitly required in 22% of postings in its sample. Among manager and professional roles, about one in two postings asked for English.", "The point is not that every job requires a second language, or that English is the only language with value. Demand changes by place, profession, and the people a business serves. But where work depends on speaking with customers, coordinating across borders, or earning trust, language has economic weight."] },
      { heading: "There is no universal pay premium", paragraphs: ["This is where the conversation often becomes too simple. It is tempting to attach one number to bilingualism and call it the answer. The research does not support that. Returns vary by country, occupation, language pair, proficiency, and whether a person actually uses the language at work.", "A large U.S. study using Census and occupational data found a more complicated picture than a universal bilingual bonus. Its findings differed across the earnings distribution and did not establish a simple causal wage premium. That nuance is not a weakness in the case for language access. It is a reason to make the case honestly."] },
      { heading: "Opportunity is bigger than a paycheck", paragraphs: ["Economic value is not only a line on a pay stub. It can be the ability to apply for a role that previously felt out of reach, explain a service clearly, keep a client relationship, join a global team, or move from being spoken for to speaking for yourself.", "This matters especially in service, travel, hospitality, customer support, and freelance work. In these settings, communication is part of the work. A translation tool may help with a moment, but it cannot always carry the full exchange, the follow-up question, or the relationship that develops over time."] },
      { heading: "Access should not depend on ability to pay", paragraphs: ["Free, practical language tools cannot promise someone a job or solve an unfair labor market on their own. They can remove one cost from the path. That is meaningful for someone who is ready to learn, ready to work, and simply needs a better way in.", "The economics of bilingualism are ultimately about participation. When language learning is more available, more people have the chance to show what they know, pursue work that fits their ability, and take part in a wider world."] }
    ],
    sources: [
      { label: "IZA: Language proficiency and hiring of immigrants", href: "https://www.iza.org/en/publications/dp/15950" },
      { label: "OECD: The demand for language skills in the European labour market", href: "https://www.oecd.org/en/publications/the-demand-for-language-skills-in-the-european-labour-market_e1a5abe0-en.html" },
      { label: "PLOS ONE: The labor market outcomes of bilinguals in the United States", href: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0287711" }
    ]
  },
  freelance: {
    eyebrow: "Opportunity",
    title: "The economic case for learning a language.",
    dek: "Why communication can shape who gets to compete, contribute, and grow.",
    icon: "orange-planet.json",
    sections: [
      { heading: "Work begins before the work", paragraphs: ["A portfolio can show what someone makes. A résumé can show where they have worked. But winning an opportunity usually begins earlier: reading a brief, asking a useful question, explaining a process, or responding when something changes.", "In freelance work, customer service, hospitality, and remote teams, communication is part of the job. It is not a bonus feature added after someone has been hired."] },
      { heading: "A larger market asks more of us", paragraphs: ["Digital work has made it easier for a client in one country to find a worker in another. That can create more opportunity, but it also changes what it takes to be considered. A capable person may be competing for work in a language that is not the language they use at home.", "The result is not that language replaces expertise. It is that expertise can be harder to see when the first exchange is difficult. A missed question, unclear estimate, or hesitant follow-up can end a conversation before the work itself is ever evaluated."] },
      { heading: "The demand is already visible", paragraphs: ["An OECD study of online job vacancies across 27 European Union countries and the United Kingdom found that English was explicitly required in 22% of postings in its sample. Among manager and professional positions, about one in two postings asked for English.", "Those figures do not describe every labor market, and English is not the only language with economic value. They do show that language requirements are already built into a meaningful share of the work people are asked to pursue."] },
      { heading: "Functional language has a practical purpose", paragraphs: ["The goal is not perfection or accent erasure. It is enough shared language to handle a client message, hospitality interaction, customer-support request, or handoff with confidence and care.", "That is why job-specific learning matters. A generic vocabulary list may be a useful start. A learner also needs the phrases that help them welcome a guest, clarify a request, explain a delay, or speak up when something goes wrong."] },
      { heading: "The return is not always a number", paragraphs: ["The economic value of language is often discussed as a wage premium. Sometimes that is part of the story. It is not the whole story. The return may be access to a client a person could not previously serve, a job application they can now complete, or the ability to move into a role that requires more direct communication.", "That is why the Foundation is careful not to promise that language learning guarantees a particular income. Markets are uneven, and a language skill is only one part of a person’s circumstances. It can still make more work possible."] },
      { heading: "Make the first step easier", paragraphs: ["Cost, time, confidence, and access to a teacher can all keep adults from learning. OECD data on adult education shows that people who want training often identify cost and scheduling as barriers. Those barriers are especially consequential for people already balancing work and family responsibilities.", "Free language tools cannot remove every obstacle. They can make the first useful step easier to take. For someone trying to reach a wider market, that is not a small thing."] }
    ],
    sources: [
      { label: "OECD: The demand for language skills in the European labour market", href: "https://www.oecd.org/en/publications/the-demand-for-language-skills-in-the-european-labour-market_e1a5abe0-en.html" },
      { label: "OECD: Adult participation in education and training", href: "https://www.oecd.org/en/publications/education-at-a-glance-2024_c00cad36-en/full-report/to-what-extent-do-adults-participate-in-education-and-training_c2f90a06.html" },
      { label: "PLOS ONE: The labor market outcomes of bilinguals in the United States", href: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0287711" }
    ]
  },
  connection: {
    eyebrow: "Connection",
    title: "Translation can help. It doesn't connect us.",
    dek: "Why meaningful connection asks for more than a functional exchange.",
    icon: "purple-planet.json",
    sections: [
      { heading: "A useful tool is not a relationship", paragraphs: ["Translation technology can be genuinely useful. It can help someone order a meal, understand a form, find an address, or get through a difficult moment. Those gains matter. They make information more available and the world less intimidating.", "But getting the words across is not the same thing as feeling known. A relationship asks for more than an accurate sentence. It asks for humor, follow-up questions, a shared reference, patience when something lands badly, and the freedom to say what you actually mean."] },
      { heading: "The difference is in the exchange", paragraphs: ["A translated message can complete a transaction. It can tell a customer when a delivery will arrive or help a traveler ask for directions. It cannot create the confidence that comes from speaking in your own voice, or the ease of knowing you can stay in the conversation when it changes direction.", "That does not make translation a failure. It makes it a tool with a purpose. The mistake is treating convenience as a replacement for the human work of expression, listening, and return."] },
      { heading: "Loneliness is bigger than a personal feeling", paragraphs: ["The World Health Organization now treats social connection as a serious public-health concern. Its 2025 Commission report estimates that about one in six people worldwide experienced loneliness between 2014 and 2023. The report also makes an important distinction: someone can be surrounded by people and still feel unsupported or misunderstood.", "Language is not the only reason people become disconnected. Poverty, health, discrimination, grief, mobility, and the loss of shared public spaces all matter. But a language barrier can make each of those experiences harder to navigate because it limits who someone can ask, answer, or return to."] },
      { heading: "A language barrier can become a social barrier", paragraphs: ["Research on newcomers in Canada found that language proficiency was the strongest predictor of sociocultural integration in the study. That does not mean fluency automatically creates belonging. It does mean that being able to communicate can affect whether a person can take part in the ordinary exchanges where belonging begins.", "The stakes can be even higher later in life. Research with older Korean Americans found that people facing both social and linguistic isolation had worse health, mental-health, and cognitive outcomes than those facing neither. It is one population and one study, not a universal claim. It is also a reminder that communication can matter far beyond a conversation."] },
      { heading: "Technology has a place", paragraphs: ["The Foundation does not see technology as the enemy of connection. Translation, video calls, language apps, and online communities can all create openings that did not exist before. For someone starting from zero, a tool can be the first small step toward participation.", "The question is what comes next. Does the tool help someone avoid a conversation forever, or does it make the next conversation more possible? The answer depends on how we build, teach, and show up for one another."] },
      { heading: "Make a reason to return", paragraphs: ["A language exchange, pen-pal program, or tutoring relationship will not solve loneliness by itself. It can create a reason for two people to come back to a conversation. That matters because connection is rarely built in one impressive interaction. It grows through repetition.", "Learning another person’s language is not a requirement for care. It is one way of saying that the relationship is worth effort. In a world full of faster ways to exchange information, that effort may be more valuable than ever."] }
    ],
    sources: [
      { label: "WHO: Report of the Commission on Social Connection", href: "https://www.who.int/groups/commission-on-social-connection/report/" },
      { label: "Applied Psycholinguistics: Language proficiency and sociocultural integration of Canadian newcomers", href: "https://doi.org/10.1017/S0142716420000375" },
      { label: "Gerontology and Geriatric Medicine: Social and linguistic isolation in older Korean Americans", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8595502/" }
    ]
  },
  longevity: {
    eyebrow: "Longevity",
    title: "Staying sharp through languages.",
    dek: "What research can—and cannot—say about language use later in life.",
    icon: "yellow-planet.json",
    sections: [
      { heading: "A promising association is not a guarantee", paragraphs: ["Studies of bilingualism and aging have found an association with a later average age at which dementia symptoms are diagnosed in some populations. That is an important signal worth studying. It does not mean that learning a language prevents dementia, or that it can replace healthcare, exercise, social support, or other parts of healthy aging.", "The most responsible version of this claim stays with what the evidence supports: sustained language use may be one meaningful form of mental engagement across a life."] },
      { heading: "The research is still being refined", paragraphs: ["A systematic review and meta-analysis found later reported onset or diagnosis in bilingual groups, but not evidence of a lower dementia risk overall. The studies also differ in design, populations, education, immigration history, and how bilingualism is measured.", "That nuance matters. It keeps a hopeful idea from becoming an overpromise."] },
      { heading: "Engagement is valuable without a guarantee", paragraphs: ["Reading, remembering, speaking, and listening give people a reason to stay curious and in contact with others. Free language tools can support that practice at any age—because a sharper, more connected life is worth investing in even when no single outcome can be promised."] }
    ],
    sources: [{ label: "Systematic review: Bilingualism and dementia", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7089902/" }]
  },
  early: {
    eyebrow: "Early development",
    title: "Giving children a head start through language",
    dek: "Why children deserve a genuine chance to learn and communicate across languages.",
    icon: "teal-planet.json",
    sections: [
      { heading: "Childhood is a powerful time to learn", paragraphs: ["Children learn languages through repeated, meaningful contact: stories, play, songs, routines, and conversation. Early access can give a child more ways to participate in family and community life, as well as a foundation for future learning.", "The case for access does not require a miracle claim. Every child deserves tools that make learning feel available rather than exclusive."] },
      { heading: "Cognitive claims deserve care", paragraphs: ["Bilingualism research has reported possible benefits in areas such as executive function, but reviews and meta-analyses also find mixed results. Outcomes depend on context, exposure, socioeconomic conditions, and how studies define bilingual experience.", "That does not diminish language learning. It simply means we should value it for what is certain: communication, cultural access, and a practical skill that grows with use."] },
      { heading: "Make the first step free", paragraphs: ["When family income, geography, or school resources determine who gets a head start, free tools can help narrow the gap. The aim is to give young learners an inviting first step—not a one-size-fits-all answer."] }
    ],
    sources: [{ label: "Review: bilingualism and executive function", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7573143/" }, { label: "Meta-analysis of executive-function evidence", href: "https://pubmed.ncbi.nlm.nih.gov/32914991/" }]
  },
  belonging: {
    eyebrow: "Connection",
    title: "What language learning gives the brain.",
    dek: "Why being able to join a conversation changes a place.",
    icon: "green-planet.json",
    sections: [
      { heading: "Belonging starts with being able to take part", paragraphs: ["A neighborhood, school, or workplace can be welcoming in intention and still be hard to enter when a person cannot follow the conversation. Language is one of the quiet conditions that determines whether someone can ask a question, share a joke, or feel at home.", "That does not make language the whole story of belonging. It makes it one practical part of making a community more open."] },
      { heading: "Connection is built through return", paragraphs: ["The first conversation matters. The second and third often matter more. Familiarity grows when people have a reason to keep coming back to one another, even while they are still learning.", "That is why small, recurring exchanges can be more valuable than a one-time transaction."] },
      { heading: "Make room for the learner", paragraphs: ["A language learner should not have to earn the right to participate. Tools can help, but so can patience, slower speech, and the assumption that effort belongs on both sides of a conversation."] }
    ],
    sources: [{ label: "WHO Commission on Social Connection report", href: "https://www.who.int/publications/i/item/978240112360" }]
  },
  service: {
    eyebrow: "Opportunity",
    title: "Language is still a career advantage.",
    dek: "The practical phrases that help work feel possible.",
    icon: "earth-like-planet.json",
    sections: [
      { heading: "Work has its own vocabulary", paragraphs: ["In hospitality, customer support, and service work, language is not abstract. It is the ability to welcome someone, clarify a request, explain a delay, and make a problem feel handled.", "These moments can be short, but they carry trust. A worker does not need every word in the dictionary; they need language that fits the work in front of them."] },
      { heading: "Confidence is part of access", paragraphs: ["When people know the phrases they are likely to need, they can focus more on the person than on the fear of getting it wrong. That is a practical kind of confidence—not performance, just readiness."] },
      { heading: "Start with the moment that matters", paragraphs: ["Job-specific language packs should be built around real interactions. The goal is to make a shift, a client exchange, or a handoff more possible today, while leaving room for deeper learning over time."] }
    ],
    sources: [{ label: "PLOS ONE: Language skills and labor-market outcomes", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10309611/" }]
  },
  freeTools: {
    eyebrow: "Access",
    title: "Language access should not be a luxury.",
    dek: "Access should not depend on where someone starts.",
    icon: "black-planet.json",
    sections: [
      { heading: "Cost shapes who gets a head start", paragraphs: ["Language learning is often treated as an individual choice, but the choices available to a person are shaped by time, income, school resources, and geography. When the first useful tool is behind a paywall, access begins unevenly.", "Free tools do not remove every barrier. They can make the first step available to more people."] },
      { heading: "Useful beats impressive", paragraphs: ["A public-interest tool should be clear, usable, and light enough to return to. It does not need to claim it can teach everything. It needs to help someone take the next real step."] },
      { heading: "Access is a design decision", paragraphs: ["The Foundation’s approach is simple: make practical language support free wherever possible, and build for the person who may not have another easy way in."] }
    ],
    sources: [{ label: "WHO Commission on Social Connection report", href: "https://www.who.int/publications/i/item/978240112360" }]
  },
  practice: {
    eyebrow: "Connection",
    title: "Loneliness is a communication problem, too.",
    dek: "What a recurring conversation can make room for.",
    icon: "dark-blue-planet.json",
    sections: [
      { heading: "Practice gives people a reason to return", paragraphs: ["A language exchange is a modest format with a meaningful premise: two people show up, try, listen, and come back. The shared task reduces the pressure of starting from nothing.", "Over time, vocabulary can grow alongside recognition, trust, and curiosity about another person’s life."] },
      { heading: "Safety and structure matter", paragraphs: ["Connection programs need clear expectations, appropriate safeguards, and a format that respects participants. The point is not to manufacture friendship. It is to make respectful contact more possible."] },
      { heading: "A small answer to a large problem", paragraphs: ["Loneliness is a global public-health concern with many causes. A regular conversation is not a complete solution, but it can be one human-scale way to create contact where there might otherwise be none."] }
    ],
    sources: [{ label: "WHO Commission on Social Connection report", href: "https://www.who.int/publications/i/item/978240112360" }]
  }
};

const articlePaths: Record<ArticleKey, string> = {
  economics: "/articles/economics-of-bilingualism",
  freelance: "/articles/language-and-global-work",
  connection: "/articles/translation-and-connection",
  longevity: "/articles/language-and-longevity",
  early: "/articles/learning-early",
  belonging: "/articles/language-of-belonging",
  service: "/articles/service-language",
  freeTools: "/articles/why-free-tools",
  practice: "/articles/connection-needs-practice",
};
const relatedTones = ["blue", "orange", "purple", "gold", "green", "earth", "teal", "rose"];

export function ArticlePage({ article }: { article: ArticleKey }) {
  const item = articles[article];
  const related = (Object.keys(articles) as ArticleKey[]).filter((key) => key !== article);
  const sectionIds = item.sections.map((_, index) => `section-${index + 1}`);
  return <div className="site-page"><SiteHeader /><main className="article-page">
    <div className="content-shell article-hero">
      <Link href="/articles" className="text-link">← All articles</Link>
      <div className="article-page__hero-grid">
        <div><p className="eyebrow">{item.eyebrow}</p><h1>{item.title}</h1><p className="article-dek">{item.dek}</p></div>
        <div className="article-page__art"><AnimatedIcon path={item.icon} /></div>
      </div>
    </div>
    <div className="content-shell article-layout">
      <ReadingProgress sections={item.sections.map((section, index) => [sectionIds[index], section.heading])} />
      <article className="article-body" id="article-body">
        {item.sections.map((section, index) => <section id={sectionIds[index]} key={section.heading}>
          <h2><span>0{index + 1}</span>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>)}
        <aside className="article-source"><strong>Sources</strong><ul>{item.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label} ↗</a></li>)}</ul></aside>
      </article>
    </div>
  </main>
  <section className="related-articles"><div className="shell"><div className="related-articles__heading"><p className="eyebrow">Keep reading</p><h2>More from the foundation.</h2></div><div className="home-articles__grid">{related.map((key, index) => { const relatedItem = articles[key]; return <a className={`home-article-card home-article-card--${relatedTones[index]}`} href={articlePaths[key]} key={key}><div className="home-article-card__art"><AnimatedIcon path={relatedItem.icon} /></div><div className="home-article-card__copy"><p className="eyebrow">{relatedItem.eyebrow}</p><h3>{relatedItem.title}</h3><p>{relatedItem.dek}</p><span>Read article <b>→</b></span></div></a>; })}</div></div></section>
  <SiteFooter /></div>;
}
