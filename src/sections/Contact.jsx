import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiLoader } from "react-icons/fi";
import emailjs from "emailjs-com";
import maps from '../assets/mapsAlgeria.png';

export const ContactUs = () => {
  const sectionRef = useRef(null);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !phone || !message) {
      toast.error("Veuillez remplir tous les champs.");
      return;
    }

    setLoading(true);

    try {
      const result = await emailjs.send(
        "service_7lqbsbd",
        "template_kq4xhm9",
        {
          from_name: fullName,
          phone_number: phone,
          message: message,
          email: "Om.nd@outlook.fr",
        },
        "Jev5XiMOrFYG1ObNp" //public keys
      );

      console.log("EmailJS result:", result.text);
      toast.success("Message envoyé avec succès !");
    } catch (emailError) {
      console.error("EmailJS error:", emailError);
      toast.error("Échec de l'envoi de l'email.");
    } finally {
      setLoading(false);
    }

    setFullName("");
    setPhone("");
    setMessage("");
  };

  return (
    <section
      id="Contact nous"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      div
      {/* Image de fond carte Algérie */}
      <img
        src={maps}
        alt="Carte Algérie"
        className="absolute inset-0 w-full h-full object-cover  opacity-100" 
      />
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>

      <Toaster position="top-right" reverseOrder={false} />

      {/* Formulaire */}
      <div className="relative w-full max-w-xl shadow-2xl bg-white/95 backdrop-blur-md text-black rounded-2xl p-8 space-y-6 z-10">
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
            disabled={loading}
            className="w-full py-3 bg-[#ef791e] text-white font-bold rounded-md shadow-md hover:bg-[#d96814] transition-colors duration-300 flex items-center justify-center gap-2"
          >
            {loading && <FiLoader className="animate-spin text-lg" />}
            {loading ? "Envoi en cours..." : "Envoyer le message"}
          </button>
        </form>
      </div>
    </section>
  );
};
