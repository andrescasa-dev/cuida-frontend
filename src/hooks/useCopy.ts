'use client';

import { useEffect, useState } from 'react';

export const useCopy = () => {
  const [copiedStatus, setCopiedStatus] = useState<'idl' | 'success' | 'error'>('idl');
  useEffect(() => {
    if (copiedStatus !== 'idl') {
      setTimeout(() => {
        setCopiedStatus('idl');
      }, 1000);
    }
  }, [copiedStatus]);
  const copy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedStatus('success');
      })
      .catch((e) => {
        const error = e as Error;
        setCopiedStatus('error');
        console.error(error.message);
      });
  };
  return { copy, copiedStatus };
};
