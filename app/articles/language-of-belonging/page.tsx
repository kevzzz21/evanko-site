import type { Metadata } from 'next';
import { ArticlePage } from '../../../components/article-page';
export default function Page(){return <ArticlePage article="belonging"/>}

export const metadata: Metadata = {'title': 'The language of belonging | Evanko Foundation', 'description': 'How language shapes participation and belonging in a community.', 'alternates': {'canonical': '/articles/language-of-belonging'}};
