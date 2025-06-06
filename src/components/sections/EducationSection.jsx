"use client";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    exam: "JSC",
    year: "2016",
    board: "Dinajpur",
    gpa: "5.00",
    institute: "Kaliganj S.P High School",
    background: "General",
  },
  {
    exam: "SSC",
    year: "2019",
    board: "Dinajpur",
    institute: "Kaliganj S.P High School",
    gpa: "4.61",
    background: "Science",
  },
  {
    exam: "HSC",
    year: "2021",
    board: "Dinajpur",
    institute: "Thakurgaon Eco College",
    gpa: "4.83",
    background: "Science",
  },
  {
    exam: "Honors",
    year: "Ongoing",
    board: "",
    institute: "Moqbular Rahman Govt. College, Panchagarh",
    gpa: "N/A",
    background: "Bachelor of Arts - English",
  },
];

const EducationSection = () => {
  return (
    <section
      id="education"
      className="py-16 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Educational Qualification
      </motion.h2>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-2">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex items-start gap-4">
              <motion.div
                className="text-4xl text-blue-400 group-hover:rotate-12 transition-transform duration-300"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 12 }}
              >
                <FaGraduationCap />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-blue-400">{edu.exam}</h3>
                <p className="text-gray-300">Year: {edu.year}</p>
                {edu.board && (
                  <p className="text-gray-300">Board: {edu.board}</p>
                )}
                <p className="text-gray-300">Institute: {edu.institute}</p>
                {edu.gpa !== "N/A" && (
                  <p className="text-gray-300">GPA: {edu.gpa}</p>
                )}
                <p className="text-gray-300">{edu.background}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
