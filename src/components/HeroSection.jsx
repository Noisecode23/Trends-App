import React, { useEffect, useRef } from "react";

function HeroSection() {
  const tagsDetails = [
    {
      id: 0,
      title: "Splat T-shirt",
      price: "115 Eur",
    },
    {
      id: 2,
      title: "Classic Logo T-shirt",
      price: "120 Eur",
    },
    {
      id: 3,
      title: "Monogram T-shirt",
      price: "200 Eur",
    },
    {
      id: 4,
      title: "Classic Logo T-shirt",
      price: "250 Eur",
    },
    {
      id: 5,
      title: "Splat T-shirt",
      price: "120 Eur",
    },
  ];
  const tagBox = useRef(null);
  const tagInfo = useRef(null);
  useEffect(() => {

  }, []);
  return (
    <>
      <div className="w-full min-h-screen  bg-[url(https://cdn.prod.website-files.com/663927f94f5472bc912b2130/669bf0ca954d4a31544b1135_home-hero-p-2000.webp)] bg-center bg-no-repeat bg-cover relative">
        <div className="tags w-full h-full  absolute flex justify-between items-center px-[5vw]">
          {tagsDetails.map((tag, index) => (
            <div ref={tagBox} key={index} className={`tag${index}   group relative cursor-pointer `}>
              <div className="taground w-5 h-5 bg-zinc-100 rounded-full"></div>
              <div
                ref={tagInfo}
                className={`tagInfo  hidden group-hover:inline-block absolute rounded-sm w-[10vw] ${index === 4 ? "right-[0vw]":"0"} transition-all  bg-zinc-100 p-2 text-black font-["Uxum_Grotesque"] mt-3`}
              >
                <h2 className="text-[0.9vw] font-semibold ">{tag.title}</h2>
                <p className="text-[0.9vw] opacity-50 ">{tag.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full heroTexts flex items-center justify-between absolute bottom-0 text-white mb-[3vw] ">
          <div className="herotex1 leading-[1] px-10 ">
            <h1 className="text-[5vw] font-['Neue_Haas_Grotesk_Display_Pro'] font-normal"><span className="font-['Parabole']">E</span>mbrace what</h1>
            <h1 className="text-[5vw] font-['Neue_Haas_Grotesk_Display_Pro'] font-normal">makes You — <span className="font-['Parabole']">Y</span>ou</h1>
          </div>
          <button className="border border-white w-[10vw] h-[3vw] rounded-sm mr-6">Discover Now</button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
