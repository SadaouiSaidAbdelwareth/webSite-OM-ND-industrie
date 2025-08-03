import React, { useRef, useState } from 'react'
import { TfiLayoutLineSolid } from "react-icons/tfi";
import HPLFAÇADE from '../assets/HPLFAÇADE.png'
import GardeCorps from '../assets/GardeCorps.jpg'
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


gsap.registerPlugin(ScrollTrigger);

export const Products = () => {

   const sectionRef = useRef(null);

  useGSAP(() => {
      gsap.from('.Productstitle ', {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        }
      });
    }, []);  

  return (
    <div ref={sectionRef} id='Produits'  className=' px-5 py-[120px] lg:px-16 xl:px-24   flex flex-col    space-y-12'>
              <div className=' Productstitle flex items-center space-x-3'>
                <TfiLayoutLineSolid size={'30px'} color='#ef791e' />
                <h1 className=' uppercase text-3xl font-bold' style={{color:'var(--color-primary)',fontFamily:'var(--font-Roboto)' }} >Nos Produits</h1>
              </div> 
              <div className='  w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-7'>
              <ProductComponenet imageUrl={HPLFAÇADE} title='HPLFAÇADE VENTILÉE  EN HPL' description='description'  />
              <ProductComponenet imageUrl={GardeCorps} title='HPLFAÇADE' description='description'  />
              <ProductComponenet imageUrl={HPLFAÇADE} title='HPLFAÇADE' description='description'  />
              <ProductComponenet imageUrl={HPLFAÇADE} title='HPLFAÇADE' description='description'  />
              <ProductComponenet imageUrl={HPLFAÇADE} title='HPLFAÇADE' description='description'  />
              <ProductComponenet imageUrl={HPLFAÇADE} title='HPLFAÇADE' description='description'  />

              </div>
    </div>
  )
}



const ProductComponenet = ({ imageUrl, title, description }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className='relative w-full h-[400px] rounded-2xl shadow-2xl overflow-hidden  group'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <img src={imageUrl} alt='' className='w-full h-full object-cover' />

      {/* Overlay */}
      <div
        className={`    
          absolute top-0 left-0 w-full h-full bg-[#ef791e8b]
          flex flex-col justify-center items-center text-white px-4
          transition-transform duration-500
          ${isHovered ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p className='text-lg mt-2'>{description}</p>
      </div>
    </div>
  )
}