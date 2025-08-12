import React, { useEffect, useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import logomobile from '../assets/logomobile.png';
import logo from '../assets/logo.png';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
export const NavBar = () => {   
    const [isMenuClicked,setIsMenuClicked] = useState(false)
    const menu = ['Acceuil','Presentations','Services','Produits','Contactez nous']
    const [isScrolling,setIsScrolling] = useState(false)
    useEffect(()=>{
        function handleClickOutside(event) {
            if (overlayRef.current && event.target === overlayRef.current) {
            setIsMenuClicked(false);
            }
             }

         document.addEventListener('mousedown', handleClickOutside);

  
        window.addEventListener('scroll',()=>{setIsScrolling(window.scrollY>20)})

        return ()=> {window.removeEventListener('scroll',()=>{setIsScrolling(window.scrollY>10)})
                     document.removeEventListener('mousedown', handleClickOutside);
}


    },[])

   const navBarRef = useRef()
   const overlayRef = useRef();


    useGSAP(()=>{
        gsap.from(navBarRef.current, {
        y: -100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
        });

    },[])


    
  return (  
    
    <div ref={navBarRef}  className={`   z-20 top-0  h-[81px]     flex w-full max-w-screen-2xl justify-between items-center ${isScrolling ? ' sticky transform transition-all duration-500 rounded-3xl  top-0 shadow-2xl bg-[#9a9a9a]' : 'absolute'} `}>
        <img src={logo} alt="logo" className={`  ml-3.5   ${isScrolling ? 'size-20 mt-0 transform transition-all duration-400 ' : 'size-30 mt-12'} `} /> 
        <div className='lg:flex hidden w-auto space-x-18 mr-6'>     
        {menu.map((item, id) => (
            <a key={id} href={`#${item}`} className=" relative pb-1 text-white before:absolute before:bottom-0 before:left-0 before:content-[''] before:w-0 before:h-[4px] before:bg-[#ef791eb1] before:transition-all before:duration-300 hover:before:w-full ">
                {item}
            </a>
        ))}

        </div>

        {/*for mobile */}
        <button className='lg:hidden flex mr-2' onClick={()=>setIsMenuClicked(!isMenuClicked)}> <CiMenuBurger size={'30px'} /></button>
        {isMenuClicked?
        <div className=' w-full'>
        <div className=' text-white rounded-4xl   pt-6 w-2/3 h-screen absolute top-0 right-0 flex flex-col space-y-3 shadow-2xl bg-white '>   
        <button className=' text-black self-end mr-4' onClick={()=>setIsMenuClicked(!isMenuClicked)}> <CiMenuBurger size={'25px'}  /></button>
        <img src={logomobile} alt="" className=''  />
        <div className=' flex flex-col '>
            {menu.map((item, id) => (
            <a onClick={()=>setIsMenuClicked(false)} key={id} href={`#${item}`} className=' pl-10 text-lg font-medium   py-3 block  text-black hover:text-[#ef791e] hover:scale-105     '>
                {item} 
            </a>
        ))}

        </div>
        
        

        </div>
        <div ref={overlayRef} className='w-1/3 h-screen absolute top-0 left-0 bg-[#575756] opacity-60 '>

        </div>
        </div>
        :
        null}


        
    </div>

    

    
  )
}
