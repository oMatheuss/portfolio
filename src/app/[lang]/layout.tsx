import { Metadata } from 'next';
import '@/app/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Matheus • FullStack Developer',
  description:
    "I'm a developer who work mostly with building light and fast web applications",
  appleWebApp: true,
  authors: {
    name: 'Matheus S. Moura',
  },
  viewport: { width: 'device-width', initialScale: 1 },
  manifest: '/site.webmanifest',
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
  ],
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pt-br' }];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang} className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
