import React from 'react';
import CTAButton from '../molecules/CTAButton';

function ContactUsSection() {
  return (
    <article className="flex flex-col lg:flex-row gap-7">
      <div className="flex flex-col gap-4 lg:gap-7 md:px-[52px]">
        <h2 className="title">¿Eres un empresa o interesado en ser voluntario?</h2>
        <p className="base -mt-2 lg:-mt-4">
          Prevenci&oacute;n de la sobrepoblaci&oacute;n de animales, que es una de las
          principales causas de abandono y sufrimiento.
        </p>
        <div className="flex gap-2 sm:gap-4">
          <CTAButton href="#">Cont&aacute;ctanos</CTAButton>
          <CTAButton variant="secondary" href="#">
            con&oacute;cenos
          </CTAButton>
        </div>
      </div>
      <div className="md:max-lg:px-[52px]">
        <div
          id="ContactUsSection_image"
          className="w-full h-[304px] md:w-full md:h-[404px] lg:w-[487px] lg:h-[474px] flex-shrink-0 bg-gray-200 rounded-md"
        />
      </div>
    </article>
  );
}

export default ContactUsSection;
