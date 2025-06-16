import { useState } from 'react';
import { useTranslation } from '../i18n/index.jsx';
import { getBlogPosts } from '../components/Blog/blog-config.js';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function BlogListPage() {
  const { t } = useTranslation();
  const allPosts = getBlogPosts(t);
  const [query, setQuery] = useState('');

  const filtered = allPosts.filter(p => {
    const q = query.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 dark:text-white py-16">
      <div className="container mx-auto px-4 lg:px-8 xl:max-w-7xl space-y-12">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-black">{t('blog.title')}</h1>
          <p className="text-xl text-slate-700 dark:text-slate-300">{t('blog.subtitle')}</p>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 pr-4 text-slate-800 focus:border-teal-600 focus:ring-2 focus:ring-teal-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
              placeholder={t('blog.searchPlaceholder') || 'Search posts...'}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(post => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-lg bg-white shadow hover:shadow-md transition dark:bg-slate-800"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img src={post.image || '/placeholder.svg'} alt="" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-slate-500 dark:text-slate-400">{t('blog.noResults') || 'No matching posts.'}</p>
        )}
      </div>
    </div>
  );
}
