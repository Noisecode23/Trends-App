import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
function Navbar() {
  return (
    <>
    <div className='navbar w-full bg-zinc-950 flex justify-between items-center text-white font-Neue_Haas_Grotesk_Display_Pro fixed z-[9999]  px-10 py-2'>
        <h4 className=' text-[1.3vw]'>Le <span className='font-Parabole'>F</span>lair <span className='font-Parabole'>S</span>tudios</h4>
        <div className='nav1 flex gap-8'>
            {["Home","About","Journal","Contact"].map((links, index)=>{
                
                return(
                    
                <a className='text-[0.8vw] font-semibold' href="#" key={index} >{links}</a>
            )
            })}
        </div>
        <div className='nav2 flex items-center'>
            <h4 className='text-[0.8vw] font-semibold'>Catalog</h4>
            <ArrowOutwardIcon fontSize='small'/>
        </div>
        <div className='nav3 flex items-center gap-2'>
            <h4 className='text-[0.8vw] font-semibold'>Bag</h4>
            <span className='inline-block bg-zinc-100 py-[0.12vw] px-[0.5vw] rounded-md text-black'>0</span>
        </div>
    </div>
    </>
  )
}

export default Navbar
