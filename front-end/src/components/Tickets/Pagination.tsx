'use client'
import Image from 'next/image'

interface Props {
  currentPage: number
  totalPages: number
  totalResults: number
  onPageChange: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  totalResults,
  onPageChange,
}: Props) {
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page)
    }
  }

  const getVisiblePages = () => {
    if (currentPage <= 2) return [1, 2, 3]
    if (currentPage >= totalPages - 1) return [totalPages - 2, totalPages - 1, totalPages]
    return [currentPage - 1, currentPage, currentPage + 1]
  }

  return (
    <div className="flex items-center justify-end mt-6 mb-4 text-sm gap-4">
      <div className="text-gray-600">{totalResults} Resultados</div>

      <div className="relative flex items-center gap-2">
        <p>Página:</p>
        <select
          value={currentPage}
          onChange={(e) => goToPage(Number(e.target.value))}
          className="border-[0.8px] border-[#8A90BD] rounded-md px-2 py-1 text-sm pr-6 bg-white text-[#828292] cursor-pointer bg-black"
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <option key={i + 1} value={i + 1}>
              0{i + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 disabled:opacity-30 "
        >
          <Image
            src="icons/navigation/pagination-prev.svg"
            alt="arrow-left icon"
            width={24}
            height={24}
            className={currentPage === 1 ? 'opacity-60' : 'cursor-pointer'}
          />
        </button>

        {getVisiblePages().map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`w-8 h-8 rounded text-[#455CC7] transition  ${
              currentPage === page ? 'bg-blue-500 text-white cursor-auto' : 'hover:bg-gray-100 cursor-pointer'
            }`}
          >
            {page}
          </button>
        ))}

        {totalPages > 3 && currentPage < totalPages - 1 && (
          <span className="text-gray-400">...</span>
        )}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 disabled:opacity-30 "
        >
          <Image
            src="icons/navigation/pagination-next.svg"
            alt="Próxima página"
            width={24}
            height={24}
            className={currentPage === totalPages ? 'opacity-60' : 'cursor-pointer'}
          />
        </button>
      </div>
    </div>
  )
}
