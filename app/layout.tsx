import '@/app/ui/global.css'; //importa estilos globales
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Learn Next 14',
    default: 'Learn Next 14',
  },
  description: 'Next 14 practice page, applying new features, built with App Router.',
  metadataBase: new URL('https://learnnext14.vercel.app/'),
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Agregarmos las font globales + una clase de tailwind */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
