import { Link } from "react-router-dom";
import { useTranslation } from "../../i18n/index.jsx";
import { getBlogPosts } from "./blog-config.js";

export default function BlogListsFullWidth() {
  const { t } = useTranslation();
  const blogPosts = getBlogPosts(t);

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
              className="flex flex-col overflow-hidden rounded-lg bg-white shadow-xs lg:flex-row dark:bg-slate-800"
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group relative block w-full overflow-hidden lg:w-2/5 xl:w-1/3"
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
              <div className="w-full p-6 lg:w-3/5 lg:self-center lg:px-10 lg:py-8 xl:w-2/3">
                <div className="mb-3 inline-flex flex-wrap items-center gap-1">
                  {post.tags.map((tag, index) => (
                    <div key={`${tag}-${index}`}>
                      {tag}
                    </div>
                  ))}
                </div>
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
                  am <span className="font-medium">{post.date}</span> ·{" "}
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