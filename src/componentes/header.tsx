import React from 'react';
import Image from 'next/image';
import logo from '../../public/Logo.png';
import elon from '../../public/Avatar.png';

function header() {
  return (
    <header>
    <div className="flex justify-between w-[360px] h-[75px] absolute left-0 bg-black px-[25px] py-[20px] sm:left-[85px] sm:w-[1355px]">
        <div className="flex justify-between text-center">
            <Image src={logo} alt="Logo" width={127.74} height={35} />
        </div>
        <div className="flex justify-center">
            <Image src={elon} alt="imagenelon" width={45} height={45} />    
        </div>

    </div>
    </header>
  )
}

export default header