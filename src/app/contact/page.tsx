"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    emailjs.init("Qeu1cPQd4Pk2O7hxk");
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    try {
      await emailjs.send(
        "service_uwwk47e",
        "template_syjimkn",
        { name, email, message }
      );

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
   <section className="relative py-36 px-6 bg-gray-100 overflow-hidden">
      {/* Background Blur Effects */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-purple-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
            Let’s Build Something Great
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I'm currently open to full-stack developer roles, internships, and
            collaborations. Feel free to reach out — I’d love to connect.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/70 border border-gray-200 shadow-2xl rounded-3xl p-12 space-y-10"
        >

          <div className="grid md:grid-cols-2 gap-8">
            <input
              name="name"
              type="text"
              required
              placeholder="Full Name"
              className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 
                         focus:ring-2 focus:ring-black focus:border-black 
                         transition-all duration-300 outline-none text-gray-800"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 
                         focus:ring-2 focus:ring-black focus:border-black 
                         transition-all duration-300 outline-none text-gray-800"
            />
          </div>

          <textarea
            name="message"
            rows={6}
            required
            placeholder="Tell me about your project or opportunity..."
            className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 
                       focus:ring-2 focus:ring-black focus:border-black 
                       transition-all duration-300 outline-none text-gray-800"
          />

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`relative w-full py-4 rounded-2xl font-medium text-white 
                         transition-all duration-300 shadow-lg 
                         ${
                           loading
                             ? "bg-gray-400 cursor-not-allowed"
                             : "bg-black hover:scale-[1.02] hover:shadow-xl"
                         }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </div>

          {success && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 text-center font-medium"
            >
              ✅ Message sent successfully!
            </motion.p>
          )}

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-center font-medium"
            >
              {error}
            </motion.p>
          )}

        </motion.form>
      </div>
    </section>
  );
}