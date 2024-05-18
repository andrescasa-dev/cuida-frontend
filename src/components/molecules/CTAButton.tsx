import React from 'react';
import { Button } from '../ui/button';
import Icon from '../ui/Icon';
import Link from 'next/link';
import { cn } from '@/lib/utils';

function CTAButton({
  children,
  href,
  className,
}: {
  children: string;
  href: string;
  className?: string;
}) {
  return (
    <Button asChild className={cn('flex gap-1', className)}>
      <Link href={href}>
        {children} <Icon name="chevronRight" />
      </Link>
    </Button>
  );
}

export default CTAButton;
