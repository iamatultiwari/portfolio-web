"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
 const DEFAULT_IMAGE =
 "/atul.jpg";
  const [image, setImage] = useState<string>(DEFAULT_IMAGE);

  // Load profile image from localStorage
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

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
              key={image}          // 🔥 force re-render
              src={image}
              alt="Atul Tiwari"
              fill
              unoptimized          // 🔥 required for base64 images
              className="object-contain"
            />
          </div>

          <div className="absolute -bottom-6 -right-6 bg-black text-white px-6 py-3 rounded-2xl shadow-lg">
            <p className="text-sm">Freshers</p>
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
            Hello! I’m Atul Tiwari, a final-year Computer Science student and an aspiring Full Stack Developer passionate about building modern, scalable, and user-friendly web applications.

Throughout my academic journey, I have primarily worked on individual projects, independently managing the complete development lifecycle — from planning and UI design to backend implementation and deployment. This hands-on approach has strengthened my problem-solving ability, technical depth, and sense of ownership in every project I build.

My core expertise lies in Java and JavaScript, and I actively work with modern technologies such as React, Next.js, Node.js, and relational databases. I focus on writing clean, maintainable, and structured code while ensuring performance and scalability. I enjoy designing intuitive user interfaces just as much as building robust backend logic.

Working independently has helped me develop strong self-discipline, adaptability, and continuous learning habits. I consistently explore new technologies, improve my development practices, and refine my understanding of full-stack architecture to stay aligned with industry standards.

          </p>

          <p className="text-gray-600 leading-relaxed mb-10">
            
I am currently seeking opportunities where I can contribute to meaningful projects, grow alongside experienced professionals, and apply my skills in a real-world environment.

I’m excited about building impactful digital solutions and turning ideas into reality.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center border border-gray-100">
              <h3 className="text-2xl font-semibold">5+</h3>
              <p className="text-sm text-gray-500 mt-1">Projects</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md text-center border border-gray-100">
              <h3 className="text-2xl font-semibold">7+</h3>
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