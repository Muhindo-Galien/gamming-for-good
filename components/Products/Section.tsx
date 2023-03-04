import React from 'react';
import Product from '../Product';

type SectionProps = {
  title: string
};

const Section:React.FC<SectionProps> = ({title}) => {
  
  return   <>
            <div className='flex justify-center sm:justify-between max-w-4xl mx-5 text-gray-600'>
                  <h3 className='font-medium text-lg text-gray-600 text-center sm:text-left' id={title}>{title}</h3>
              </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-3 lg:gap-3 py-2.5 mx-4'>
                          {Array(4).fill(null)?.map((item,i:number)=>{
                  return(  
                    <Product key={i+1}/>
                  )
                })}
           </div>
  
  </>
}
export default Section;