"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Work() {
  const projects = [
    {
      title: "Modern Portfolio",
      tech: "Next.js • Tailwind",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      title: "E-Commerce Platform",
      tech: "React • Stripe",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    },
    {
      title: "Dashboard UI",
      tech: "TypeScript • Charts",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
  ];

  return (
    <section className="relative max-w-6xl mx-auto py-28 px-6 overflow-hidden">

      {/* Soft Gradient Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[400px] h-[400px] bg-purple-200 rounded-full blur-3xl opacity-30 top-[-120px] right-[-120px]" />
        <div className="absolute w-[300px] h-[300px] bg-blue-200 rounded-full blur-3xl opacity-30 bottom-[-100px] left-[-100px]" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-serif mb-16 text-center"
      >
        My Latest Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100"
          >
            {/* Image */}
            <div className="relative h-56 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <span className="inline-block text-xs px-3 py-1 mb-3 rounded-full bg-pink-100 text-pink-600">
                Featured
              </span>

              <h3 className="text-lg font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-gray-500">
                {project.tech}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}