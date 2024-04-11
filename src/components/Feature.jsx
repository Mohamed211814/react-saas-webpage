import React from 'react'


import { FaRobot } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { FaShieldAlt } from "react-icons/fa";
import { IoBatteryCharging } from "react-icons/io5";
import { MdElectricalServices } from "react-icons/md";
import { RiGlobalFill } from "react-icons/ri";



export default function Feature() {
  return (
    <div className='flex justify-center flex-col gap-8 w-[70%] m-auto'>
        <div>
            <h2 className='text-orange-600 text-center'>FEATURES</h2>
            <h1 className='text-2xl lg:text-5xl text-center mt-12'>Easily build <span className='text-orange-600'>your code</span></h1>
        </div>

        <div className='flex justify-center flex-col md:flex-row gap-8 mt-14 mb-10'>
            <div>
                <h3 className='flex items-center gap-4 text-xl'><FaRobot className='text-orange-600 text-2xl'/>Drag-and-Drop Interface</h3>
                <p className='text-sm text-gray-400 mt-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident blanditiis a odit ipsam tenetur. Nisi fugiat aliquid assumenda, perferendis animi architecto ipsa error, dolorem in dolores explicabo similique libero corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quos eligendi consectetur odio, amet tempore.</p>
            </div>
            
            <div>
                <h3 className='flex items-center gap-4 text-xl'><TbWorldWww className='text-orange-600 text-2xl'/>Multi-Platform Compatibility</h3>
                <p className='text-sm text-gray-400 mt-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident blanditiis a odit ipsam tenetur. Nisi fugiat aliquid assumenda, perferendis animi architecto ipsa error, dolorem in dolores explicabo similique libero corporis. Lorem ipsum dcolor sit amet consectetur adipisicing elit. Similique quos eligendi consectetur odio, amet tempore.</p>
            </div>

            <div>
                <h3 className='flex items-center gap-4 text-xl'><FaShieldAlt className='text-orange-600 text-xl'/>Built-in Templates</h3>
                <p className='text-sm text-gray-400 mt-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident blanditiis a odit ipsam tenetur. Nisi fugiat aliquid assumenda, perferendis animi architecto ipsa error, dolorem in dolores explicabo similique libero corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quos eligendi consectetur odio, amet tempore.</p>
            </div>
        </div>

        <div className='flex justify-center flex-col md:flex-row gap-8 mt-14 mb-10'>
            <div>
                <h3 className='flex items-center gap-4 text-xl'><IoBatteryCharging className='text-orange-600 text-2xl'/>Real-Time Preview</h3>
                <p className='text-sm text-gray-400 mt-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident blanditiis a odit ipsam tenetur. Nisi fugiat aliquid assumenda, perferendis animi architecto ipsa error, dolorem in dolores explicabo similique libero corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quos eligendi consectetur odio, amet tempore.</p>
            </div>
            
            <div>
                <h3 className='flex items-center gap-4 text-xl'><MdElectricalServices className='text-orange-600 text-2xl'/>Collaboration Tools</h3>
                <p className='text-sm text-gray-400 mt-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident blanditiis a odit ipsam tenetur. Nisi fugiat aliquid assumenda, perferendis animi architecto ipsa error, dolorem in dolores explicabo similique libero corporis. Lorem ipsum dcolor sit amet consectetur adipisicing elit. Similique quos eligendi consectetur odio, amet tempore.</p>
            </div>

            <div>
                <h3 className='flex items-center gap-4 text-xl'><RiGlobalFill className='text-orange-600 text-2xl'/>Analytics Dashboard</h3>
                <p className='text-sm text-gray-400 mt-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident blanditiis a odit ipsam tenetur. Nisi fugiat aliquid assumenda, perferendis animi architecto ipsa error, dolorem in dolores explicabo similique libero corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quos eligendi consectetur odio, amet tempore.</p>
            </div>
        </div>
 
        <div></div>
    </div>
  )
}
