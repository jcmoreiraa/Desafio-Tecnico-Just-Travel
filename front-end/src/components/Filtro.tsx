import React from 'react'
import HorizontalBar from './HorizontalBar'
import PriceFilter from './PriceFilter'
import TypeProperty from './TypeProperty'
import Convenience from './Convenience'
import Property from './Property'
import ReviewScore from './ReviewScore'

export default function Filtro() {
  return (
    <div className='flex flex-col p-4 shadow-md mb-2 bg-white'>
        <div className='flex justify-between max-w-[319px]'>
            <p className='font-bold text-md'> Filtro</p>
            <button className='text-[#3570BF] text-sm cursor-pointer'> Limpar todos os filtros</button>

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
