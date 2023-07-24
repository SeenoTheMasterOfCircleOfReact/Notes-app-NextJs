import './globals.css';
import type { Metadata } from 'next';

import PageWrapper from '@/components/PageWrapper';
import Header from '@/components/Header';

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
      <body className="bg-slate-950 text-white">
        <Header />
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
