'use client';

import { motion } from 'framer-motion';
import { Trophy, Filter } from 'lucide-react';
import HackathonCard from '@/components/HackathonCard';
import hackathonsData from '@/data/hackathons.json';
import { useState } from 'react';

export default function HackathonsPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  const filteredHackathons = selectedDifficulty === 'All'
    ? hackathonsData
    : hackathonsData.filter(h => h.difficulty === selectedDifficulty);

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
            <Trophy className="w-12 h-12 text-yellow-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Space Hackathons
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Solve real-world space challenges and win exciting prizes
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
            <span className="text-gray-400 font-medium">Filter by Difficulty:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {difficulties.map((difficulty) => (
              <motion.button
                key={difficulty}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedDifficulty === difficulty
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg shadow-yellow-500/50'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-yellow-400 border border-yellow-500/20'
                }`}
              >
                {difficulty}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredHackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <HackathonCard {...hackathon} />
            </motion.div>
          ))}
        </motion.div>

        {filteredHackathons.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No hackathons found for this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
