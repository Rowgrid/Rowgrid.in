import React from "react";

function Project() {
  const ourProject = [
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
<div className=' flex gap-8 flex-wrap justify-center items-center mt-6 mb-16 '>
  {ourProject.map((project)=>(
    <div className='w-96 bg-secondary2 text-center bg-white '>
        <img className='w-96' src={project.image} alt="" />
        <p className='mt-5 '>{project.description}</p>
        <button className='px-4 py-2 bg-slate-300 border-2 border-cyan-800 mt-5 text-lg w-full'>Demo</button>
      </div>
  ))}
      
      </div>
      </div>
    </>
  );
}

export default Project;