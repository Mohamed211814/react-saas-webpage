import React from 'react'

import vid1 from '../assets/videos/dev1.mp4'
import vid2 from '../assets/videos/dev2.mp4'

export default function Hero() {
  return (
    <div className='text-white py-10'>
        <div className='flex justify-center items-center'>
            <h1 className='font-semibold w-[50%] text-3xl md:text-4xl lg:text-5xl text-center'><span className='text-orange-600'>Virtual Ir builder tools</span> for developers</h1>
        </div>

        <div className='w-[60%] m-auto my-8'>
            <p className='text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit inventore. Alias aperiam veritatis voluptatibus molestias minima similique eos, aspernatur sapiente! Lorem ipsum dolor sit amet.</p>
        </div>

        <div className='flex justify-center items-center gap-4'>
            <button className='border rounded-md py-2 px-3 font-semibold mt-4 mb-4 bg-orange-700'>Start for free</button>
            <button className='border rounded-md py-2 px-3 font-semibold mt-4 mb-4'>Documentation</button>
        </div>

        <div className='flex justify-center flex-col items-center md:flex-row gap-6 mt-14'>
            <video autoPlay loop muted src={vid1} className=' border px-2 py-1 rounded-md w-[350px] lg:w-[500px]'></video>
            <video autoPlay loop muted src={vid2} className=' border px-2 py-2 rounded-md w-[350px] lg:w-[500px]'></video>
        </div>
    </div>
  )
}
