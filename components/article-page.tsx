import Link from "next/link";
import { ReadingProgress } from "./article-reader";
import { AnimatedIcon } from "./animated-icon";

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
    dek: "What the pay-premium evidence actually shows—and what it does not.",
    icon: "global-plane.json",
    sections: [
      { heading: "Language can change who gets to participate", paragraphs: ["Language is not a substitute for skill. It is often the layer that lets skill be seen: in an interview, a client call, a service role, or a global team. When the market expands beyond a person’s immediate geography, being able to communicate clearly can expand the work they can pursue.", "That makes language access an opportunity question, especially for people whose expertise is already there but whose path to clients, customers, or employers is narrower than it needs to be."] },
      { heading: "The evidence is real, but not one number", paragraphs: ["Research on wages and multilingualism finds associations that vary sharply by place, occupation, language pair, and how language ability is used on the job. A long-running U.S. Census analysis found positive wage associations in some contexts, particularly among lower-wage workers, while also showing that the story is not a universal premium.", "The useful takeaway is more grounded: a language skill has economic value when it lets someone do work, serve people, or build trust that would otherwise be out of reach."] },
      { heading: "Access should not depend on ability to pay", paragraphs: ["Free, practical language tools can lower one of the costs of entering a wider market. The aim is not to promise an outcome. It is to make the language layer less of a gatekeeper for someone ready to contribute."] }
    ],
    sources: [{ label: "PLOS ONE: Language skills and labor-market outcomes", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10309611/" }]
  },
  freelance: {
    eyebrow: "Opportunity",
    title: "Language is part of the freelance economy",
    dek: "Why skill alone is not always enough to compete for work across borders.",
    icon: "orange-planet.json",
    sections: [
      { heading: "The work starts before the contract", paragraphs: ["A portfolio can show what someone makes. But winning work also means reading a brief, asking the right question, describing a process, and responding when something changes. In remote and freelance work, that communication is part of the job—not an extra.", "This is particularly consequential for capable workers serving clients in another language. A small communication gap can make expertise harder to recognize before there is a chance to demonstrate it."] },
      { heading: "Functional language has a practical purpose", paragraphs: ["The goal is not perfection or accent erasure. It is enough shared language to handle a client message, hospitality interaction, customer-support request, or handoff with confidence and care.", "That is why job-specific learning can be more useful than a generic vocabulary list: it starts with the actual moments where access is won or lost."] },
      { heading: "A tool can remove friction, not replace expertise", paragraphs: ["Language learning will not make an unfair market fair on its own. It can, however, reduce one avoidable barrier between a skilled person and the work they are qualified to do. That is a practical place for free public-interest tools to start."] }
    ],
    sources: [{ label: "PLOS ONE: Language skills and labor-market outcomes", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10309611/" }]
  },
  connection: {
    eyebrow: "Connection",
    title: "Translation is not connection",
    dek: "Why meaningful contact asks for more than a functional exchange.",
    icon: "purple-planet.json",
    sections: [
      { heading: "A transaction is not the same as a relationship", paragraphs: ["Translation technology can help people get through a moment: order a meal, find an address, understand a form. Those are real gains. But relationships depend on more than passing information back and forth. They make room for humor, nuance, curiosity, repair, and the feeling of being understood.", "Learning even some of another person’s language is not a requirement for care. It is one way of showing that the relationship itself is worth the effort."] },
      { heading: "Loneliness is a public-health issue", paragraphs: ["The World Health Organization’s Commission on Social Connection identifies loneliness and social isolation as a serious global health concern. Its work makes the point plainly: connection is not a nice-to-have around the edges of life; it is part of health and community resilience.", "Language is only one part of this larger picture. But when a language gap keeps someone from joining a conversation, seeking help, or forming a local friendship, it can be a meaningful part."] },
      { heading: "Build ways to meet, not just ways to translate", paragraphs: ["A language exchange or pen-pal program will not solve loneliness by itself. It can create a small, structured reason for two people to return to a conversation—and a gentler starting point for belonging."] }
    ],
    sources: [{ label: "WHO Commission on Social Connection report", href: "https://www.who.int/publications/i/item/978240112360" }]
  },
  longevity: {
    eyebrow: "Longevity",
    title: "Language and cognitive longevity",
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
    title: "What early language access makes possible",
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
    title: "The language of belonging",
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
    title: "What service language really means",
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
    title: "Why free tools matter",
    dek: "Access should not depend on where someone starts.",
    icon: "blue-teal-planet.json",
    sections: [
      { heading: "Cost shapes who gets a head start", paragraphs: ["Language learning is often treated as an individual choice, but the choices available to a person are shaped by time, income, school resources, and geography. When the first useful tool is behind a paywall, access begins unevenly.", "Free tools do not remove every barrier. They can make the first step available to more people."] },
      { heading: "Useful beats impressive", paragraphs: ["A public-interest tool should be clear, usable, and light enough to return to. It does not need to claim it can teach everything. It needs to help someone take the next real step."] },
      { heading: "Access is a design decision", paragraphs: ["The Foundation’s approach is simple: make practical language support free wherever possible, and build for the person who may not have another easy way in."] }
    ],
    sources: [{ label: "WHO Commission on Social Connection report", href: "https://www.who.int/publications/i/item/978240112360" }]
  },
  practice: {
    eyebrow: "Connection",
    title: "Connection needs practice",
    dek: "What a recurring conversation can make room for.",
    icon: "redstar-planet.json",
    sections: [
      { heading: "Practice gives people a reason to return", paragraphs: ["A language exchange is a modest format with a meaningful premise: two people show up, try, listen, and come back. The shared task reduces the pressure of starting from nothing.", "Over time, vocabulary can grow alongside recognition, trust, and curiosity about another person’s life."] },
      { heading: "Safety and structure matter", paragraphs: ["Connection programs need clear expectations, appropriate safeguards, and a format that respects participants. The point is not to manufacture friendship. It is to make respectful contact more possible."] },
      { heading: "A small answer to a large problem", paragraphs: ["Loneliness is a global public-health concern with many causes. A regular conversation is not a complete solution, but it can be one human-scale way to create contact where there might otherwise be none."] }
    ],
    sources: [{ label: "WHO Commission on Social Connection report", href: "https://www.who.int/publications/i/item/978240112360" }]
  }
};

export function ArticlePage({ article }: { article: ArticleKey }) {
  const item = articles[article];
  return <main className="article-page">
    <div className="content-shell article-hero">
      <Link href="/articles" className="text-link">← All articles</Link>
      <div className="article-page__hero-grid">
        <div><p className="eyebrow">{item.eyebrow}</p><h1>{item.title}</h1><p className="article-dek">{item.dek}</p></div>
        <div className="article-page__art"><AnimatedIcon path={item.icon} /></div>
      </div>
    </div>
    <ReadingProgress sections={item.sections.map((section, index) => [["evidence", "work", "practice"][index], section.heading])} />
    <div className="content-shell article-layout">
      <div />
      <article className="article-body" id="article-body">
        {item.sections.map((section, index) => <section id={["evidence", "work", "practice"][index]} key={section.heading}>
          <h2><span>0{index + 1}</span>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>)}
        <aside className="article-source"><strong>Sources</strong><ul>{item.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label} ↗</a></li>)}</ul></aside>
      </article>
    </div>
  </main>;
}
