'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function TicketPurchaseSummary() {
    const [image, setImage] = useState<string>('');
   
    const fetchImages = async () => {
        try {
            const response = await fetch('https://65b98494b71048505a8aea91.mockapi.io/api/v1/tickets/1');
            
            if (!response.ok) {
                throw new Error('Failed to fetch image');
            }
            
            const data = await response.json();
            setImage(data.image);
        } catch (err) {
            console.error('Error fetching image:', err);
        } 
    };

    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <div className='flex absolute top-19 right-0 flex-col border-[0.8px] border-[#E7E9ED] gap-4 p-6 bg-white shadow-[rgba(20, 21, 24, 0.06)] shadow-md w-[300px] min-h-[300px]'>
            <h1 className='text-md font-bold'>Ingressos</h1>
            <div className='flex'>
            <div className="relative w-full h-48">
                    <Image
                        src={image}
                        alt="Ticket Image"
                        fill
                        className="object-contain"
                    />
                </div>
                <p>Ingresso Universal 2 park to 2 dias flexível - 15/09/2022 </p>
                <Image
                    src="/TrashIcon.svg"
                    alt="Trash Icon"
                    width={24}
                    height={24}
                />
            </div>

        </div>
    );
}