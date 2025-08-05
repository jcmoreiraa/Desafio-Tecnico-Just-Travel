'use client';
import React,  { useState } from 'react'
import Image from 'next/image';



export default function Property() {
    
const [selectedProperties, setSelectedProperties] = useState<string[]>([]);

const property = [
    {value:' Casa', src:'/home.svg', qnt:'346'},
    {value:' Apartamento', src:'/apartamento.svg', qnt:'234'},
    {value:' Hotel', src:'/hotel.svg', qnt:'23'}
]
const togglePropertySelection = (value: string) => {
    setSelectedProperties(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='font-bold text-md'>Propriedade</h2>
      <div className='flex flex-col gap-2 max-w-[319px]'>     
        {property.map((item) => (
            <div className='flex items-center gap-2 ' key={item.value}>
            <button key={item.value}
             className={`gap-2 flex items-center border border-[1px] w-full p-2 text-sm rounded-[2px] ${selectedProperties.includes(item.value)
                ? ' text-[#4070F4] border-[#4070F4]' : 'bg-white text-[#CED2DB] border-[#CED2DB] hover:bg-gray-50'}}`} 
            onClick={() => togglePropertySelection(item.value)}>
              <Image  src={item.src} 
              alt={item.value}
               width={18} 
               height={18}/>
              {item.value}
              <span className={`text-xs  ${selectedProperties.includes(item.value)
                ? ' text-red ' : ' text-[#CED2DB]  '}`} >({item.qnt})</span>
            </button>
            </div>

        ))}
      </div>
    </div>
  )
}
