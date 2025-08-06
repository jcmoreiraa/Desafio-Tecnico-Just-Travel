import React from 'react';
import Image from 'next/image';
import TicketPurchaseSummary from './TicketPurchaseSummary';
import Ticket from './Ticket';

export default function Header() {
  return (
    <header className="border-b-[0.8px] border-[#E7E9ED] py-6 px-[60px] flex justify-between items-center">
      <div className='flex items-center'>
        <div className="relative h-[25px] w-[25px] ">
          <Image 
            src="/logos/logo-mark-1.svg" 
            alt="Logo 1" 
            fill
            className="object-contain z-10"
          />
          <Image 
            src="/logos/logo-mark-2.svg" 
            alt="Logo 2" 
            fill
            className="object-contain z-20"
          />
          <Image 
            src="/logos/logo-mark-3.svg" 
            alt="Logo 3" 
            fill
            className="object-contain z-30"
          />
        </div>
        
        <div className="flex items-center">
          <div className="relative w-[39px] h-[19px]">
            <Image src="/logos/lore.svg" alt="L" fill className="object-contain" />
          </div>
          <div className="relative w-[8px] h-[14px]">
            <Image src="/logos/i.svg" alt="I" fill className="object-contain" />
          </div>
          <div className="relative w-[11px] h-[14px]">
            <Image src="/logos/p.svg" alt="P" fill className="object-contain" />
          </div>
          <div className="relative w-[10px] h-[10px]">
            <Image src="/logos/s.svg" alt="S" fill className="object-contain" />
          </div>
          <div className="relative w-[10px] h-[10px]">
            <Image src="/logos/u.svg" alt="U" fill className="object-contain" />
          </div>
          <div className="relative w-[15px] h-[10px]">
            <Image src="/logos/m.svg" alt="M" fill className="object-contain" />
          </div>
          <div className="relative w-[5px] h-[5px] mb-3 mr-[5px]">
            <Image src="/logos/bolinha.svg" alt="." fill className="object-contain" />
          </div>
        </div>
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
        <div className='bg-[#0045F3]  relative rounded-[4px] flex items-center  gap-2 px-4 py-1'>
            <Image 
              src="/carrinho.svg"
              alt="Carrinho Icon"
              width={37}
              height={37}
            />
            <p className='text-white font-bold rounded-full  px-[9px] py-[4px] bg-[#FFFFFF14]'> {0} </p>
            <TicketPurchaseSummary/>
          </div>
      </div>



    </header>
  );
}