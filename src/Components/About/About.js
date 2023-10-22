import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {
	useEffect(() => {
		Aos.init({duration: 2000});
	}, [])
  return (
	<div name="about" className='w-full my-32'>
		  <div className='max-w-[1240px] mx-auto' data-aos="fade-up">
			  <div className='text-center'>
				  <h1 className='text-5xl font-bold'>Trusted by developers across the world</h1>
				  <p className='text-3xl py-6 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
			  </div>
			  <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
				  <div className='border py-8 rounded-xl shadow-xl'>
					  <p className='text-6xl font-bold text-indigo-600'>100%</p>
					  <p className='mt-2 text-gray-400'>Completion</p>
				  </div>
				  <div className='border py-8 rounded-xl shadow-xl'>
					  <p className='text-6xl font-bold text-indigo-600'>24/7</p>
					  <p className='mt-2 text-gray-400'>Delivery</p>
				  </div>
				  <div className='border py-8 rounded-xl shadow-xl'>
					  <p className='text-6xl font-bold text-indigo-600'>100k</p>
					  <p className='mt-2 text-gray-400'>Transaction</p>
				  </div>
			  </div>
		  </div>	  
	</div>
  )
}

export default About