import React from 'react'
import { TfiShoppingCartFull } from 'react-icons/tfi';
import { MdSupportAgent } from 'react-icons/md';
import { BsCurrencyDollar } from 'react-icons/bs';


const Services = () => {
  return (
    <div className='text-gray-50 bg-blue-900 w-full justify-between flex'>
      <div>
        <TfiShoppingCartFull/>
      </div>
      <div>
        <MdSupportAgent/>
      </div>
      <div>
        <BsCurrencyDollar/>
      </div>
    </div>
  )
}

export default Services