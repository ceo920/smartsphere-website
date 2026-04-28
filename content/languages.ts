export type Language = {
  code: string;
  name: string;
  native: string;
  region: 'Americas' | 'Europe' | 'MENA' | 'Africa' | 'Asia-Pacific';
  rtl?: boolean;
};

// Languages our AI agents can speak. Independent of the site UI locale list
// in i18n/routing.ts — agents are deployed per customer, the UI is per visitor.
export const languages: Language[] = [
  { code: 'ar', name: 'Arabic', native: 'العربية', region: 'MENA', rtl: true },
  { code: 'en', name: 'English', native: 'English', region: 'Americas' },
  { code: 'es', name: 'Spanish', native: 'Español', region: 'Americas' },
  { code: 'fr', name: 'French', native: 'Français', region: 'Europe' },
  { code: 'de', name: 'German', native: 'Deutsch', region: 'Europe' },
  { code: 'zh', name: 'Mandarin', native: '中文', region: 'Asia-Pacific' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी', region: 'Asia-Pacific' },
  { code: 'ur', name: 'Urdu', native: 'اردو', region: 'Asia-Pacific', rtl: true },
  { code: 'pt', name: 'Portuguese', native: 'Português', region: 'Americas' },
  { code: 'ru', name: 'Russian', native: 'Русский', region: 'Europe' },
  { code: 'ja', name: 'Japanese', native: '日本語', region: 'Asia-Pacific' },
  { code: 'ko', name: 'Korean', native: '한국어', region: 'Asia-Pacific' },
  { code: 'it', name: 'Italian', native: 'Italiano', region: 'Europe' },
  { code: 'nl', name: 'Dutch', native: 'Nederlands', region: 'Europe' },
  { code: 'tr', name: 'Turkish', native: 'Türkçe', region: 'Europe' },
  { code: 'sw', name: 'Swahili', native: 'Kiswahili', region: 'Africa' },
  { code: 'id', name: 'Indonesian', native: 'Bahasa Indonesia', region: 'Asia-Pacific' },
  { code: 'vi', name: 'Vietnamese', native: 'Tiếng Việt', region: 'Asia-Pacific' },
  { code: 'th', name: 'Thai', native: 'ไทย', region: 'Asia-Pacific' },
  { code: 'pl', name: 'Polish', native: 'Polski', region: 'Europe' },
  { code: 'tl', name: 'Tagalog', native: 'Tagalog', region: 'Asia-Pacific' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা', region: 'Asia-Pacific' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்', region: 'Asia-Pacific' },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ', region: 'Asia-Pacific' },
  { code: 'fa', name: 'Persian', native: 'فارسی', region: 'MENA', rtl: true },
  { code: 'he', name: 'Hebrew', native: 'עברית', region: 'MENA', rtl: true }
];
