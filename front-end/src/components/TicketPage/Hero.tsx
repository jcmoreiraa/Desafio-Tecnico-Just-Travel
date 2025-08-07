'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation'; 
import React from 'react'
interface HeroProps {
        name: string;
        location: string;
        image: string;
       
    };

export default function Hero({ name, location, image }: HeroProps) {
  const router = useRouter();

  return (
    <div>
        <div className='flex items-center gap-4'>
          <button onClick={() => router.push('/')}>
        <Image
        src={'/comeBack.svg'}
        alt="Left Arrow"
        width={24}
        height={24}
        className='mb-3 cursor-pointer'
        /> 
        </button> 
        <h1 className="text-2xl text-[#0A2156] font-bold">{name}</h1>
        </div>
        <div className='flex items-center pl-9  gap-2 '>
        <Image
        src={'/location.svg'}
        alt="Location"
        width={24}
        height={24}
        className=''
        /> 
        <p className="">{location}</p>

        </div>
        <div className='relative'>
        <Image
        src={image}
        alt={name}
        width={1320}
        height={434}
        className='mt-6 object-fit w-full h-[434px]'
        />
        <p className='absolute font-bold right-2 top-2 bg-white rounded-md px-6 py-4 text-[#4070F4] text-sm'> Visualizar mais fotos</p>
        </div>
    </div>
  )
}
