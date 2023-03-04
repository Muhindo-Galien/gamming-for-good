"use client"; // this is a client component
import Link from 'next/link';
import React, { useState } from 'react'
import Image from 'next/image';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import logo from '../assets/edited1.png'

const Header = () => {
  const [touch,setTouch] = useState(false)
  const [active, setActive] = useState(1)
  const [opened, setOpened] = useState(false)
  const handleOpened = ()=>{
    setOpened(!opened)
    console.log("Hello");
    
  }
  console.log("Clicked ",touch);

  const menuOptions = [
    {name:"home",links_to:'/'},
    {name:"about",links_to:'/about'},
    {name:"store",links_to:'/store'},
    {name:"orders",links_to:'/orders'}
  ]

  
  return (
    <div className=" sm:px-8 z-30 mx-auto w-full fixed bg-[#fff] text-gray-800">
        <div className=' flex items-center justify-between py-4 sm:mx-0 mx-4 '>
          <Link href={'/'}>
            <Image src={logo} alt="logo" width={120} height={80} />
          </Link>
          {/* tablet laphrefp */}
          <div className=''>
            <ul className={`sm:flex justify-center gap-4 lg:mx-gap-10 hidden font-normal`}>
              {menuOptions.map((item:{name:string,links_to:string},i:number)=>{
                return(
                <Link href={item.links_to} key={i+1}> 
                  <li 
                  onClick={()=>setActive(i+1)}
                  className={` px-3 py-1  cursor-pointer text-base capitalize ${active === i+1?'font-medium':'text-gray-900 font-light'} `}>
                    {item.name}
                  </li> 
                </Link>)
              })}
            </ul>
          </div>
           {/* phone */}
           <div className={opened?"flex flex-col justify-between z-50 shadow-2xl": "hidden"}>
              <ul className='fixed  p-0 right-0 top-0  gap-3 flex flex-col shadow-xl overflow-hidden h-full w-5/6 max-w-sm py-6 px-4  bg-blue-900  border-r overflow-y-hidden'>
                <div className=" flex justify-between items-center pb-8">
                  <MdClose className='text-3xl text-[#fff]' onClick={()=>handleOpened()}/>
                </div>
                {menuOptions.map((item:{name:string,links_to:string},i:number)=>{
                return(
                <Link href={item.links_to} key={i+1}> 
                  <li 
                  onClick={()=>{setActive(i+1); handleOpened()}}
                  className={`py-1 cursor-pointer ${active === i+1?'border-b-2 text-gray-50':'text-gray-50 font-light  '} `}>
                    {item.name}
                  </li> 
                </Link>)
                
              })}
              <div className=' bottom-2'>
                <div className='flex flex-row justify-between'>
                  <button  
                    type='button' 
                    className='bg-blue-800 font-normal  px-2.5 sm:px-3 py-1.5 rounded text-gray-50 my-1 cursor-pointer'
                    onClick={()=>setTouch(true)}
                    >Login</button>
              
                    <button  
                    type='button' 
                    className='border bg-blue-900  font-medium  px-2.5 sm:px-3 py-1.5 rounded text-gray-50 my-1 cursor-pointer'
                    >Register</button>
                </div>
              </div>
              </ul>
          </div>            
          <div className="sm:hidden block text-gray-50">
              <HiMenuAlt3 className='text-3xl' onClick={()=>handleOpened()}/>
          </div>

            <div className='flex gap-4 items-center'>
                <button  
                type='button' 
                className=' sm:block border border-blue-900 font-normal  px-2.5 sm:px-3 py-1.5 rounded-2xl text-gray-900 my-1 cursor-pointer hidden'
                onClick={()=>setTouch(true)}
                >Login</button>
          
                <button  
                type='button' 
                className=' sm:block border bg-blue-900  font-medium  px-2.5 sm:px-3 py-1.5 rounded-2xl text-gray-50 my-1 cursor-pointer hidden'
                >Register</button>
             
                 {
                opened?(
                    <div className="sm:hidden block">
                        <MdClose className='text-3xl' onClick={()=>handleOpened()}/>
                    </div>
                ):(
                <div className="sm:hidden block">
                    <HiMenuAlt3 className='text-3xl' onClick={()=>handleOpened()}/>
                </div>
                )
              }
            </div>
          </div>
        </div>
  )
}

export default Header