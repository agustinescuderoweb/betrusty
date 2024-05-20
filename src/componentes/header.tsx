import React from 'react';
import Image from 'next/image';
import logo from '../../public/Logo.png';
import elon from '../../public/Avatar.png';

function header() {
  return (
    <header>
    <div className="flex justify-between w-[1410px] h-[85px] absolute left-[85px] bg-black px-[20px] py-[25px]">
        <div className="flex justify-center text-center">
            <Image src={logo} alt="Logo" width={180} height={70} className="h-12 mx-7" />
        </div>
        <div className="flex justify-center">
            <Image src={elon} alt="imagenelon" width={70} height={70} className="h-12 w-12 rounded-full object-cover" />    
        </div>

    </div>
    </header>
  )
}

export default header