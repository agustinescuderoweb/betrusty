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
    <div  className='flex justify-between w-[1220px] h-20 absolute left-[180px] top-[90px] p-5 bg-blue-950'>
    <div>
        <div className='flex font-roboto font-bold text-2xl text-white'>Frank Apart</div>
        </div>
        <div className='flex flex-row w-28 gap-5'>
        <div><Image src={like}></Image></div>
        <div><Image src={share}></Image></div>
        </div>
        </div>
        <Galeria />
        <Button />
    <Menu />
    </main>
  );
}
