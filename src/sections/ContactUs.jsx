import React, { useRef, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import toast, { Toaster } from "react-hot-toast";
import { FiLoader } from "react-icons/fi";
import emailjs from "emailjs-com";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);  

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
      // 1️⃣ Save to Supabase
      const { error: supabaseError } = await supabase
        .from("contact_messages")
        .insert([
          {
            full_name: fullName,
            phone_number: Number(phone),
            message: message,
          },
        ]);

      if (supabaseError) {
        toast.error("Erreur lors de l'envoi du message.");
        return;
      }

      // 2️⃣ Send email via EmailJS
      try {
        const result = await emailjs.send(
          "service_6ewwwzw", // Service ID
          "template_42eiaar", // Template ID
          {
            from_name: fullName,
            phone_number: phone,
            message: message,
            email: "ls_sadaoui@esi.dz", // user email if you collect it
          },  
          "EGKZmDyU2d4-c5ooo" // Public key 
        );  

        console.log("EmailJS result:", result.text);
        toast.success("Message envoyé et email transmis avec succès !");
      } catch (emailError) {
        console.error("EmailJS error:", emailError);
        toast.error("Message enregistré mais échec de l'envoi d'email.");
      }

      // 3️⃣ Clear form
      setFullName("");
      setPhone("");
      setMessage("");
    } catch (err) {
      toast.error("Erreur de connexion au serveur.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="Contact nous"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b px-4 py-20"
    >
      <Toaster position="top-right" reverseOrder={false} />

      <div className="w-full max-w-xl shadow-2xl bg-white text-black rounded-2xl p-8 space-y-6">
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
