import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import Icon from '../ui/Icon';
import { pages } from '../sections/Header';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';

function HamburgerMenu() {
  return (
    <Sheet>
      <SheetTrigger className="block md:hidden px-4 rounded-md">
        {<Icon name="hamburger" />}
      </SheetTrigger>
      <SheetContent className="w-2/4">
        <div className="pt-8">
          <ul className="flex flex-col gap-8">
            {pages.map(({ href, id, label }) => (
              <li key={id}>
                <Link className={cn(buttonVariants({ variant: 'link' }))} href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default HamburgerMenu;
