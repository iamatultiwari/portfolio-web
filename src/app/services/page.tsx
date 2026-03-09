"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Developing modern, responsive, and highly interactive user interfaces using React, Next.js, and TypeScript with a focus on performance and accessibility.",
    },
    {
      title: "Backend Development",
      description:
        "Designing secure, scalable backend architectures, REST APIs, and database systems that power reliable and production-ready applications.",
    },
    {
      title: "Responsive Web Design",
      description:
        "Crafting pixel-perfect layouts that adapt seamlessly across devices, ensuring consistent user experience on mobile, tablet, and desktop.",
    },
    {
      title: "Performance & Optimization",
      description:
        "Improving application speed, SEO, and overall efficiency through code optimization, lazy loading, caching strategies, and best practices.",
    },
  ];

  return (
    <section className="relative py-36 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-purple-300 rounded-full blur-[180px] opacity-20 top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-blue-300 rounded-full blur-[160px] opacity-20 bottom-[-200px] right-[-200px]" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Expertise
          </p>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
            Services I Provide
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-14">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition duration-500"
            >
              {/* Number Badge */}
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white flex items-center justify-center font-bold shadow-lg">
                {index + 1}
              </div>

              <h3 className="text-2xl font-semibold mb-4 mt-4 group-hover:text-purple-600 transition">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-base">
                {service.description}
              </p>

              {/* Bottom Accent Line */}
              <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}