import React from 'react'

import { FaRegCheckCircle } from "react-icons/fa";


export default function Pricing() {

    const items = [
        
        {
            subscribtion : 'Free',
            price : '$0',
            share : 'Private board sharing',
            storage : '5 GB Storing',
            analy : 'Web Analytics (Advance)',
            private : 'Private Mode'
        },
        {
            subscribtion : 'Pro',
            most:'(Most Popular)',
            price : '$10',
            share : 'Private board sharing',
            storage : '10 GB Storing',
            analy : 'Web Analytics',
            private : 'Private Mode'
        },
        {
            subscribtion : 'Enterprise',
            price : '$200',
            share : 'Private board sharing',
            storage : 'Unlimited Storage',
            analy : 'High Preformance Network',
            private : 'Private Mode'
        },
    ]

  return (
    <div> 
        <div className="w-[80%] m-auto mb-10">
            <h1 className='text-2xl lg:text-5xl text-center mt-12 my-10'>Pricing</h1>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                {
                    items.map((item , index) => (
                        <div key={index} className='border border-stone-500 rounded-md px-14 py-5'>
                            <h1 className='text-3xl my-5'>{item.subscribtion} <span className='text-xl text-orange-400'>{item.most}</span></h1>
                            <h1 className='text-4xl mb-5'>{item.price}<span className='text-sm text-orange-600'>/month</span></h1>
                            <p className='flex items-center gap-2 mb-5'> <FaRegCheckCircle className='text-green-200'/>{item.share}</p>
                            <p className='flex items-center gap-2 mb-5'> <FaRegCheckCircle className='text-green-200'/>{item.storage}</p>
                            <p className='flex items-center gap-2 mb-5'> <FaRegCheckCircle className='text-green-200'/>{item.analy}</p>
                            <p className='flex items-center gap-2 mb-5'> <FaRegCheckCircle className='text-green-200'/>{item.private}</p>
                            <div className='flex justify-center'>
                                <button className='border border-orange-900 rounded-md px-12 py-1 my-5 hover:bg-orange-600'>Subscribe</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
