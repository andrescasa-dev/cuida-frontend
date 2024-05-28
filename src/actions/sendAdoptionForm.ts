'use server';
export default async function sendAdoptionForm(
  formData: FormData,
  whatsApp: string,
  petName: string,
) {
  const name = formData.get('name');
  const age = formData.get('age');
  const hasChildren = formData.get('hasChildren') === 'true';
  const hasTime = formData.get('hasTime') === 'true';
  const hasYard = formData.get('hasYard') === 'true';
  const hasExperience = formData.get('hasExperience') === 'true';
  const hasPatience = formData.get('hasPatience') === 'true';

  const whatsAppLink = `https://api.whatsapp.com/send?phone=+57${whatsApp}&text=Hola%2C%20estoy%20interesado%20en%20adoptar%20a%20${petName}.%20Quiero%20saber%20m%C3%A1s%20sobre%20el%20proceso.%0A%0ASoy%20${name}%20-%20${age}%20a%C3%B1os%0A-%20${hasChildren ? '' : '%20No'}%20Hay%20ni%C3%B1os%20en%20mi%20hogar%20👶%0A-%20${hasTime ? '' : '%20No'}%20Tengo%20disponibilidad%20horaria%20⏰%0A-%20${hasYard ? '' : '%20No'}%20Tengo%20patio%20🏠%0A-%20${hasExperience ? '' : '%20No'}%20Tengo%20o%20he%20tenido%20mascotas%20antes%20🐕%0A-%20${hasPatience ? '' : '%20No'}%20Estoy%20abierto%20a%20adoptar%20un%20perro%20con%20necesidades%20especiales%20⚕️`;
}
