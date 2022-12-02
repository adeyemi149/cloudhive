import React, { useState } from 'react'
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'
import "../index.css"
import {Link, animateScroll as scroll} from "react-scroll"

const Navbar = () => {
	const [dropDown, setDropDown] = useState(false)

	const handleDropDown = () => {
		setDropDown(!dropDown)
	}

	const handleClose = () => {
		setDropDown(!dropDown)
	}
  return (
	  <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
		  <div className='px-2 flex justify-between items-center w-full h-full'>
			  <div className='flex items-center'>
				  <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>VMware</h1>
				  <ul className='hidden md:flex'>
					  <li className='hover:text-indigo-500 cursor-pointer transition duration-500'><Link to='home' smooth={true}>Home</Link></li>
					  <li className='hover:text-indigo-500 cursor-pointer transition duration-500'><Link to='about' smooth={true} offset={-100} duration={500}>About</Link></li>
					  <li className='hover:text-indigo-500 cursor-pointer transition duration-500'><Link to='support' smooth={true} offset={-70} duration={500}>Support</Link></li>
					  <li className='hover:text-indigo-500 cursor-pointer transition duration-500'><Link to='platforms' smooth={true} offset={-100} duration={500}>Platforms</Link></li>
					  <li className='hover:text-indigo-500 cursor-pointer transition duration-500'><Link to='pricing' smooth={true} offset={-70} duration={500}>Pricing</Link></li>
				  </ul>
			  </div>
			  <div className='hidden md:flex pr-4'>
				  <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
				  <button className='px-8 py-3 text-white bg-indigo-500 rounded-lg'>Sign Up</button>
			  </div>
			  <div onClick={handleDropDown} className='md:hidden cursor-pointer'>
		  		{dropDown ? <XMarkIcon className='h-6 w-6' /> : <Bars4Icon className="h-6 w-6" />}
			  </div>
		  </div>
		  {dropDown && <ul className='absolute bg-zinc-200 w-full px-4 md:hidden'>
			  <li><Link to='home' smooth={true}>Home</Link></li>
					  <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to='about' smooth={true} offset={-100} duration={500}>About`</Link></li>
					  <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to='support' smooth={true} offset={-70} duration={500}>Support</Link></li>
					  <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to='platforms' smooth={true} offset={-100} duration={500}>Platforms</Link></li>
					  <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to='pricing' smooth={true} offset={-70} duration={500}>Pricing</Link></li>
			  <div className='flex flex-col my-4'>
				  <button className='w-full border-2 px-8 py-3 border-indigo-500 rounded-lg bg-transparent text-indigo-500 mb-4 box-border'>Sign In</button>
				  <button className='px-8 py-3 bg-indigo-500 rounded-lg text-white'>Sign Up</button>
			  </div> 
		  </ul>}
	</div>
  )
}

export default Navbar