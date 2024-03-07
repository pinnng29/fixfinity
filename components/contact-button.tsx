'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactButton() {
  return (
    <div>
      <Button
        asChild
        size={'default'}
        variant={'secondary'}
      >
        <Link
          href={'https://wa.me/6281364664824'}
          target="_blank"
        >
          Contact Us
        </Link>
      </Button>
    </div>
  );
}
