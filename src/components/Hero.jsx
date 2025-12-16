import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.header
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-white to-slate-50"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {/* Decorative background blob */}
      <div className="absolute -left-20 -top-28 pointer-events-none -z-10 opacity-40 filter blur-3xl">
        <svg width="520" height="520" viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#7dd3fc" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
          <circle cx="260" cy="260" r="200" fill="url(#g1)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Left side */}
        <motion.div initial={{ x: -18, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.15, duration: 0.7 }} className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Hi — I’m <span className="text-sky-600">Ayomide Oyelola</span>
          </h1>
          <p className="mt-2 text-lg text-slate-700 max-w-xl">
            I build delightful, reliable web apps and tools — scalable SaaS experiences powered by React, Laravel & thoughtful UX.
            Recent work includes EventixAfrica, RxAlert, and HelpHub.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-block px-6 py-3 bg-sky-600 text-white rounded-md shadow hover:bg-sky-700 transition transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-block px-6 py-3 border border-slate-200 rounded-md hover:bg-slate-100 transition"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-6 text-sm text-slate-500">
            <strong>Internships:</strong> Teachvibes (Jul–Sep 2023 & Jul–Sep 2024), NNPC (Jul–Sep 2025)
          </div>
        </motion.div>

        {/* Right side - animated profile */}
        <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.25, duration: 0.7 }} className="flex items-center justify-center">
          <motion.div whileHover={{ rotate: 2, scale: 1.02 }} className="w-64 h-64 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100 flex items-center justify-center shadow-xl">
            <div className="text-center">
              <motion.div className="w-28 h-28 rounded-full bg-sky-300/60 mx-auto mb-3 shadow-inner" whileHover={{ scale: 1.06 }} />
              <div className="text-sm text-slate-700">Profile image</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Hero;
