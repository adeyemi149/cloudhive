import React from 'react'
import { PhoneIcon, ArrowSmallRightIcon, CpuChipIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'
import supportImg from "../assests/support.jpg"

const Support = () => {
  return (
	<div name="support" className='w-full mt-24'>
		<div className='w-full h-[700px] bg-gray-900/90 absolute'>
			<img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
		  </div>
		  <div className='max-w-[1240px] mx-auto text-white relative'>
			  <div className='px-4 py-12'>
				  <h2 className='pt-8 text-slate-300 uppercase text-center'>Support</h2>
				  <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
				  <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			  </div>
			  <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
				  <div className='bg-white rounded-xl shadow-2xl'>
					  <div className='p-8'>
						  <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
						  <h3 className='font-bold text-2xl my-6'>Sales</h3>
						  <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
						</div>
						<div className='bg-slate-100 pl-8 py-4'>
							<p className='flex items-center text-indigo-600'>Contact Us <ArrowSmallRightIcon className='w-5 ml-2' /></p>
						</div>
				</div>
				  <div className='bg-white rounded-xl shadow-2xl'>
					  <div className='p-8'>
						  <ComputerDesktopIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
						  <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
						  <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
						</div>
						<div className='bg-slate-100 pl-8 py-4'>
							<p className='flex items-center text-indigo-600'>Contact Us <ArrowSmallRightIcon className='w-5 ml-2' /></p>
						</div>
				</div>
				  <div className='bg-white rounded-xl shadow-2xl'>
					  <div className='p-8'>
						  <CpuChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
						  <h3 className='font-bold text-2xl my-6'>Media inquiries</h3>
						  <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
						</div>
						<div className='bg-slate-100 pl-8 py-4'>
							<p className='flex items-center text-indigo-600'>Contact Us <ArrowSmallRightIcon className='w-5 ml-2' /></p>
						</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Support