import React from 'react'
import Typed from 'react-typed';
import {AiOutlineGithub,AiFillLinkedin} from 'react-icons/ai';
const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[820px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-1 md:text-2xl sm:text-xl text-xl'>Frontend Developer</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-5'>Nour Mostafa</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-4xl sm:text-3xl text-xl font-bold'>Fast,flexible,responsive websites with</p>
            <Typed className='md:text-4xl sm:text-3xl text-xl font-bold pl-2 text-[#00df9a]' strings={['HTML','CSS','SASS','Tailwind','Bootstrap','JS','React']} typeSpeed={120} backSpeed={140} loop/>
        </div>
        <div className='flex justify-center items-center pt-5'>
            <a href="https://github.com/NourNiazy"className='p-2'><AiOutlineGithub size={30} color='gray'/></a>
            <a href="https://www.linkedin.com/in/nour-mostafa-35a704170/"className='p-2'><AiFillLinkedin size={30}/></a>
            
        </div>
      </div>
    </div>
  )
}

export default Hero
