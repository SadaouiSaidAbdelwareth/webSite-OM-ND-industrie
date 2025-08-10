import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef, useState } from 'react';
import { TfiLayoutLineSolid } from "react-icons/tfi";

gsap.registerPlugin(ScrollTrigger);

export const Presentation = () => { 
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  const fullText = `Sublimez vos façades, valorisez votre patrimoine
Fondée en 2024, la SARL OMND Construction & Aménagement donne vie à vos projets en transformant l’apparence extérieure de vos bâtiments.
Spécialistes du revêtement de façade, nous intervenons sur le neuf comme en rénovation, avec des solutions esthétiques, performantes et durables.`;

  const [displayedText, setDisplayedText] = useState("");             
  const indexRef = useRef(0);
  const animationStarted = useRef(false);

  useGSAP(() => {
    gsap.from('.Presentationstitle', {
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

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 70%',
      onEnter: () => {
        if (!animationStarted.current) {
          animationStarted.current = true;
          typeText();
        }
      }
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const typeText = () => {
    if (indexRef.current < fullText.length) {
      setDisplayedText((prev) => prev + fullText[indexRef.current]);
      indexRef.current += 1;
      gsap.delayedCall(0.02, typeText); // vitesse ici
    }
  };

  return (  
    <div
      id="Presentations"  
      ref={sectionRef}  
      className="py-[120px] lg:px-16 xl:px-24 px-5 flex flex-col justify-center space-y-12"
    >
      <div className="Presentationstitle flex items-center space-x-3">
        <TfiLayoutLineSolid size={'35px'} color="#ef791e" />
        <h1
          className="uppercase text-3xl font-bold"
          style={{
            color: 'var(--color-primary)',
            fontFamily: 'var(--font-Roboto)',
          }}
        >
          présentation de l'entreprise
        </h1>
      </div>

      <div className="text-lg font-light  whitespace-pre-wrap leading-relaxed">
        {displayedText}
        <span className="inline-block w-[2px] h-[20px] bg-black animate-pulse ml-1 align-middle" />
      </div>
    </div>
  );
};
