import React from 'react'
import Cards from './Cards'

function Featured() {
  return (
    <>
    <div className="w-full min-h-screen bg-[#E0E0E0]  ">
      <div className='featuredTexts flex justify-between px-10 py-10'>
        <h3 className='text-[3vw] font-Uxum_Grotesque text-[#292929] '><span className='font-Parabole'>F</span>eatured</h3>
        <button className='border bg-[#3400D0] font-semibold w-[15%] rounded-sm text-[0.9vw] text-white'>All Products</button>
      </div>
      <Cards />
    </div>
    </>
  )
}

export default Featured
