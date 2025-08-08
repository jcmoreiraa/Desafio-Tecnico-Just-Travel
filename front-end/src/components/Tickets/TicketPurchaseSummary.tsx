'use client';
import React from 'react';
import Image from 'next/image';
import HorizontalBar from '../HorizontalBar';
import { useCartStore } from '../../store/cartStore';
import Price from '../Price';

interface TicketPurchaseSummaryProps {
  purchasedTicket: boolean
}

export default function TicketPurchaseSummary({ purchasedTicket }: TicketPurchaseSummaryProps) {
  const cartItems = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);

  if (!purchasedTicket || cartItems.length === 0) return null;

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = total * 0.07;
  const finalPrice = total - discount;

  return (
    <section className='absolute z-50 top-20 right-10 flex flex-col border border-gray-200 gap-4 bg-white shadow-md w-[500px] max-h-[90vh] overflow-y-auto rounded-md p-6'>
      <h1 className='text-md font-bold'>Ingressos</h1>

      {cartItems.map((item) => (
        <div key={item.id} className='flex gap-3'>
          <div className="w-[57px] h-[62px] relative shrink-0">
            <Image
              src={item.image }
              alt="Ticket"
              fill
              className="object-cover rounded"
            />
          </div>

          <div className='flex-1'>
            <header className='flex justify-between items-start'>
              <p className='text-[#646981]'>{item.name}</p>
              <button className=' cursor-pointer' onClick={() => removeItem(item.id)}>
                <Image src="/icons/cart/trash.svg" alt="Remover" width={20} height={20} />
              </button>
            </header>

            <div className='flex gap-4'>
              <Price color='#989AA7'>1 Adulto: R$ {item.price}</Price>
              <Price color='#989AA7'>2 Crianças: R$ {(item.price * 0.9)}</Price>
            </div>

            <HorizontalBar mt='mt-1' mb='mb-1' />

            <div className='flex justify-between'>
             <Price color='#646981' size='md'> Qtd {item.quantity} </Price>
              <Price color='#646981' size='md'>R$ {(item.quantity * item.price)}</Price>
            </div>

            <div className='flex justify-between mt-2 font-bold text-[#0A2156]'>
              <span>Subtotal  </span>
              <Price size='md' color='#17191C' alignSelf=''>R$ {(item.quantity * item.price)} </Price>
            </div>
          </div>
        </div>
      ))}

      <HorizontalBar mt='mt-3' mb='mb-3' />

      <div className='flex justify-between text-[#868A9D] text-md'>
        <p>Ingressos</p>
        <Price color='#868A9D' size='md'>R$ {total.toFixed(2)}</Price>
      </div>

      <div className='flex justify-between font-bold text-[#0A2156] text-md'>
        <p>Subtotal</p>
        <Price color='#17191C' size='md'>R$ {total.toFixed(2)}</Price>
      </div>

      <div className='flex justify-between'>
        <Price size='md' color='#868A9D'>1x de R$ {finalPrice.toFixed(2)} com desconto de <span className='text-[#00919E]'>(7%)</span></Price>
        <Price color='#00919E' size='md' alignSelf='font-bold'>- R$ {discount.toFixed(2)}</Price>
      </div>

      <div className='flex justify-between text-[#868A9D] text-md'>
        <p>10x sem juros de R$ {(total / 10)}</p>
        <Price color='#A2A4B1' size='md'>R$ {total.toFixed(2)} </Price>
      </div>

      <HorizontalBar mt='mt-3' mb='mb-4' />

      <div className='flex justify-between text-[#0A2156] text-md font-bold'>
        <p>Valor total</p>
        <Price color='#4070F4' size='2xl' alignSelf='font-normal'>{total.toFixed(2)}</Price>
      </div>

      <button className='bg-[#0045F3] text-white text-lg py-4 font-semibold rounded-md hover:bg-[#0038C1] transition-colors'>
        Ir para o checkout
      </button>
    </section>
  );
}
