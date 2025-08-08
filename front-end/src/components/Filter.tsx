import React from 'react'
import HorizontalBar from './HorizontalBar'
import PriceFilter from './Filters/PriceFilter'
import TypeProperty from './Filters/TypeProperty'
import Convenience from './Filters/Convenience'
import Property from './Filters/Property'
import ReviewScore from './Filters/ReviewScore'

export default function Filter() {
  return (
    <div className='flex flex-col p-4 shadow-md w-full bg-white'>
        <div className='flex justify-between '>
            <p className='font-bold text-md '> Filtro</p>
            <button className='text-[#3570BF] text-sm text-end cursor-pointer'> Limpar todos os filtros</button>
        </div>
        <HorizontalBar/>
        <PriceFilter/>
        <HorizontalBar/>
        <TypeProperty/>
        <HorizontalBar/>
        <Convenience/>
        <HorizontalBar/>
        <Property/>
        <HorizontalBar/>
        <ReviewScore/>
    </div>
  )
}
