import React from 'react'
import {useEffect} from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Allinone() {
	useEffect(() => {
		Aos.init({duration: 1400});
	}, [])
  return (
	<div name="platforms" className='w-full my-40'>
		<div className='max-w-[1240px] mx-auto px-2'>
			  <div data-aos = "zoom-in">
				<h2 className='text-5xl font-bold text-center'>All-In-One</h2>
				<p className='text-2xl py-8 text-gray-500 text-center'>Est tempor minim voluptate voluptate laboris. Esse enim adipisicing amet irure non cupidatat ut incididunt. Voluptate nisi est ad commodo cupidatat Lorem aute ipsum ex do commodo. Officia velit ad elit nulla laboris est officia officia.</p>
			  </div>
			  
			  <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
				  
					<div className='flex'>
						<div>
							<CheckIcon className='w-7 mr-4 text-green-600' />
						</div>
						<div>
						  <h3 className='font-bold text-lg'>Notification</h3>
						  <p className='text-lg pt-2 pb-4'>Laborum cillum sit sunt sit in Lorem sint. Excepteur enim officia tempor amet. Eiusmod mollit do nostrud adipisicing consectetur anim proident. Consequat ullamco consequat irure cupidatat officia irure non est.</p>
						</div>
					</div> 
					<div className='flex'>
						<div>
							<CheckIcon className='w-7 mr-4 text-green-600' />
						</div>
						<div>
						  <h3 className='font-bold text-lg'>Notification</h3>
						  <p className='text-lg pt-2 pb-4'>Laborum cillum sit sunt sit in Lorem sint. Excepteur enim officia tempor amet. Eiusmod mollit do nostrud adipisicing consectetur anim proident. Consequat ullamco consequat irure cupidatat officia irure non est.</p>
						</div>
					</div> 
					<div className='flex'>
						<div>
							<CheckIcon className='w-7 mr-4 text-green-600' />
						</div>
						<div>
						  <h3 className='font-bold text-lg'>Notification</h3>
						  <p className='text-lg pt-2 pb-4'>Laborum cillum sit sunt sit in Lorem sint. Excepteur enim officia tempor amet. Eiusmod mollit do nostrud adipisicing consectetur anim proident. Consequat ullamco consequat irure cupidatat officia irure non est.</p>
						</div>
					</div> 
					<div className='flex'>
						<div>
							<CheckIcon className='w-7 mr-4 text-green-600' />
						</div>
						<div>
						  <h3 className='font-bold text-lg'>Notification</h3>
						  <p className='text-lg pt-2 pb-4'>Laborum cillum sit sunt sit in Lorem sint. Excepteur enim officia tempor amet. Eiusmod mollit do nostrud adipisicing consectetur anim proident. Consequat ullamco consequat irure cupidatat officia irure non est.</p>
						</div>
					</div> 
					<div className='flex'>
						<div>
							<CheckIcon className='w-7 mr-4 text-green-600' />
						</div>
						<div>
						  <h3 className='font-bold text-lg'>Notification</h3>
						  <p className='text-lg pt-2 pb-4'>Laborum cillum sit sunt sit in Lorem sint. Excepteur enim officia tempor amet. Eiusmod mollit do nostrud adipisicing consectetur anim proident. Consequat ullamco consequat irure cupidatat officia irure non est.</p>
						</div>
					</div> 
					<div className='flex'>
						<div>
							<CheckIcon className='w-7 mr-4 text-green-600' />
						</div>
						<div>
						  <h3 className='font-bold text-lg'>Notification</h3>
						  <p className='text-lg pt-2 pb-4'>Laborum cillum sit sunt sit in Lorem sint. Excepteur enim officia tempor amet. Eiusmod mollit do nostrud adipisicing consectetur anim proident. Consequat ullamco consequat irure cupidatat officia irure non est.</p>
						</div>
					</div> 
					<div className='flex'>
						<div>
							<CheckIcon className='w-7 mr-4 text-green-600' />
						</div>
						<div>
						  <h3 className='font-bold text-lg'>Notification</h3>
						  <p className='text-lg pt-2 pb-4'>Laborum cillum sit sunt sit in Lorem sint. Excepteur enim officia tempor amet. Eiusmod mollit do nostrud adipisicing consectetur anim proident. Consequat ullamco consequat irure cupidatat officia irure non est.</p>
						</div>
					</div> 
					<div className='flex'>
						<div>
							<CheckIcon className='w-7 mr-4 text-green-600' />
						</div>
						<div>
						  <h3 className='font-bold text-lg'>Notification</h3>
						  <p className='text-lg pt-2 pb-4'>Laborum cillum sit sunt sit in Lorem sint. Excepteur enim officia tempor amet. Eiusmod mollit do nostrud adipisicing consectetur anim proident. Consequat ullamco consequat irure cupidatat officia irure non est.</p>
						</div>
					</div> 
			  </div>

		</div>	  
	</div>
  )
}

export default Allinone