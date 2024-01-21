import React from 'react'
import { Data } from "./Data";
import {motion} from "framer-motion"
import '../App.css'

const cardVariant={
    hidden:{
      opacity:0,
    },
    visible:(index)=>({
      opacity:1,
      transition:{
        delay:index*0.12,
        duration:0.8
      }
    })
  }
  const paravarianth1={
    hidden:{
      opacity:0,
      y:100
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        delay:0.12,
        duration:0.8
      }
    }
  }
  const paravarianth2={
    hidden:{
      opacity:0,
      y:-100
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        delay:0.20,
        duration:0.8
      }
    }
  }
function Service() {
  return (
   <>
   <div className="mb-12   ">
      <div className="flex justify-center p-5">
        <h1 className="text-white text-5xl font-semibold ">Our Services</h1>
      </div>
      <motion.div className="flex flex-wrap gap-9  justify-center mt-10">
        {Data.map((data,index) => (
          <motion.div variants={cardVariant} initial="hidden" whileInView="visible"  custom={index}  className=" back w-72 h-72 flex flex-col items-center  justify-center rounded-lg gap-0 md:w-96 md:h-80 hover:shadow-sm hover:scale-105 px-4 ">
            <p className=" iconp  text-5xl">{data.icon}</p>
            <h1 className="text-white font-semibold text-xl">{data.heading}</h1>
            <p className="text-sm text-gray-400 text-center">
              {data.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
    <div className=' md:px-44 px-2 px pt-14 pb-14 flex flex-col justify-center items-center'>
      <motion.h1 variants={paravarianth1} initial="hidden" whileInView="visible"  className=' font-thin text-[12px] '>WHAT WE DO</motion.h1>
      <motion.h1 variants={paravarianth2} initial="hidden" whileInView="visible" className='text-center font-bold cl  md:text-3xl'> Fresh Ideas, Measurable <span>Business</span></motion.h1>
      <motion.p variants={paravarianth2} initial="hidden" whileInView="visible" className='font-thin text-center text-[14px] leading-5 md:text-[15px]'>As a leading Web site Development Company.we Specialize in Creating Innovative and user-Friendly Digital Solutions that cater to the diverse needs of businesses and consummers alike</motion.p>
      <p> </p>
    </div>

   </>
  )
}

export default Service