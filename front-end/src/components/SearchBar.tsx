'use client'

import React, { use, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'

export default function SearchBar() {
  const [search, setSearch] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString())
    if (search.trim()) {
      params.set('search', search.trim())
      params.set('page', '1')
    } else {
      params.delete('search')
    }
    router.push(`?${params.toString()}`)
  }
  useEffect(() => {
    handleSearch
  }, [search])
  return (
    <div className="flex border border-[#E7E9ED] pl-1 rounded-md bg-white">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <button className="ml-2">
            <Image src="/gps.svg" alt="GPS Icon" width={24} height={24} />
          </button>
          <input
            type="text"
            placeholder="Busque por atração"
            className="outline-none border-none w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div
          className="border-x border-[#E7E9ED] w-[48px] h-[48px] flex items-center justify-center ml-2 cursor-pointer"
          onClick={handleSearch}
        >
          <Image src="/lupa.svg" alt="Lupa de pesquisa" width={24} height={24} />
        </div>
      </div>
    </div>
  )
}
