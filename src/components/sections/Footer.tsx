import React from 'react';
import Icon from '../ui/Icon';

function Footer() {
  /*todo: has to be a global const*/
  const { email, contactPhone } = {
    email: 'info@cuida.org',
    contactPhone: '+123-456-789.',
  };

  return (
    <footer className="main-layout brake-main-layout main-layout mt-28 bg-muted ">
      <div className="grid items-center gap-y-4 grid-cols-3 py-12">
        <div className="flex gap-4 max-md:col-span-2">
          {/* Todo: this is another component */}
          <div id="logo" className="w-[46px] h-[42px] bg-amber-900 rounded-sm" />
          <address className="flex flex-col  emphasis text-nowrap">
            <p aria-label="correo electrónico">{email}</p>
            <p aria-label="teléfono de contacto">{contactPhone}</p>
          </address>
        </div>
        <ul className="flex flex-col xs:flex-row gap-2 justify-self-end">
          <li>
            <a href="/">
              <Icon aria-hidden={false} aria-label="Instagram" name="instagram" />
            </a>
          </li>
          <li>
            <a href="/">
              <Icon aria-hidden={false} aria-label="Facebook" name="facebook" />
            </a>
          </li>
          <li>
            <a href="/">
              <Icon aria-hidden={false} aria-label="Whatsapp" name="whatsapp" />
            </a>
          </li>
        </ul>
        <div className="flex gap-2 items-center justify-self-center col-start-1 col-end-[-1] md:col-span-1 md:row-start-1 md:col-start-2">
          <Icon aria-hidden={true} name="copyRight" />
          <p className="base opacity-50">Copyright</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
