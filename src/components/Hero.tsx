"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 
      text-gray-900 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Small Identity */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-8"
        >
          Atul Tiwari • Full Stack Developer
        </motion.p>

        {/* Headline */}
      <motion.h1
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.8 }}
  className="text-2xl md:text-4xl font-semibold leading-snug"
>
  Delivering secure, scalable, and future-ready web platforms 
  <span className="block mt-2 text-gray-600 font-bold">
    with modern, high-performance solutions.
  </span>
</motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Final-year Cybersecurity student with hands-on experience in 
          React, Next.js, Node.js, and database systems. I focus on 
          clean architecture, performance optimization, and building 
          production-ready web applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-14 flex justify-center gap-6 flex-wrap"
        >
          <Link
            href="/work"
            className="px-10 py-4 rounded-full bg-gray-900 text-white 
                       hover:bg-black transition duration-300 
                       shadow-md hover:shadow-lg"
          >
            View Projects
          </Link>

          <Link
            href="/contact"
            className="px-10 py-4 rounded-full border border-gray-400 
                       hover:border-gray-900 hover:text-gray-900 
                       transition duration-300"
          >
            Contact Me
          </Link>
        </motion.div>

      </div>
    </section>
  );
}