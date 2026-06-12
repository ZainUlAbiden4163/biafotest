"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";
import { jobs } from "./jobsData/jobs";
import Image from "next/image";

export default function CareersPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen sm:min-h-[90vh] flex items-center overflow-hidden bg-(--primary-dark) text-(--color-offWhite)">
        <div className="mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full max-w-[90%]">
          <div className="items-center gap-8 sm:gap-12 grid lg:grid-cols-2">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6 order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="text-(--color-cyan) font-medium text-sm sm:text-base">
                  CAREERS AT BIAFO
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
              >
                Join Our Team
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg md:text-xl text-(--color-gray) max-w-lg"
              >
                Build the future with us. We&apos;re looking for talented
                individuals who are passionate about creating exceptional
                products.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a
                  href="#openings"
                  className="inline-flex items-center gap-2 bg-(--color-cyan)/50 text-(--primary-dark) px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-(--color-cyan) transition-colors text-sm sm:text-base"
                >
                  View Open Positions
                  <ArrowRight size={20} className="shrink-0" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
                <div className="relative w-full" style={{ aspectRatio: "3/2" }}>
                  <Image
                    src="/career.jpg"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Life at Biafo Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-(--primary-light) text-(--color-offWhite)">
        <div className="mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16 text-center"
          >
            <h2 className="mb-3 sm:mb-4 font-bold text-3xl sm:text-4xl md:text-5xl">
              Life at Biafo
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-(--color-gray) max-w-3xl mx-auto px-4">
              We believe in creating an environment where innovation thrives and
              people grow
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-(--color-offWhite)">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-(--primary-dark) p-6 sm:p-8 rounded-xl"
            >
              <div className="w-12 h-12 bg-(--primary-light) rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <Briefcase className="text-(--color-cyan)" size={24} />
              </div>
              <h3 className="mb-2 sm:mb-3 font-bold text-xl sm:text-2xl">
                Hybrid Flexibility
              </h3>
              <p className="text-sm sm:text-base text-(--color-gray)">
                Work from anywhere with our hybrid model. We trust you to choose
                the environment where you do your best work, whether that&apos;s
                at home, in the office, or a mix of both.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-(--primary-dark) p-6 sm:p-8 rounded-xl"
            >
              <div className="w-12 h-12 bg-(--primary-light) rounded-lg flex items-center justify-center mb-4 sm:mb-6 text-(--color-offWhite)">
                <svg
                  className="text-(--color-cyan)"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="mb-2 sm:mb-3 font-bold text-xl sm:text-2xl">
                Open Culture
              </h3>
              <p className=" text-sm sm:text-base text-(--color-gray)">
                Share ideas freely and make an impact from day one. We value
                every voice and encourage open dialogue across all levels of the
                organization.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-(--primary-dark) p-6 sm:p-8 rounded-xl sm:col-span-2 md:col-span-1"
            >
              <div className="w-12 h-12 bg-(--primary-light) rounded-lg flex items-center justify-center mb-4 sm:mb-6 text-(--color-offWhite)">
                <svg
                  className="text-(--color-cyan)"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="mb-2 sm:mb-3 font-bold text-xl sm:text-2xl">
                Continuous Learning
              </h3>
              <p className="text-(--color-gray) text-sm sm:text-base">
                Grow your skills with dedicated learning budgets, mentorship
                programs, and access to conferences, workshops, and online
                courses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section
        id="openings"
        className="py-12 sm:py-16 md:py-24 bg-(--primary-dark) text-(--color-offWhite)"
      >
        <div className="mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-16 text-center"
          >
            <h2 className="mb-3 sm:mb-4 font-bold text-3xl sm:text-4xl md:text-5xl">
              Current Openings
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-(--color-gray)">
              Find your next opportunity with us
            </p>
          </motion.div>

          <div className="space-y-3 sm:space-y-4">
            {!jobs.length ? (
              <div className="text-center">
                <h1>
                  While we don’t have any open positions right now, we’re always
                  growing. Please check back again soon to see if a role opens
                  up that’s right for you.
                </h1>
              </div>
            ) : (
              jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <Link
                    href={`/career/${job.id}`}
                    className="block bg-(--primary-light) border border-(--color-cyan)/50 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-(--color-cyan) hover:shadow-lg transition-all"
                  >
                    <div className="flex sm:flex-row flex-col justify-between items-start gap-3 sm:gap-4">
                      <div className="flex-1 w-full">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-(--color-offWhite) mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base text-(--color-gray) mb-3">
                          <span className="flex items-center gap-1">
                            <Briefcase size={14} className="sm:w-4 sm:h-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} className="sm:w-4 sm:h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} className="sm:w-4 sm:h-4" />
                            {job.type}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm sm:text-base line-clamp-2">
                          {job.description}
                        </p>
                      </div>
                      <button className="shrink-0 w-full sm:w-auto bg-(--color-cyan)/50 text-(--primary-dark) px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-(--color-cyan) transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                        Apply
                        <ArrowRight size={16} className="shrink-0" />
                      </button>
                    </div>
                  </Link>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
