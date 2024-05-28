import ContactForm from '@/components/organisms/ContactFrom';

async function page() {
  return (
    <main className="main-layout flex-grow gap-y-20 mt-4">
      <h1 className="title">Sobre Nosotros</h1>
      <section className="flex justify-between gap-6">
        <div className="mx-auto h-full aspect-square hidden bg-gray-200 rounded-full md:inline-block"></div>
        <div className="max-w-lg">
          <h2 className="subtitle mb-5">Misión</h2>
          <p>
            Nuestra misión es fortalecer digitalmente a los refugios de C&uacute;cuta NT,
            mejorando su visibilidad y gestión a través de herramientas tecnológicas.
            Buscamos facilitar la interacción con donantes y voluntarios, apoyando así la
            labor de cuidado y protección animal.
          </p>
        </div>
      </section>
      <section className="flex justify-between gap-6">
        <div className="max-w-lg">
          <h2 className="subtitle mb-5">Vision</h2>
          <p>
            En los próximos cinco años, aspiramos a convertirnos en el principal
            facilitador de aportaciones y apoyo para los refugios de animales en
            C&uacute;cuta NT y más all&aacute;. Queremos ser reconocidos por nuestra
            capacidad para canalizar recursos y donaciones hacia estos refugios,
            asegurando que más de 500 mascotas no solo tengan una vida digna, sino también
            prosperen en entornos seguros y amorosos.
          </p>
        </div>
        <div className="mx-auto h-full aspect-square hidden bg-gray-200 rounded-full md:inline-block"></div>
      </section>
      <section className="justify-self-center ">
        <h2 className="subtitle mb-5 md:text-center">Nos apoyan</h2>
        <div className="flex md:max-w-2xl overflow-hidden gap-12">
          <ul className="flex gap-12 animate-infinite-scroll">
            {Array.from({ length: 7 }, (_, i) => (
              <li
                key={i}
                className="h-20 aspect-square bg-gray-200 rounded-full font-bold text-gray-400 text-xs flex items-center justify-center"
              >
                Empresa
              </li>
            ))}
          </ul>
          <ul aria-hidden={true} className="flex gap-12 animate-infinite-scroll">
            {Array.from({ length: 7 }, (_, i) => (
              <li
                key={i}
                className="h-20 aspect-square bg-gray-200 rounded-full font-bold text-gray-400 text-xs flex items-center justify-center"
              >
                Empresa
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="md:justify-self-center">
        <h2 className="subtitle mb-5 md:text-center">Cont&aacute;ctanos</h2>
        <ContactForm />
      </section>
    </main>
  );
}

export default page;
