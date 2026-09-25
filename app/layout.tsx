import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Evanko Foundation presents FlashFluent',
  description: 'The Evanko Foundation, a 501(c)(3) nonprofit, presents FlashFluent: illustrated flashcards for faster language learning.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
