'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, ChevronRight } from 'lucide-react';

interface HackathonCardProps {
  id: string;
  title: string;
  difficulty: string;
  deadline: string;
  prize: string;
  participants: number;
  category: string;
  description: string;
  icon: string;
}

const difficultyColors: Record<string, string> = {
  Easy: 'from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-400',
  Medium: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30 text-yellow-400',
  Hard: 'from-red-500/20 to-pink-500/20 border-red-500/30 text-red-400',
};

export default function HackathonCard({
  id,
  title,
  difficulty,
  deadline,
  prize,
  participants,
  category,
  description,
  icon,
}: HackathonCardProps) {
  const daysUntilDeadline = Math.ceil(
    (new Date(deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <Link href={`/hackathons/${id}`}>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="group relative h-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

        <div className="relative">
          <div className="flex items-start justify-between mb-4">
            <span className="text-4xl">{icon}</span>
            <div
              className={`px-3 py-1 rounded-full bg-gradient-to-r ${difficultyColors[difficulty]} border text-xs font-semibold`}
            >
              {difficulty}
            </div>
          </div>

          <div className="mb-3">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-semibold mb-2">
              {category}
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
              {title}
            </h3>
          </div>

          <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-3">
              <Award className="w-5 h-5 text-yellow-400 mb-1" />
              <div className="text-xs text-gray-400">Prize</div>
              <div className="text-sm font-bold text-white">{prize}</div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-3">
              <Users className="w-5 h-5 text-cyan-400 mb-1" />
              <div className="text-xs text-gray-400">Participants</div>
              <div className="text-sm font-bold text-white">{participants.toLocaleString()}</div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 mb-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-red-400" />
              <div>
                <div className="text-xs text-gray-400">Deadline</div>
                <div className="text-sm font-semibold text-white">
                  {new Date(deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-400">Time Left</div>
              <div className="text-sm font-bold text-red-400">{daysUntilDeadline} days</div>
            </div>
          </div>

          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center justify-between text-cyan-400 font-medium"
          >
            <span>View Challenge</span>
            <ChevronRight className="w-5 h-5" />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}
