import React, { useRef, useState } from 'react'
import { TfiLayoutLineSolid } from "react-icons/tfi";
import HPLFACADE from  "../assets/HPLFACADE.jpg"
import CERAMICFAÇADE from '../assets/CERAMICFAÇADE.jpg'
import CAPOTETSERRURE from '../assets/Capot-et-serrure.png'
import GARDECORPS from '../assets/Garde-corps.png'
import ALUMINIUM_MENUISERIE from '../assets/minuiserie-alliminiium.jpg'
import MurRideauVec from '../assets/MurRideauVec.png'

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
    <div ref={sectionRef} id='Produits'  className=' px-5 py-[120px] lg:px-16 xl:px-24   flex flex-col    space-y-15'>
              <div className=' Productstitle flex items-center space-x-3'>
                <TfiLayoutLineSolid size={'30px'} color='#ef791e' />
                <h1 className=' uppercase text-3xl font-bold' style={{color:'var(--color-primary)',fontFamily:'var(--font-Roboto)' }} >Nos Produits</h1>
              </div> 
              <div className='  w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-7'>
              <ProductComponenet 
              imageUrl={HPLFACADE} 
              title="FAÇADE VENTILÉE EN HPL"
              description={
                <>
                  <p>Avantages du HPL :</p>
                  <ul>
                    <li><strong>Résistance</strong> : Le HPL est résistant à l'abrasion, à la corrosion chimique et aux chocs. Il est également retardateur de flamme.</li>
                    <li><strong>Durabilité</strong> : Il est conçu pour durer et peut supporter des températures extrêmes, de -40°C à 180°C.</li>
                    <li><strong>Entretien facile</strong> : Sa surface non poreuse est facile à nettoyer.</li>
                    <li><strong>Performance</strong> : Il offre une bonne isolation acoustique et une faible émission de composés organiques volatils (COV).</li>
                    <li><strong>Écologique</strong> : Le HPL est un matériau recyclable et est fabriqué de manière à être respectueux de l'environnement.</li>
                  </ul>
                  <p><strong>Garantie :</strong><br />Le HPL est livré avec une garantie de 10 ans contre la décoloration et le délaminage.</p>
                </>
              }
              />
              <ProductComponenet
              imageUrl={CERAMICFAÇADE}
              title="Façade ventilée en céramique"
              description={`Découvrez la façade ventilée en céramique, une solution de construction performante alliant esthétisme et isolation thermique. Notre système, conçu pour protéger votre bâtiment des agressions extérieures tout en optimisant les économies d'énergie, garantit un confort durable. Le document illustre les différentes méthodes de pose et de fixation pour s'adapter à vos projets, que ce soit pour des constructions neuves ou des rénovations.`}
            />
            <ProductComponenet
              imageUrl={CAPOTETSERRURE}
              title="Capot et serrure"
              description={`Découvrez le système de façade légère "Capot et serrure", une solution non porteuse assurant la fermeture de l'enveloppe du bâtiment tout en garantissant une excellente étanchéité. Fixés étage par étage sur une ossature rigide, les panneaux – souvent en verre – sont maintenus grâce au capot et à la serrure. L’ossature en montants et traverses est solidement ancrée à la structure du bâtiment. Ce système allie protection contre les intempéries et apport lumineux optimal.`}
            />
            <ProductComponenet
              imageUrl={GARDECORPS}
              title="Garde corps"
              description={`Nos garde-corps en verre sont la garantie d'une sécurité maximale et d'une luminosité préservée. Sur mesure et personnalisables, ils s'adaptent à toutes vos envies pour un rendu épuré et moderne.`}
            />
            <ProductComponenet
            imageUrl={ALUMINIUM_MENUISERIE}
            title="Menuiserie Aluminium"
            description={`Découvrez l'élégance et la robustesse de nos solutions en menuiserie aluminium. Spécialisés dans la conception et l'installation de fenêtres, portes, vérandas et murs-rideaux, nous vous proposons des produits sur mesure alliant esthétisme et durabilité. L'aluminium, connu pour sa résistance et sa légèreté, offre des performances exceptionnelles en matière d'isolation thermique et acoustique, garantissant ainsi un confort optimal à votre intérieur.
            
          Grâce à nos profilés fins et à une large palette de finitions, l'aluminium s'adapte à tous les styles architecturaux, du plus classique au plus contemporain. Facile à entretenir et 100% recyclable, il représente un choix écologique et économique pour vos projets de construction ou de rénovation.

          Faites confiance à notre expertise pour transformer votre espace de vie avec des solutions innovantes et performantes.`}
          />
          <ProductComponenet
            imageUrl={MurRideauVec}
            title="Mur rideau VEC"
            description={`Le rideau VEC, ou mur-rideau à vitrage extérieur collé, est un système de façade moderne et élégant. Il se distingue par l'absence de cadres extérieurs visibles, les panneaux de verre étant directement collés sur la structure porteuse. Cela confère à l'édifice une apparence lisse et uniforme, un effet "tout verre" très apprécié en architecture contemporaine.`}
          />






            
              </div>
    </div>
  )
}



const ProductComponenet = ({ imageUrl, title, description }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className=' flex flex-col items-center  h- '>
      <h1 className=' flex items-center justify-center w-full h-20  text-3xl text-white font-extrabold text-center bg-black/60 rounded-xl p-1 backdrop-blur-sm shadow-md'>
        {title}
      </h1> 
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
          absolute top-0 left-0 w-full h-full bg-[white]
          flex flex-col  items-center text-black px-4
          transition-transform duration-500
          ${isHovered ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        
        <p className=' text-sm mt-2'> <p className=' font-bold text-lg mb-2'>Description</p> {description}</p>
      </div>
    </div>

    </div>
  )
}