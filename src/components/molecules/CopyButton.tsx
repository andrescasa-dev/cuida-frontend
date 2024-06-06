'use client';

import { useCopy } from '@/hooks/useCopy';
import { Copy, CopyCheck, CopyX } from 'lucide-react';
import { ReactNode } from 'react';

function CopyButton({ children, text }: { text: string; children: ReactNode }) {
  const { copy, copiedStatus } = useCopy();
  return (
    <button
      onClick={() => copy(text)}
      className="flex gap-2 items-center text-sm capitalize bg-muted rounded-sm py-1 w-full"
    >
      {copiedStatus === 'idl' && <Copy className="size-4" />}
      {copiedStatus === 'success' && <CopyCheck className="size-4" />}
      {copiedStatus === 'error' && <CopyX className="size-4" />}
      {children}
    </button>
  );
}

export default CopyButton;
