import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const experiences = [
  {
    company: "Techvibes Int'l Ltd",
    role: "Software Engineering Intern",
    period: "July 2023 – September 2023",
    description:
      "Focused on learning core programming and web development fundamentals. Built small local websites and assisted with basic frontend tasks while gaining hands-on experience."
  },
  {
    company: "Techvibes Int'l Ltd",
    role: "Software Engineering Intern",
    period: "July 2024 – September 2024",
    description:
      "Built foundational versions of EventixAfrica and Aetherlink while improving frontend skills and backend integration knowledge. Gained practical experience working on real-world project structures."
  },
  {
    company: "NNPC Limited",
    role: "Software Engineering Intern",
    period: "July 2025 – September 2025",
    description:
      "Introduced and demonstrated EventixAfrica (production-ready version) to the team. Learned Laravel, API development, and full-stack workflows. Later contributed directly to company projects, including enhancements to the HCM Service Hub and internal HR tools."
  }
];

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              data-aos="fade-up"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-500"
            >
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <span className="text-slate-500 text-sm">
                {exp.role} | {exp.period}
              </span>
              <p className="mt-2 text-slate-700">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
