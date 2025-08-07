import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const ContactUs = () => {
  const sectionRef = useRef(null);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Animation GSAP à l'apparition
  useEffect(() => {
   
    
  }, []);

  // Simulation d’envoi de formulaire (API POST)
  useEffect(() => {
    if (submitted) {
      const sendData = async () => {
        try {
          const response = await fetch("https://api.example.com/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fullName, phone, message }),
          });

          if (response.ok) {
            alert("Message envoyé avec succès !");
            setFullName("");
            setPhone("");
            setMessage("");
          } else {
            alert("Erreur lors de l'envoi du message.");
          }
        } catch (error) {
          alert("Erreur de connexion.");
        }
      };

      sendData();
      setSubmitted(false); // reset
    }
  }, [submitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !phone || !message) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section
      id="Contact nous"
      ref={sectionRef}  
      className="min-h-screen flex items-center justify-center bg-gradient-to-b  px-4 py-20"
    >
      <div className="w-full max-w-xl  shadow-2xl bg-white text-black rounded-2xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-[#ef791e]">
          Contactez-nous
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nom complet
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ef791e] focus:border-transparent transition-all duration-300"
              placeholder="Entrez votre nom complet"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Numéro de téléphone
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ef791e] focus:border-transparent transition-all duration-300"
              placeholder="06XXXXXXXX"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ef791e] focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Écrivez votre message ici..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#ef791e] text-white font-bold rounded-md shadow-md hover:bg-[#d96814] transition-colors duration-300"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
};


