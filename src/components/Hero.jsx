import React from 'react'
import Header from '../assets/Header.jpeg'
import Typed from 'react-typed';


const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#32c8ff] uppercase font-bold p-2'>Recharge with us</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Play with new Skinline</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, easy and refund for</p>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#8E44AD]' strings={['WC', 'WP','PRIME']} typeSpeed={120} backSpeed={140} loop/>
            </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>New season, new chmapions, new skinlines and enjoy your new jurney.</p>
                <button className='bg-[#32c8ff] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#7cdcff] cursor-pointer'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero