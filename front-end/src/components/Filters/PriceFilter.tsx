'use client';

import React, { useState } from 'react';

export default function PriceFilter() {
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);

  const priceRanges = [
    { label: 'R$10 - R$390', value: '0' },
    { label: 'R$10 - R$390', value: '1' },
    { label: 'R$10 - R$390', value: '2' },
    { label: 'R$10 - R$390', value: '3' }
  ];

  const togglePriceSelection = (value: string) => {
    setSelectedPrices(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="flex flex-col gap-4 max-w-[90%]">
      <p className="text-sm font-bold">Preço</p>
      
      <div className="grid grid-cols-2 gap-2">
        {priceRanges.map((price) => (
          <button
            key={price.value}
            onClick={() => togglePriceSelection(price.value)}
            className={`
              py-2 px-4 border text-sm rounded-[2px] transition-colors cursor-pointer
              ${
                selectedPrices.includes(price.value)
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-[#CED2DB] border-[#CED2DB] hover:bg-gray-50'
              }
            `}
          >
            {price.label}
          </button>
        ))}
      </div>
    </div>
  );
}