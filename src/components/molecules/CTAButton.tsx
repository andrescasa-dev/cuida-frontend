import React from 'react';
import { Button } from '../ui/button';
import Icon from '../ui/Icon';
import Link from 'next/link';

function CTAButton({ children, href }: { children: string; href: string }) {
  return (
    <Button asChild className="flex gap-1">
      <Link href={href}>
        {children} <Icon name="chevronRight" />
      </Link>
    </Button>
  );
}

export default CTAButton;
