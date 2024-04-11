import React from 'react'

import img from '../assets/imgs/images.jpeg'

import { FaRegCheckCircle } from "react-icons/fa";


export default function Workflow() {

    const items = [
        {
            title : 'Code merge made easy',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor, sit amet consectetur adipisicing elit. A atque ad ea.'
        },
        {
            title : 'Review code without worry',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor, sit amet consectetur adipisicing elit. A atque ad ea.'
        },
        {
            title : 'Ai assstance to reduce time',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor, sit amet consectetur adipisicing elit. A atque ad ea.'
        },
        {
            title : 'Share work in minutes',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor, sit amet consectetur adipisicing elit. A atque ad ea.'
        },
    ]

  return (
    <div className='mb-10'>
        <h1 className='text-2xl lg:text-5xl text-center mt-12 my-5'>Accelerate your <span className='text-orange-600'>coding workflow</span></h1>
        <div className='w-[80%] m-auto flex justify-around flex-col lg:flex-row items-center'>

            

            <div>
                <img className='md:w-[400px] sm:w-[300px]' src={img} alt="" />
            </div>

            <div className='w-[80%] lg:w-[50%] mt-6'>
            {
                items.map((item , index) => (
                    <div key={index}>
                        <div  className='mb-5'>
                            <h1 className='flex items-center gap-2 mb-1'>
                                <FaRegCheckCircle className='text-green-500'/>
                                {item.title}</h1>
                            <p className='text-sm text-gray-500'>{item.description}</p>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}
