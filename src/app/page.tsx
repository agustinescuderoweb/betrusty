import Header from '@/componentes/header';
import Menu from '@/componentes/menu';
import like from '../../public/Like.png';
import share from '../../public/Share.png';
import Image from 'next/image';
import Galeria from '@/componentes/galeria';
import Button from '@/componentes/button';



export default function Home() {
  return (
   <main className='bg-blue-950'>
    <Header />
    <div  className='flex justify-between w-[360px] h-[85px] absolute left-0 top-[75px] p-5 bg-blue-950 sm:left-[180px] sm:w-[1220px]'>
    <div>
        <div className='flex font-roboto font-bold text-2xl text-white'>Frank Apart</div>
        </div>
        <div className='flex flex-row w-[100px] h-[45px] gap-[10px]'>
        <div><Image src={like} width={45} height={45}></Image></div>
        <div><Image src={share} width={45} height={45}></Image></div>
        </div>
        </div>
        <Galeria />
        <Button />
    <Menu />
    </main>
  );
}
