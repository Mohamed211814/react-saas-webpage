import React from 'react'

import user1 from '../assets/imgs/1.jpg'
import user2 from '../assets/imgs/2.jpg'
import user3 from '../assets/imgs/3.avif'
import user4 from '../assets/imgs/4.jpg'
import user5 from '../assets/imgs/5.jpg'
import user6 from '../assets/imgs/6.jpeg'


export default function Reviews() {

  const items = [
    {
      name : 'john doe',
      job : 'software engineer',
      desciption : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nobis inventore, impedit eaque ipsum magni deserunt pariatur blanditiis consectetur aliquam quibusdam, quasi culpa sequi ut',
      user : user1
    },
    {
      name : 'john doe',
      job : 'software engineer',
      desciption : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nobis inventore, impedit eaque ipsum magni deserunt pariatur blanditiis consectetur aliquam quibusdam, quasi culpa sequi ut',
      user : user2
    },
    {
      name : 'john doe',
      job : 'software engineer',
      desciption : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nobis inventore, impedit eaque ipsum magni deserunt pariatur blanditiis consectetur aliquam quibusdam, quasi culpa sequi ut',
      user : user3
    },
    {
      name : 'john doe',
      job : 'software engineer',
      desciption : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nobis inventore, impedit eaque ipsum magni deserunt pariatur blanditiis consectetur aliquam quibusdam, quasi culpa sequi ut',
      user : user4
    },
    {
      name : 'john doe',
      job : 'software engineer',
      desciption : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nobis inventore, impedit eaque ipsum magni deserunt pariatur blanditiis consectetur aliquam quibusdam, quasi culpa sequi ut',
      user : user5
    },
    {
      name : 'john doe',
      job : 'software engineer',
      desciption : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nobis inventore, impedit eaque ipsum magni deserunt pariatur blanditiis consectetur aliquam quibusdam, quasi culpa sequi ut',
      user : user6
    },
 
  ]

  return (
    <div className=''>
      <div className='text-center mt-20 mb-14'>
        <h1 className='text-2xl lg:text-5xl text-center mt-12 my-5'>What People are saying</h1>
      </div>

      <div className='w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          items.map((item , index) => (
            <div className='border border-gray-600 bg-[#110F0F] mx-3 my-6 px-5 py-6 rounded-md'>
              <p className='text-sm text-gray-500'>{item.desciption}</p>

              <div className='flex gap-4 items-center pt-8'>
                <img className='w-[40px] rounded-full' src={item.user} alt="" />
                <span className='text-sm'>
                  <p className='text-gray-400 text-[16px]'>{item.name}</p>
                  <p className='text-gray-500'>{item.job}</p>
                </span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
