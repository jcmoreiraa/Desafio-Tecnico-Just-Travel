'use client';
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Ticket from './Ticket';

type TicketType = {
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

export default function TicketList() {
  const [ticketData, setTicketData] = useState<TicketType[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  const pageParam = searchParams.get('page');
  const currentPage = pageParam ? parseInt(pageParam) : 1;
  const limit = 6;

  const verifyPage = (page:number) => {
    if (page < 1) return 1;
    if (page > 4) return 4;
    return page
  }

  const fetchTicketData = async (page: number) => {
    const verifiedPage = verifyPage(page);
    if (verifiedPage !== page) {
      router.push(`?page=${verifiedPage}`);
      return ;
    }
    try {
      const response = await fetch(`https://65b98494b71048505a8aea91.mockapi.io/api/v1/tickets?page=${verifiedPage}&limit=${limit}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      
      setTicketData(data);
    } catch (error) {
      console.error('Erro ao buscar tickets:', error);
    }
  };

  useEffect(() => {
    fetchTicketData(currentPage);
  }, [currentPage]); 

  const goToPage = (page: number) => {
    router.push(`?page=${page}`);
  };

  return (
    <div>
      {ticketData.map(ticket => (
        <div key={ticket.id} className='pr-6 shadow-md mb-4 bg-white'>
          <Ticket {...ticket} />
        </div>
      ))}

      <div className="flex gap-2 mt-4 justify-end mb-4">
        <button
          onClick={() => goToPage(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        >
          Página Anterior
        </button>
        <span>Página {currentPage}</span>
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage >= 4}
        >
          Próxima Página
        </button>
        
      </div>
    </div>
  );
}
