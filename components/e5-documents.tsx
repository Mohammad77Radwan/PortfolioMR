import { Download, ExternalLink } from "lucide-react";

const documents = [
  {
    title: "Tableau de synthèse E5",
    href: "/documents/tableau-synthese-e5.xlsx",
  },
  {
    title: "Attestation de stage 1re année",
    href: "/documents/attestation-stage-1.pdf",
  },
  {
    title: "Attestation de stage 2e année",
    href: "/documents/attestation-stage-2.pdf",
  },
];

export function E5Documents() {
  return (
    <section id="documents-e5" className="relative py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Documents Officiels E5</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mb-8">
          Accès direct aux pièces exigées par le jury: tableau de synthèse et attestations de stage.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {documents.map((doc) => (
            <a
              key={doc.href}
              href={doc.href}
              download
              className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-md transition-all dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="flex items-center justify-between mb-3">
                <Download className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </div>
              <p className="font-semibold text-slate-900 dark:text-slate-50">{doc.title}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                {doc.href.endsWith(".xlsx") ? "Fichier XLSX téléchargeable" : "PDF téléchargeable"}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
