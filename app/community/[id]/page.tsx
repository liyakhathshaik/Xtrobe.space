'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Heart, MessageCircle, Eye, Share2 } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import communityData from '@/data/community.json';
import { useState } from 'react';

export default function CommunityPostPage() {
  const params = useParams();
  const post = communityData.find(p => p.id === params.id);
  const [liked, setLiked] = useState(false);

  if (!post) {
    return (
      <div className="min-h-screen py-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link href="/community">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-medium">
              Back to Community
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/community">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Community</span>
          </motion.button>
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-cyan-500/20"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="text-4xl">{post.avatar}</div>
              <div>
                <div className="text-white font-bold text-lg">{post.author}</div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span>•</span>
                  <span className="text-purple-400">{post.topic}</span>
                </div>
              </div>
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

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="prose prose-invert prose-lg max-w-none mb-8">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h3 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
                    {paragraph.replace(/\*\*/g, '')}
                  </h3>
                );
              }
              return (
                <p key={index} className="text-gray-400 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          <div className="flex items-center justify-between py-6 border-t border-b border-gray-700 mb-8">
            <div className="flex items-center space-x-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setLiked(!liked)}
                className={`flex items-center space-x-2 ${
                  liked ? 'text-red-400' : 'text-gray-400 hover:text-red-400'
                } transition-colors`}
              >
                <Heart className={`w-6 h-6 ${liked ? 'fill-red-400' : ''}`} />
                <span className="font-semibold">{post.likes + (liked ? 1 : 0)}</span>
              </motion.button>

              <div className="flex items-center space-x-2 text-gray-400">
                <MessageCircle className="w-6 h-6" />
                <span className="font-semibold">{post.comments}</span>
              </div>

              <div className="flex items-center space-x-2 text-gray-400">
                <Eye className="w-6 h-6" />
                <span className="font-semibold">{post.views.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Comments</h2>
            <div className="space-y-6">
              {post.comments_preview.map((comment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/10"
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="text-2xl">{comment.avatar}</div>
                    <div>
                      <div className="text-white font-semibold">{comment.author}</div>
                      <div className="text-sm text-gray-400">
                        {new Date(comment.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-3">{comment.text}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Heart className="w-4 h-4" />
                    <span>{comment.likes} likes</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <textarea
                placeholder="Add your comment..."
                className="w-full p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-cyan-500/20 focus:border-cyan-500/50 text-white placeholder-gray-400 outline-none transition-all resize-none"
                rows={4}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold"
              >
                Post Comment
              </motion.button>
            </motion.div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
