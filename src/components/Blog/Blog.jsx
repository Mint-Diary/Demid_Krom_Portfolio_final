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
              {/* Ribbon */}
              <div className="group absolute -top-2.5 -right-2.5 z-10 size-28 overflow-visible">
                <span className="absolute top-0 size-2.5 bg-teal-900" />
                <span className="absolute right-0 bottom-0 size-2.5 bg-teal-900" />
                <div className="absolute right-0 bottom-0 flex w-[calc(100%*1.4142)] origin-bottom-right rotate-45 items-center justify-center gap-1.5 bg-teal-600 p-2.5 text-center text-sm leading-tight text-white hover:bg-teal-700 active:bg-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="inline-block size-4 text-teal-200"
                  >
                    <path d="M7.25 3.688a.75.75 0 0 1 1.5 0v4.562c0 .052-.043.094-.094.094H7.344a.094.094 0 0 1-.094-.094V3.688ZM8 10a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
                    <path
                      fillRule="evenodd"
                      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs font-semibold">
                    {t("common.ribbonBlog")}
                  </span>
                </div>
                {/* Tooltip */}
                <div className="absolute top-1/2 right-full mr-2 hidden -translate-y-1/2 rounded bg-teal-600 px-3 py-1 text-xs font-medium whitespace-nowrap text-white shadow-lg group-hover:block">
                  {t("common.ribbonBlogTooltip")}
                </div>
              </div>
              {/* END Ribbon */}

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
                  alt={`Featured Image of ${post.title}`}
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
