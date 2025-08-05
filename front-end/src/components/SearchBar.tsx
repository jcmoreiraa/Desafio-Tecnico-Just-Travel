import React from 'react'
import Image from 'next/image'

export default function SearchBar() {
  return (
    <div className="flex border border-[#E7E9ED]  pl-1 w-full rounded-md">
      <div className='flex items-center justify-between w-full '>
        <div className='flex items-center gap-2'>
          <button className="ml-2">
            <Image src="/gps.svg" alt="GPS Icon" 
            width={24}
            height={24}/>
          </button>
          <input
            type="text"
            placeholder="Busque por atração"
            className="outline-none border-none w-full"
          />
        </div>
        
        <div className='border-x border-[#E7E9ED] w-[48px] h-[48px] flex items-center justify-center ml-2'>
          <Image
            src="/lupa.svg"
            alt="Lupa de pesquisa"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  )
}