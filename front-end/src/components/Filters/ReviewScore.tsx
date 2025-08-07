import React from 'react';

export default function ReviewScore() {
  const ratings = [
    { score: 9, label: 'Excelente', count: 543 },
    { score: 8, label: 'Muito bom', count: 543 },
    { score: 7, label: 'Bom', count: 543 },
    { score: 6, label: 'Ruim', count: 543 },
    { score: 1, label: 'Péssimo', count: 14 }
  ];

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='font-bold text-md'>Review Score</h2>
    

      <div className='flex flex-col gap-3'>
        {ratings.map((rating, index) => (
          <div key={index} className='flex gap-3 cursor-pointer '>
            <div className='relative w-[189px] h-[30px] bg-[#D9D9D9]'>
              <div 
                className=' h-full bg-[#FFAD0D]' 
                style={{ width: `${rating.score * 10}%` }}>
                </div>
              {rating.score > 1 && (
                <p className='absolute p-2 top-1/2 transform -translate-y-1/2 text-xs font-medium text-white'>
                  {rating.score}+
                </p>
              )}
            </div>
            
            <div className='flex items-center gap-1 text-[#556282]'>
              <p className='text-sm'>{rating.label}</p>
              <p className='text-xs '>({rating.count})</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}