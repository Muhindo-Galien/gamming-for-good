import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import React from 'react';
import hero from '../assets/herobg.jpg'
import Section from './Products/Section';
import Services from './Services';

type HeroProps = {
  
};

const Hero:React.FC<HeroProps> = () => {
  
  return <div className='relative flex flex-col justify-center items-center'>
            <Image src={hero} alt="herobg"    
            className='image_hero max-w-8xl rounded sm:rounded-3xl'
              width={1000}/>
              <div className='text-gray-50 flex flex-col items-center justify-center top-20 absolute w-full sm:w-3/5'>
                  <h1 className='font-semibold text-2xl sm:text-5xl text-center -leading-8 mb-4'>Buy your gamming products</h1>
                  <h1 className='font-semibold text-2xl text-center -leading-8 mb-8'> to help oprhans</h1>

                  <div className="flex  items-center justify-between  bg-[#fff] rounded-3xl w-4/6 sm:w-3/5">
                    <div className="flex items-center py-2 px-4 w-full">
                    <FiSearch className='text-gray-500 text-xl'/>
                    <input type="text" placeholder='search a product' 
                    className='pt-2  outline-none border-0 px-5  w-full placeholder: text-gray-800 placeholder:mb-10 placeholder:text-lg' />
                    </div>
                    <button className='bg-blue-900 py-2 px-3 rounded-3xl outline-none border-0 mr-1'>Search</button>
                  </div>
                  <div className='pt-16'>   
                    <Section title={""} />
                    <Section title={"Basketball"} />
                  </div>
                  <Services/>
              </div>
        </div>
}
export default Hero;