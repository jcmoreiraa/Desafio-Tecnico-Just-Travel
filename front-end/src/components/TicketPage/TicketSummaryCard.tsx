import React from 'react';
import HorizontalBar from '../HorizontalBar';
import Image from 'next/image';
import { useCartStore } from '../../store/cartStore';

interface TicketSummaryCardProps {
price: {
    full: number;
    discount: number;
  };
    image: string
    id: string
    name:string

}

export default function TicketSummaryCard({
  price, image, id, name
}: TicketSummaryCardProps) {
  const addToCart = useCartStore((state) => state.addItem);

const handleAddToCart = () => {
  addToCart({
    id: id,
    name: name,
    quantity: 1,
    price: price.discount,
    image: image
  });
};


  
  return (
    <div className="bg-white max-w-[25%] bg-black h-full w-full rounded-md  p-6 ">
      <div className="flex justify-between items-center ">
      <div className="mb-4 flex gap-4">
                <Image src="/calendar.svg" alt="Calendar" width={24} height={24} className='self-start' />

                <div className=''>
                  <p className="text-md font-bold text-[#0A2156]">Data do Ingresso</p>
                  <p className="text-base text-[#9EA5B8]">22/12/2022</p>
                </div>
      </div>
      <Image src="/DownArrow.svg" alt="Down Arrow" width={24} height={24} className='mb-4' />
      </div>
      <HorizontalBar/>
      <div className="flex justify-between items-center ">
      <div className="mb-4 flex gap-4">
                <Image src="/logos/PersonIcon.svg" alt="Person Icon" width={24} height={24} className='self-start' />

                <div className=''>
                  <p className="text-md font-bold text-[#0A2156]"> Ingressos</p>
                  <p className="text-base text-[#9EA5B8]">03 ingresso</p>
                </div>
      </div>
      <Image src="/DownArrow.svg" alt="Calendar" width={24} height={24} className='mb-4' />
      </div>
      <HorizontalBar/>
      
      <div className="space-y-3 mb-6 text-[#9EA5B8] text-base">
        <div className="flex justify-between pb-2">
          <span>01 Ingresso Infantil</span>
          <span className="font-medium">R$245,99</span>
        </div>
        <div className="flex justify-between pb-2">
          <span>02 Ingresso Adulto</span>
          <span className="font-medium">R$245,99</span>
        </div>
      </div>
        <HorizontalBar/>
      
      <div className="flex justify-between text-base text-[#0A2156] font-bold mb-6">
        <span>Valor total</span>
        <span className='text-[#4070F4] text-2xl'>
          R$ {price.discount}
        </span>
      </div>
      
      <button
  onClick={handleAddToCart}
  className="w-full text-md bg-[#4070F4] hover:bg-blue-700 text-white font-bold py-5 px-10 rounded-sm "
>
  Comprar Ingresso
</button>

    </div>
  );
}