'use client';

import { motion } from 'framer-motion';
import { Rocket, Filter } from 'lucide-react';
import NewsCard from '@/components/NewsCard';
import newsData from '@/data/news.json';
import { useState } from 'react';

export default function NewsPage() {
  const [selectedAgency, setSelectedAgency] = useState<string>('All');

  const agencies = ['All', ...Array.from(new Set(newsData.map(article => article.agency)))];

  const filteredNews = selectedAgency === 'All'
    ? newsData
    : newsData.filter(article => article.agency === selectedAgency);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Rocket className="w-12 h-12 text-cyan-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Space Agency Live
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Latest updates from space agencies around the world
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Filter className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400 font-medium">Filter by Agency:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {agencies.map((agency) => (
              <motion.button
                key={agency}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedAgency(agency)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedAgency === agency
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-cyan-400 border border-cyan-500/20'
                }`}
              >
                {agency}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredNews.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <NewsCard {...article} />
            </motion.div>
          ))}
        </motion.div>

        {filteredNews.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No articles found for this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
