import Hero from '@/components/Hero';
import Section from '@/components/Products/Section';
import React from 'react';

type pageProps = {
  
};

const Homepage:React.FC<pageProps> = () => {
  
  return <div className='py-20'>
    <Hero/>
  </div>
}
export default Homepage;