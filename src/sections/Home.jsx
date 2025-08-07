import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import  { useRef } from 'react'
import MurRideauVec  from '../assets/MurRideauVec.png'
import aluminuim  from '../assets/aluminuim.png'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import homepage1  from '../assets/homepage1.png'
import homepage2  from '../assets/homepage2.png'
import homepage3  from '../assets/homepage3.png'
import bgPhoto  from '../assets/bgPhoto.webp'   

import { TfiLayoutLineSolid } from "react-icons/tfi";


export const Home = () => {
 const titleRef = useRef() 
 const imgRef1 = useRef() 
 const imgRef2 = useRef() 
  const req1Ref = useRef(null);
  const req2Ref = useRef(null);
  const req3Ref = useRef(null);
  useGSAP(()=>{
    gsap.from(titleRef.current,{ y:100,opacity:0,duration:1}  ) // rotation : 360 x: 100 y :100
    gsap.from(imgRef1.current,{
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out', 
      delay: 0.2,})

    gsap.from(imgRef2.current,{x:100,opacity:0,duration:1.2,delay:0.2})  
    gsap.from(
      [req1Ref.current, req2Ref.current, req3Ref.current],
      {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.5,
        ease: "power2.out",
        delay:1
      }
    );

  },[])
  return (
    <div id='Acceuil' className='  relative   h-[800px] flex flex-col  space-y-5  '
    style={{  
      fontFamily:'var(--font-Barlow)' 
    }} >
      <div className=' py-[140px] lg: ml-20'>
      <h1 ref={titleRef} className=' z-10 lg:text-[45px] md:text-[30px] text-3xl font-bold' style={{fontFamily:'var(--font-main)',color:'var(--color-primary)'}} >DÉFIEZ LE TEMPS, RÉNOVEZ VOS FAÇADES</h1>
      <h4 className=' z-10 text-xl font-meduim'  style={{fontFamily:'var(--font-Roboto)'}} >
      Un réseau national expert du ravalement de façade.
      </h4>
    <div className=' w-auto mt-5 flex flex-col'>  
      <div ref={req1Ref}>
        <RequirementComponent
          urlImg={homepage1}
          title='Ravalement et protection de façade'
          description='Rénovation de vos murs, du nettoyage à la pose de revêtements de décoration et imperméables.'
        />
      </div>
      <hr className="my-4 lg:w-[830px] border-gray-300" />

      <div ref={req2Ref}>
        <RequirementComponent
          urlImg={homepage2}
          title='Traitement des fissures'
          description='Réparation et consolidation de vos fissures avant la pose d un revêtement neuf.'
        />
      </div>
      <hr className="my-4 lg:w-[830px] border-gray-300" />

      <div ref={req3Ref}>
        <RequirementComponent
          urlImg={homepage3}
          title='Traitement de l humidité'
          description='Solutions définitives contre les remontées capillaires qui dégradent vos façades.'
        />
      </div>

    </div>  
    </div>
      <img ref={imgRef1} src={bgPhoto} alt="" className=' -z-10   absolute w-full h-full  md:opacity-70 opacity-30' />

    </div>
  )
}

const RequirementComponent = ({urlImg,title,description})=> {
  return(
    <div className=' lg:w-[830px] z-10 flex space-x-3 items-center hover:cursor-pointer hover:text-[#ef791ec2]'>
      <img src={urlImg} alt="" className=' size-25' />
      <IoArrowForwardCircleOutline size={'40px'} style={{color:'var(--color-primary)'}} />
      <div className=' flex flex-col space-y-6'>
      <h1 className=' font-semibold text-2xl '>{title}</h1>
      <p className=' z-100 md:font-medium text-md font-semibold '>{description}</p>

      </div>

    </div>
  )
}
