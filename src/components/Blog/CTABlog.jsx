import { useTranslation } from "../../i18n/index.jsx";
import { Link } from "react-router-dom";

export default function CTABoxWithImage() {
  const { t } = useTranslation(); // Hook-Aufruf jetzt innerhalb der Komponente

  return (
    <>
      {/* CTA Section: Box with Image */}
      <div className="bg-slate-100 dark:bg-slate-900 dark:text-slate-100">
        <div className="container mx-auto px-4 pt-0 pb-16 lg:px-8 lg:pb-32 xl:max-w-7xl">
          <div className="relative overflow-hidden rounded-xl px-6 py-8 lg:px-12 lg:py-16">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="/bookshelf.png"
                alt="bookshelf with some plants on and around it"
              />
            </div>
            <div className="absolute inset-0 bg-slate-900/90 from-slate-950 via-slate-950/75 to-transparent lg:bg-transparent lg:bg-linear-to-r" />
            <div className="absolute -top-28 -left-14 size-40 rounded-full border border-white/25" />
            <div className="absolute -top-20 -left-24 size-40 rounded-full border border-white/25" />
            <div className="relative py-5 text-center lg:w-3/5 lg:text-left xl:w-1/2">
              {/* Heading */}
              <div>
                <h2 className="mb-2 text-3xl font-black text-white lg:text-4xl">
                  {t('blog.cta.title')}
                </h2>
                <p className="mb-7 text-lg text-slate-300">
                  {t('blog.cta.description')}
                </p>
              </div>
              {/* END Heading */}

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                <Link
                  to="/blog"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-teal-700 bg-teal-700 px-6 py-3 leading-6 font-semibold text-white hover:border-teal-600 hover:bg-teal-600 hover:text-white focus:ring-3 focus:ring-teal-400/90 active:border-teal-700 active:bg-teal-700"
                >
                  <span>{t('blog.cta.button')}</span>
                  <svg
                    className="hi-mini hi-arrow-right inline-block size-5 opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
              {/* END Actions */}
            </div>
          </div>
        </div>
      </div>
      {/* END CTA Section: Box with Image */}
    </>
  );
}