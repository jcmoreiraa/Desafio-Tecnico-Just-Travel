'use client';
import Image from 'next/image'; 
import { useRouter } from 'next/navigation'; 
import Price from '../Price';

interface TicketProps {
  id: number;
  name: string;
  location: string;
  image: string;
  description: string;
  price: {
    full: number;
    discount: number;
  };
  rating: {
    reviewsCount: number;
    value: number;
  };
  createdAt: string;
  updatedAt: string;
};

export default function Ticket(ticket: TicketProps) {
  const router = useRouter();

  return (
    <div className='flex gap-4 mx-auto justify-between'>
      <div className='w-[213px] h-[233px] relative'>
        <Image 
          src={ticket.image}
          alt={ticket.name}
          fill
          className='object-cover'
        />
        <p className='absolute top-3 left-3 bg-white rounded-full px-3 py-1 text-[#0A2156] text-sm'>
          Ingresso
        </p>
        <Image 
          src="/icons/navigation/heart.svg" 
          alt="Favorite Icon"
          width={24}
          height={24}
          className='absolute top-3 right-3'
        />
      </div>

      <div className='flex-1 flex justify-between items-center px-6 py-4'>
        <div className='flex flex-col h-full justify-between py-6'>
          <div className='flex flex-col gap-2'>
            <p className='font-bold text-[#0A2156]'>{ticket.name}</p>
            <div className='flex gap-1 items-center'>
              <Image 
                src='/icons/ticket/location.svg' 
                width={24}
                height={24}
                alt="Location Icon" 
              />
              <span className='text-sm text-[#3C4C70]'>{ticket.location}</span>
            </div>
          </div>

          <div className='flex items-center gap-2 mt-4'>
            <div className='bg-[#4070F4] rounded-[2px] text-white p-2 text-sm'>
              {ticket.rating.value}
            </div>
            <p className='text-[#0A2156] text-sm font-bold'>Excellent</p>
            <p className='text-[#9EA5B8] text-sm'>({ticket.rating.reviewsCount} reviews)</p>
          </div>
        </div>

        <div className='flex items-center'>
          <div className='w-[1px] h-[166px] bg-[#CED2DB] mx-6'></div>
          <div className='flex flex-col'>
            
            <Price> {`de R$ ${ticket.price.full.toFixed(2)} por`} </Price>
            
            <Price alignSelf="self-start font-bold flex gap-[4px]" color="#4070F4" size="2xl">
              <span className="text-sm text-[#0A2156]">R$</span>
               {ticket.price.discount}
            </Price>

            <button 
              className='mt-4 gap-3 flex px-7 py-3 bg-[#4070F4] text-white text-sm rounded hover:bg-[#3058c7] transition cursor-pointer'
              onClick={() => router.push(`/tickets/${ticket.id}`)}
            >
              Saber mais
              <Image 
                src="/icons/navigation/arrow-right.svg"
                alt="Arrow Icon"
                width={10}
                height={10}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}