import '@/app/ui/global.css'; //importa estilos globales
import { inter } from '@/app/ui/fonts';

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
