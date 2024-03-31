'use client';

import React, { FC } from 'react';
import { Roboto } from 'next/font/google';
import { Button } from '@material-tailwind/react';

const robotoMedium = Roboto({ weight: '500', subsets: ['latin'] });

const Navbar: FC = () => {
  return (
    <div className="flex px-5 h-16 w-full">
      <Button
        className="ml-auto"
        variant="text"
        size="md"
        placeholder=""
        onPointerEnterCapture={null}
        onPointerLeaveCapture={null}
      >
        LOGIN
      </Button>
      <div
        className={`${robotoMedium.className} text-darkCyan ml-auto flex items-center cursor-pointer`}
      ></div>
    </div>
  );
};

export default Navbar;
