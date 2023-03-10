import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#32c8ff]'>WildRift</h1>
            <p className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At provident quaerat exercitationem quibusdam, veniam aut nostrum eum repudiandae vitae dolorem eligendi ipsa repellendus ex inventore iste dolores quod modi assumenda.</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaDribbbleSquare size={30}/>
            </div>
            <p className='py-4 text-sm'>2023 Experiences, MaG DoG. All rights reserved</p>
        </div>

        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400'>Solution</h6>
                <ul>
                    <li className='py-2 text-sm'>Service</li>
                    <li className='py-2 text-sm'>Recharge</li>
                    <li className='py-2 text-sm'>Refund</li>
                    <li className='py-2 text-sm'>Report</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Knowledge</li>
                    <li className='py-2 text-sm'>Guide</li>
                    <li className='py-2 text-sm'>News</li>
                    <li className='py-2 text-sm'>Esport</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Contact</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer