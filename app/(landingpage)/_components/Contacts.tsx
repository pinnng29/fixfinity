import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { soria } from '@/lib/fonts';
import { contacts } from '@/lib/site-config';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import reactStringReplace from 'react-string-replace';

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="mx-auto mt-10 max-w-xl px-6 py-24 text-center"
    >
      <Badge className="text-lg mb-6 text-zinc-50">Why FixFinity?</Badge>
      <div className="flex flex-col items-center justify-center rounded-xl border border-border p-10 shadow-xl">
        <h2
          className={cn(soria.className, 'text-4xl font-semibold sm:text-6xl')}
        >
          {reactStringReplace(contacts.heading, /\*\*(.*)\*\*/g, (match, i) => (
            <span
              key={i}
              className="word-animation"
            >
              {match}
            </span>
          ))}
        </h2>
        <p className="mt-4 text-muted-foreground">
          Anda dapat menghubungi kami melalui kontak di bawah ini. Tim kami akan berusaha untuk merespons pesan Anda dalam waktu yang sesingkat-singkatnya, Terima kasih!
        </p>
        <Button
          asChild
          color="primary"
          size={'lg'}
          variant={'outline'}
          className="mt-4"
        >
          <Link
            href={'https://wa.me/6281364664824/'}
            target="_blank"
          >
            <FaWhatsapp className="mr-2" />
            Whatsapp
          </Link>
        </Button>
      </div>
    </section>
  );
}
