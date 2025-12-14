'use client';

import { motion } from 'framer-motion';
import { Calendar, LayoutGrid, List } from 'lucide-react';
import EventCard from '@/components/EventCard';
import eventsData from '@/data/events.json';
import { useState } from 'react';

export default function EventsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

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
            <Calendar className="w-12 h-12 text-purple-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Celestial Events
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Track meteor showers, eclipses, and cosmic phenomena from around the world
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-xl rounded-full p-1 border border-purple-500/20">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center space-x-2 px-6 py-2 rounded-full font-medium transition-all ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-purple-400'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Grid</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center space-x-2 px-6 py-2 rounded-full font-medium transition-all ${
                viewMode === 'list'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-purple-400'
              }`}
            >
              <List className="w-4 h-4" />
              <span>List</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`${
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-4'
          }`}
        >
          {eventsData.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <EventCard {...event} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
