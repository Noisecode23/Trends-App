import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { motion } from "motion/react"
function FaQs() {
    const faqs = [
        {
            id:0,
            title:"How do I choose the right size for my order?",
            lower:"To choose the right size, refer to our detailed size guide available on each product page. It includes measurements and tips for finding your perfect fit. If you have any specific questions, our customer service team is here to help."
        },
        {
            id:1,
            title:"How often is the assortment of the collection updated?",
            lower:"We do up to four drops each year with limited quantity and no restock."
        },
        {
            id:2,
            title:"Where is our clothing manufactured?",
            lower:"Our clothing is manufactured in a reputable facility in Portugal that prioritizes quality and ethical practices. We work closely with our production partners to ensure high standards are maintained throughout the manufacturing process."
        },
        {
            id:3,
            title:"Do you deliver internationally?",
            lower:"Yes, we offer international delivery. Shipping times and costs vary depending on your location. Please check our shipping and information page for more details on international delivery options.” Insert a hyperlink to that page if possible."
        },

    ]
    const [rotatedSpanId, setRotatedSpanId] = useState(null); // Track the rotated span's ID
   
    const handleToggle = (id) => {
        setRotatedSpanId(rotatedSpanId === id ? null : id); // Toggle rotation for the clicked span
      };
  return (
    <>
    <div className='w-full min-h-[80vh]  px-10 py-10'>
        <h1 className='font-["Uxum_Grotesque"] text-[#292929] text-[3.5vw]'><span className='font-["Parabole"]'>F</span>requently <span className='font-["Parabole"]'>A</span>sked <span className='font-["Parabole"]'>Q</span>uestions</h1>
        <div className='faqs w-full  '>
            {faqs.map((item)=>(
                <motion.div 
                onClick={() => handleToggle(item.id)}
                animate={{
                    height: rotatedSpanId === item.id ? "10vw" : "4.5vw", // Rotate only if this span is active
                  }}
                  transition={{
                    duration: 0.5, // Animation duration in seconds
                    ease: "easeInOut", // Easing function for smoothness
                  }}
                key={item.id} className='fqs-container cursor-pointer border-t border-b font-["Uxum_Grotesque"] text-[#292929] py-5  h-[4.5vw] mt-2 overflow-hidden '>
                    <motion.span 
                           // Pass the current item's ID
                          animate={{
                            rotate: rotatedSpanId === item.id ? 45 : 0, // Rotate only if this span is active
                          }}
                          transition={{
                            duration: 0.5, // Animation duration in seconds
                            ease: "easeInOut", // Easing function for smoothness
                          }}
                      className='absolute right-6'><AddIcon  fontSize='large'/></motion.span>
                    <h3 className='text-[2vw]'>{item.title}</h3>
                    <p className='w-1/2 text-[1.1vw] '>{item.lower}</p>
                </motion.div>
            ))}
        </div>
    </div>
    </>
  )
}

export default FaQs
