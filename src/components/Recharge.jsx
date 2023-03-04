import React from 'react'
import IMG1 from '../assets/Jinx.png'

const Recharge = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={IMG1} alt="" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#32c8ff] uppercase font-bold'>Skin up your champions</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>PATCH 4.1 PREVIEW</h1>
                <p>What’s new in Patch 4.1: High Five, coming March 16 UTC! Learn about our mean (and green) new champions, gameplay updates, events, and skins in this Patch Preview.</p>
                <button className='bg-black text-[#32c8ff] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-[#32c8ff] hover:text-black cursor-pointer'> Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Recharge