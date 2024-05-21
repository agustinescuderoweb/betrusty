'use client'
import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imagen1 from '../../public/image/Rectangle 24.png';
import imagen2 from '../../public/image/Rectangle 25.png';
import imagen3 from '../../public/image/Rectangle 26.png';
import imagen4 from '../../public/image/Rectangle 28.png';

function Galeria() {
  return (
    <div className='flex justify-between w-[360px] h-[208px] absolute left-0 top-[160px] bg-blue-950 sm:left-[180px] sm:w-[1242px]'>
      <div className='hidden sm:flex justify-between w-full h-full sm:left-[180px] sm:w-[1242px]'>
        <div className='m-1'><Image src={imagen1} alt="Imagen 1" /></div>
        <div className='grid grid-cols-2 gap-2'>
          <div><Image src={imagen2} alt="Imagen 2" /></div>
          <div className='w-[291px] h-[203px] flex justify-center text-white items-center border-2 border-black rounded-lg bg-blue-900 text-[16px] font-semibold'>Ver los detalles de las habitaciones</div>
          <div><Image src={imagen4} alt="Imagen 4" /></div>
          <div><Image src={imagen3} alt="Imagen 3" /></div>
        </div>
      </div>
      <div className='flex sm:hidden justify-center'>
        <Carousel>
          <div><Image src={imagen1} width={500}  alt="Imagen 1" /></div>
          <div><Image src={imagen2} width={500} alt="Imagen 2" /></div>
          <div><Image src={imagen3} width={500} alt="Imagen 3" /></div>
          <div><Image src={imagen4} width={500} alt="Imagen 4" /></div>
        </Carousel>
      </div>
    </div>
  );
}

export default Galeria;
