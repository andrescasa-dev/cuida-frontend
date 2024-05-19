import { title } from 'process';
import CTAButton from '../molecules/CTAButton';
import PetBubble from '../ui/PetBubble';

function HelpingMethods() {
  const methods = [
    { title: 'metodo ayuda 1', cta: 'seguir', img: '', important: false },
    { title: 'metodo ayuda 2', cta: 'seguir', img: '', important: true },
    { title: 'metodo ayuda 3', cta: 'seguir', img: '', important: false },
  ];
  return (
    <section
      id="helpingMethods"
      className="my-32 md:mt-16 md:mb-20 min-h-dvh justify-self-center justify-center flex flex-col gap-7 md:gap-10 relative"
    >
      <h2 className="title text-center"> S&eacute; parte y transforma vidas</h2>
      <ul className="flex flex-col gap-3 lg:gap-5 md:flex-row">
        {methods.map((method) => (
          <CardItem key={title} {...method} />
        ))}
      </ul>
      <PetBubble
        pet="dog2"
        color="violet"
        className="absolute max-md:top-[16%] max-md:left-[-20%] md:max-lg:top-[34%] md:max-lg:left-[-8%] lg:top-[25%] lg:left-[-15%]"
      />
      <PetBubble
        pet="dog2"
        color="green"
        className="absolute max-md:top-[4%] max-md:right-[-10%] md:max-lg:top-[17%] md:max-lg:left-[3%] lg:top-[7%] lg:left-[10%]"
      />
      <PetBubble
        pet="dog2"
        color="yellow"
        className="absolute max-md:top-[29%] max-md:right-[-15%]  md:max-lg:top-[13%] md:max-lg:left-[40%] lg:top-[7%] lg:right-[9%]"
      />
      <PetBubble
        pet="dog2"
        color="blue"
        className="absolute max-md:top-[39%] max-md:left-[-15%] md:max-lg:top-[15%] md:max-lg:right-[12%] lg:top-[20%] lg:right-[-15%]"
      />
      <PetBubble
        pet="dog2"
        color="green"
        className="absolute max-md:top-[59%] max-md:right-[-8%] md:max-lg:bottom-[20%] md:max-lg:left-[10%] lg:bottom-[20%] lg:right-[-11%]"
      />
      <PetBubble
        pet="dog2"
        color="blue"
        className="absolute max-md:top-[70%] max-md:left-[-12%] md:max-lg:bottom-[20%] md:max-lg:right-[8%] lg:bottom-[14%] lg:left-[-13%]"
      />
      <PetBubble
        pet="dog2"
        color="violet"
        className="absolute max-md:top-[89%] max-md:right-[-16%] md:max-lg:bottom-[17%] md:max-lg:left-[51%] lg:bottom-[-1%] lg:left-[24%]"
      />
      <PetBubble
        pet="dog2"
        color="yellow"
        className="absolute max-md:top-[99%] md:max-lg:top-[30%] md:max-lg:right-[-7%] max-md:left-[-9%] lg:bottom-[-1%] lg:right-[12%]"
      />
    </section>
  );
}

function CardItem({
  title,
  cta,
  important,
}: {
  title: string;
  cta: string;
  important: true | false;
}) {
  return (
    <li className=" flex flex-col gap-4 lg:gap-6 rounded-[1.5rem] px-8 py-6 lg:px-12  items-center border border-[hsl(var(--border))]">
      <h3 className="emphasis capitalize">{title}</h3>
      <div
        id="card_image"
        className="w-[162px] h-[115px] lg:w-[195px] lg:h-[195px] bg-gray-300 rounded-md"
      />
      <CTAButton
        variant={!important ? 'secondary' : undefined}
        className="w-full max-w-none"
        href="/oportunidades"
      >
        {cta}
      </CTAButton>
    </li>
  );
}

export default HelpingMethods;
