import { Suspense } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Providers from '@/providers';

export const metadata = {
  title: 'Co-Criar Desenvolvimento',
  description:
    'A Co-criar leva seu propósito “movimentar positivamente a evolução de pessoas e organizações”, de forma coerente em suas abordagens de atuação. Para isso, acreditamos que as melhores possibilidades de desenvolvimento são criadas através da colaboração e de permitir que as pessoas se encontrem, gerando novos saberes e novas soluções. Estimular a cocriação de alternativas contribui na resolução de situações complexas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
