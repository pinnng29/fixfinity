'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { soria } from '@/lib/fonts';
import { hero } from '@/lib/site-config';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import reactStringReplace from 'react-string-replace';
import { FaWhatsapp } from 'react-icons/fa';
import { RiInformationFill } from 'react-icons/ri';

export default function Hero() {
  // const { isSignedIn } = useUser();

  return (
    <section
      id="hero"
      className="py-10"
    >
      <div className="flex min-h-screen flex-col items-center justify-center py-10 delay-200 duration-1000 animate-in fade-in slide-in-from-top-6">
        <h1
          className={cn(
            soria.className,
            'lg:text-6xl xl:text-8xl mt-8 tracking-wide font-extrabold text-center text-5xl capitalize'
          )}
        >
          {hero.heading.split('\n').map((line, index) => (
            <span key={index}>
              {reactStringReplace(line, /\*\*(.*)\*\*/g, (match, i) => (
                <span
                  key={i}
                  className="word-animation"
                >
                  {match}
                </span>
              ))}
              <br />
            </span>
          ))}
        </h1>
        <Badge className="mt-10 flex items-center gap-2 text-lg font-semibold text-zinc-50">
          Nge-fix masalah teknisimu, tanpa batas!
        </Badge>
        <h2 className="mt-3 max-w-[550px] text-center text-lg p-6 font-semibold">
          Fixfinity adalah platform penyedia jasa layanan tukang yang
          menghubungkan tukang terampil dengan pelanggan yang membutuhkan solusi
          perbaikan rumah dan layanan sejenisnya. Kami berkomitmen untuk
          memberikan pengalaman layanan yang mudah diandalkan, memudahkan proses
          pencarian, penjadwalan, dan pembayaran layanan tukang secara online.
          Dengan platform kami, Anda dapat dengan mudah menemukan tukang yang
          sesuai dengan kebutuhan Anda. Kami mengerti betapa sulitnya mencari
          tukang yang cocok dan mengatasi masalah teknis di rumah sendiri. Oleh
          karena itu, kami hadir untuk membantu Anda menyelesaikan berbagai
          macam proyek rumah, termasuk perbaikan listrik, pipa, renovasi, dan
          proyek-proyek kecil sehari-hari.
        </h2>
        <div className="flex items-center gap-2 mt-8">
          <Button asChild>
            <Link
              target="_blank"
              href={'https://wa.me/6281364664824/'}
              className="text-zinc-50"
            >
              <FaWhatsapp className="mr-1 w-5 h-5" />
              Contact us
            </Link>
          </Button>
          <Button
            asChild
            variant={'dark'}
          >
            <Link
              href={'https://linktr.ee/fixfinity'}
              target="_blank"
            >
              <RiInformationFill className="mr-1 w-5 h-5" />
              For more information
            </Link>
          </Button>
        </div>
        <div className="mt-16 flex items-center justify-center px-5 sm:px-0">
          <Image
            src="/fixfinity-logo.png"
            width={200}
            height={200}
            alt="Form Builder"
            unoptimized
            priority
          />
        </div>
      </div>
    </section>
  );
}
