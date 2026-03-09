"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-32 bg-gray-50 border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
              Atul<span className="text-gray-400">.</span>
            </h2>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Final year Computer Science student focused on building
              scalable full stack web applications using modern technologies.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Navigation
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-black transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-black transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-black transition">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Connect
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  className="hover:text-black transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  className="hover:text-black transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:your@email.com"
                  className="hover:text-black transition"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Atul Tiwari. Built with Next.js & Tailwind CSS.
        </div>

      </div>
    </motion.footer>
  );
}