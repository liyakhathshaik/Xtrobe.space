'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Eye, Calendar } from 'lucide-react';

interface CommunityPostCardProps {
  id: string;
  title: string;
  author: string;
  avatar: string;
  topic: string;
  date: string;
  likes: number;
  comments: number;
  views: number;
  excerpt: string;
  tags: string[];
}

export default function CommunityPostCard({
  id,
  title,
  author,
  avatar,
  topic,
  date,
  likes,
  comments,
  views,
  excerpt,
  tags,
}: CommunityPostCardProps) {
  return (
    <Link href={`/community/${id}`}>
      <motion.div
        whileHover={{ y: -5, scale: 1.01 }}
        transition={{ duration: 0.3 }}
        className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

        <div className="relative">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">{avatar}</div>
              <div>
                <div className="text-white font-semibold">{author}</div>
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <span>{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  <span>•</span>
                  <span className="text-purple-400">{topic}</span>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3 line-clamp-2">
            {title}
          </h3>

          <p className="text-gray-400 text-sm mb-4 line-clamp-3">{excerpt}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 hover:text-red-400 transition-colors">
                <Heart className="w-4 h-4" />
                <span>{likes}</span>
              </div>
              <div className="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>{comments}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{views.toLocaleString()}</span>
              </div>
            </div>

            <motion.span
              className="text-cyan-400 font-medium"
              whileHover={{ x: 5 }}
            >
              Read more →
            </motion.span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
