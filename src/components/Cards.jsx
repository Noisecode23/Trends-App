import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './stylesheet/Cards.css';

// import required modules
import { Pagination } from 'swiper/modules';
function Cards() {
  return (
    <>
          <Swiper
        slidesPerView={3.5}
        spaceBetween={7}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/6673006ae21170624985eec8_classic-black-01-p-500.jpg" alt="" />
            <div className='w-full px-2 py-5'>
                <h4 className='title text-left uppercase font-semibold font-["Uxum_Grotesque"] text-[0.9vw]'>the prologue</h4>
                <div className='textPrices flex justify-between font-semibold font-["Uxum_Grotesque"] text-[0.9vw]'>
                    <h5>Monogram T-shirt</h5>
                    <span>100 EUR</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/6675a88d6879116ddb115e07_splat-white-01%20(1).jpg" alt="" />
            <div className='w-full px-2 py-5'>
                <h4 className='title text-left uppercase font-semibold font-["Uxum_Grotesque"] text-[0.9vw]'>the prologue</h4>
                <div className='textPrices flex justify-between font-semibold font-["Uxum_Grotesque"] text-[0.9vw]'>
                    <h5>Monogram T-shirt</h5>
                    <span>100 EUR</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/667300b7d022bb7402817090_classic-white-01.jpg" alt="" />
            <div className='w-full px-2 py-5'>
                <h4 className='title text-left uppercase font-semibold font-["Uxum_Grotesque"] text-[0.9vw]'>the prologue</h4>
                <div className='textPrices flex justify-between font-semibold font-["Uxum_Grotesque"] text-[0.9vw]'>
                    <h5>Splat T-shirt</h5>
                    <span>100 EUR</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/6675a8e9015a464f70a6271a_splat-black-01%20(1).jpg" alt="" />
            <div className='w-full px-2 py-5'>
                <h4 className='title text-left uppercase font-semibold font-["Uxum_Grotesque"] text-[0.9vw]'>the prologue</h4>
                <div className='textPrices flex justify-between font-semibold font-["Uxum_Grotesque"] text-[0.9vw]'>
                    <h5>Classic Logo T-shirt</h5>
                    <span>100 EUR</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/6675a9762da44885a3590075_splat-blue-grass-01%20(1).jpg" alt="" />
            <div className='w-full px-2 py-5'>
                <h4 className='title text-left uppercase font-semibold font-["Uxum_Grotesque"] text-[0.9vw]'>the prologue</h4>
                <div className='textPrices flex justify-between font-semibold font-["Uxum_Grotesque"] text-[0.9vw]'>
                    <h5>Monogram T-shirt</h5>
                    <span>100 EUR</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/6675aab10c036d7ad0df69f2_monogram-frosty-green-01%20(1).jpg" alt="" />
            <div className='w-full px-2 py-5'>
                <h4 className='title text-left uppercase font-semibold font-["Uxum_Grotesque"] text-[0.9vw]'>the prologue</h4>
                <div className='textPrices flex justify-between font-semibold font-["Uxum_Grotesque"] text-[0.9vw]'>
                    <h5>Splat T-shirt</h5>
                    <span>100 EUR</span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://cdn.prod.website-files.com/663e65805a247b0d03c4efde/667301c94d370e77b5a2ee54_monogram-persian-violet-01.jpg" alt="" />
            <div className='w-full px-2 py-5'>
                <h4 className='title text-left uppercase font-semibold font-["Uxum_Grotesque"] text-[0.9vw]'>the prologue</h4>
                <div className='textPrices flex justify-between font-semibold font-["Uxum_Grotesque"] text-[0.9vw]'>
                    <h5>Monogram T-shirt</h5>
                    <span>100 EUR</span>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Cards
