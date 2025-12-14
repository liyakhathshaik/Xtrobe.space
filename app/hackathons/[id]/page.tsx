'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Award, Clock, BookOpen, User } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import hackathonsData from '@/data/hackathons.json';

const difficultyColors: Record<string, string> = {
  Easy: 'from-green-500 to-emerald-500',
  Medium: 'from-yellow-500 to-orange-500',
  Hard: 'from-red-500 to-pink-500',
};

export default function HackathonDetailPage() {
  const params = useParams();
  const hackathon = hackathonsData.find(h => h.id === params.id);

  if (!hackathon) {
    return (
      <div className="min-h-screen py-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Hackathon Not Found</h1>
          <Link href="/hackathons">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-medium">
              Back to Hackathons
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const daysUntilDeadline = Math.ceil(
    (new Date(hackathon.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <Link href="/hackathons">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Hackathons</span>
          </motion.button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-cyan-500/20 mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-5xl">{hackathon.icon}</span>
                <div
                  className={`px-4 py-2 rounded-full bg-gradient-to-r ${difficultyColors[hackathon.difficulty]} text-white text-sm font-semibold`}
                >
                  {hackathon.difficulty}
                </div>
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-semibold mb-3">
                {hackathon.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {hackathon.title}
              </h1>
              <p className="text-lg text-gray-400">{hackathon.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-4">
              <Award className="w-6 h-6 text-yellow-400 mb-2" />
              <div className="text-xs text-gray-400">Prize Pool</div>
              <div className="text-xl font-bold text-white">{hackathon.prize}</div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-4">
              <Users className="w-6 h-6 text-cyan-400 mb-2" />
              <div className="text-xs text-gray-400">Participants</div>
              <div className="text-xl font-bold text-white">{hackathon.participants.toLocaleString()}</div>
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-4">
              <Calendar className="w-6 h-6 text-red-400 mb-2" />
              <div className="text-xs text-gray-400">Deadline</div>
              <div className="text-sm font-bold text-white">{new Date(hackathon.deadline).toLocaleDateString()}</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-4">
              <Clock className="w-6 h-6 text-purple-400 mb-2" />
              <div className="text-xs text-gray-400">Time Left</div>
              <div className="text-xl font-bold text-white">{daysUntilDeadline} days</div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold text-lg shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/70 transition-all"
          >
            Register Now
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-cyan-500/20 mb-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white">Problem Statement</h2>
          </div>
          <div className="prose prose-invert prose-lg max-w-none">
            {hackathon.problemStatement.split('\n\n').map((section, index) => (
              <div key={index} className="mb-6">
                {section.split('\n').map((line, lineIndex) => (
                  <p key={lineIndex} className="text-gray-400 leading-relaxed mb-2">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {hackathon.skills.map(skill => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Mentors</h3>
            <div className="space-y-4">
              {hackathon.mentors.map(mentor => (
                <div key={mentor} className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">{mentor}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
