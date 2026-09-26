import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Evanko Foundation',
  description: 'Free language tools for learning, opportunity, connection, and lifelong mental engagement.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
