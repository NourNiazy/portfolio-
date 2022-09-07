import React from 'react'
import invertech from '../assets/invertech.png'
import {FiLink} from 'react-icons/fi';
import {AiFillGithub} from 'react-icons/ai';
const Projects = () => {
  return (
    <div className='w-full bg-[#00df9a] py-16 px-4'>
        <div className='max-w-[1240px] mx-auto '>
        <h1 className='md:text-7xl sm:text-6xl text-4xl mb-10'>Projects</h1>
            <div className=' p-10 grid md:grid-cols-3'>
                <div className='bg-transparent-white p-5 rounded-lg md:w-[80%] w-[100%] flex flex-col items-center justify-center'>
                    <img src={invertech} alt=""className='w-full' /> 
                    <h3 className='md:text-2xl sm:text-2xl text-xl '>Invertech</h3>
                    <div className='w-[80%] flex justify-between mt-5'>
                        
                        <a href="https://invertech-store.com/"className='rounded-lg bg-[#00df9a] p-1'>Demo<FiLink size={15} className='inline ml-1'/>
                        </a>
                        <a href="https://github.com/eslamansour/invertech" className='rounded-lg bg-black p-1 text-white'>GitHub <AiFillGithub size={18} className='inline ml-1'/></a>
                    </div>
                </div>
                <div className='bg-transparent-white p-5 rounded-lg md:w-[80%] w-[100%] flex flex-col items-center justify-center'>
                    <img src={invertech} alt=""className='w-full' /> 
                    <h3 className='md:text-2xl sm:text-2xl text-xl '>Invertech</h3>
                    <div className='w-[80%] flex justify-between mt-5'>
                        
                        <a href="https://invertech-store.com/"className='rounded-lg bg-[#00df9a] p-1'>Demo<FiLink size={15} className='inline ml-1'/>
                        </a>
                        <a href="https://github.com/eslamansour/invertech" className='rounded-lg bg-black p-1 text-white'>GitHub <AiFillGithub size={18} className='inline ml-1'/></a>
                    </div>
                </div>
                <div className='bg-transparent-white p-5 rounded-lg md:w-[80%] w-[100%] flex flex-col items-center justify-center'>
                    <img src={invertech} alt=""className='w-full' /> 
                    <h3 className='md:text-2xl sm:text-2xl text-xl '>Invertech</h3>
                    <div className='w-[80%] flex justify-between mt-5'>
                        
                        <a href="https://invertech-store.com/"className='rounded-lg bg-[#00df9a] p-1'>Demo<FiLink size={15} className='inline ml-1'/>
                        </a>
                        <a href="https://github.com/eslamansour/invertech" className='rounded-lg bg-black p-1 text-white'>GitHub <AiFillGithub size={18} className='inline ml-1'/></a>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Projects
