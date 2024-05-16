import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';
import HamburgerMenu from '../organisms/HamburgerMenu';

function Header() {
  const pages = [
    { label: 'Oportunidades', href: '/', id: crypto.randomUUID() },
    { label: 'Refugios', href: '/', id: crypto.randomUUID() },
    { label: 'Animales', href: '/', id: crypto.randomUUID() },
    { label: 'Nosotros', href: '/', id: crypto.randomUUID() },
  ];

  return (
    <nav className="flex justify-between items-centers py-6">
      <Link href={'/'} className="flex gap-2 items-center px-4 py-2 rounded-md">
        <div className="w-8 h-8 bg-amber-900 rounded-sm" id="logo" />
        Cuida
      </Link>
      <ul className="hidden md:flex gap-5">
        {pages.map(({ href, id, label }) => (
          <li key={id}>
            <Link className={cn(buttonVariants({ variant: 'link' }))} href={href}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <HamburgerMenu />
    </nav>
  );
}

export default Header;
