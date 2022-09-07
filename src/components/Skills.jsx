import React from 'react'
// import Me from '../assets/me.jpg'
const Skills = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto '>
        <h2 className='md:text-7xl sm:text-6xl text-4xl mb-10'>Skills</h2>
        <div className='grid md:grid-cols-4'>
          <span className='bg-[#00df9a]  md:w-[90%] w-[100%] text-center font-bold rounded-[50px] p-6 mb-5'>HTML</span>
          <span className='bg-[#00df9a]  md:w-[90%] w-[100%] text-center font-bold rounded-[50px] p-6 mb-5'>CSS</span>
          <span className='bg-[#00df9a]  md:w-[90%] w-[100%] text-center font-bold rounded-[50px] p-6 mb-5'>SCSS</span>
          <span className='bg-[#00df9a]  md:w-[90%] w-[100%] text-center font-bold rounded-[50px] p-6 mb-5'>Tailwind</span>
          <span className='bg-[#00df9a]  md:w-[90%] w-[100%] text-center font-bold rounded-[50px] p-6 mb-5'>Bootstrap</span>
          <span className='bg-[#00df9a]  md:w-[90%] w-[100%] text-center font-bold rounded-[50px] p-6 mb-5'>Javascript</span>
          <span className='bg-[#00df9a]  md:w-[90%] w-[100%] text-center font-bold rounded-[50px] p-6 mb-5'>React js</span>
          <span className='bg-[#00df9a]  md:w-[90%] w-[100%] text-center font-bold rounded-[50px] p-6 mb-5'>Git</span>
        </div>
      </div>
      {/* <img src={Me} alt="" /> */}
    </div>
  )
}

export default Skills
