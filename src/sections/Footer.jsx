import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-8 px-4 md:px-12 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Contacts */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold text-orange-500">Contact</h2>
          <div className="space-y-2 text-md">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-500" />
              <span>+213 560 637 492</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-500" />
              <span>+213 561 325 535</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-500" />
              <span>+213 540 460 185</span>
            </div>
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-orange-500 mt-1" />
              <span>
                Villa 113 Sidi Mbarek, route de Aïn Naadja, Birkhadem – Alger
              </span>
            </div>
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-orange-500 mt-1" />
              <span>
                Zone d’activité n°2, numéro 05, Ouled Moussa – Boumerdès
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-orange-500" />
              <span>om.nd@outlook.fr</span>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">Localisation</h2>
          <div className="w-full h-64 rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Localisation"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.254013069261!2d3.056286376243573!3d36.716460272271085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad0001b63439%3A0xeec4c1cb2306803!2sSARL%20OM%20ND%20construction!5e0!3m2!1sfr!2sdz!4v1754591409657!5m2!1sfr!2sdz"
              className="border-0"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer base */}
      <div className="mt-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SARL OM ND – Tous droits réservés.
      </div>
    </footer>
  );
};


