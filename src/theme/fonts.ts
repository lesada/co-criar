import {
  Inter as InterFont,
  Open_Sans as OpenSansFont,
  Poppins as PoppinsFont,
} from 'next/font/google';

const Inter = InterFont({
  subsets: ['latin'],
});

const Poppins = PoppinsFont({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const OpenSans = OpenSansFont({
  subsets: ['latin'],
});

export default {
  Inter,
  Poppins,
  OpenSans,
};
