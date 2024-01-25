import Navbar from '@/components/Navbar';
import Providers from '@/providers';

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
          {children}
        </Providers>
      </body>
    </html>
  );
}
