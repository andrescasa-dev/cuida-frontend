import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';
import HamburgerMenu from '../organisms/HamburgerMenu';

export const pages = [
  { label: 'Oportunidades', href: '/oportunidades', id: crypto.randomUUID() },
  { label: 'Refugios', href: '/refugios', id: crypto.randomUUID() },
  { label: 'Mascotas', href: '/mascotas', id: crypto.randomUUID() },
  { label: 'Nosotros', href: '/', id: crypto.randomUUID() },
];

function Header() {
  return (
    <header className="main-layout">
      <nav className="flex justify-between items-centers pt-2 relative">
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
    </header>
  );
}

export default Header;
