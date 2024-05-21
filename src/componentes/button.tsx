import React from 'react'
import Image from 'next/image'
import location from '../../public/local/Location.png'
import departamento from '../../public/local/Type property.png'
import bed from '../../public/local/bed.png'
import bath from '../../public/local/bathtub.png'
import wiffi from '../../public/local/wifi.png'
import estacionamiento from '../../public/local/car.png'
import elon from '../../public/Avatar.png'
import pencil from '../../public/Pencil.png'
 
function button() {
  return (
    <div>
      <div className='flex flex-col absolute top-[450px] w-[320px] h-[356px] left-[22px] sm:w-[320px] sm:h-[360px] sm:absolute sm:top-[622px] sm:left-[1080px] border-2 border-white rounded-lg text-center text-white'>
        <div className='py-[25px]'><h1>$60 USD por noche</h1>
        <p>Precio por habitación</p>
        <Image scr={pencil}></Image></div>

        <div className='border-t-2 border-white flex flex-row justify-center divide-x divide-white'><div className='p-[30px]'><h1>CHECK-IN</h1><p>dd/mm/aaaa</p></div><div className='p-[30px]'><h1>CHECK-OUT</h1><p>dd/mm/aaaa</p></div></div>

        <div className='border-y-2 border-white px-9 py-3'><h1>Cantidad de días: 0</h1></div>

        <div className='px-9 py-3'><h1>Deposito Reembolsable: $60 USD</h1></div>

        <div className='border-t-2 border-white px-9 py-3'><h1>Ingreso Total: $0 USD</h1></div></div>
        
        <div className='absolute top-[840px] left-[22px] w-[320px] h-[36px] sm:absolute sm:top-[1050px] sm:left-[1080px] border-2 border-white rounded-[10px] text-center py-1 bg-[#33EAFF]'><div><h1>Invitar Inquilino</h1></div></div>
     
      <div className='flex flex-col absolute top-[920px] left-[22px] sm:w-[1245px] sm:h-[574px] sm:absolute sm:top-[622px] sm:left-[200px]'>
        <div className='sm:w-[372px] sm:h-[257px] sm:top-[3px]'>
          <div className='flex flex-row gap-2 text-white'><Image src={location}></Image>Av. San Martín 315, Mendoza, Argentina</div>
          <div className='flex flex-row absolute top-[47px] gap-2 text-white'><Image src={departamento}></Image>Departamento</div>
          <div className='flex flex-row absolute top-[92px] gap-2 text-white'><Image src={bed}></Image>3 hábitaciones</div>
          <div className='flex flex-row absolute top-[137px] gap-2 text-white'><Image src={bath}></Image>1 baño</div>
          <div className='flex flex-row absolute top-[182px] gap-2 text-white'><Image src={wiffi}></Image>WiFi</div>
          <div className='flex flex-row absolute top-[227px] gap-2 text-white'><Image src={estacionamiento}></Image>Estacionamiento gratuito</div>
        </div>
        <div className='w-[281px] h-[291px] absolute top-[350px] left-[9px] sm:w-[622px] sm:h-[179px] sm:absolute sm:top-[284px] text-white'><h1 className='text-[20px] font-semibold mb-2'>Descripción</h1>
          <p className='text-[16px] font-normal'>Este hermoso apartamento de 2 habitaciones se encuentra en el corazón de la ciudad, a solo unos pasos de los mejores restaurantes, tiendas y lugares de interés turístico. El apartamento es ideal para aquellos que buscan un espacio cómodo y acogedor en el que relajarse después de un largo día de trabajo o de turismo.</p>
          </div>
      </div>
      <div className='w-[256px] h-[80px] absolute top-[1600px] left-[30px] sm:absolute sm:top-[1120px] sm:left-[200px] text-white'><h1 className='text-[20px] font-bold'>Propietario</h1>
      <div className='flex flex-row text-center text-white mb-[100px]'><Image src={elon} alt="imagenelon" width={70} height={70} className="h-12 w-12 rounded-full object-cover mb-[100px]"></Image><h1 className='absolute top-[41.5px] left-[60px] font-bold'>Elon Musk</h1></div></div>
      
       </div>
  )
}

export default button