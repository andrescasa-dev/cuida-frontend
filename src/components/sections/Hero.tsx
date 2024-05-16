import { Button } from '@/components/ui/button';

export default function Hero() {
  const socialProof = [
    { label: 'Personas Aportando', statistic: '140+' },
    { label: 'Personas Aportando', statistic: '140+' },
    { label: 'Personas Aportando', statistic: '140+' },
    { label: 'Personas Aportando', statistic: '140+' },
  ];
  return (
    <>
      <h1 className="scroll-m-20 text-4xl lg:text-7xl font-bold tracking-tight">
        Transformando vidas animales
      </h1>
      {/*Usar el image component puede tener costos extra en producción */}
      <img src="hero_img.png" alt="" /> {/*asegurarse de que tiene el formato adecuado */}
      <Button>Descubre</Button>
      {socialProof.map(({ label, statistic }) => (
        <article className="p-4 bg-muted rounded-md" key={crypto.randomUUID()}>
          <p>{label}</p>
          <h2 className="text-3xl font-semibold">{statistic}</h2>
        </article>
      ))}
    </>
  );
}
