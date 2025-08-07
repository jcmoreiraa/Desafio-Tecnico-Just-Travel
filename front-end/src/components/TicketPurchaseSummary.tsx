'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import HorizontalBar from './HorizontalBar';

interface TicketPurchaseSummaryProps {
    purchasedTickets?: boolean;
}

export default function TicketPurchaseSummary({ purchasedTickets }: TicketPurchaseSummaryProps) {
    const [image, setImage] = useState<string | null>('');

    const fetchImages = async () => {
        try {
            const response = await fetch('https://65b98494b71048505a8aea91.mockapi.io/api/v1/tickets/1');
            if (!response.ok) throw new Error('Failed to fetch image');
            const data = await response.json();
            setImage(data.image);
        } catch (err) {
            console.error('Error fetching image:', err);
        } 
    };

    useEffect(() => { fetchImages(); }, []);

    if (!purchasedTickets) return null;

    return (
        <section className='absolute top-19 right-0 flex flex-col border-[0.8px] border-[#E7E9ED] gap-4 p-6 bg-white shadow-[rgba(20, 21, 24, 0.06)] shadow-md w-[500px]'>
            <h1 className='text-md font-bold text-start'>Ingressos</h1>
            
            <div className='flex gap-3'>
                <div className="relative w-[57px] h-[62px] ">
                    <Image
                        src={image || '/placeholder.png'}
                        alt="Ticket Image"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className='flex-1'>
                    <header className='flex justify-between items-start text-start'>
                        <p className='text-[#646981]'>Ingresso Universal 2 park to 2 dias flexível - 15/09/2022</p>
                        <Image src="/TrashIcon.svg" alt="Remover" width={24} height={24} />
                    </header>

                    <div className='flex gap-4 text-[#989AA7] text-sm'>
                        <span>1 Adulto: R$500,00</span>
                        <span>2 Crianças: R$243,33</span>
                    </div>

                    <HorizontalBar mt='mt-1' mb='mb-1'/>

                    <div className='flex text-md text-[#646981] justify-between'>
                        <span>Qtd 02</span>
                        <span>R$ 734,33</span>
                    </div>

                    <div className='flex justify-between mt-2 font-bold text-[#0A2156]'>
                        <span>Subtotal</span>
                        <span>R$ 1.468,60</span>
                    </div>
                </div>
            </div>

            <HorizontalBar mt='mt-4'/>
            
            <div className='flex justify-between text-[#868A9D] text-md'>
                <p>Ingressos</p>
                <p>R$ 1.468,60</p>
            </div>
            
            <div className='flex justify-between text-[#0A2156] text-md font-bold'>
                <p>Subtotal</p>
                <p>R$ 1.468,60</p>
            </div>
            
            <div className='flex justify-between text-[#868A9D] text-md'>
                <p>1X de R$ 1.365,79 com desconto de <span className='text-[#00919E]'>(7%)</span></p>
                <p className='font-bold'> <span className='text-[#00919E]'>R$ -102,80</span></p>
            </div>
            
            <div className='flex justify-between text-[#868A9D] text-md'>
                <p>10X sem juros de R$1468,60</p>
                <p className='font-bold'> R$ 1468,60</p>
            </div>
            
            <HorizontalBar mt='mt-3' mb='mb-4'/>
            
            <div className='flex justify-between text-[#0A2156] text-md font-bold'>
                <p>Valor total</p>
                <p><span className='text-[#4070F4] text-lg font-normal'> R$ 1.468,60</span></p>
            </div>
            
            <button 
                className='bg-[#0045F3] text-white text-lg py-4 font-semibold rounded-md hover:bg-[#0038C1] transition-colors'
            >
                Ir para o check out
            </button>
        </section>
    );
}