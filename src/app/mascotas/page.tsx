import CustomPagination from '@/components/molecules/CustomPagination';
import ModalAdoption from '@/components/organisms/ModalAdoption';

function page() {
  const pets = [
    {
      id: 1,
      name: 'milu',
      sex: 'hembra',
      ageString: 'Joven',
      size: 'mediana',
      story:
        'Milo es afectuosa y leal, siempre buscando afecto. Alegre y esperanzada, ilumina el refugio con su energía positiva. Lista para amar y ser amada en un hogar lleno de cariño.',
      personality: ['juguetona', 'cariñosa', 'protectora'],
      ailments: ['desnutrición', 'dermatitis', 'parasitos'],
      photo: {
        url: '/dog2-removebg-preview.png',
        alt: 'a dog',
      },
      shelter: {
        id: 1,
        contactNumber: 3166229648,
        logo: {
          url: '/La_Tropa_Gatuna_De_Yanet 1.png',
          alt: 'logo',
        },
      },
    },
    {
      id: 1,
      name: 'milu',
      sex: 'hembra',
      ageString: 'Joven',
      size: 'mediana',
      story:
        'Milo es afectuosa y leal, siempre buscando afecto. Alegre y esperanzada, ilumina el refugio con su energía positiva. Lista para amar y ser amada en un hogar lleno de cariño.',
      personality: ['juguetona', 'cariñosa', 'protectora'],
      ailments: ['desnutrición', 'dermatitis', 'parasitos'],
      photo: {
        url: '/dog2-removebg-preview.png',
        alt: 'a dog',
      },
      shelter: {
        id: 1,
        contactNumber: 3166229648,
        logo: {
          url: '/La_Tropa_Gatuna_De_Yanet 1.png',
          alt: 'logo',
        },
      },
    },
    {
      id: 1,
      name: 'milu',
      sex: 'hembra',
      ageString: 'Joven',
      size: 'mediana',
      story:
        'Milo es afectuosa y leal, siempre buscando afecto. Alegre y esperanzada, ilumina el refugio con su energía positiva. Lista para amar y ser amada en un hogar lleno de cariño.',
      personality: ['juguetona', 'cariñosa', 'protectora'],
      ailments: ['desnutrición', 'dermatitis', 'parasitos'],
      photo: {
        url: '/dog2-removebg-preview.png',
        alt: 'a dog',
      },
      shelter: {
        id: 1,
        contactNumber: 3166229648,
        logo: {
          url: '/La_Tropa_Gatuna_De_Yanet 1.png',
          alt: 'logo',
        },
      },
    },
    {
      id: 1,
      name: 'milu',
      sex: 'hembra',
      ageString: 'Joven',
      size: 'mediana',
      story:
        'Milo es afectuosa y leal, siempre buscando afecto. Alegre y esperanzada, ilumina el refugio con su energía positiva. Lista para amar y ser amada en un hogar lleno de cariño.',
      personality: ['juguetona', 'cariñosa', 'protectora'],
      ailments: ['desnutrición', 'dermatitis', 'parasitos'],
      photo: {
        url: '/dog2-removebg-preview.png',
        alt: 'a dog',
      },
      shelter: {
        id: 1,
        contactNumber: 3166229648,
        logo: {
          url: '/La_Tropa_Gatuna_De_Yanet 1.png',
          alt: 'logo',
        },
      },
    },
    {
      id: 1,
      name: 'milu',
      sex: 'hembra',
      ageString: 'Joven',
      size: 'mediana',
      story:
        'Milo es afectuosa y leal, siempre buscando afecto. Alegre y esperanzada, ilumina el refugio con su energía positiva. Lista para amar y ser amada en un hogar lleno de cariño.',
      personality: ['juguetona', 'cariñosa', 'protectora'],
      ailments: ['desnutrición', 'dermatitis', 'parasitos'],
      photo: {
        url: '/dog2-removebg-preview.png',
        alt: 'a dog',
      },
      shelter: {
        id: 1,
        contactNumber: 3166229648,
        logo: {
          url: '/La_Tropa_Gatuna_De_Yanet 1.png',
          alt: 'logo',
        },
      },
    },
  ];
  return (
    <main className="main-layout flex-grow gap-y-10 mt-4">
      <hgroup>
        <h1 className="title mb-[0.375rem]">Mascotas</h1>
        <p className="base">
          Conoce las mascotas, si gustas puedes solicitar adopción directamente con el
          refugio.
        </p>
      </hgroup>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 justify-center">
        {pets.map((pet) => (
          <ModalAdoption key={pet.id} pet={pet} />
        ))}
      </div>
      <CustomPagination />
    </main>
  );
}

export default page;
