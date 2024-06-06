import React from 'react';
import SRPause from '../ui/SRPause';

function ShelterServices() {
  const services = [
    {
      title: 'Campaña de esterilización',
      description:
        'Prevención de la sobrepoblación animal una de las principales causas de abandono y sufrimiento.',
      image: '',
    },
    {
      title: 'Hogar de paso y recuperación',
      description:
        'Promoviendo el bienestar de mascotas rescatadas y su integración a familias amorosas',
      image: '',
    },
    {
      title: 'Rescate y eventos',
      description:
        'Salvando vidas animales en condición de calle y promoviendo una cultura de cuidado animal',
      image: '',
    },
  ];

  return (
    <section className=" flex gap-20">
      <div
        id="imageOfServices"
        className="hidden lg:shrink-0 md:block bg-gray-300 rounded-md w-[487px] h-[474px] md:max-lg:h-full"
      />
      <div className="flex flex-col gap-7">
        <h2 className="title max-w-[20ch]">
          T&uacute; haces posible nuestra labor <SRPause />
        </h2>
        <ul className="flex flex-col gap-8">
          {services.map(({ title, description }) => (
            <li className="flex gap-4" key={title}>
              <div
                aria-hidden="true"
                className="rounded-full bg-gray-400 h-[55px] w-[55px] flex-shrink-0"
              />
              <div className="flex flex-col gap-0 flex-grow">
                <h3 className="subtitle ">{title}</h3>
                <p className="base opacity-80">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ShelterServices;
