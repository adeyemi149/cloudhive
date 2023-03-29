import React, { useEffect, useState } from 'react'
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'
import "../../index.css"
import {Link, animateScroll as scroll} from "react-scroll"

export const Navbar = () => {
	const [dropDown, setDropDown] = useState(false)
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const NavItems = ["About", "Support", "Platform", "Pricing"]

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setIsLoggedIn(true)
	// 	}, 500);
	// }, [])

	const handleDropDown = () => {
		setDropDown(!dropDown)
	}

	const handleClose = () => {
		setDropDown(!dropDown)
	}
  return (
	  <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg px-4'>
		  <div className='hidden'>
			  <div data-testId="custom-element">Custom Html element</div>
			<span title='close'>X</span>
			<label htmlFor='name'>Name</label>
			<input disabled="true" type="text" id='name' placeholder='Fullname' value="testing"/>
		  </div>
		  <div className='px-2 flex justify-between items-center w-full h-full mr-4'>
			  <div className='flex items-center'>
				  <h1 className='hover:animate-pulse text-3xl font-bold mr-4 sm:text-4xl'>VMwares</h1>
				  <ul className='hidden lg:flex content-center'>
					  <li className='hover:text-indigo-500 cursor-pointer transition duration-500'><Link to='home' smooth={true}>Home</Link></li>
					  <li className='hover:text-indigo-500 cursor-pointer transition duration-500'><Link to='about' smooth={true} offset={-100} duration={500}>About</Link></li>
					  <li className='hover:text-indigo-500 cursor-pointer transition duration-500'><Link to='support' smooth={true} offset={-70} duration={500}>Support</Link></li>
					  <li className='hover:text-indigo-500 cursor-pointer transition duration-500'><Link to='platforms' smooth={true} offset={-100} duration={500}>Platforms</Link></li>
					  <li className='hover:text-indigo-500 cursor-pointer transition duration-500'><Link to='pricing' smooth={true} offset={-70} duration={500}>Pricing</Link></li>
				  </ul>
			  </div>
			  <div className='hidden lg:flex pr-4'>
				  {isLoggedIn 
					? <p className='px-8 py-3 text-black'>Welcome</p>
				  : <button onClick={() => setIsLoggedIn(!isLoggedIn)} aria-pressed="true" className='bg-transparent text-black mr-2 border-2 border-indigo-500 px-8 py-3 rounded-lg flex-wrap hover:bg-indigo-500 hover:text-white'>Sign In</button>}
				  <button className='px-8 py-3 text-white bg-indigo-500 rounded-lg'>Sign Up</button>
			  </div>
			  <div onClick={handleDropDown} className='lg:hidden cursor-pointer'>
		  		{dropDown ? <XMarkIcon className='h-6 w-6' /> : <Bars4Icon className="h-6 w-6" />}
			  </div>
		  </div>
		  {dropDown &&
			<ul className='absolute left-0 top-20 mr-4 bg-zinc-200 w-full pl-4 pr-8 lg:hidden z-[-100]'>
			  		<li className='border-b-2 border-zinc-300 w-full'><Link to='home' smooth={true}>Home</Link></li>
					<li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to='about' smooth={true} offset={-100} duration={500}>About</Link></li>
					<li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to='support' smooth={true} offset={-70} duration={500}>Support</Link></li>
					<li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to='platforms' smooth={true} offset={-100} duration={500}>Platforms</Link></li>
					<li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to='pricing' smooth={true} offset={-70} duration={500}>Pricing</Link></li>
			  <div className='flex flex-col my-4'>
				  <button className='w-full border-2 px-8 py-3 border-indigo-500 rounded-lg bg-transparent hover:bg-indigo-500 hover:text-white text-indigo-500 mb-4 box-border'>Sign In</button>
				  <button className='px-8 py-3 bg-indigo-500 rounded-lg text-white'>Sign Up</button>
			  </div> 
			</ul>
		  }
	</div>
  )
}
