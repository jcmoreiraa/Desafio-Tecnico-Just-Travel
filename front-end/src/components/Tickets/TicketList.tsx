'use client'
import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Ticket from './Ticket'
import Image from 'next/image'

type TicketType = {
  id: number
  name: string
  location: string
  image: string
  description: string
  price: {
    full: number
    discount: number
  }
  rating: {
    reviewsCount: number
    value: number
  }
  createdAt: string
  updatedAt: string
}

export default function TicketList() {
  const [ticketData, setTicketData] = useState<TicketType[]>([])
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const pageParam = searchParams.get('page')
  const currentPage = pageParam ? parseInt(pageParam) : 1
  const limit = 6
  const totalPages = 4
  const totalResults = 23
  const search = searchParams.get('search') ?? ''


  const verifyPage = (page: number) => {
    if (page < 1) return 1
    if (page > 4) return 4
    return page
  }

  const fetchTicketData = async (page: number) => {
  const verifiedPage = verifyPage(page)
  if (verifiedPage !== page) {
    router.push(`?page=${verifiedPage}`)
    return
  }


  try {
    const response = await fetch(
      `https://65b98494b71048505a8aea91.mockapi.io/api/v1/tickets?page=${page}&limit=${limit}&search=${search}`
    )
    if (!response.ok) throw new Error('Erro na requisição')
    const data = await response.json()

    let filteredData = data
    if (search) {
      filteredData = data.filter((ticket: TicketType) =>
        ticket.name.toLowerCase().includes(search) ||
        ticket.location.toLowerCase().includes(search)
      )
    }

    setTicketData(filteredData)
  } catch (error) {
    console.error('Erro ao buscar tickets:', error)
  }
}



  useEffect(() => {
    fetchTicketData(currentPage)
  }, [currentPage, search])

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      router.push(`?page=${page}`)
    }
  }

  const getVisiblePages = () => {
    if (currentPage <= 2) return [1, 2, 3]
    if (currentPage >= totalPages - 1) return [totalPages - 2, totalPages - 1, totalPages]
    return [currentPage - 1, currentPage, currentPage + 1]
  }

  return (
    <div>
      {ticketData.map((ticket) => (
        <div key={ticket.id} className="pr-6 shadow-md mb-4 bg-white">
          <Ticket {...ticket} />
        </div>
      ))}

      <div className="flex items-center justify-end mt-6 mb-4 text-sm gap-4">
        <div className="text-gray-600">
          {totalResults} Resultados
        </div>
        
        <div className="relative flex items-center gap-2">
          <p>Página:</p>
          <select
            value={currentPage}
            onChange={(e) => goToPage(Number(e.target.value))}
            className="border-[0.8px] border-[#8A90BD] rounded-md px-2 py-1 text-sm pr-6 bg-white text-[#828292]"
          >
            {Array.from({ length: totalPages }).map((_, i) => (
              <option key={i+1} value={i+1} className=''>
                0{i+1}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 disabled:opacity-30"
          >
            <Image 
              src="/leftArrow.svg" 
              alt="Página anterior" 
              width={24} 
              height={24}
              className={currentPage === 1 ? 'opacity-60' : ''}
            />
          </button>
          
          
          
          {getVisiblePages().map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`w-8 h-8 rounded text-[#455CC7] ${currentPage === page ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
            >
              {page}
            </button>
          ))}
          
 
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 disabled:opacity-30"
          >
            <Image 
              src="/rightArrow.svg" 
              alt="Próxima página" 
              width={24} 
              height={24}
              className={currentPage === totalPages ? 'opacity-60' : ''}
            />
          </button>
        </div>
      </div>
    </div>
  )
}