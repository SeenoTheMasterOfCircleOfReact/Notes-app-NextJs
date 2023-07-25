import './globals.css';
import type { Metadata } from 'next';

import Header from '@/components/Header';
import PageWrapper from '@/components/PageWrapper';
import Providers from '@/redux/Providers';

// creates a <head></head> element with title and description
export const metadata: Metadata = {
  title: 'My Notes',
  description:
    "Check out our Next.js app for storing notes! It's built with Typescript, Tailwind CSS, and Redux Toolkit to ensure a cool and efficient note-taking experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-slate-950 text-white h-screen flex flex-col overflow-y-scroll">
        <Providers>
          <Header />
          <main className="border-red-300">
            <PageWrapper>{children}</PageWrapper>
          </main>
        </Providers>
      </body>
    </html>
  );
}
