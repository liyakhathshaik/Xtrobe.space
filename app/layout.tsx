import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GalaxyBackground from '@/components/GalaxyBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Xtrobe - Your Infinite Space Exploration Partner ',
  description: 'Create Your Space Identity',
  openGraph: {
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
          <GalaxyBackground />
          <Navigation />
          <main className="relative z-10 pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
