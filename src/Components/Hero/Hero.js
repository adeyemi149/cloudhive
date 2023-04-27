import React from 'react'
import bgImg from "../../assests/cyber-bg.png"
import { CloudArrowUpIcon, CircleStackIcon, PaperAirplaneIcon, ServerStackIcon, } from '@heroicons/react/24/solid'

const Hero = () => {
	return (
		<div name="home" className='w-full bg-zinc-200 flex flex-col justify-between md:mt-11'>
			<div className='grid md:grid-cols-2 max-w-[1240px] mx-auto mt-10 justify-center '>
				<div className='flex flex-col justify-center md:items-start w-full px-2 pt-20'>
					<p className='text-2xl'>Unique Sequencing & <span className=''>Production</span></p>
					<h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
					<p className='text-2xl'>This is our Tech brand.</p>
					<button className='px-6 py-3 bg-indigo-500 rounded-lg below:w-full sm:w-[60%] my-4 text-white'>Get Started</button>
				</div>
				<div className='flex justify-center below:pb-2'>
					<img className='w-full' src={bgImg} alt="/" />
				</div>
			</div>
		</div>
	)
}

export default Hero