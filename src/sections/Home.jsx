import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { IoArrowForwardCircleOutline } from "react-icons/io5";

// Images
import bgPhoto from '../assets/bgPhoto.webp';
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import slogan from "../assets/slogan.png";

export const Home = () => {
  const titleRef = useRef();
  const imgRef1 = useRef();
  const imgRef2 = useRef();

  useGSAP(() => {
    gsap.from(titleRef.current, { y: 100, opacity: 0, duration: 1 });
    gsap.from(imgRef1.current, {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out',
      delay: 0.2,
    });
    gsap.from(imgRef2.current, { x: 100, opacity: 0, duration: 1.2, delay: 0.2 });
  }, []);

  return (
    <div
      id="Acceuil"
      className="relative h-[750px] flex flex-col justify-between"
      style={{ fontFamily: 'var(--font-Barlow)' }}
    >
      {/* Titre */}
      <div className="pt-[240px] px-6 md:px-20">
        <h1
          ref={titleRef}
          className="z-10 lg:text-[45px] md:text-[30px] text-3xl font-bold text-white"
          style={{ fontFamily: 'var(--font-main)' }}
        >
          Intérieur Aménagement & Revêtement
        </h1>
      </div>

      {/* Image de fond */}
      <img
        ref={imgRef1}
        src={bgPhoto}
        alt=""
        className="absolute inset-0 -z-10 w-full h-full object-cover md:opacity-70 opacity-30"
      />

      {/* Section 3 images en bas */}
      <div className="absolute bottom-0 w-full bg-black/40 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
  {[img1, img2, img3].map((src, i) => (
    <div 
      key={i} 
      className={`w-full sm:w-1/3 max-w-[350px] ${
        i !== 2 ? 'hidden md:block' : ''
      }`}
    >
      <img 
        src={src} 
        alt={`image-${i}`} 
        className="w-full h-[180px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" 
      />
    </div>  
  ))}
</div>         
      {/*   <h1 className=' text-5xl h-20 text-center pt-3'  style={{fontFamily:'var(--font-Satisfy)', color:'var(--color-primary)' }} >The Best for Interface</h1>     */}
      <div className=' w-full flex justify-center'>
        <img src={slogan} className=' mt-2.5 text-center h-30' alt="" />
      </div>
      </div>
    </div>
  );
};



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