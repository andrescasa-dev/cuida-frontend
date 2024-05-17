import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';
import HamburgerMenu from '../organisms/HamburgerMenu';

export const pages = [
  { label: 'Oportunidades', href: '/', id: crypto.randomUUID() },
  { label: 'Refugios', href: '/', id: crypto.randomUUID() },
  { label: 'Animales', href: '/', id: crypto.randomUUID() },
  { label: 'Nosotros', href: '/', id: crypto.randomUUID() },
];

function Header() {
  return (
    <nav className="flex justify-between items-centers py-4 relative">
      <a
        className="py-4 px-6 rounded-md absolute -left-full focus:left-0 bg-background transition-all"
        href="#main"
      >
        Ir al contenido principal
      </a>
      <Link href={'/'} className="flex gap-2 items-center py-2 rounded-md">
        <div className="w-8 h-8 bg-amber-900 rounded-sm" id="logo" />
        Cuida
      </Link>
      <ul className="hidden md:flex lg:gap-11 md:gap-8">
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
