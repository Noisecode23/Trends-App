import { img } from "motion/react-client";
import React from "react";
function Footer() {
  const data = [
    {
      title: "International Shipping",
      info: "We offer international shipping to over 50 countries, ensuring our products reach customers around the globe.",
    },
    {
      title: "Easy Returns",
      info: "To make a return you must send an email to: customer@leflairstudios.com specifying the order number and the reason for the return so that we can respond to you to best provide you with all the information you need to proceed with the return.",
    },
    {
      title: "Easy Payment",
      info: "We utilize Stripe to offer a comprehensive and secure payment experience, accommodating all client needs with options such as credit card and Apple Pay.",
    },
  ];

  return (
    <>
      <div className="w-full h-screen bg-zinc-500 relative">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover "
          src="https://cdn.prod.website-files.com/663927f94f5472bc912b2130%2F669a774a3703b1fcd221603a_DNA%20Motion%20FullHD-transcode.mp4"
        ></video>
        <div className="absolute top-0">
          <h2 className=' text-white text-[3vw] font-Uxum_Grotesque leading-[1.2] w-[55%] ml-6 mt-6'>
            Embrace the essence of Le Flair Studios and become a part of a
            movement that celebrates individuality.
          </h2>
          <button className=' text-white font-Uxum_Grotesque border  w-[10%] rounded-sm font-thin text-[0.9vw] ml-6 mt-5   px-10 py-5  '>
            Shop all
          </button>
        </div>
        <div className="w-full   bg-black ">
          <div className="logo px-10 py-10">
            <img
              className="h-5"
              src="https://cdn.prod.website-files.com/663927f94f5472bc912b2130/669a548445cff514fd746fba_Logotype.svg"
              alt=""
            />
          </div>
          <div className='main flex mt-[6vw] font-Uxum_Grotesque text-white'>
            {data.map((item) => {
              return (
                <div className="footer-Container w-1/2 border-dotted border  p-5">
                  <h3>{item.title}</h3>
                  <p className="mt-5 opacity-50 leading-[1.2] text-[0.8vw]">
                    {item.info}
                  </p>
                </div>
              );
            })}
          </div>
          <div className='main2 flex justify-between mt-[2vw]  font-Uxum_Grotesque text-white px-10 py-20 '>
            <div>
              <h3>Menu</h3>
              <div className="mt-[3vw]">
                {["Home", "Catalog", "About", "Journal"].map((item) => {
                  return <li className="list-none">{item}</li>;
                })}
              </div>
            </div>
            <div>
              <h3>Shop</h3>
              <div className="mt-[3vw]">
                {["All", "Drops"].map((item) => {
                  return <li className="list-none">{item}</li>;
                })}
              </div>
            </div>
            <div >
              <h3>Support</h3>
              <div className="mt-[3vw]">
                {[
                  "Shipping and Delivery",
                  "Payment Methods",
                  "Returns and Refunds",
                  "Terms of Service",
                ].map((item) => {
                  return <li className="list-none">{item}</li>;
                })}
              </div>
            </div>
            <div className="socials px-10 py-10 flex gap-3">
              {[
                "https://cdn.prod.website-files.com/663927f94f5472bc912b2130/66439cf3588b36cabf857774_instagram.svg",
                "https://cdn.prod.website-files.com/663927f94f5472bc912b2130/66439cf38e565d9e4ef9d0a0_facebook.svg",
                "https://cdn.prod.website-files.com/663927f94f5472bc912b2130/66439cf4c1695fb9646e54d7_youtube.svg",
                "https://cdn.prod.website-files.com/663927f94f5472bc912b2130/669d9d8cab09d4c81a611e16_TikTok.png",
              ].map((link)=>{
                return(
                  <div className="w-10 h-10 flex justify-center items-center rounded-full bg-white">
                  <img className="h-5" src={link} alt="" />
                  </div>
                )
              })}
            </div>
          </div>
          <div className="main3 w-full flex font-Neue_Haas_Grotesk_Display_Pro text-white justify-between border-t border-dotted px-10 py-5">
            <h3 className="font-semibold text-[0.8vw]">Le Flair Studios</h3>
            <h3 className="font-semibold text-[0.8vw]">&copy; 2024 All right are Reserved.</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
