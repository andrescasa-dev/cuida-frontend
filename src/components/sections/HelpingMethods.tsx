import { title } from 'process';
import CTAButton from '../molecules/CTAButton';

function HelpingMethods() {
  const methods = [
    { title: 'metodo ayuda 1', cta: 'seguir', img: '' },
    { title: 'metodo ayuda 2', cta: 'seguir', img: '' },
    { title: 'metodo ayuda 3', cta: 'seguir', img: '' },
  ];
  return (
    <section className="mt-28 min-h-dvh self-center justify-self-center flex flex-col gap-7 md:gap-10">
      <h2 className="title text-center"> S&eacute; parte y transforma vidas</h2>
      <ul className="flex flex-col gap-3 lg:gap-5 md:flex-row">
        {methods.map((method) => (
          <CardItem key={title} {...method} />
        ))}
      </ul>
    </section>
  );
}

function CardItem({ title, cta }: { title: string; cta: string }) {
  return (
    <li className="flex flex-col gap-4 lg:gap-6 rounded-[1.5rem] px-8 py-6 items-center border border-[hsl(var(--border))]">
      <h3 className="emphasis capitalize">{title}</h3>
      <div
        id="card_image"
        className="w-[162px] h-[115px] lg:w-[195px] lg:h-[195px] bg-gray-300 rounded-md"
      />
      <CTAButton className="w-full max-w-none" href="/oportunidades">
        {cta}
      </CTAButton>
    </li>
  );
}

export default HelpingMethods;
