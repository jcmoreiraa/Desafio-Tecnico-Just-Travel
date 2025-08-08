'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const rates = [
    { value: 5, qnt:'134' },
    { value: 4, qnt:'134' }, 
    { value: 3, qnt:'72' },
    { value: 2, qnt:'75' },
    { value: 1, qnt:'07'}
];

export default function TypeProperty() {
    const [selectedRates, setSelectedRates] = useState<number[]>([]);

    const toggleRateSelection = (value: number) => {
        setSelectedRates(prev =>
            prev.includes(value)
                ? prev.filter(v => v !== value)
                : [...prev, value]
        );
    };

    return (
        <div className='flex flex-col gap-2 '>
            <p className='text-sm font-bold'>Tipo de propriedade</p>
            <div className='flex flex-wrap gap-2'>
                {rates.map((rate) => (
                    <button
                        key={rate.value}
                        onClick={() => toggleRateSelection(rate.value)}
                        className={`p-1 border text-sm rounded-[2px] flex items-center justify-center gap-2
                            ${selectedRates.includes(rate.value)
                                ? 'bg-blue-500 text-white border-blue-500'
                                : 'bg-white text-[#CED2DB] border-[#CED2DB] hover:bg-gray-50'
                            }`}
                    >   <div className='flex'>
                        {Array.from({length: rate.value}).map((_, i) => (
                            <Image 
                                key={i}
                                src="/star.svg" 
                                alt="Star" 
                                width={24} 
                                height={24}
                            />
                        ))}
                        </div>
                        <span>({rate.qnt})</span>
                    </button>
                ))}
            </div>
        </div>
    );
}