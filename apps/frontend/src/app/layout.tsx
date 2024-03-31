import type { Metadata } from 'next';
import Navbar from 'components/Layout/Navbar';

import { Roboto } from 'next/font/google';
import 'app/globals.css';

const robotoRegular = Roboto({ weight: '100', subsets: ['latin'] });

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
      <body className={robotoRegular.className}>
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
