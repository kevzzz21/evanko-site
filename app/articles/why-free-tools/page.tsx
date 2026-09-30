import type { Metadata } from 'next';
import { ArticlePage } from '../../../components/article-page';
export default function Page(){return <ArticlePage article="freeTools"/>}

export const metadata: Metadata = {'title': 'Why free tools matter | Evanko Foundation', 'description': 'How cost and time shape access to language learning.', 'alternates': {'canonical': '/articles/why-free-tools'}};
