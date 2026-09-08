import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Evanko Foundation',
  description: 'A 501(c)(3) nonprofit dedicated to education. Knowledge is power.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
