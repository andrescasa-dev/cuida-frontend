import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import React from 'react';

const icons = {
  hamburger: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  ),
  chevronRight: <ChevronRight className="w-[65%] h-[65%]" />,
  funnyArrow: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="41"
      fill="none"
      viewBox="0 0 33 41"
    >
      <g clipPath="url(#clip0_619_4085)">
        <path
          fill="#000"
          d="M19.813 36.331c.164-.041.919-.718 1.674-1.519 1-1.046 1.348-1.56 1.205-1.826-.143-.308-.388-.144-1.143.78-1.246 1.539-1.47 1.19-.94-1.396.552-2.606 1.103-7.593 1.042-9.46-.062-1.991-.797-4.125-1.96-5.583-.98-1.272-1-1.293-.368-2.134.878-1.252 1.123-1.909 1.225-3.53.123-2.01-.612-4.515-1.633-5.54-.796-.801-.817-.945-.409-1.93.43-1.005.531-1.847.388-3.304-.081-.903-1.245-3.427-1.878-4.063-.551-.554-.53-.657.368-1.806 1.102-1.437 1.633-3.243 1.04-3.51-.305-.143-.469.062-.775 1.15-.225.718-.694 1.723-1.02 2.216-.593.841-.654.862-2.022.39-1.348-.452-3.839-.41-4.329.082-.122.123-.285.164-.388.062-.081-.083-1 .184-2.02.595-2.328.903-3.757 2.34-3.145 3.16.613.821 2.532.575 7.39-.944 1.471-.451 2.839-1.005 3.063-1.231.327-.329.531-.246 1.307.533C17.506-1.45 18.14.212 18.14 1.813c-.02 2.729-.347 3.263-1.633 2.667-2.246-1.067-5.962-.492-9.188 1.396-1.94 1.129-2.389 1.662-2.368 2.832-.02 1.457.53 1.806 2.735 1.847 2.92.02 7.085-1.54 8.861-3.325 1.103-1.108 1.123-1.128 1.736-.513.776.78 1.592 3.12 1.51 4.392-.081 1.806-.122 1.97-.591 2.812-.899 1.6-1.307 1.847-2.063 1.087-.857-.82-2.94-1.477-4.369-1.313-1.817.144-4.798 1.17-5.88 2.011-.837.636-1 .924-1.02 1.724-.021.554.142 1.17.367 1.396 1.674 1.682 7.636.861 10.596-1.458.51-.39 1.041-.718 1.205-.718.122 0 .694.616 1.225 1.355 1.02 1.436 1.51 3.16 1.592 5.746.041 1.642-.265 5.151-.51 5.397-.082.082-.143.431-.163.78-.062 1.785-.552 4.905-.797 4.905-.122 0-.55-.513-.898-1.15-.858-1.477-1.02-1.641-1.368-1.292-.163.164 0 .657.47 1.252.428.554 1.02 1.395 1.368 1.867.326.493.735.862.857.821zM6.685 17.225c.51-1.006 3.39-2.422 5.513-2.75 1.388-.205 3.389.246 4.491 1.067l.94.698-1.287.677c-2.797 1.54-7.268 2.504-8.595 1.909-.899-.41-1.348-1.068-1.062-1.601zM5.665 8.4c.04-.657.183-.841 1.245-1.498 2.96-1.785 7.88-2.709 9.473-1.765.551.308.51.39-.735 1.642-1.837 1.847-5.227 3.078-8.453 3.078-1.122-.02-1.572-.43-1.53-1.457zM5.44-1.84c.592-.596 3.96-2.053 5.308-2.258 2.144-.349 4.757-.061 4.247.452-.286.287-5.942 2.031-7.636 2.38-1.552.287-2.511.02-1.92-.574z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_619_4085">
          <path fill="#fff" d="M0 0H33V41H0z"></path>
        </clipPath>
      </defs>
    </svg>
  ),
  instagram: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 29 30"
    >
      <path
        fill="#797979"
        d="M15.962.777c1.6.005 2.412.013 3.113.033l.276.01c.319.011.633.026 1.013.043 1.513.07 2.546.31 3.451.661.94.361 1.73.85 2.52 1.64a6.981 6.981 0 011.64 2.52c.352.906.59 1.938.662 3.453.017.378.031.693.043 1.013l.008.276c.021.7.03 1.511.033 3.111l.001 1.061v1.864c.004 1.037-.007 2.074-.033 3.111l-.008.276c-.012.32-.026.635-.043 1.013-.07 1.515-.313 2.546-.663 3.453a6.946 6.946 0 01-1.64 2.52 6.99 6.99 0 01-2.52 1.64c-.905.351-1.938.59-3.451.662-.338.015-.675.03-1.013.042l-.276.009c-.701.02-1.513.03-3.113.032l-1.061.002h-1.862c-1.038.003-2.075-.008-3.113-.033l-.276-.009a87.724 87.724 0 01-1.013-.043c-1.513-.072-2.545-.31-3.453-.662a6.952 6.952 0 01-2.518-1.64 6.975 6.975 0 01-1.642-2.52c-.35-.906-.59-1.938-.661-3.453-.016-.337-.03-.675-.043-1.013l-.007-.276a112.416 112.416 0 01-.035-3.111v-2.925c-.004-1.037.006-2.074.031-3.111l.01-.276c.011-.32.026-.635.043-1.013.07-1.515.31-2.546.66-3.453a6.94 6.94 0 011.645-2.52 6.965 6.965 0 012.517-1.64c.908-.351 1.939-.59 3.453-.661C9.016.846 9.332.83 9.65.82l.276-.009C10.963.786 12.001.775 13.038.78l2.924-.002zM14.5 7.888a7.111 7.111 0 100 14.223 7.111 7.111 0 000-14.223zm0 2.845a4.267 4.267 0 11-.002 8.534 4.267 4.267 0 01.003-8.534m7.467-4.978a1.778 1.778 0 100 3.556 1.778 1.778 0 000-3.556z"
      ></path>
    </svg>
  ),
  facebook: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 29 30"
      fill="none"
    >
      <path
        fill="#797979"
        d="M28.722 15C28.722 7.149 22.35.777 14.5.777 6.649.777.277 7.15.277 15c0 6.883 4.893 12.615 11.378 13.937v-9.67H8.811V15h2.844v-3.556a4.983 4.983 0 014.978-4.978h3.556v4.267h-2.845c-.782 0-1.422.64-1.422 1.422V15h4.267v4.266h-4.267v9.885c7.182-.711 12.8-6.77 12.8-14.151z"
      ></path>
    </svg>
  ),
  whatsapp: (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 29 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5011 0.777344C22.356 0.777344 28.7233 7.14463 28.7233 14.9996C28.7233 22.8545 22.356 29.2218 14.5011 29.2218C11.9877 29.2258 9.51852 28.5607 7.34727 27.2947L0.284517 29.2218L2.20736 22.1562C0.940294 19.9843 0.27463 17.5141 0.278828 14.9996C0.278828 7.14463 6.64612 0.777344 14.5011 0.777344ZM9.65412 8.31512L9.36967 8.3265C9.18553 8.33771 9.00556 8.38609 8.84061 8.46872C8.68633 8.55609 8.54549 8.66531 8.42247 8.79299C8.25181 8.9537 8.1551 9.09308 8.05127 9.22819C7.52522 9.91214 7.24199 10.7518 7.2463 11.6147C7.24914 12.3116 7.43118 12.99 7.71563 13.6243C8.29732 14.9071 9.25447 16.2653 10.5174 17.524C10.8218 17.8269 11.1204 18.1313 11.4419 18.4143C13.0111 19.796 14.8811 20.7923 16.9032 21.3242L17.711 21.4479C17.9741 21.4621 18.2372 21.4422 18.5018 21.4294C18.916 21.4081 19.3204 21.2959 19.6865 21.1009C19.8727 21.005 20.0545 20.9006 20.2312 20.788C20.2312 20.788 20.2923 20.7482 20.409 20.66C20.601 20.5178 20.719 20.4168 20.8783 20.2504C20.9963 20.1281 21.0987 19.9845 21.177 19.8209C21.2879 19.5891 21.3988 19.1468 21.4443 18.7784C21.4785 18.4968 21.4685 18.3432 21.4643 18.2479C21.4586 18.0957 21.332 17.9379 21.194 17.871L20.3663 17.4998C20.3663 17.4998 19.129 16.9608 18.3723 16.6166C18.2932 16.5821 18.2083 16.5623 18.122 16.5583C18.0247 16.5483 17.9264 16.5593 17.8337 16.5904C17.7409 16.6216 17.656 16.6722 17.5844 16.7389C17.5773 16.7361 17.482 16.8172 16.4538 18.063C16.3947 18.1423 16.3134 18.2023 16.2202 18.2352C16.127 18.2681 16.0261 18.2726 15.9304 18.2479C15.8377 18.2231 15.747 18.1917 15.6587 18.1541C15.4824 18.0801 15.4212 18.0517 15.3003 18.0005C14.4841 17.6443 13.7283 17.163 13.0603 16.574C12.8811 16.4175 12.7147 16.2469 12.5441 16.0819C11.9846 15.546 11.4969 14.9398 11.0934 14.2785L11.0095 14.1434C10.9492 14.0526 10.9005 13.9547 10.8644 13.8518C10.8104 13.6428 10.9512 13.4749 10.9512 13.4749C10.9512 13.4749 11.2968 13.0966 11.4575 12.8918C11.6139 12.6927 11.7462 12.4993 11.8315 12.3613C11.9994 12.0911 12.052 11.8138 11.9638 11.599C11.5656 10.6262 11.1531 9.6577 10.7293 8.69628C10.6454 8.5057 10.3965 8.36917 10.1704 8.34214C10.0936 8.33361 10.0168 8.32508 9.93998 8.31939C9.74899 8.3099 9.5576 8.3118 9.36683 8.32508L9.65412 8.31512Z"
        fill="#797979"
      />
    </svg>
  ),
  copyRight: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        fill="#797979"
        d="M15 .777C7.29.777.778 7.291.778 15 .778 22.708 7.29 29.222 15 29.222S29.222 22.708 29.222 15C29.222 7.29 22.71.777 15 .777zm0 18.49c1.41 0 2.631-.378 3.261-1.008l2.011 2.013c-1.601 1.6-3.99 1.839-5.272 1.839A7.12 7.12 0 017.89 15 7.12 7.12 0 0115 7.888c1.282 0 3.672.24 5.272 1.84l-2.01 2.01c-.63-.63-1.85-1.005-3.262-1.005-2.313 0-4.267 1.954-4.267 4.267 0 2.312 1.954 4.266 4.267 4.266z"
      ></path>
    </svg>
  ),
};

type IconNames = keyof typeof icons;

type IconLabelHidden = {
  name: IconNames;
  className?: string;
  'aria-hidden': true;
  'aria-label'?: string;
};

type IconLabelReadeable = {
  name: IconNames;
  className?: string;
  'aria-hidden': false;
  'aria-label': string;
};

type Icon = IconLabelHidden | IconLabelReadeable;

function Icon({
  name,
  className,
  'aria-hidden': ariaHidden,
  'aria-label': ariaLabel,
}: Icon) {
  return (
    <span
      className={cn(
        'inline-flex items-center overflow-hidden w-[1.375rem] h-[1.375rem] md:w-8 md:h-8',
        className,
      )}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
    >
      {icons[name]}
    </span>
  );
}

export default Icon;
