import React from "react";
import {motion} from "framer-motion"
import project1 from "../assets/images/project-1.png"
import project2 from "../assets/images/project-2.png"
import project3 from "../assets/images/project-3.png"


const projectVariant={
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

function Project() {
  const ourProject = [
    {
      image:project1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, debitis eveniet? Deleniti suscipit perferendis sed eligendi vero est itaque aut debitis quidem. Eaque, sunt possimus provident architecto exercitationem perferendis corrupti.",
    },
    {
      image:
        project2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, debitis eveniet? Deleniti suscipit perferendis sed eligendi vero est itaque aut debitis quidem. Eaque, sunt possimus provident architecto exercitationem perferendis corrupti.",
    },
    {
      image:
        project3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, debitis eveniet? Deleniti suscipit perferendis sed eligendi vero est itaque aut debitis quidem. Eaque, sunt possimus provident architecto exercitationem perferendis corrupti.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/abstract-dark-background-with-flowing-colouful-waves_1048-13124.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, debitis eveniet? Deleniti suscipit perferendis sed eligendi vero est itaque aut debitis quidem. Eaque, sunt possimus provident architecto exercitationem perferendis corrupti.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/abstract-dark-background-with-flowing-colouful-waves_1048-13124.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, debitis eveniet? Deleniti suscipit perferendis sed eligendi vero est itaque aut debitis quidem. Eaque, sunt possimus provident architecto exercitationem perferendis corrupti.",
    },
  ];

  

  return (
    <>
      
<div>
  <h1 className="cl text-center text-5xl">Our Projects</h1>
<div className=' flex gap-8 flex-wrap justify-center items-center mt-6 mb-16 px-6'>
  {ourProject.map((project,index)=>(
    <motion.div variants={projectVariant} initial="hidden" whileInView="visible"  custom={index}  className='w-96  bg-secondary2 text-center bg-third'>
        <img className='w-full h-52' src={project.image} alt="" />
        <p className='mt-5 '>{project.description}</p>
        <button className='px-4 py-2 bg-slate-300 border-2 border-cyan-800 mt-5  w-full '> <a className="no-underline text-xl  " href="">Demo</a> </button>
      </motion.div>
  ))}
      
      </div>
      </div>
    </>
  );
}

export default Project;