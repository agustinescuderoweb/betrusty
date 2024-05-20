import React from 'react'
import Image from 'next/image'
import imagen1 from '../../public/image/Rectangle 24.png'
import imagen2 from '../../public/image/Rectangle 25.png'
import imagen3 from '../../public/image/Rectangle 26.png'
import imagen4 from '../../public/image/Rectangle 28.png'

function galeria() {
  return (
    <div className='flex justify-between  w-[1242px] h-[422px] absolute right-20 top-40 p-5 bg-blue-950'>
    <div className='m-1'><Image src={imagen1}></Image></div>
    <div className='grid grid-cols-2 gap-2 p-[5px]'>
        <div><Image src={imagen2}></Image></div>
        <div className='w-[291px] h-[203px] flex justify-center text-white items-center border-2 border-black rounded-lg bg-blue-900 text-[16px] font-semibold'>Ver los detalles de las habitaciones</div>
        <div><Image src={imagen4}></Image></div>
        <div><Image src={imagen3}></Image></div>
    </div>
    </div>
  )
}

export default galeria