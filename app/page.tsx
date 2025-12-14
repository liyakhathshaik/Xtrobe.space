'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Rocket, Calendar, Trophy, Users, Sparkles, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Space Agency Live',
    description: 'Real-time updates from NASA, ISRO, ESA, and more',
    href: '/news',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Calendar,
    title: 'Celestial Events',
    description: 'Track meteor showers, eclipses, and cosmic phenomena',
    href: '/events',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Trophy,
    title: 'Space Hackathons',
    description: 'Solve real challenges and win prizes',
    href: '/hackathons',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Users,
    title: 'Cosmic Connect',
    description: 'Join the global space enthusiast community',
    href: '/community',
    gradient: 'from-green-500 to-emerald-500',
  },
];

const stats = [
  { value: '50K+', label: 'Community Members' },
  { value: '200+', label: 'Events Tracked' },
  { value: '100+', label: 'Active Hackathons' },
  { value: '1000+', label: 'Space Careers' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-purple-900/20 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="text-8xl"></div>
            </motion.div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Xtrobe
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              Create Your Space Identity
            </p>

            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              This is our vision. This is the prototype of our original Xtrobe Ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/news">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all flex items-center space-x-2"
                >
                  <span>Explore Now</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <Link href="/community">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-xl border border-cyan-500/30 text-cyan-400 font-semibold text-lg hover:bg-white/10 hover:border-cyan-500/50 transition-all"
                >
                  Join Community
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Explore the Platform
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to stay connected with space exploration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link key={feature.title} href={feature.href}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {feature.title}
                      </h3>

                      <p className="text-gray-400 mb-4">{feature.description}</p>

                      <motion.div
                        className="flex items-center text-cyan-400 font-medium"
                        whileHover={{ x: 5 }}
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-xl rounded-3xl p-12 border border-cyan-500/30"
          >
            <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Explore the Cosmos?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of space enthusiasts discovering the universe together
            </p>
            <Link href="/profile">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
