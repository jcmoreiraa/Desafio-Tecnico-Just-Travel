'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Property() {
  const [selectedProperties, setSelectedProperties] = useState<string[]>([]);

  const property = [
    { value: 'Casa', src: '/icons/filters/house.svg', qnt: '346' },
    { value: 'Apartamento', src: '/icons/filters/apartment.svg', qnt: '234' },
    { value: 'Hotel', src: '/icons/filters/hotel.svg', qnt: '23' }
  ];

  const togglePropertySelection = (value: string) => {
    setSelectedProperties(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-md">Tipo de propriedade</h2>
      
      <div className="flex flex-col gap-2 max-w-[90%]">
        {property.map((item) => (
          <button
            key={item.value}
            onClick={() => togglePropertySelection(item.value)}
            className={`
              flex items-center gap-2 w-full p-2 text-sm rounded-[2px] border
              ${
                selectedProperties.includes(item.value)
                  ? 'text-[#4070F4] border-[#4070F4]'
                  : 'bg-white text-[#CED2DB] border-[#CED2DB] hover:bg-gray-50'
              }
            `}
          >
            <Image
              src={item.src}
              alt={item.value}
              width={18}
              height={18}
              className="text-blue"
            />
            {item.value}
            <span className={`
              text-xs
              ${selectedProperties.includes(item.value) ? '' : 'text-[#CED2DB]'}
            `}>
              ({item.qnt})
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}