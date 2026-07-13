import { Link } from "react-router-dom";
import { useTranslation } from "../../i18n/index.jsx";
import { getBlogPosts } from "./blog-config.js";
import { useLayoutEffect } from "react";

export default function BlogListsFullWidth() {
  const { t } = useTranslation();
  const blogPosts = getBlogPosts(t);

  // Always start at top when navigating to /blog (before paint)
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-slate-100">
      <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-black text-black dark:text-white">
            {t("blog.title")}
          </h2>
          <p className="mx-auto text-xl leading-relaxed font-medium text-slate-700 lg:w-2/3 dark:text-slate-300">
            {t("blog.subtitle")}
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-4 sm:space-y-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="relative flex flex-col overflow-hidden rounded-lg bg-white shadow-xs lg:h-72 lg:flex-row xl:h-80 dark:bg-slate-800"
            >
              {/* "New" ribbon, only on the newest post */}
              {post.isNew && (
                <div className="absolute -top-2.5 -right-2.5 z-10 size-28 overflow-visible">
                  <span className="absolute top-0 size-2.5 bg-amber-800" />
                  <span className="absolute right-0 bottom-0 size-2.5 bg-amber-800" />
                  <div className="absolute right-0 bottom-0 flex w-[calc(100%*1.4142)] origin-bottom-right rotate-45 items-center justify-center gap-1.5 bg-amber-500 p-2.5 text-center text-sm leading-tight text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="inline-block size-4 text-amber-100"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4Zm7-3a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1Zm-1 9a.75.75 0 0 1 .728.568l.086.345c.09.36.371.641.731.731l.345.086a.75.75 0 0 1 0 1.456l-.345.086a1 1 0 0 0-.731.731l-.086.345a.75.75 0 0 1-1.456 0l-.086-.345a1 1 0 0 0-.731-.731l-.345-.086a.75.75 0 0 1 0-1.456l.345-.086a1 1 0 0 0 .731-.731l.086-.345A.75.75 0 0 1 11 10Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-xs font-semibold">
                      {t("common.ribbonNew")}
                    </span>
                  </div>
                </div>
              )}

              <Link
                to={`/blog/${post.slug}`}
                className="group relative block h-48 w-full overflow-hidden lg:h-full lg:w-2/5 xl:w-1/3"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-teal-700/75 opacity-0 transition duration-150 ease-out group-hover:opacity-100">
                  <svg
                    className="hi-solid hi-arrow-right inline-block size-10 -rotate-45 text-white"
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
                </div>
                <img
                  src={post.image || "/placeholder.svg"}
                  className="h-full w-full object-cover object-center"
                  alt={post.title}
                />
              </Link>
              <div className="flex w-full flex-col justify-center p-6 lg:h-full lg:w-3/5 lg:self-center lg:px-10 lg:py-8 xl:w-2/3">
                <h3 className="mb-2 text-lg font-bold sm:text-xl">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="leading-7 text-slate-800 hover:text-slate-600 dark:text-slate-200 dark:hover:text-slate-400"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mb-3 text-sm text-slate-600 dark:text-slate-400">
                  <span className="font-medium text-teal-600 dark:text-teal-400">
                    {post.author}
                  </span>{" "}
                  {t("common.prepositions.on")}{" "}
                  <span className="font-medium">{post.date}</span> ·{" "}
                  {post.readTime}
                </p>
                <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                  {post.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
