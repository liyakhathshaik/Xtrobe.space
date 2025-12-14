'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import newsData from '@/data/news.json';

export default function NewsArticlePage() {
  const params = useParams();
  const article = newsData.find(a => a.id === params.slug);

  if (!article) {
    return (
      <div className="min-h-screen py-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <Link href="/news">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium">
              Back to News
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/news">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to News</span>
          </motion.button>
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-cyan-500/20"
        >
          <div className="relative h-96 overflow-hidden">
            <img
              src={article.image}
              alt={article.headline}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

            <div className="absolute top-6 left-6">
              <div className="px-4 py-2 rounded-full bg-cyan-500/20 backdrop-blur-xl border border-cyan-500/30 text-cyan-400 text-sm font-semibold">
                {article.tag}
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-4xl">{article.logo}</span>
                <span className="text-white font-bold text-xl">{article.agency}</span>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {article.headline}
            </h1>

            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-700">
              <div className="flex items-center space-x-2 text-gray-400">
                <Calendar className="w-5 h-5" />
                <span>
                  {new Date(article.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-400 border border-cyan-500/20"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </motion.button>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 font-medium mb-8 leading-relaxed">
                {article.summary}
              </p>

              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-400 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsData
              .filter(a => a.id !== article.id && a.agency === article.agency)
              .slice(0, 2)
              .map(relatedArticle => (
                <Link key={relatedArticle.id} href={`/news/${relatedArticle.id}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
                  >
                    <div className="relative h-40">
                      <img
                        src={relatedArticle.image}
                        alt={relatedArticle.headline}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white hover:text-cyan-400 transition-colors line-clamp-2">
                        {relatedArticle.headline}
                      </h3>
                    </div>
                  </motion.div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
