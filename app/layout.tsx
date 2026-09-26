import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Evanko Foundation',
  description: 'A 501(c)(3) nonprofit expanding language access for opportunity, connection, and lifelong learning.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
