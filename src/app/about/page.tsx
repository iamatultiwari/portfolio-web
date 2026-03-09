"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative max-w-6xl mx-auto py-28 px-6 overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[400px] h-[400px] bg-blue-200 rounded-full blur-3xl opacity-30 top-[-120px] left-[-120px]" />
        <div className="absolute w-[300px] h-[300px] bg-pink-200 rounded-full blur-3xl opacity-30 bottom-[-120px] right-[-120px]" />
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
              alt="Atul Tiwari"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Experience Badge */}
          <div className="absolute -bottom-6 -right-6 bg-black text-white px-6 py-3 rounded-2xl shadow-lg">
            <p className="text-sm">2+ Years Experience</p>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
            About Me
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            I am a frontend developer focused on building clean,
            scalable, and performance-driven web applications.
            My goal is to craft seamless digital experiences
            using modern technologies like Next.js, React,
            and TypeScript.
          </p>

          <p className="text-gray-600 leading-relaxed mb-10">
            I enjoy transforming complex problems into elegant
            and intuitive user interfaces. I believe in writing
            maintainable code and continuously improving my
            technical expertise.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center border border-gray-100">
              <h3 className="text-2xl font-semibold">10+</h3>
              <p className="text-sm text-gray-500 mt-1">Projects</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md text-center border border-gray-100">
              <h3 className="text-2xl font-semibold">5+</h3>
              <p className="text-sm text-gray-500 mt-1">Technologies</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md text-center border border-gray-100">
              <h3 className="text-2xl font-semibold">100%</h3>
              <p className="text-sm text-gray-500 mt-1">Commitment</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}