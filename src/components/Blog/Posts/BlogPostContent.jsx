/* eslint-disable react/prop-types */
/**
 * BlogPostContent.jsx — generic, fully localized blog article renderer.
 *
 * The complete article lives in the locale files under
 * `blog.blogs.<postKey>` as structured blocks:
 *   { type: "p" | "h3" | "blockquote", text: "..." }
 *   { type: "ul", items: ["...", "..."] }
 * plus kicker/title/date/readTime/imageAlt metadata. Switching the site
 * language therefore switches the whole article.
 */
import { useLayoutEffect } from "react";
import { useTranslation } from "../../../i18n/index.jsx";

function Block({ block }) {
  switch (block.type) {
    case "h3":
      return <h3>{block.text}</h3>;
    case "blockquote":
      return (
        <blockquote>
          <p>{block.text}</p>
        </blockquote>
      );
    case "ul":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    default:
      return <p>{block.text}</p>;
  }
}

export default function BlogPostContent({ postKey, image }) {
  const { t } = useTranslation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const key = (name) => t(`blog.blogs.${postKey}.${name}`);
  const blocks = key("blocks");

  return (
    <div className="bg-white dark:bg-slate-800 dark:text-slate-100">
      <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-4xl">
        <div>
          <div className="mb-1 text-sm font-bold tracking-wider text-teal-600 uppercase dark:text-teal-500">
            {key("kicker")}
          </div>
          <h2 className="mb-4 text-4xl font-black text-black dark:text-white">
            {key("title")}
          </h2>
          <p className="text-xl leading-relaxed font-medium text-slate-700 dark:text-slate-300">
            <span className="text-teal-600 dark:text-teal-400">
              {t("common.fullName")}
            </span>{" "}
            {t("common.prepositions.on")}{" "}
            <span className="font-semibold">{key("date")}</span> ·{" "}
            {key("readTime")}
          </p>
        </div>

        <article className="prose prose-lg dark:prose-invert prose-a:text-teal-600 prose-a:no-underline prose-a:hover:text-teal-400 prose-a:hover:opacity-75 dark:prose-a:text-teal-400 dark:prose-a:hover:text-teal-300 prose-img:rounded-lg">
          <img src={image} alt={key("imageAlt")} />
          {Array.isArray(blocks) &&
            blocks.map((block, i) => <Block key={i} block={block} />)}
        </article>
      </div>
    </div>
  );
}
