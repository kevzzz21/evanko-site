import type { Metadata } from 'next';
import { ArticlePage } from '../../../components/article-page';
import { octoberNewsletter } from '../../../lib/october-newsletter';

export const metadata: Metadata = {
  title: `${octoberNewsletter.title} | Evanko Foundation`,
  description: octoberNewsletter.dek,
  alternates: { canonical: octoberNewsletter.path },
  openGraph: {
    type: 'article',
    title: octoberNewsletter.title,
    description: octoberNewsletter.dek,
    url: octoberNewsletter.path,
    publishedTime: octoberNewsletter.published.iso,
    modifiedTime: octoberNewsletter.published.iso,
  },
};

export default function OctoberNewsletter() {
  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: octoberNewsletter.title,
    description: octoberNewsletter.dek,
    datePublished: octoberNewsletter.published.iso,
    dateModified: octoberNewsletter.published.iso,
    mainEntityOfPage: `https://evanko.co${octoberNewsletter.path}`,
    author: { '@type': 'Organization', name: 'Evanko Foundation', url: 'https://evanko.co/about' },
    publisher: { '@type': 'Organization', name: 'Evanko Foundation', url: 'https://evanko.co' },
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData).replace(/</g, '\\u003c') }} /><ArticlePage article="octoberNewsletter" /></>;
}
