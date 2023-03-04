import React from 'react'
import IMG2 from '../assets/Ziggs.png'
import IMG3 from '../assets/Blitz.png'
import IMG4 from '../assets/Zed.png'


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white ' src={IMG2} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Normal Pass</h2>
                <p className='text-center text-4xl font-bold'>9600 MMK</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>600 WC</p>
                    <p className='py-2 border-b mx-8'>Random Skin Chest</p>
                    <p className='py-2 border-b mx-8'>Random Role</p>
                </div>
                <button className=' bg-[#32c8ff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:text-[#32c8ff] hover:bg-black cursor-pointer'>Start Unlock</button>
            </div>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent ' src={IMG3} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Elite Pass</h2>
                <p className='text-center text-4xl font-bold'>18000 MMK</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>980 WC</p>
                    <p className='py-2 border-b mx-8'>Random Skin Chest</p>
                    <p className='py-2 border-b mx-8'>Select Your Role</p>
                </div>
                <button className='bg-black text-[#32c8ff] w-[200px] rounded-md font-medium my-6 mx-auto  px-6 py-3 hover:bg-[#32c8ff] hover:text-black cursor-pointer'>Start Unlock</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white ' src={IMG4} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Wild Core</h2>
                <p className='text-center text-4xl font-bold'>120,000 MMK</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>8200 WC</p>
                    <p className='py-2 border-b mx-8'>Bonus 5%</p>
                    <p className='py-2 border-b mx-8'>Member Card</p>
                </div>
                <button className=' bg-[#32c8ff] w-[200px] rounded-md font-medium my-6 mx-auto  px-6 py-3 hover:text-[#32c8ff] hover:bg-black cursor-pointer'>Start Unlock</button>
            </div>
        </div>
    </div>
  )
}

export default Cards