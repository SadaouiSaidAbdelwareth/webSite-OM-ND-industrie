import React from "react";
import { Download } from "lucide-react";

export  const  Documents=()=> {
  const documents = [
    {
      title: "Document 1",
      url: "https://drive.google.com/file/d/1wl4ttDuhxknfyhzBea6MupVBvV9Xozb5/preview", 
      filename: "OMND_document1.pdf",
    },
    {
      title: "Document 2",
      url: "https://drive.google.com/file/d/1Nr2UUpb29wd10dRcIx0WHmY-ACMXtNEb/preview",
      filename: "OMND_document2.pdf",
    },
  ];

 const handleDownload = (googleDriveUrl, filename) => {
  try {
    // Extraire l'ID du fichier depuis l'URL
    const match = googleDriveUrl.match(/\/d\/(.*?)\//);
    if (!match || !match[1]) {
      throw new Error("ID de fichier introuvable dans l'URL");
    }
    const fileId = match[1];

    // Construire le lien direct de téléchargement
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Créer et cliquer sur le lien
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = filename || "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    console.error("Erreur lors du téléchargement :", err.message);
  }
};

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#ef791e]">
        Documents de SARL OM ND
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
          >
            <h3 className="text-lg font-semibold mb-2 text-[#575750]">
              {doc.title}
            </h3>

            {/* PDF */}
            <div className="w-full aspect-[3/4] border rounded-lg overflow-hidden">
              <iframe
                src={doc.url}
                title={doc.title}
                className="w-full h-full"
                style={{ border: "none" }}
              ></iframe>
            </div>

            {/* Bouton Télécharger */}
            <button
              onClick={() => handleDownload(doc.url, doc.filename)}
              className="mt-4 flex items-center gap-2 bg-[#ef791e] hover:bg-[#d96814] text-white px-4 py-2 rounded-lg shadow transition w-full justify-center"
            >
              <Download size={18} />
              Télécharger
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
