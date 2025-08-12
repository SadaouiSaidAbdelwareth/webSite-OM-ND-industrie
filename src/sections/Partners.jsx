import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// Logos partenaires
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo8 from "../assets/logo8.png";

// Représentants internationaux
import rep1 from "../assets/logo6.png";
import rep2 from "../assets/logo7.png";
import rep3 from "../assets/logo9.png";

export const Partners = () => { 
  const sliderRef = useRef(null);
  const partners = [logo1, logo2, logo3, logo4, logo5, logo8];

  useEffect(() => {
    const slider = sliderRef.current;

    gsap.to(slider, {
      xPercent: -50, // défile sur la moitié (car doublé)
      repeat: -1, // boucle infinie
      ease: "linear",
      duration: 20, // vitesse
    });
  }, []);

  return (
    <section className="w-full overflow-hidden bg-white py-8 space-y-12">
      {/* Nos partenaires locaux */}
      <div className="relative w-full">
        <h1 className="text-center font-bold text-3xl text-[#ef791e] mb-6">
          Nos partenaires locaux
        </h1>
        <div
          ref={sliderRef}
          className="flex gap-12 w-max"
          style={{ willChange: "transform" }}
        >
          {[...partners, ...partners].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index}`}
              className=" size-50 object-contain"
            />
          ))}
        </div>
      </div> 

      {/* Nos représentants internationaux */}  
      <div className="w-full text-center">
        <h1 className="font-bold text-3xl text-[#ef791e] mb-6">
          Nos représentants internationaux
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {[rep1, rep2, rep3].map((rep, index) => (
            <div
              key={index}
              className="max-w-xs w-full shadow-lg rounded-lg overflow-hidden bg-white hover:scale-110 transition-all duration-200"
            >
              <img
                src={rep}
                alt={`Représentant ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
