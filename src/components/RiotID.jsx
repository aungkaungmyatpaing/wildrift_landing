import React from 'react'

const RiotID = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want a skin giveaway in every update?</h1>
                <p>Sign in your riot account and stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Your Riot Account' />
                    <button className='text-black bg-[#32c8ff] w-[200px] rounded-full font-medium ml-4 my-6 px-6 py-3 hover:bg-[#7cdcff] hover:text-black cursor-pointer'>Sign in</button>
                </div>
                <p>We care about the protection of your data. Read our <span className='text-[#32c8ff]'>Privacy Policy</span></p>
            </div>
        </div>
    </div>
  )
}

export default RiotID