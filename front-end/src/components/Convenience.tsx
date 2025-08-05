import React from 'react';

export default function Convenience() {
  return (
    <div className='flex flex-col gap-4'>
      <p className='text-sm font-bold'>Comodidades</p>

      <div className='space-y-3'>
        <div className='gap-2 flex items-center'>
          <input type="checkbox" className='w-[20px] h-[20px]'/>
          <label  className='text-[14px]'>Wi-Fi</label>
        </div>
        
        <div className='gap-2 flex items-center'>
          <input type="checkbox"  className='w-[20px] h-[20px]'/>
          <label  className='text-[14px]'>Cozinha</label>
        </div>
        
        <div className='gap-2 flex items-center'>
          <input type="checkbox"  className='w-[20px] h-[20px]'/>
          <label  className='text-[14px]'>Máquina de Lavar</label>
        </div>
        
        <div className='gap-2 flex items-center'>
          <input type="checkbox"  className='w-[20px] h-[20px]'/>
          <label className='text-[14px]'>Ar-condicionado</label>
        </div>
        
        <div className='gap-2 flex items-center'>
          <input type="checkbox"  className='w-[20px] h-[20px]'/>
          <label  className='text-[14px]'>Secadora</label>
        </div>
      </div>
    </div>
  );
}