'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import TicketPurchaseSummary from './Tickets/TicketPurchaseSummary';
import { useCartStore } from '../store/cartStore';

export default function Header() {
  const [purchasedTickets, setPurchasedTickets] = useState<boolean>(false); 
  const itemCount = useCartStore(state => state.countCartItems());
  const path = '/icons/header/';

  return (
    <header className="border-b-[0.8px] border-[#E7E9ED] py-6 px-[60px] flex justify-between items-center">
      <div className="relative h-[30px] w-[135px]">
        <Image
          src={`${path}logo.svg`}
          alt="Logo"
          fill
          priority
        />   
      </div>

      <div className="flex items-center gap-4">
        <p className="text-sm">
          Cotação dólar hoje: R$5,53
        </p> 
        
        <Image 
          src={`${path}flag-brazil.svg`}
          alt="Bandeira do Brasil"
          className="object-contain"
          width={30}
          height={20}
        />
        
        <Image 
          src={`${path}help-chat.svg`}
          alt="Ajuda/Chat"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        
        <div className="h-[29px] w-[1px] bg-[#E7E9ED]"></div>
        
        <div className="flex items-center gap-2 cursor-pointer">
          <Image 
            src={`${path}user.svg`}
            alt="Ícone de Usuário"
            width={24}
            height={24}
          />
          <p className="text-[#4070F4] font-bold">Entrar</p>
        </div>
        
        <div className="relative">
          <button 
            className="cursor-pointer" 
            onClick={() => setPurchasedTickets(!purchasedTickets)}
            aria-label="Carrinho de compras"
          >
            <div className="bg-[#0045F3] relative rounded-[4px] flex items-center gap-2 px-4 py-1">
              <Image 
                src={`${path}shopping-cart.svg`}
                alt="Carrinho de compras"
                width={37}
                height={37}
              />
              <p className="text-white font-bold rounded-full px-[9px] py-[4px] bg-[#FFFFFF14]">
                {itemCount}
              </p>
            </div>
          </button>
          
          <TicketPurchaseSummary purchasedTicket={purchasedTickets} />
        </div>
      </div>
    </header>
  );
}