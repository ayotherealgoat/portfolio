import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-slate-700 mb-6">
          Feel free to reach out via email or connect with me on LinkedIn and GitHub.
        </p>
        <motion.a
          href="mailto:ayomideoyelola12@gmail.com"
          whileHover={{ scale: 1.03 }}
          className="inline-block px-6 py-3 bg-sky-600 text-white rounded-md shadow hover:bg-sky-700 transition mb-4"
        >
          Email Me
        </motion.a>
        <div className="mt-4 flex justify-center gap-6">
          <motion.a
            href="https://www.linkedin.com/in/ayomide-oyelola-071944280"
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 4 }}
            className="text-sky-600 hover:underline transition"
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/ayotherealgoat"
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 4 }}
            className="text-sky-600 hover:underline transition"
          >
            GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
