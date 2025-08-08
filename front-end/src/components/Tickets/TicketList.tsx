'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Ticket from './Ticket'
import Pagination from './Pagination'

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
  const totalResults = 23
  const totalPages = Math.ceil(totalResults / limit)
  const search = searchParams.get('search') ?? ''

  const verifyPage = (page: number) => {
    if (page < 1) return 1
    if (page > totalPages) return totalPages
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
          ticket.name.toLowerCase().includes(search.toLowerCase()) ||
          ticket.location.toLowerCase().includes(search.toLowerCase())
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

  const handlePageChange = (page: number) => {
    const verified = verifyPage(page)
    router.push(`?page=${verified}`)
  }

  return (
    <div className="space-y-4">
      {ticketData.length > 0 ? (
        ticketData.map((ticket) => (
          <div key={ticket.id} className="pr-6 shadow-md mb-4 bg-white  overflow-hidden">
            <Ticket {...ticket} />
          </div>
        ))
      ) : (
        <div className="text-center py-8 text-gray-500">
          Nenhum ticket encontrado
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalResults={totalResults}
        onPageChange={handlePageChange}
      />
    </div>
  )
}