'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Users, Video, MessageSquare, Calendar, Star } from 'lucide-react';

const mentorshipPrograms = [
  {
    id: 1,
    title: 'Space Engineering Fundamentals',
    mentor: 'Dr. Sarah Johnson',
    role: 'Senior Aerospace Engineer, NASA',
    avatar: '👩‍🔬',
    rating: 4.9,
    students: 234,
    duration: '8 weeks',
    level: 'Beginner',
    topics: ['Orbital Mechanics', 'Rocket Propulsion', 'Mission Design'],
    description: 'Learn the fundamentals of space engineering from a NASA veteran with 15 years of experience.',
    nextSession: '2024-12-20',
  },
  {
    id: 2,
    title: 'Astrophysics Research Methods',
    mentor: 'Prof. Michael Chen',
    role: 'Professor of Astrophysics, MIT',
    avatar: '👨‍🏫',
    rating: 4.8,
    students: 156,
    duration: '10 weeks',
    level: 'Advanced',
    topics: ['Data Analysis', 'Research Design', 'Publication Strategies'],
    description: 'Master research methodologies used in modern astrophysics and prepare for graduate studies.',
    nextSession: '2024-12-22',
  },
  {
    id: 3,
    title: 'Spacecraft Systems Design',
    mentor: 'Emily Rodriguez',
    role: 'Lead Systems Engineer, SpaceX',
    avatar: '👩‍💼',
    rating: 5.0,
    students: 189,
    duration: '12 weeks',
    level: 'Intermediate',
    topics: ['Systems Integration', 'Thermal Control', 'Power Systems'],
    description: 'Hands-on experience designing spacecraft systems from concept to implementation.',
    nextSession: '2024-12-18',
  },
  {
    id: 4,
    title: 'Career Path to Astronaut',
    mentor: 'Commander James Parker',
    role: 'Former NASA Astronaut',
    avatar: '👨‍🚀',
    rating: 4.9,
    students: 421,
    duration: '6 weeks',
    level: 'All Levels',
    topics: ['Training Requirements', 'Application Process', 'Physical Preparation'],
    description: 'Insider guidance on becoming an astronaut from someone who lived the dream.',
    nextSession: '2025-01-05',
  },
  {
    id: 5,
    title: 'Satellite Communications',
    mentor: 'Dr. Lisa Wang',
    role: 'Communications Engineer, ESA',
    avatar: '👩‍💻',
    rating: 4.7,
    students: 167,
    duration: '8 weeks',
    level: 'Intermediate',
    topics: ['RF Systems', 'Link Budgets', 'Antenna Design'],
    description: 'Deep dive into satellite communication systems and ground station operations.',
    nextSession: '2024-12-25',
  },
  {
    id: 6,
    title: 'Space Policy & Law',
    mentor: 'Ambassador David Kumar',
    role: 'Space Law Expert, UN',
    avatar: '👨‍⚖️',
    rating: 4.8,
    students: 203,
    duration: '6 weeks',
    level: 'Beginner',
    topics: ['Outer Space Treaty', 'Commercial Space Law', 'International Cooperation'],
    description: 'Understand the legal and policy frameworks governing space activities.',
    nextSession: '2025-01-08',
  },
];

export default function MentorshipPage() {
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
            <GraduationCap className="w-12 h-12 text-cyan-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Space Mentorship
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Learn from industry experts and accelerate your space career
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6">
            <Video className="w-8 h-8 text-cyan-400 mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Live Sessions</h3>
            <p className="text-sm text-gray-400">Weekly video calls with mentors</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6">
            <MessageSquare className="w-8 h-8 text-purple-400 mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">1-on-1 Chat</h3>
            <p className="text-sm text-gray-400">Direct messaging with mentors</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-6">
            <Users className="w-8 h-8 text-yellow-400 mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Peer Network</h3>
            <p className="text-sm text-gray-400">Connect with fellow learners</p>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6">
            <Calendar className="w-8 h-8 text-green-400 mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Flexible Schedule</h3>
            <p className="text-sm text-gray-400">Learn at your own pace</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {mentorshipPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-5xl">{program.avatar}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{program.mentor}</h3>
                    <p className="text-sm text-gray-400">{program.role}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm text-gray-300">{program.rating}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-sm text-gray-400">{program.students} students</span>
                    </div>
                  </div>
                </div>

                <div
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    program.level === 'Beginner' ? 'bg-green-500/20 border border-green-500/30 text-green-400' :
                    program.level === 'Intermediate' ? 'bg-yellow-500/20 border border-yellow-500/30 text-yellow-400' :
                    'bg-red-500/20 border border-red-500/30 text-red-400'
                  }`}
                >
                  {program.level}
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-3">{program.title}</h2>
              <p className="text-gray-400 mb-6">{program.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {program.topics.map(topic => (
                  <span
                    key={topic}
                    className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-cyan-500/20 mb-6">
                <div>
                  <div className="text-xs text-gray-400">Duration</div>
                  <div className="text-sm font-semibold text-white">{program.duration}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Next Session</div>
                  <div className="text-sm font-semibold text-white">
                    {new Date(program.nextSession).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all"
              >
                Enroll Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
