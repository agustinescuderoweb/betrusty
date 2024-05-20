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


function menu() {
  return (
    <div className='flex h-[1220px] m-0'>
    <div className='flex flex-col items-center p-4 bg-black w-1/12 h-full'>
        <div className='flex flex-col justify-between'>
        <div className='flex items-center m-5'><Image src={menus}></Image></div>
        <div className='flex items-center m-5'><Image src={home}></Image></div>
        <div className='flex items-center m-5'><Image src={vector}></Image></div>
        <div className='flex items-center m-5'><Image src={acelerometro}></Image></div>
        <div className='flex items-center m-5'><Image src={qr}></Image></div>
        <div className='flex items-center m-5'><Image src={llave}></Image></div>
        <div className='flex items-center m-5'><Image src={campana}></Image></div>
        </div>
        <div className='flex mt-auto m-5'><Image src={rueda}></Image></div>
    </div>
    </div>
  )
}

export default menu