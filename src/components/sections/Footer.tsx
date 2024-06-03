import React from 'react';
import { Separator } from '@/components/ui/separator';

import Icon from '../ui/Icon';
import LogoH from '../ui/icons/LogoH';
import { buttonVariants } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

function Footer() {
  /*todo: has to be a global const*/
  const { email, contactPhone } = {
    email: 'info@cuida.org',
    contactPhone: '+123-456-789.',
  };

  return (
    <footer className="brake-main-layout mt-28 bg-muted py-5 ">
      <div className="main-layout">
        <div className="max-sm:main-layout grid md:grid-cols-[auto_1fr_auto] md:gap-y-1 items-center justify-items-center">
          <div className="md:col-start-2 md:row-start-1">
            <LogoH />
          </div>
          <Separator className="my-5 opacity-25 sm:hidden " />
          <section
            aria-label="medios de contacto"
            className="flex flex-col gap-1 items-center md:row-span-2 md:justify-self-start md:items-start"
          >
            <ul className="flex  xs:flex-row gap-2 justify-self-end">
              <li>
                <a href="/">
                  <Icon aria-hidden={false} aria-label="Instagram" name="instagram" />
                </a>
              </li>
              <li>
                <a href="/">
                  <Icon aria-hidden={false} aria-label="FaceBook" name="facebook" />
                </a>
              </li>
              <li>
                <a href="/">
                  <Icon aria-hidden={false} aria-label="WhatsApp" name="whatsApp" />
                </a>
              </li>
            </ul>
            <Link
              className={cn(buttonVariants({ variant: 'link' }), '-mt-2 md:p-0')}
              href="/nosotros#contacto"
            >
              Envíanos un email
            </Link>
          </section>
          <Separator className="my-5 opacity-25 sm:hidden" />
          <address className="md:row-span-2 md:justify-self-end">
            <ul className="space-y-2">
              <li className="flex gap-1">
                <Icon name="email" />
                <p aria-label="correo electrónico">{email}</p>
              </li>
              <li className="flex gap-1">
                <Icon name="phone" className="fill-black" />
                <p aria-label="teléfono de contacto">{contactPhone}</p>
              </li>
            </ul>
          </address>
          <Separator className="my-5 opacity-25 sm:hidden" />
          <div className="flex gap-1 items-center md:col-start-2 md:row-start-2  opacity-40">
            <Icon aria-hidden={true} name="copyRight" className="fill-gray-800 size-4" />
            <p className="text-xs font-medium">2024 todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
