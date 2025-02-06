import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    exam: "JSC",
    year: "2016",

    board: "Dinajpur",
    gpa: "5.00",
    institute: "Kaliganj S.P High School",
    background: "general",
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
    <section className="py-12 px-6 bg-blue-500">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Educational Qualification
      </motion.h2>
      <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="text-blue-500 text-4xl">
              <FaGraduationCap />
            </div>
            <div>
              <h3 className="text-xl text-blue-500 font-semibold">
                {edu.exam}
              </h3>
              <p className="text-gray-600">Year: {edu.year}</p>
              {edu.board && <p className="text-gray-600">Board: {edu.board}</p>}
              {edu.institute && (
                <p className="text-gray-600">Institute: {edu.institute}</p>
              )}
              {edu.gpa !== "N/A" && (
                <p className="text-gray-600">GPA: {edu.gpa}</p>
              )}
              {edu.background && (
                <p className="text-gray-600">{edu.background}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
