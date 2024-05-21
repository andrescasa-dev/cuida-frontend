import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cuida',
  description: 'Cuidado animal Cúcuteño',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'flex flex-col min-h-dvh')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
