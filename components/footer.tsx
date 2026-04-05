import Link from "next/link";
import { GitBranch, Mail, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-black text-sm">
                MR
              </div>
              <span className="font-bold">Mohammad Radwan</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Développeur Web Full-Stack & Designer UX/UI
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-slate-50">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#projects"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
                >
                  Projets
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
                >
                  Compétences
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
                >
                  Expérience
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-slate-50">
              Ressources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/documents/tableau-synthese-e5.xlsx"
                  download
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors flex items-center gap-1"
                >
                  Tableau E5 (XLSX) <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Mohammad77Radwan/Portfolio-MR#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors flex items-center gap-1"
                >
                  GitHub README <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-slate-50">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:mohammadradwn804@gmail.com"
                  className="hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
                >
                  Email
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <MapPin className="w-4 h-4" />
                Saint-Étienne, France
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © {currentYear} Mohammad Radwan. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Mohammad77Radwan"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-11 min-w-11 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50"
                aria-label="GitHub"
              >
                <GitBranch className="w-5 h-5" />
              </a>
              <a
                href="mailto:mohammadradwn804@gmail.com"
                className="min-h-11 min-w-11 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
