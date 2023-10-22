import React from 'react'
import { FaGithub, FaInstagram, FaTwitter, FaTwitch } from "react-icons/fa"
import {BsFacebook} from "react-icons/bs"

const Footer = () => {
  return (
	<div className='w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2'>
		  <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
			  <div>
				  <h1 className='font-bold uppercase pt-2'>Solutions</h1>
				  <ul>
					  <li className='py-1 px-0'>Marketing</li>
					  <li className='py-1 px-0'>Analytics</li>
					  <li className='py-1 px-0'>Commerce</li>
					  <li className='py-1 px-0'>Data</li>
					  <li className='py-1 px-0'>Cloud</li>
				  </ul>
			  </div>
			  <div>
				  <h1 className='font-bold uppercase pt-2'>Support</h1>
				  <ul>
					  <li className='py-1 px-0'>Pricing</li>
					  <li className='py-1 px-0'>Documentation</li>
					  <li className='py-1 px-0'>Guides</li>
					  <li className='py-1 px-0'>API Status</li>
				  </ul>
			  </div>
			  <div>
				  <h1 className='font-bold uppercase pt-2'>Company</h1>
				  <ul>
					  <li className='py-1 px-0'>About</li>
					  <li className='py-1 px-0'>Blog</li>
					  <li className='py-1 px-0'>Jobs</li>
					  <li className='py-1 px-0'>Press</li>
					  <li className='py-1 px-0'>Partners</li>
				  </ul>
			  </div>
			  <div>
				  <h1 className='font-bold uppercase pt-2'>Legal</h1>
				  <ul>
					  <li className='py-1 px-0'>Claims</li>
					  <li className='py-1 px-0'>Privacy</li>
					  <li className='py-1 px-0'>Terms</li>
					  <li className='py-1 px-0'>Policies</li>
					  <li className='py-1 px-0'>Conditions</li>
				  </ul>
			  </div>
			  <div className='col-span-2 pt-8 md:pt-2'>
				  <p className='font-bold uppercase'>Subscribe to our newsletter</p>
				  <p className='py-4'>The latest news, article and resources sent to your inbox weekly.</p>
				  <form className='flex- flex-col sm:flex-row'>
					  <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter your email'/>
					  <button className='p-2 mb-4 w-full md:w-[50%] rounded-md'>Subscribe</button>
				  </form>
			  </div>
		  </div>
		  <div className='flex flex-col md:flex-row max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500'>
			  <p className='py-4'>2022 Workflow, LLC. All rights reserved</p>
			  <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
				  <BsFacebook className='hover:text-gray-50 cursor: cursor-pointer transition duration-500' />
				  <FaGithub className='hover:text-gray-50 cursor: cursor-pointer transition duration-500' />
				  <FaInstagram className='hover:text-gray-50 cursor: cursor-pointer transition duration-500' />
				  <FaTwitch className='hover:text-gray-50 cursor: cursor-pointer transition duration-500' />
				  <FaTwitter className='hover:text-gray-50 cursor: cursor-pointer transition duration-500' />
			  </div>
		  </div>
	</div>
  )
}

export default Footer