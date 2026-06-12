"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "motion/react";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { jobs } from "../jobsData/jobs";

export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();
  const job = jobs.find((j) => j.id === params.id);

  if (!job) {
    return (
      <div className="flex justify-center items-center bg-white min-h-screen">
        <div className="text-center">
          <h1 className="mb-4 font-bold text-gray-900 text-4xl">
            Job Not Found
          </h1>
          <Link href="/career" className="text-blue-600 hover:text-blue-700">
            Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gray-50 border-gray-200 border-b"
      >
        <div className="mx-auto px-4 sm:px-6 py-6 sm:py-8 max-w-5xl">
          <button
            onClick={() => router.push("/career")}
            className="flex items-center gap-2 mb-4 sm:mb-6 text-gray-600 hover:text-gray-900 text-sm sm:text-base transition-colors"
          >
            <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
            Back to all jobs
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="mb-3 sm:mb-4 font-bold text-gray-900 text-3xl sm:text-4xl md:text-5xl">
              {job.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-gray-600 text-sm sm:text-base">
              <span className="flex items-center gap-1 sm:gap-2">
                <Briefcase size={16} className="sm:w-4.5 sm:h-4.5" />
                {job.department}
              </span>
              <span className="flex items-center gap-1 sm:gap-2">
                <MapPin size={16} className="sm:w-4.5 sm:h-4.5" />
                {job.location}
              </span>
              <span className="flex items-center gap-1 sm:gap-2">
                <Clock size={16} className="sm:w-4.5 sm:h-4.5" />
                {job.type}
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-5xl">
        <div className="gap-8 lg:gap-12 grid lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-8 sm:space-y-12 lg:col-span-2">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="mb-3 sm:mb-4 font-bold text-gray-900 text-2xl sm:text-3xl">
                About the Role
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {job.description}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="mb-4 sm:mb-6 font-bold text-gray-900 text-2xl sm:text-3xl">
                Responsibilities
              </h2>
              <ul className="space-y-3">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex gap-2 sm:gap-3">
                    <CheckCircle2
                      className="mt-1 text-blue-600 shrink-0"
                      size={18}
                    />
                    <span className="text-gray-700 text-sm sm:text-base">
                      {responsibility}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="mb-4 sm:mb-6 font-bold text-gray-900 text-2xl sm:text-3xl">
                Requirements
              </h2>
              <ul className="space-y-3">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex gap-2 sm:gap-3">
                    <CheckCircle2
                      className="mt-1 text-green-600 shrink-0"
                      size={18}
                    />
                    <span className="text-gray-700 text-sm sm:text-base">
                      {requirement}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="mb-4 sm:mb-6 font-bold text-gray-900 text-2xl sm:text-3xl">
                Benefits
              </h2>
              <ul className="space-y-3">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-2 sm:gap-3">
                    <CheckCircle2
                      className="mt-1 text-purple-600 shrink-0"
                      size={18}
                    />
                    <span className="text-gray-700 text-sm sm:text-base">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Sidebar - Apply Card */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:top-8 lg:sticky space-y-4 sm:space-y-6"
            >
              <div className="bg-gray-50 p-5 sm:p-6 border border-gray-200 rounded-xl">
                <h3 className="mb-3 sm:mb-4 font-bold text-gray-900 text-xl sm:text-2xl">
                  Ready to Apply?
                </h3>
                <p className="mb-4 sm:mb-6 text-gray-600 text-sm sm:text-base">
                  Submit your application and join our team. We review all
                  applications carefully and will get back to you within a week.
                </p>

                <button className="bg-blue-600 hover:bg-blue-700 py-3 sm:py-4 rounded-lg w-full font-medium text-white transition-colors">
                  Submit Your CV at info@Biafo.ai
                </button>

                <p className="mt-3 sm:mt-4 text-gray-500 text-xs sm:text-sm text-center">
                  Have questions? Email us at{" "}
                  <a
                    href="mailto:careers@biafo.com"
                    className="text-blue-600 hover:text-blue-700 break-all"
                  >
                    info@biafo.com
                  </a>
                </p>
              </div>

              <div className="bg-blue-50 p-5 sm:p-6 border border-blue-200 rounded-xl">
                <h4 className="mb-3 font-bold text-gray-900 text-base sm:text-lg">
                  What happens next?
                </h4>
                <ol className="space-y-2 sm:space-y-3 text-gray-700 text-xs sm:text-sm">
                  <li className="flex gap-2">
                    <span className="font-bold text-blue-600 shrink-0">1.</span>
                    <span>We review your application</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-blue-600 shrink-0">2.</span>
                    <span>Initial phone screening</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-blue-600 shrink-0">3.</span>
                    <span>Technical/skills assessment</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-blue-600 shrink-0">4.</span>
                    <span>Team interviews</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-blue-600 shrink-0">5.</span>
                    <span>Offer and onboarding</span>
                  </li>
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
