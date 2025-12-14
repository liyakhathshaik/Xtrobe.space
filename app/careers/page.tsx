'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, DollarSign, Clock, ExternalLink } from 'lucide-react';
import jobsData from '@/data/jobs.json';

export default function CareersPage() {
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
            <Briefcase className="w-12 h-12 text-green-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Space Careers
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Launch your career in the space industry with leading organizations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {jobsData.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500/20 to-cyan-500/20 border border-green-500/30 flex items-center justify-center text-4xl">
                    {job.logo}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 hover:text-cyan-400 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                        <span className="flex items-center space-x-1 font-semibold text-green-400">
                          <span>{job.company}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </span>
                        <span>•</span>
                        <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400">
                          {job.type}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-sm text-gray-400 mb-1">Salary Range</div>
                      <div className="text-xl font-bold text-white">{job.salary}</div>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6">{job.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-start">
                            <span className="text-cyan-400 mr-2">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-white mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-start">
                            <span className="text-green-400 mr-2">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>Posted {job.posted}</span>
                      </div>
                      <span>•</span>
                      <span>{job.applicants} applicants</span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-cyan-600 text-white font-semibold flex items-center space-x-2 shadow-lg shadow-green-500/50"
                    >
                      <span>Apply Now</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
