import gsap from 'gsap';
import React, { useRef } from 'react'
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import qualite from '../assets/qualite.png'
import reactivite from '../assets/reactivite.png'
import personalisation from '../assets/personalisation.png'

gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
      gsap.from('.Servicestitle ', {
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
    <div ref={sectionRef} id='Services'  className=' px-5 py-[120px] lg:px-16 xl:px-24   flex flex-col    space-y-12'>
          <div className=' Servicestitle flex items-center space-x-3'>
            <TfiLayoutLineSolid size={'30px'} color='#ef791e' />
            <h1 className=' uppercase text-3xl font-bold' style={{color:'var(--color-primary)',fontFamily:'var(--font-Roboto)' }} >Nos Services</h1>
          </div>
          <div className=' w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>
            <ServiceComponent title='Revêtement de façades modernes' description='Solutions esthétiques et durables (HPL, pierre naturelle, enduit projeté, etc.)' />
            <ServiceComponent title='Isolation thermique par lextérieur (ITE)'  description='Pour un confort optimal et des économies dénergie'/>
            <ServiceComponent title='Rénovation et réhabilitation de façades'  description='Remise à neuf avec des matériaux performants et durables'/>
            <ServiceComponent title='Pose de façades ventilées'  description='Systèmes innovants (type HPL sur ossature Fischer ou similaire)'/>
            <ServiceComponent title='Études techniques & design personnalisé'  description='Chaque façade est pensée comme une œuvre unique, adaptée à vos envies et à votre bâtiment'/>
            <ServiceComponent title='Conseil et accompagnement'  description='Du choix des matériaux jusqu à la livraison, nous vous guidons à chaque étape'/>
          </div>
          <div className='text-black bg-white flex flex-col md:flex-row gap-10 md:gap-14 p-6 rounded-2xl shadow-4xl' style={{fontFamily:'var(--font-Barlow)'}}>
          <div className='flex flex-col items-center gap-4 hover:scale-105 transition-all duration-200'>
            <img src={qualite} className='h-40 w-30' alt="" />
            <p className='text-center'>La sélection de nos partenaires est faite avec rigueur. Nous nous engageons à vous proposer uniquement des solutions fiables et à la hauteur de vos exigences</p>
          </div>

          <div className='flex flex-col gap-2 items-center hover:scale-105 transition-all duration-200'>
            <img src={reactivite} className='h-40 w-40' alt="" />
            <p className='text-center'>Grâce à une équipe efficace, dynamique et réactive, nous vous garantissons des réponses rapides et des offres conformes à vos délais, sans compromettre la qualité.</p>
          </div>

          <div className='flex flex-col gap-2 items-center hover:scale-105 transition-all duration-200'>
            <img src={personalisation} className='h-40 w-40' alt="" />
            <p className='text-center'>Nous recherchons les lieux, partenaires et prestations les plus adaptés à vos besoins grâce à notre base de données complète et une grande variété de choix. Chaque projet est unique, et notre approche l'est aussi</p>
          </div>
        </div>
    </div>
  )
}


const ServiceComponent = ({title,description})=> {
  return (
   <div className=' w-auto 
  p-7 rounded-2xl h-[200px] shadow-2xl flex flex-col space-y-4 
  bg-white text-black 
  transition-all duration-700 ease-in-out
  hover:bg-[#ef791e] hover:text-white hover:shadow-3xl hover:scale-105
'>
  <h1 className='text-2xl font-bold' style={{ fontFamily:'Arial'}} >{title}</h1>
  <p>{description}</p>
</div>

  )

}

