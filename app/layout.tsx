import type { Metadata } from 'next';
import './globals.css';
import { GoogleAdsAnalytics } from '../components/google-ads-analytics';

export const metadata: Metadata = {
  metadataBase: new URL('https://evanko.co'),
  title: 'Evanko Foundation',
  description: 'A 501(c)(3) nonprofit expanding language access for opportunity, connection, and lifelong learning.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><GoogleAdsAnalytics />{children}</body></html>;
}
