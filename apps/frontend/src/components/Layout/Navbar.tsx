import React, { FC } from 'react';
import { Roboto } from 'next/font/google';
import Image from 'next/image';

const robotoMedium = Roboto({ weight: '500', subsets: ['latin'] });

const Navbar: FC = () => {
  return (
    <>
      <div className="flex items-center justify-between px-5 h-16 w-full">
        <Image
          alt="Planner App Logo"
          // className={styles.vercelLogo}
          height={70}
          priority
          src="/planner-logo.png"
          width={100}
        />
        <div className="bg-darkCyan"></div>
        <button
          className={`bg-darkCyan text-floralWhite hover:bg-opacity-80 ${robotoMedium.className} rounded-3xl px-3 py-2`}
        >
          Get Started
        </button>
      </div>
    </>
  );
};

export default Navbar;
