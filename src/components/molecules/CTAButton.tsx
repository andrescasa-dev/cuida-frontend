import React from 'react';
import { Button } from '../ui/button';
import Icon from '../ui/Icon';
import Link from 'next/link';
import { cn } from '@/lib/utils';

function CTAButton({
  variant,
  children,
  href,
  className,
}: {
  variant?: 'secondary';
  children: string;
  href: string;
  className?: string;
}) {
  return (
    <Button asChild variant={variant}>
      <Link href={href} className={cn('flex gap-[0.25em]', className)}>
        {children} <Icon aria-hidden={true} name="chevronRight" />
      </Link>
    </Button>
  );
}

export default CTAButton;
