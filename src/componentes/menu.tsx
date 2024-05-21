import React from 'react'
import home from '../../public/Home.png';
import vector from '../../public/Vector.png';
import acelerometro from '../../public/acelerometro.png';
import qr from '../../public/qr.png';
import llave from '../../public/llave.png';
import campana from '../../public/campana.png';
import rueda from '../../public/rueda.png';
import Image from 'next/image';
import menus from '../../public/Menu.png';

function Menu() {
  return (
    <div className='flex md:flex-col md:h-[1220px] m-0'>
        <div className='flex fixed bottom-0 left-0 right-0 flex flex-row justify-between bg-black items-center md:flex-col md:items-center md:gap-[20px] md:w-[90px] md:h-[1220px] md:py-[40px]'>
          <div className='flex items-center m-5 md:mt-[250px] md:mb-[50px] hidden sm:block'><Image src={menus}></Image></div>
          <div className='flex items-center m-5'><Image src={home}></Image></div>
          <div className='flex items-center m-5 hidden sm:block'><Image src={vector}></Image></div>
          <div className='flex items-center m-5'><Image src={acelerometro}></Image></div>
          <div className='flex items-center m-5'><Image src={qr}></Image></div>
          <div className='flex items-center m-5 hidden sm:block'><Image src={llave}></Image></div>
          <div className='flex items-center m-5'><Image src={campana}></Image></div>
          <div className='flex items-center md:mt-[200px] hidden sm:block'><Image src={rueda}></Image></div>
        </div>
        </div>
  );
}

export default Menu;
