import React from 'react'

interface DescriptionProps {
  description: string;
}

export default function Description({ description }: DescriptionProps) {
  return (
    <div className='space-y-2 mt-6 max-w-[95%]'>
        <h2 className='text-xl font-bold text-[#0A2156] '>Sobre o ingresso selecionado:</h2>
        <p className='text-[#9EA5B8] text-md'>{description}</p>
    </div>
  )
}
