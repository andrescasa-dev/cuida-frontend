import CTAButton from '../molecules/CTAButton';
import Icon from '../ui/Icon';

//className="absolute bottom-0 left-0 right-0 mx-auto"
//.splice(2, 0, );

export default function Hero() {
  const socialProof = [
    { label: 'Personas Aportando', statistic: '140+' },
    { label: 'Personas Aportando', statistic: '140+' },
    { label: 'Personas Aportando', statistic: '140+' },
    { label: 'Personas Aportando', statistic: '140+' },
  ];
  const perks = socialProof.map(({ label, statistic }) => (
    <li
      className="sm:p-4 p-3 bg-muted rounded-md max-w-fit h-fit"
      key={crypto.randomUUID()}
    >
      <p className="text-[0.68rem] sm:text-base font-medium text-[rgb(123,107,91)]">
        {label}
      </p>
      <h2 className="text-[rgb(123,107,91)] text-xl sm:text-3xl font-semibold">
        {statistic}
      </h2>
    </li>
  ));

  return (
    <section className="mb-40 grid gap-y-6 md:gap-y-20 relative lg:mx-[86px] mt-10">
      <h1 className=" capitalizescroll-m-20 text-[2.5rem] max-w-[8ch] lg:text-7xl lg:leading-[1.18em] leading-[1.18em] font-bold ">
        Transforma vidas animales
      </h1>
      <CTAButton href="#helpingMethods">Descubre</CTAButton>
      <ul className="md:gap-5 md:[&>li:nth-child(3)]:ml-auto flex gap-2 overflow-scroll sm:overflow-hidden">
        {perks}
      </ul>
      {/*Usar el image component puede tener costos extra en producción */}
      {/* eslint-disable-next-line*/}
      <img
        className="md:absolute md:top-0 md:right-0 md:-z-10"
        src="hero_img.png"
        alt=""
      />
      {/*asegurarse de que tiene el formato adecuado */}
      <Icon
        aria-hidden={true}
        name="funnyArrow"
        className="absolute -bottom-14 lg:-bottom-0 lg:-translate-y-1/2 left-0 right-0 mx-auto"
      />
    </section>
  );
}
