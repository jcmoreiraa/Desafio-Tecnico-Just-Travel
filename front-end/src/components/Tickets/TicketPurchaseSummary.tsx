'use client';
import React from 'react';
import Image from 'next/image';
import HorizontalBar from '../HorizontalBar';
import { useCartStore } from './cartStore';

interface TicketPurchaseSummaryProps {
  purchasedTickets?: boolean;
}

export default function TicketPurchaseSummary({ purchasedTickets }: TicketPurchaseSummaryProps) {
  const cartItems = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);

  if (!purchasedTickets || cartItems.length === 0) return null;

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
              src={item.image || '/placeholder.png'}
              alt="Ticket"
              fill
              className="object-cover rounded"
            />
          </div>

          <div className='flex-1'>
            <header className='flex justify-between items-start'>
              <p className='text-[#646981]'>{item.name}</p>
              <button onClick={() => removeItem(item.id)}>
                <Image src="/TrashIcon.svg" alt="Remover" width={20} height={20} />
              </button>
            </header>

            <div className='flex gap-4 text-[#989AA7] text-sm'>
              <span>1 Adulto: R$ {item.price.toFixed(2)}</span>
              <span>2 Crianças: R$ {(item.price * 0.9).toFixed(2)}</span>
            </div>

            <HorizontalBar mt='mt-1' mb='mb-1' />

            <div className='flex justify-between text-[#646981]'>
              <span>Qtd {item.quantity.toString().padStart(2, '0')}</span>
              <span>R$ {(item.quantity * item.price).toFixed(2)}</span>
            </div>

            <div className='flex justify-between mt-2 font-bold text-[#0A2156]'>
              <span>Subtotal</span>
              <span>R$ {(item.quantity * item.price).toFixed(2)}</span>
            </div>
          </div>
        </div>
      ))}

      <HorizontalBar mt='mt-4' />

      <div className='flex justify-between text-[#868A9D] text-md'>
        <p>Ingressos</p>
        <p>R$ {total.toFixed(2)}</p>
      </div>

      <div className='flex justify-between font-bold text-[#0A2156] text-md'>
        <p>Subtotal</p>
        <p>R$ {total.toFixed(2)}</p>
      </div>

      <div className='flex justify-between text-[#868A9D] text-md'>
        <p>1x de R$ {finalPrice.toFixed(2)} com desconto de <span className='text-[#00919E]'>(7%)</span></p>
        <p className='font-bold text-[#00919E]'>- R$ {discount.toFixed(2)}</p>
      </div>

      <div className='flex justify-between text-[#868A9D] text-md'>
        <p>10x sem juros de R$ {(total / 10).toFixed(2)}</p>
        <p className='font-bold'>R$ {total.toFixed(2)}</p>
      </div>

      <HorizontalBar mt='mt-3' mb='mb-4' />

      <div className='flex justify-between text-[#0A2156] text-md font-bold'>
        <p>Valor total</p>
        <p className='text-[#4070F4] text-lg font-normal'>R$ {total.toFixed(2)}</p>
      </div>

      <button className='bg-[#0045F3] text-white text-lg py-4 font-semibold rounded-md hover:bg-[#0038C1] transition-colors'>
        Ir para o checkout
      </button>
    </section>
  );
}
