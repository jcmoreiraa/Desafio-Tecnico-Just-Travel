import React from 'react';

export default function Convenience() {
  
  const conveniences = [
    { id: 'wifi', label: 'Wi-Fi' },
    { id: 'kitchen', label: 'Cozinha' },
    { id: 'washing-machine', label: 'Máquina de Lavar' },
    { id: 'air-conditioning', label: 'Ar-condicionado' },
    { id: 'dryer', label: 'Secadora' },
  ];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-bold">Comodidades</p>
      
      <div className="space-y-3">
        {conveniences.map((item) => (
          <div key={item.id} className="flex items-center gap-2 ">
            <input
              type="checkbox"
              id={item.id}
              className="w-[20px] h-[20px] cursor-pointer"
            />
            <label className="text-[14px]">
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}