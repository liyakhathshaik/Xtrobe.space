'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Eye } from 'lucide-react';

interface NewsCardProps {
  id: string;
  agency: string;
  logo: string;
  headline: string;
  summary: string;
  date: string;
  tag: string;
  image: string;
}

export default function NewsCard({ id, agency, logo, headline, summary, date, tag, image }: NewsCardProps) {
  return (
    <Link href={`/news/${id}`}>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="group relative h-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={headline}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

          <div className="absolute top-4 left-4 flex items-center space-x-2">
            <div className="px-3 py-1 rounded-full bg-cyan-500/20 backdrop-blur-xl border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
              {tag}
            </div>
          </div>

          <div className="absolute bottom-4 left-4 flex items-center space-x-2">
            <span className="text-3xl">{logo}</span>
            <span className="text-white font-semibold">{agency}</span>
          </div>
        </div>

        <div className="relative p-6">
          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
            {headline}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-3 mb-4">{summary}</p>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <motion.span
              className="text-cyan-400 font-medium flex items-center space-x-1"
              whileHover={{ x: 5 }}
            >
              <span>Read more</span>
              <span>→</span>
            </motion.span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
