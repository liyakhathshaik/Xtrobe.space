'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Bell } from 'lucide-react';

interface EventCardProps {
  id: string;
  name: string;
  type: string;
  date: string;
  time: string;
  visibility: string;
  description: string;
  icon: string;
  peakRate?: string;
  moonPhase?: string;
}

export default function EventCard({
  name,
  type,
  date,
  time,
  visibility,
  description,
  icon,
  peakRate,
  moonPhase,
}: EventCardProps) {
  const formatDate = (dateString: string) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    const diffTime = eventDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays < 7) return `In ${diffDays} days`;
    return eventDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="text-5xl">{icon}</div>
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-semibold mb-2">
                {type}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                {name}
              </h3>
            </div>
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 text-sm">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span className="text-gray-300">{formatDate(date)}</span>
            <span className="text-gray-600">•</span>
            <span className="text-cyan-400 font-semibold">{date}</span>
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span className="text-gray-300">{time}</span>
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span className="text-gray-300">{visibility}</span>
          </div>

          {peakRate && (
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-yellow-400">⭐</span>
              <span className="text-gray-300">Peak: {peakRate}</span>
            </div>
          )}

          {moonPhase && (
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-gray-400">🌙</span>
              <span className="text-gray-300">{moonPhase}</span>
            </div>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 hover:border-purple-500/60 text-purple-400 hover:text-purple-300 font-medium transition-all flex items-center justify-center space-x-2"
        >
          <Bell className="w-4 h-4" />
          <span>Set Reminder</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
