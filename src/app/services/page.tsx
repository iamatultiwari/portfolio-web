"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    "Web Development",
    "UI/UX Design",
    "Responsive Design",
    "Performance Optimization",
  ];

  return (
    <section className="max-w-6xl mx-auto py-24 px-6">
      <h2 className="text-4xl font-serif mb-12 text-center">
        My Services
      </h2>
      <div className="grid md:grid-cols-4 gap-6">
  {services.map((service, index) => (
    <motion.div
      key={service}
      whileHover={{ y: -8 }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100"
    >
      <div className="w-10 h-10 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center mb-4">
        ✨
      </div>
      <h3 className="font-semibold mb-2">{service}</h3>
      <p className="text-sm text-gray-500">
        Modern and scalable solutions.
      </p>
    </motion.div>
  ))}
</div>
    </section>
  );
}