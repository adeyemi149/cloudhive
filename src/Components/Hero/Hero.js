import React from 'react'
import bgImg from "../../assests/cyber-bg.png"
import { CloudArrowUpIcon, CircleStackIcon, PaperAirplaneIcon, ServerStackIcon, } from '@heroicons/react/24/solid'

const Hero = () => {
  return (
	  <div name="home" className='w-full h-screen bg-zinc-200 flex flex-col justify-between md:mt-11'>
		  <div className='grid md:grid-cols-2 max-w-[1240px] m-auto justify-center '>
			  <div className='flex flex-col justify-center md:items-start w-full px-2 py-4'>
				  <p className='text-2xl'>Unique Sequencing & <span className=''>Production</span></p>
				  <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
				  <p className='text-2xl'>This is our Tech brand.</p>
				  <button className='px-6 py-3 bg-indigo-500 rounded-lg sm:w-[60%] my-4 text-white'>Get Started</button>
			  </div>
			  <div className='flex justify-center'>
				  <img className='w-3/4 md:w-full md:animate-bounce' src={bgImg} alt="/"/>
			  </div>
			  <div className='absolute flex flex-col justify-center items-center py-8 w-3/4 md:min-w-[760px] bottom-[-7%] md:bottom-[-15%] 
			  mx-1 mt-6 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border 
			  border-slate-300 rounded-xl text-center shadow-xl'>
				  <p>Data Services</p>
				  <div className='flex justify-center md:justify-between items-start flex-wrap px-4'>
					  <p className='flex px-4 py-2 text-slate-500'><CloudArrowUpIcon className='h-6 text-indigo-600'/> App Security</p>
					  <p className='flex px-4 py-2 text-slate-500'><CircleStackIcon className='h-6 text-indigo-600'/> Dashboard Design</p>
					  <p className='flex px-4 py-2 text-slate-500'><ServerStackIcon className='h-6 text-indigo-600'/> Cloud Data</p>
					  <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600'/> API</p>
				  </div>
			  </div>
		  </div>
	</div>
  )
}

export default Hero