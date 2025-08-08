'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import TicketPurchaseSummary from './Tickets/TicketPurchaseSummary';
import { useCartStore } from '../store/cartStore';

export default function Header() {

    const [purchasedTickets, setPurchasedTickets] = useState<boolean>(false); 

    const CartIndicatore = () => {
  const itemCount = useCartStore(state => state.countCartItems());
  return itemCount;
  
  
}

  return (
    <header className="border-b-[0.8px] border-[#E7E9ED] py-6 px-[60px] flex justify-between items-center">
        <div className="relative h-[30px] w-[135px] ">
          <Image
            src={'/Logo.svg'}
            alt='NADA'
            fill          
             />   
        </div>

<div className='flex items-center gap-4'>
        <p className='text-sm'>
          Cotação dólar hoje: R$5,53
        </p> 
        <Image 
          src="/logos/BrasilIcon.svg"
          alt="Brasil Icon"
          className="object-contain"
          width={30}
          height={20}
        />
          <Image 
            src="/logos/AskIcon.svg"
            alt="Ask Icon"
            width={24}
            height={24}
          />
          <div className="h-[29px] w-[1px] bg-[#E7E9ED]"></div>
        <div className='flex items-center gap-2'>
        <Image 
          src="/logos/PersonIcon.svg"
          alt="User Icon"
          width={24}
          height={24}
          
        />
        <p className='text-[#4070F4] font-bold'> Entrar </p>
        </div>
        <div className='relative'>
        <button className='cursor-pointer' onClick={() => setPurchasedTickets(!purchasedTickets)} >
        <div className='bg-[#0045F3]  relative rounded-[4px] flex items-center  gap-2 px-4 py-1'>
            <Image 
              src="/carrinho.svg"
              alt="Carrinho Icon"
              width={37}
              height={37}
            />
            <p className='text-white font-bold rounded-full  px-[9px] py-[4px] bg-[#FFFFFF14]'> {CartIndicatore()} </p>
          </div>

          </button>
            <TicketPurchaseSummary  purchasedTicket={purchasedTickets} />

              </div>


      </div>



    </header>
  );
}