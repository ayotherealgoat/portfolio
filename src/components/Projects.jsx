import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample screenshots (replace with actual images)
import Eventix1 from "../assets/Eventix.png";
import Eventix2 from "../assets/Eventix2.png";
import Eventix3 from "../assets/Eventix3.png";
import RxAlert1 from "../assets/RxAlert1.png";
import RxAlert2 from "../assets/RxAlert2.png";
import Helphub1 from "../assets/helphub1.png";
import Helphub2 from "../assets/helphub2.png";
import Helphub3 from "../assets/helphub3.png";
import Helphub4 from "../assets/helphub4.png";

const projects = [
  {
    name: "EventixAfrica",
    description:
      "A full-stack event management platform allowing organizers to create, manage, and publish events online. Built from scratch and launched June 2025.",
    status: "Live",
    tech: ["PHP", "JavaScript", "MySQL"],
    screenshots: [Eventix1, Eventix2, Eventix3],
    features: [
      "Create and manage events",
      "Online ticketing",
      "Dashboard for organizers",
      "Responsive design"
    ],
    link: "https://eventixafrica.com",
  },
  {
    name: "RxAlert",
    description:
      "A medication reminder system that helps users manage prescriptions and track history. Built with Laravel, currently in production.",
    status: "In Production",
    tech: ["Laravel", "MySQL", "Tailwind"],
    screenshots: [RxAlert1, RxAlert2],
    features: [
      "Set medication reminders",
      "Track medication history",
      "Receive notifications",
      "User-friendly interface"
    ],
    link: "https://github.com/ayotherealgoat/rxalert",
  },
  {
    name: "HelpHub",
    description:
      "Neighborhood support platform connecting people with services and assistance. Focused on usability and scalable backend.",
    status: "In Production",
    tech: ["Laravel", "Vite", "Tailwind"],
    screenshots: [Helphub1, Helphub2, Helphub3, Helphub4],
    features: [
      "Connect with local services",
      "Post and request help",
      "Clean UI/UX",
      "Responsive design"
    ],
    link: "https://github.com/ayotherealgoat/helphub",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.02 }}
            >
              {project.screenshots[0] && (
                <img
                  src={project.screenshots[0]}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-slate-700 mb-2">{project.description}</p>
                <span className="inline-block px-3 py-1 text-sm rounded-full bg-sky-100 text-sky-600">
                  {project.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white rounded-lg max-w-4xl w-full overflow-y-auto max-h-[90vh] p-6 relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-xl font-bold hover:text-sky-600"
                  onClick={() => setSelectedProject(null)}
                >
                  ×
                </button>

                <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
                <p className="text-slate-700 mb-4">{selectedProject.description}</p>

                <div className="mb-4">
                  <span className="font-semibold">Tech Stack: </span>
                  {selectedProject.tech.join(", ")}
                </div>

                <div className="mb-4">
                  <span className="font-semibold">Key Features:</span>
                  <ul className="list-disc list-inside mt-2">
                    {selectedProject.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {selectedProject.screenshots.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${selectedProject.name}-${i}`}
                      className="w-full rounded shadow"
                    />
                  ))}
                </div>

                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-6 py-3 bg-sky-600 text-white rounded-md shadow hover:bg-sky-700"
                  >
                    Visit Project
                  </a>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
