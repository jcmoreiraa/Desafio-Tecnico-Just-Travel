import React from 'react'
import Image from 'next/image';

interface AmenitiesProps {
        rating: {
    reviewsCount: number;
    value: number;
  };
}
export default function AmenitiesList({ rating }: AmenitiesProps) {

  const path = '/icons/ticket/'

  return (
    <div className='flex flex-col gap-6 '>
      <div className='flex items-center gap-2 '>
            <div className='bg-[#4070F4] rounded-[2px] text-white p-2 text-sm'>
              {rating.value}
            </div>
            <p className='text-[#0A2156] text-sm font-bold'>Excellent</p>
            <p className='text-[#9EA5B8] text-sm'>({rating.reviewsCount} reviews)</p>
          </div>


      <div className='flex gap-2 text-[#9EA5B8]'>
          <Image
        src={`${path}flight.svg`}
        alt="flight icon"
        width={18}
        height={18}
        
      />    
      <p> Passagem  Aérea</p>

      <Image
        src={`${path}wifi.svg`}
        alt="wifi Icon"
        width={18}
        height={18}
      />
      <p> Wi-fi</p>
        <Image
            src={`${path}breakfast.svg`}
            alt="breakfast Icon"
            width={18}
            height={18}
          />
          <p> Café da manhã</p>
          <Image
            src={`/icons/filters/house.svg`}
            alt="house Icon"
            width={18}
            height={18}
          />
          <p> Quarto</p>
        </div>

    </div>
  )
}