import React from 'react'

export default function HorizontalBar({mt = 'mt-6', mb = 'mb-6'}) {
  return (
    <div className={`bg-[#E7E9ED] h-[1px] ${mt} ${mb}`}></div>
  )
}
