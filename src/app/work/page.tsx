"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Work() {
  const projects = [
    {
      title: "Car-X",
      tech: "MERN Stack • Full-Stack",
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
      live: "https://car-x-1.onrender.com/",
    },
    {
      title: "Instastay",
      tech: "MERN Stack • Booking Platform",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      live: "https://instastay-v2aj.onrender.com/",
    },
    {
      title: "NextMusic Academy",
      tech: "Next.js • TypeScript • Tailwind",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
      live: "https://nextmusic-academy-2.onrender.com/",
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto py-32 px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-purple-300 rounded-full blur-[140px] opacity-20 top-[-150px] right-[-150px]" />
        <div className="absolute w-[400px] h-[400px] bg-blue-300 rounded-full blur-[120px] opacity-20 bottom-[-150px] left-[-150px]" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-semibold text-center mb-20 bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl hover:shadow-2xl transition duration-500"
          >
            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 p-6 text-white w-full">
              <span className="text-xs uppercase tracking-widest text-gray-300">
                Live Project
              </span>

              <h3 className="text-xl font-semibold mt-2 mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-gray-300 mb-4">
                {project.tech}
              </p>

              {/* Button */}
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition duration-300"
              >
                View Live
                <span className="group-hover:translate-x-1 transition">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}