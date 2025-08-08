import React from 'react';

interface LocationProps {
  location: string;
}

export default function Location({ location }: LocationProps) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;

  return (
    <div className='space-y-3 mt-6'>
      <h2 className='font-bold text-xl text-[#0A2156]'>Localização</h2>
      <div className='shadow-full '>
        <iframe
          title={`Mapa de ${location}`}
          src={mapSrc}
          width='100%'
          height='340'
          style={{ border: 0 }}
          allowFullScreen
          loading='lazy'
        ></iframe>
      </div>
    </div>
  );
}