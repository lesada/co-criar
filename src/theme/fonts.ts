import {
  DM_Sans as DmSansFont,
  Inter as InterFont,
  Open_Sans as OpenSansFont,
  Poppins as PoppinsFont,
} from 'next/font/google';

const Inter = InterFont({
  subsets: ['latin'],
  display: 'swap',
});

const Poppins = PoppinsFont({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const OpenSans = OpenSansFont({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const DmSans = DmSansFont({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export default {
  Inter,
  Poppins,
  OpenSans,
  DmSans,
};
