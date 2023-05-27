import React, { useEffect } from 'react'
import bgImg from "../../assests/cyber-bg.png"
import App from '../../App.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Hero = () => {
	useEffect(() => {
		Aos.init({duration: 1400});
	}, [])	

	return (
		<div name="home" className='w-full bg-zinc-200 flex flex-col justify-between md:mt-11 relative pb-20 border-0'>
			<div className='grid md:grid-cols-2 max-w-[1240px] mx-auto mt-10 justify-center '>
				<div data-aos="fade-right" className='flex flex-col justify-center md:items-start w-full px-2 pt-20'>
					<p className='text-2xl'>Unique Sequencing & <span className=''>Production</span></p>
					<h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
					<p className='text-2xl'>This is our Tech brand.</p>
					<button className='px-6 py-3 bg-indigo-500 rounded-lg below:w-full sm:w-[60%] my-4 text-white'>Get Started</button>
				</div>
				<div className='flex justify-center below:pb-2'>
					<img data-aos="fade-left" className='w-full' src={bgImg} alt="/" />
				</div>
			</div>
			<div className="custom-shape-divider-bottom-1685185551">
    		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        		<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    		</svg>
			</div>
		</div>
	)
}

export default Hero