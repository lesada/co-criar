import Navbar from '@/components/Navbar';
import Providers from '@/providers';
import { Suspense } from 'react';

export const metadata = {
  title: 'Co-Criar Desenvolvimento',
  description: '-',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt_BR">
      <body>
        <Providers>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}
