import { StaticImageData } from 'next/image';
import React from 'react';
import controller from "../assets/console.jpeg"

type ProductProps = {
  
};
const image: StaticImageData = controller
const imageUrl: string = image.src
const Product:React.FC<ProductProps> = () => {
  
  return (
    <div className='p-4  rounded-xl shadow-md  bg-white w-full' >
          <img className='rounded-tr-lg rounded-tl-lg h-80 sm:h-40 w-full object-cover' src={imageUrl} alt="NFT" />
            <h2 className='my-2  text-gray-500 font-normal'> Controller</h2>
            <hr className='my-2' />
          <div className="flex items-center justify-between">
            <p className='font-medium text-orange-400'>$ 12</p>
          <button className='px-3 py-1.5 shadow-lg bg-gray-100 text-gray-700 rounded-xl'>Sport</button>
          </div>
  
  </div>
  )
}
export default Product;