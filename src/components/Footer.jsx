import React from 'react'

export default function Footer() {

    const items = [
        {
            n1 : 'Resources',
            n2 : 'Getting Started',
            n3 : 'Documentation',
            n4 : 'Tutorials',
            n5 : 'API Reference',
            n6 : 'Community Forums'
        },
        {
            n1 : 'Platform',
            n2 : 'Features',
            n3 : 'Supported Devices',
            n4 : 'Systeme Requirements',
            n5 : 'Downloads',
            n6 : 'Release Notes'
        },
        {
            n1 : 'Community',
            n2 : 'Events',
            n3 : 'Meetups',
            n4 : 'Conferences',
            n5 : 'Hackathons',
            n6 : 'Jobs'
        },
    ]

  return (
    <div className='w-[80%] m-auto grid grid-cols-1 md:text-start md:grid-cols-2 lg:grid-cols-3 text-center gap-20 border-t-[1px] border-gray-500 mt-16 mb-4'>
        {
            items.map((item , index) => (
                <div className='mt-8 text-[16px] text-gray-500'>
                    <h3 className='text-white'>{item.n1}</h3>
                    <p>{item.n2}</p>
                    <p>{item.n3}</p>
                    <p>{item.n4}</p>
                    <p>{item.n5}</p>
                    <p>{item.n6}</p>
                </div>
            ))
        }
    </div>
  )
}
