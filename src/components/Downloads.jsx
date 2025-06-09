import { Download, FileText, ExternalLink } from 'lucide-react';
import { useTranslation } from '../i18n/index.jsx';

export default function DownloadCard() {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-100 px-4 py-16 lg:px-8 lg:py-20 dark:bg-slate-900 dark:text-slate-100">
      <div className="max-w-md mx-auto bg-white dark:bg-slate-800/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 dark:border-slate-800">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#00786F] to-cyan-600 p-6 rounded-t-xl">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{t('download.title')}</h2>
              <p className="text-teal-100 text-sm">{t('download.subtitle')}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              {t('download.heading')}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              {t('download.description')}
            </p>
          </div>

          {/* File Info */}
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 mb-6 border border-slate-200 dark:border-slate-700">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600 dark:text-slate-400">{t('download.fileInfo.type')}</span>
              <span className="font-medium text-slate-900 dark:text-white">{t('download.fileInfo.typeValue')}</span>
            </div>
            <div className="flex justify-between items-center text-sm mt-2">
              <span className="text-slate-600 dark:text-slate-400">{t('download.fileInfo.size')}</span>
              <span className="font-medium text-slate-900 dark:text-white">{t('download.fileInfo.sizeValue')}</span>
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
            <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 group-hover:shadow-lg">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>{t('download.button')}</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
            </button>
          </a>

          {/* Footer Note */}
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-4">
            {t('download.footer')}
          </p>
        </div>
      </div>
    </div>
  );
}