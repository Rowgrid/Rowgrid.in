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

function Service() {
  return (
   <>
   <div className="mb-12   ">
      <div className="flex justify-center p-5">
        <h1 className="text-white text-5xl font-semibold ">Our Services</h1>
      </div>
      <motion.div className="flex flex-wrap gap-9  justify-center mt-10">
        {Data.map((data,index) => (
          <motion.div variants={cardVariant} initial="hidden" whileInView="visible" custom={index} viewport={{once:true}} className=" back w-72 h-72 flex flex-col items-center  justify-center rounded-lg gap-0 md:w-96 md:h-80 hover:shadow-sm hover:scale-105 px-4 ">
            <p className=" iconp  text-5xl">{data.icon}</p>
            <h1 className="text-white font-semibold text-xl">{data.heading}</h1>
            <p className="text-sm text-gray-400 text-center">
              {data.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>

   </>
  )
}

export default Service