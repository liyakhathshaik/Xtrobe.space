'use client';

import { motion } from 'framer-motion';
import { Users, Search, TrendingUp } from 'lucide-react';
import CommunityPostCard from '@/components/CommunityPostCard';
import communityData from '@/data/community.json';
import { useState } from 'react';

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = communityData.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const topics = Array.from(new Set(communityData.map(post => post.topic)));

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
            <Users className="w-12 h-12 text-cyan-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              Cosmic Connect
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join discussions with space enthusiasts from around the world
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search discussions, topics, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-cyan-500/20 focus:border-cyan-500/50 text-white placeholder-gray-400 outline-none transition-all"
            />
          </div>

          <div className="flex items-center justify-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400 font-medium">Popular Topics:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {topics.map((topic) => (
              <motion.button
                key={topic}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchQuery(topic)}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-400 hover:border-purple-500/60 font-medium transition-all"
              >
                {topic}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CommunityPostCard {...post} />
            </motion.div>
          ))}
        </motion.div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No posts found. Try a different search term.</p>
          </div>
        )}
      </div>
    </div>
  );
}
