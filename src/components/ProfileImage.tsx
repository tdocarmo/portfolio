'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ProfileImage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full aspect-square relative rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 animate-pulse" />
    );
  }

  return (
    <div className="w-full aspect-square relative rounded-lg overflow-hidden">
      <Image
        src={resolvedTheme === 'dark' ? '/images/profile-dark.png' : '/images/profile.jpg'}
        alt="Toni Do Carmo"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
} 