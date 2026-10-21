import type { Metadata } from 'next';
import { FlashFluentProjectPage } from '../../components/flashfluent-project-page';

export const metadata: Metadata = {
  title: 'FlashFluent | Free language flashcards and practice games',
  description: 'Learn with FlashFluent: illustrated vocabulary, pronunciation, and free practice games.',
  alternates: { canonical: '/flashfluent' },
};

export default function FlashFluentPage() {
  return <FlashFluentProjectPage />;
}
