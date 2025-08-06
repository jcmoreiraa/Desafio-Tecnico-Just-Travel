'use client';
import AmenitiesList from '@/components/AmenitiesList';
import Description from '@/components/Description';
import Hero from '@/components/Hero';
import Location from '@/components/Location';
import TicketSummaryCard from '@/components/TicketSummaryCard';
import { useParams } from 'next/navigation';
import  { useEffect, useState } from 'react';

interface Ticket {
  id: string;
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
}

export default function TicketPage() {
  const { id } = useParams();
  const [ticket, setTicket] = useState<Ticket|null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getTicket = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://65b98494b71048505a8aea91.mockapi.io/api/v1/tickets/${id}`
      );
      
      if (!response.ok) {
        throw new Error('Ticket não encontrado');
      }
      
      const data = await response.json();
      setTicket(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Erro desconhecido');
      console.error('Error fetching ticket data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getTicket();
    }
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;
  if (!ticket) return <div>Ticket não encontrado</div>;

  return (
    <main className="px-[60px] pt-8 pb-8 ">
      <Hero name={ticket.name} location={ticket.location} image={ticket.image} />
      <div className='flex gap-10 mt-8'>
      <div className='flex  max-w-[70%] flex-col '>
      <AmenitiesList rating={ticket.rating} />
      <Description description={ticket.description} />
      <Location location={ticket.location} />
      </div>
      <TicketSummaryCard price={ticket.price}  />
      </div>
    </main>
  );
}