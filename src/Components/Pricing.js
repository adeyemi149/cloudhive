import React from 'react'
import { useEffect } from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Pricing = () => {
	useEffect(() => {
		Aos.init({duration: 1400});
	}, [])
  return (
	<div name="pricing" className='w-full text-white my-24'>
		  <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>
		  
		  <div className='max-w-[1240px] mx-auto py-12'>
			  <div className='text-center py-8 text-slate-300' data-aos = "zoom-out-up">
				  <h2 className='text-3xl uppercase'>Pricing</h2>
				  <h3 className='text-5xl font-bold text-white py-8'>The right price for your research</h3>
				  <p className='text-3xl'>Ea do esse pariatur mollit magna culpa sunt tempor consequat ullamco consequat exercitation. Minim laborum nulla veniam officia officia nisi minim. Pariatur velit enim sunt quis Lorem labore pariatur ullamco enim do nostrud. Excepteur exercitation ex sit deserunt esse pariatur officia labore proident consectetur. </p>
			  </div>

			  <div className='grid md:grid-cols-2'>
				  	<div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl' data-aos = "zoom-in-right">
						<span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm relative'>Standard</span>
						<div>
						  <p className='text-6xl font-bold py-4 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
					  	</div>
					  	<p className='text-2xl py-8 text-slate-500'>Ea do esse pariatur mollit magna culpa sunt tempor consequat</p>
					  	<div className='text-2xl relative'>
						  <p className='flex py-4'><CheckIcon className='w-7 mr-5 text-green-600' />Lorem, ipsum dolor.</p>
						  <p className='flex py-4'><CheckIcon className='w-7 mr-5 text-green-600' />Lorem, ipsum dolor.</p>
						  <p className='flex py-4'><CheckIcon className='w-7 mr-5 text-green-600' />Lorem, ipsum dolor.</p>
						  <p className='flex py-4'><CheckIcon className='w-7 mr-5 text-green-600' />Lorem, ipsum dolor.</p>
						  <p className='flex py-4'><CheckIcon className='w-7 mr-5 text-green-600' />Lorem, ipsum dolor.</p>
						  <button className='w-full bg-indigo-500 py-4 my-4 border-indigo-500 rounded-lg text-white hover:bg-white hover:text-indigo-500 hover:border-2'>Get Started</button>
						</div>
					</div>
				  <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl' data-aos = "zoom-in-left">
					  <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm relative'>Premium</span>
					  <div>
						  <p className='text-6xl font-bold py-4 flex'>$99<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
					  </div>
					  <p className='text-2xl py-8 text-slate-500'>Ea do esse pariatur mollit magna culpa sunt tempor consequat</p>
					  <div className='text-2xl relative'>
						  <p className='flex py-4'><CheckIcon className='w-7 mr-5 text-green-600' />Lorem, ipsum dolor.</p>
						  <p className='flex py-4'><CheckIcon className='w-7 mr-5 text-green-600' />Lorem, ipsum dolor.</p>
						  <p className='flex py-4'><CheckIcon className='w-7 mr-5 text-green-600' />Lorem, ipsum dolor.</p>
						  <p className='flex py-4'><CheckIcon className='w-7 mr-5 text-green-600' />Lorem, ipsum dolor.</p>
						  <p className='flex py-4'><CheckIcon className='w-7 mr-5 text-green-600' />Lorem, ipsum dolor.</p>
						  <button className='w-full bg-indigo-500 py-4 my-4 border-indigo-500 rounded-lg text-white hover:bg-white hover:text-indigo-500 hover:border-2'>Get Started</button>
					</div>
				</div>
			</div>

		  </div>
	</div>
  )
}

export default Pricing