'use client';

import { motion } from 'framer-motion';
import { UserCircle, MapPin, Calendar, Award, BookMarked, Star, Trophy } from 'lucide-react';
import userData from '@/data/user.json';
import eventsData from '@/data/events.json';
import hackathonsData from '@/data/hackathons.json';

export default function ProfilePage() {
  const savedEvents = eventsData.filter(event => userData.savedEvents.includes(event.id));
  const bookmarkedHackathons = hackathonsData.filter(h => userData.bookmarkedHackathons.includes(h.id));

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-cyan-500/20">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="text-8xl">{userData.avatar}</div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold text-white mb-2">{userData.name}</h1>
                <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-400 font-medium mb-4">
                  {userData.role}
                </div>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-gray-400 mb-6">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{userData.location}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Member since {new Date(userData.memberSince).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                  </div>
                </div>

                <p className="text-gray-400 mb-6">{userData.bio}</p>

                <div className="flex flex-wrap gap-2">
                  {userData.interests.map(interest => (
                    <span
                      key={interest}
                      className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-white">{userData.stats.eventsAttended}</div>
                  <div className="text-xs text-gray-400">Events</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-white">{userData.stats.hackathonsCompleted}</div>
                  <div className="text-xs text-gray-400">Hackathons</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-white">{userData.stats.communityPosts}</div>
                  <div className="text-xs text-gray-400">Posts</div>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-white">{userData.stats.bookmarks}</div>
                  <div className="text-xs text-gray-400">Bookmarks</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20">
              <div className="flex items-center space-x-3 mb-6">
                <Star className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">Saved Events</h2>
              </div>
              <div className="space-y-4">
                {savedEvents.map(event => (
                  <div
                    key={event.id}
                    className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className="text-3xl">{event.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">{event.name}</h3>
                          <div className="text-sm text-gray-400 flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(event.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs">
                        {event.type}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20">
              <div className="flex items-center space-x-3 mb-6">
                <BookMarked className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Bookmarked Hackathons</h2>
              </div>
              <div className="space-y-4">
                {bookmarkedHackathons.map(hackathon => (
                  <div
                    key={hackathon.id}
                    className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-yellow-500/20 hover:border-yellow-500/40 transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className="text-3xl">{hackathon.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">{hackathon.title}</h3>
                          <div className="flex items-center space-x-3 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Trophy className="w-4 h-4 text-yellow-400" />
                              <span>{hackathon.prize}</span>
                            </div>
                            <span>•</span>
                            <span>Deadline: {new Date(hackathon.deadline).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        hackathon.difficulty === 'Easy' ? 'bg-green-500/20 border border-green-500/30 text-green-400' :
                        hackathon.difficulty === 'Medium' ? 'bg-yellow-500/20 border border-yellow-500/30 text-yellow-400' :
                        'bg-red-500/20 border border-red-500/30 text-red-400'
                      }`}>
                        {hackathon.difficulty}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Achievements</h2>
              </div>
              <div className="space-y-4">
                {userData.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-xl p-4"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{achievement.title}</h3>
                        {achievement.description && (
                          <p className="text-xs text-gray-400 mb-2">{achievement.description}</p>
                        )}
                        <div className="text-xs text-gray-500">
                          {new Date(achievement.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-xl font-bold text-white mb-6">Upcoming</h2>
              <div className="space-y-4">
                {userData.upcomingRegistrations.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-cyan-500/20"
                  >
                    <div className="text-xs text-cyan-400 mb-1">{item.type.toUpperCase()}</div>
                    <div className="font-semibold text-white mb-2">{item.title}</div>
                    <div className="text-sm text-gray-400">{new Date(item.date).toLocaleDateString()}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
