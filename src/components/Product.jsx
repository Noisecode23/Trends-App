import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function Product() {
  const boxRef = useRef(null);
  const box2Ref = useRef(null)
  const parentRef = useRef(null)
  useEffect(() => {
    // GSAP animation with ScrollTrigger
    gsap.fromTo(
      boxRef.current,
      {  y: 0 },
      {
        y: -900,
        duration: 1,
        scrollTrigger: {
          trigger: parentRef.current,
          start: "top 30%", // Animation starts when top of the element hits 80% of viewport
          end: "top -60%",  // Animation ends when top of the element hits 30% of viewport
          scrub: 3,    // Smooth scroll animation
          // markers: true,  // Debug markers to visualize trigger points
        },
      }
    );
    gsap.fromTo(
      box2Ref.current,
      {  y: -900 },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: parentRef.current,
          start: "top 30%", // Animation starts when top of the element hits 80% of viewport
          end: "top -60%",  // Animation ends when top of the element hits 30% of viewport
          scrub: 3,    // Smooth scroll animation
          // markers: true,  // Debug markers to visualize trigger points
        },
      }
    );
  }, []);
  const products1 = [
    {
      id:0,
      Image:"https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/6672e288c21bc5b0e9dc7b93_left-side-f1.webp",
      title:"Crafting Unique Narratives Through Limited Edition Drops.",
    },
    {
      id:1,
      Image:"https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/6672e2929cd586d2e16181a9_left-side-f2.webp",
      title:"The spirit of street culture with high-quality craftsmanship."
    }
  ]
  const products2 = [
    {
      id:0,
      Image:"https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/669bbbf2b5fbc7d9780fda20_right-side-f2.jpg",
      title:"Crafting Unique Narratives Through Limited Edition Drops"
    },
    {
      id:1,
      Image:"https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/6672eb372dece20b85f9cf94_right-side-f1.jpg",
      title:"Crafting Unique Narratives Through Limited Edition Drops"
    }
  ]

  

  return (
    <div className='w-full  bg-zinc-900'>
      <div ref={parentRef} className="parent relative w-full h-[300vh]">
        <div className="sticky left-0 top-0 w-full h-screen oveflow-x-hidden overflow-y-hidden flex">
          <div ref={box2Ref}  className="part1 w-full h-screen   bg-slate-300">
            {products1.map((product, index)=>(
              <div key={index} className='ImageContent relative'>
                <img src={`${product.Image}`} alt="" />
                <p className='absolute top-[3vw] px-10 py-5 text-white font-Uxum_Grotesque font-semibold uppercase text-[0.9vw]  '>{product.title}</p>
                <button className={`w-[40vw] left-[5vw]  absolute ${product.id === 1 ? "bottom-[20vw]":"bottom-[18vw]"} p-5 font-semibold font-Uxum_Grotesque text-[0.8vw] text-black bg-zinc-100`}>Shop now</button>
              </div>
            ))}
          </div>
          <div ref={boxRef} className="part2 w-full h-screen bg-slate-50">
          {products2.map((product, index)=>(
              <div key={index} className='ImageContent relative'>
                <img src={`${product.Image}`} alt="" />
                <p className='absolute top-[3vw] px-10 py-5 text-white font-Uxum_Grotesque font-semibold uppercase text-[0.9vw]  '>{product.title}</p>
                <button className={`w-[40vw] left-[5vw]  absolute ${product.id === 1 ? "bottom-[20vw]":"bottom-[5vw]"} p-5 font-semibold font-Uxum_Grotesque text-[0.8vw] text-black bg-zinc-100`}>Shop now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
