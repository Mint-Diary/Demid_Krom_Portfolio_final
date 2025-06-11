import { Download, FileText, ExternalLink } from "lucide-react";
import { useTranslation } from "../i18n/index.jsx";

export default function DownloadCard() {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-100 px-4 py-16 lg:px-8 lg:py-20 dark:bg-slate-900 dark:text-slate-100">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3 md:grid-cols-2">
        {/* CV Card */}
        <div className="transform rounded-xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-800/50">
          {/* Header */}
          <div className="rounded-t-xl bg-gradient-to-r from-[#00786F] to-cyan-600 p-6">
            <div className="flex items-center space-x-3">
              <div className="rounded-lg bg-white/20 p-2">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">
                  {t("download.title")}
                </h2>
                <p className="text-sm text-teal-100">
                  {t("download.subtitle")}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="mb-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                {t("download.heading")}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {t("download.description")}
              </p>
            </div>

            {/* File Info */}
            <div className="mb-6 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-700/50">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">
                  {t("download.fileInfo.type")}
                </span>
                <span className="font-medium text-slate-900 dark:text-white">
                  {t("download.fileInfo.typeValue")}
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">
                  {t("download.fileInfo.size")}
                </span>
                <span className="font-medium text-slate-900 dark:text-white">
                  {t("download.fileInfo.sizeValue")}
                </span>
              </div>
            </div>

            {/* Download Button */}
            <a
              href="/CV_DK.pdf"
              download="Demid-Krom-Lebenslauf"
              target="_blank"
              rel="noreferrer"
              className="group w-full"
            >
              <button className="flex w-full items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-600 px-6 py-3 font-semibold text-white transition-all duration-200 group-hover:shadow-lg hover:from-teal-600 hover:to-cyan-700">
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                <span>{t("download.button")}</span>
                <ExternalLink className="ml-1 h-4 w-4 opacity-70" />
              </button>
            </a>

            {/* Footer Note */}
            <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">
              {t("download.footer")}
            </p>
          </div>
        </div>

        {/* Zertifikate & Kurse Card */}
        <div className="transform rounded-xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-800/50">
          {/* Header */}
          <div className="rounded-t-xl bg-cyan-600 p-6">
            <div className="flex items-center space-x-3">
              <div className="rounded-lg bg-white/20 p-2">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Zertifikate & Kurse</h2>
                <p className="text-sm text-cyan-100">Weiterbildungen</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="mb-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                Zertifikate herunterladen
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Alle meine belegten Kurse und erworbenen Zertifikate.
                Nachweis über kontinuierliche Weiterbildung und Kompetenzentwicklung.
              </p>
            </div>

            {/* File Info */}
            <div className="mb-6 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-700/50">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">
                  Format
                </span>
                <span className="font-medium text-slate-900 dark:text-white">
                  PDF
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">
                  Größe
                </span>
                <span className="font-medium text-slate-900 dark:text-white">
                  ~1.2 MB
                </span>
              </div>
            </div>

            {/* Download Button */}
            <a
              href="/Zertifikate_DK.pdf"
              download="Demid-Krom-Zertifikate"
              target="_blank"
              rel="noreferrer"
              className="group w-full"
            >
              <button className="flex w-full items-center justify-center space-x-2 rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white transition-all duration-200 group-hover:shadow-lg hover:bg-cyan-700">
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                <span>Herunterladen</span>
                <ExternalLink className="ml-1 h-4 w-4 opacity-70" />
              </button>
            </a>

            {/* Footer Note */}
            <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">
              Sammlung aller Weiterbildungsnachweise
            </p>
          </div>
        </div>

        {/* Arbeitszeugnis Card */}
        <div className="transform rounded-xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-800/50">
          {/* Header */}
          <div className="rounded-t-xl bg-gradient-to-r from-cyan-600 to-[#00786F] p-6">
            <div className="flex items-center space-x-3">
              <div className="rounded-lg bg-white/20 p-2">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Arbeitszeugnis</h2>
                <p className="text-sm text-teal-100">Aktuelles Zeugnis</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="mb-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                Arbeitszeugnis herunterladen
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Mein aktuelles Arbeitszeugnis mit Referenzen und bestätigten Bewertungen.
                Ein Einblick in meine berufliche Entwicklung und Kompetenzen.
              </p>
            </div>

            {/* File Info */}
            <div className="mb-6 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-700/50">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">
                  Format
                </span>
                <span className="font-medium text-slate-900 dark:text-white">
                  PDF
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">
                  Größe
                </span>
                <span className="font-medium text-slate-900 dark:text-white">
                  ~120 KB
                </span>
              </div>
            </div>

            {/* Download Button */}
            <a
              href="/Reference_DK.pdf"
              download="Demid-Krom-Arbeitszeugnis"
              target="_blank"
              rel="noreferrer"
              className="group w-full"
            >
              <button className="flex w-full items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-cyan-600 to-teal-500 px-6 py-3 font-semibold text-white transition-all duration-200 group-hover:shadow-lg hover:from-teal-600 hover:to-cyan-700">
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                <span>Herunterladen</span>
                <ExternalLink className="ml-1 h-4 w-4 opacity-70" />
              </button>
            </a>

            {/* Footer Note */}
            <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">
              Vertrauliches Dokument, Nur für Bewerbungszwecke
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}