"use client"

import { useParams, Link } from "react-router-dom"
import { useTranslation } from "../i18n/index.jsx"
import { getBlogPosts } from "../components/Blog/blog-config.js"
import BlogPost1 from "../components/Blog/Posts/BlogPost1.jsx"
import BlogPost2 from "../components/Blog/Posts/BlogPost2.jsx"
import BlogPost3 from "../components/Blog/Posts/BlogPost3.jsx"
import { ArrowLeft } from "lucide-react"

const blogComponents = {
  BlogPost1,
  BlogPost2,
  BlogPost3,
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const { t } = useTranslation()
  const blogPosts = getBlogPosts(t)

  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-800">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    )
  }

  const BlogComponent = blogComponents[post.component]

  return (
    <div className="min-h-screen">
      {/* Back to Blog Button */}
      <div className="bg-white dark:bg-slate-800 border-b dark:border-slate-700">
        <div className="container mx-auto px-4 py-4 lg:px-8 xl:max-w-7xl">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Blog Post Content */}
      <BlogComponent />
    </div>
  )
}