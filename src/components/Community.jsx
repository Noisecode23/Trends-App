import React, { useEffect, useRef } from 'react'
import  { gsap } from 'gsap';

function Community() {
    const ImagesLinks = [
        {
            id:3,
            link:"https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/669cf65bd02654086ea2eb92_last-gallery%20(1)-p-800.jpg"
        },
        {
            id:2,
            link:"https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/66731745997c1c241079ee09_home-gallery-03-p-800.jpg"
        },
        {
            id:0,
            link:"https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/667da5090665eaa8ce827f39_home-gallery-01%20(1)-p-800.jpg"
        },
        {
            id:1,
            link:"https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/6673173c5af8f97c870e0bdc_home-gallery-02-p-800.jpg"
        },
    ]
    const overlayBOX = useRef([]);

    useEffect(()=>{
        gsap.fromTo(
            overlayBOX.current,
            {
                  y: -200,
                  opacity:1,
             },
            {
              y: 0,
              opacity:0,
              duration: 4, // Duration for each element's animation
              stagger: 5,  // Delay between each element's start
              repeat: -1,    // Infinite repetition
              repeatDelay: 2, // Delay between animation cycles
            }
          );
    },[])

  return (
    <>
    <div className='w-full min-h-screen bg-zinc-100 flex'>
        <div className='left w-1/2  px-10 py-20  '>
        <h3 className='font-Uxum_Grotesque font-medium text-[4vw] text-[#292929]'><span className='font-Parabole'>J</span>oin the <span className='font-Parabole'>C</span>ommunity</h3>
        <p className='w-[30vw]'>At Le Flair Studios, we believe that everyone has their own unique flair a special something that differentiates you from everyone else. It is in your DNA, and we want you to magnify it, not erase it.</p>
        <button className='border mt-[1vw] bg-[#3400D0] font-semibold w-[30%] rounded-md text-[0.9vw] text-white px-10 py-5 '>About us</button>
        </div>
        <div className='right w-1/2  px-10 py-20 flex  overflow-hidden  '>
        <div className='leftImages w-[20%]  '>
            {ImagesLinks.map((link, index)=>(
                <div key={index} className='ImageContainer mt-1 rounded-sm overflow-hidden relative w-[85%] h-[20%]'>
                    <div ref={(el) => (overlayBOX.current[index] = el)} className='overlayPart absolute w-full h-full opacity-50 bg-zinc-900'></div>
                    <img className='w-full h-full object-cover' src={`${link.link}`} alt="" />
                </div>
            ))}
        </div>
        <div className='rightImages w-full  relative'>
        {ImagesLinks.map((link, index)=>(
                    <img  key={index} className={`w-full h-full object-cover  absolute    ` } src={link.link} alt="" />
            ))}
        </div>
        </div>
    </div>
    </>
  )
}

export default Community
