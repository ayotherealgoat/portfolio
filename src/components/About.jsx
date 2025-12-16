import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 text-center md:text-left">
        <motion.div data-aos="fade-up" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-slate-700 mb-4">
            Hi! I’m Ayomide Oyelola, a software engineer passionate about building web apps that solve real-world problems.
            I have experience with React, PHP, Laravel, and Node.js.
          </p>
          <p className="text-lg text-slate-700 mb-4">
            I enjoy creating platforms that make life easier — from event management systems to medication reminders and neighborhood help hubs.
          </p>
          <p className="text-lg text-slate-700">
            <span className="font-semibold">Skills:</span> React, Laravel, PHP, Node.js, JavaScript, HTML, CSS, TailwindCSS, Git, REST APIs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
