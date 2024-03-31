import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import 'app/globals.css';

const roboto = Roboto({ weight: '100' });
export const metadata: Metadata = {
  title: 'Planner app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
