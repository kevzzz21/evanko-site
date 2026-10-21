import type { Metadata } from 'next';
import { FlashFluentProjectPage } from '../../../components/flashfluent-project-page';

const locales: Record<string, { base: string; label: string }> = {
  'zh-hans': { base: 'zh-Hans', label: '简体中文' }, 'zh-hant': { base: 'zh-Hant', label: '繁體中文' },
  es: { base: 'es-MX', label: 'Español' }, fr: { base: 'fr-FR', label: 'Français' }, de: { base: 'de-DE', label: 'Deutsch' },
  ja: { base: 'ja-JP', label: '日本語' }, ko: { base: 'ko-KR', label: '한국어' }, id: { base: 'id-ID', label: 'Bahasa Indonesia' }, tl: { base: 'tl-PH', label: 'Tagalog' },
};

export function generateStaticParams() { return Object.keys(locales).map(locale => ({ locale })); }

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = locales[params.locale];
  return { title: `FlashFluent | ${locale?.label ?? 'Free language learning'}`, alternates: { canonical: `/flashfluent/${params.locale}` } };
}

export default function LocalizedFlashFluentPage({ params }: { params: { locale: string } }) {
  const locale = locales[params.locale] ?? { base: 'en', label: 'English' };
  return <FlashFluentProjectPage baseLanguage={locale.base} localePath={params.locale in locales ? params.locale : 'en'} />;
}
