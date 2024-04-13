import {
  DM_Sans as DmSansFont,
  Inter as InterFont,
  Open_Sans as OpenSansFont,
  Poppins as PoppinsFont,
} from 'next/font/google';

const Inter = InterFont({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
});

const Poppins = PoppinsFont({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
});

const OpenSans = OpenSansFont({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  adjustFontFallback: false,
});

const DmSans = DmSansFont({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  adjustFontFallback: false,
});

export default {
  Inter,
  Poppins,
  OpenSans,
  DmSans,
};
