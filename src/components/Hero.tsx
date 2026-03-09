"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-40 px-6 bg-gradient-to-b from-[#f8f6f2] to-white">

      <div className="max-w-5xl mx-auto text-center">

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 
                     bg-white border border-gray-200 
                     rounded-full text-sm text-gray-600 shadow-sm"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Open to Full Stack Developer Roles
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight 
                     text-gray-900 leading-tight"
        >
          Final Year Computer Science Student
          <span className="block text-gray-500 font-medium mt-2">
            Building scalable and modern web applications
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          I specialize in Full Stack Development using 
          React, Next.js and backend technologies Like Node.js,Express.js. Passionate about writing
          clean code, solving real-world problems, and building production-ready systems.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex justify-center gap-6"
        >
          <Link
            href="/work"
            className="px-8 py-3 rounded-lg bg-gray-900 text-white
                       hover:bg-black transition duration-300 shadow-md"
          >
            View Projects
          </Link>

          <Link
            href="/contact"
            className="px-8 py-3 rounded-lg border border-gray-300
                       text-gray-700 hover:bg-gray-100 transition duration-300"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Tech Stack Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-gray-500"
        >
          <span>Java</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Next.js</span>
          <span>HTML</span>
          <span>CSS</span>
        </motion.div>
                <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-gray-500"
        >
          <span>MONGODB</span>
          <span>MYSQL</span>
          <span>EXPRESS.JS</span>
          <span>NODE.JS</span>
           <span>SQL</span>
        </motion.div>

      </div>
    </section>
  );
}