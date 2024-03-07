import Link from 'next/link';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center justify-between gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
      <p className="text-xs text-foreground">
        &copy; FixFinity 2024. All right reserved.
      </p>
      <nav className="flex gap-5">
        <Link
          target="_blank"
          href={'https://linktr.ee/fixfinity'}
        >
          <SiLinktree size={20} />
        </Link>
        <Link
          target="_blank"
          href={'https://wa.me/6281364664824/'}
        >
          <FaWhatsapp size={20} />
        </Link>
        <Link
          target="_blank"
          href={'https://www.instagram.com/fixfinity/'}
        >
          <FaInstagram size={20} />
        </Link>
        <Link
          target="_blank"
          href={'https://www.tiktok.com/@fixfinity'}
        >
          <FaTiktok size={20} />
        </Link>
      </nav>
    </footer>
  );
}
