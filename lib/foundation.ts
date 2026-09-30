/** Shared public program facts. Donation destination is supplied separately. */
export const foundation = {
  name: 'The Evanko Foundation', founder: 'Kyle Evanko', email: 'kyle@evanko.co',
  contacts: {
    partnerships: 'partnerships@evanko.co',
    donations: 'donations@evanko.co',
    teachers: 'teachers@evanko.co',
  },
  ein: '33-2430782', address: ['24124 Decorah Rd', 'Diamond Bar, CA 91765'],
  students: 106, classrooms: 3, region: 'San Gabriel Valley',
  updated: 'September 2026', learningUrl: 'https://learn.flashfluent.app',
} as const;

// PayPal donation destination supplied by the Foundation.
export const donationUrl = 'https://www.paypal.com/donate/?hosted_button_id=7C3C75EMHYGKC';

export const courses = [
  { slug: 'mandarin', name: 'Mandarin', native: '中文' },
  { slug: 'japanese', name: 'Japanese', native: '日本語' },
  { slug: 'korean', name: 'Korean', native: '한국어' },
  { slug: 'spanish', name: 'Spanish', native: 'Español' },
  { slug: 'french', name: 'French', native: 'Français' },
  { slug: 'german', name: 'German', native: 'Deutsch' },
] as const;
