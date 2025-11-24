import React from "react";
import { motion } from "framer-motion";
import { Layout, Database, Server } from "lucide-react";

function Skills() {
  const frontendSkills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Tailwind CSS",
    "Redux Toolkit",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Authentication",
  ];

  const databaseSkills = ["MongoDB", "MySQL"];

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-hidden"
    >
      {/* ✨ Background Glow */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-[#818cf8] rounded-full blur-[130px] opacity-30 -top-32 -left-32"
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-[#f472b6] rounded-full blur-[130px] opacity-25 -bottom-32 -right-32"
        animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ✨ Header */}
      <div className="relative max-w-6xl mx-auto text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#facc15] via-[#a78bfa] to-[#f472b6] text-transparent bg-clip-text drop-shadow-[0_0_20px_#818cf8]"
        >
          My Skills
        </motion.h2>
        <p className="text-lg text-gray-300 mb-16">
          I specialize in building full-stack web applications using cutting-edge
          technologies — ensuring scalability, clean code, and top-notch user
          experience.
        </p>

        {/* ✨ Skills Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Frontend Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#1e1b4b]/70 backdrop-blur-lg p-8 rounded-2xl border border-[#818cf8]/30 hover:border-[#818cf8] shadow-[0_0_25px_#818cf8]/40 hover:shadow-[0_0_40px_#818cf8] transition-all duration-500"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Layout className="text-[#a5b4fc] w-8 h-8" />
              <h3 className="text-2xl font-semibold text-[#a5b4fc]">
                Frontend
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {frontendSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-[#6366f1]/80 text-white rounded-full text-sm font-medium shadow-md hover:bg-[#818cf8] hover:scale-105 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Backend Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1e1b4b]/70 backdrop-blur-lg p-8 rounded-2xl border border-[#34d399]/30 hover:border-[#34d399] shadow-[0_0_25px_#34d399]/40 hover:shadow-[0_0_40px_#34d399] transition-all duration-500"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Server className="text-[#34d399] w-8 h-8" />
              <h3 className="text-2xl font-semibold text-[#34d399]">
                Backend
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {backendSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-[#10b981]/80 text-white rounded-full text-sm font-medium shadow-md hover:bg-[#34d399] hover:scale-105 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Database Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#1e1b4b]/70 backdrop-blur-lg p-8 rounded-2xl border border-[#f472b6]/30 hover:border-[#f472b6] shadow-[0_0_25px_#f472b6]/40 hover:shadow-[0_0_40px_#f472b6] transition-all duration-500"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Database className="text-[#f472b6] w-8 h-8" />
              <h3 className="text-2xl font-semibold text-[#f472b6]">
                Database
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {databaseSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-[#ec4899]/80 text-white rounded-full text-sm font-medium shadow-md hover:bg-[#f472b6] hover:scale-105 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ✨ Tools Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h4 className="text-xl font-semibold text-[#facc15] mb-3 drop-shadow-[0_0_10px_#facc15]">
            Tools & Technologies
          </h4>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Git • GitHub • Postman • VS Code • RESTful APIs
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;



























// import React from "react";
// import { motion } from "framer-motion";
// import { Layout, Database, Server } from "lucide-react"; // Icons for categories

// function Skills() {
//   const frontendSkills = [
//     "HTML5",
//     "CSS3",
//     "JavaScript (ES6+)",
//     "React.js",
//     "Tailwind CSS",
//     "Redux Toolkit",
//   ];

//   const backendSkills = [
//     "Node.js",
//     "Express.js",
//     "REST APIs",
//     "JWT Authentication",
//   ];

//   const databaseSkills = ["MongoDB", "MySQL"];

//   const cardVariant = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.15, duration: 0.6 },
//     }),
//   };

//   return (
//     <section
//       id="skills"
//       className="py-20 px-6 bg-gradient-to-br from-amber-50 to-yellow-100 text-gray-800"
//     >
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-extrabold mb-10 text-indigo-700">
//           My Skills
//         </h2>
//         <p className="text-lg text-gray-600 mb-16">
//           I specialize in crafting scalable, efficient, and visually appealing web applications
//           using modern technologies and frameworks.
//         </p>

//         <div className="grid md:grid-cols-3 gap-10">
//           {/* Frontend Section */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
//           >
//             <div className="flex items-center justify-center gap-3 mb-6">
//               <Layout className="text-blue-600 w-8 h-8" />
//               <h3 className="text-2xl font-semibold text-blue-700">Frontend</h3>
//             </div>
//             <div className="flex flex-wrap justify-center gap-4">
//               {frontendSkills.map((skill, index) => (
//                 <motion.span
//                   key={index}
//                   custom={index}
//                   variants={cardVariant}
//                   className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
//                 >
//                   {skill}
//                 </motion.span>
//               ))}
//             </div>
//           </motion.div>

//           {/* Backend Section */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
//           >
//             <div className="flex items-center justify-center gap-3 mb-6">
//               <Server className="text-green-600 w-8 h-8" />
//               <h3 className="text-2xl font-semibold text-green-700">Backend</h3>
//             </div>
//             <div className="flex flex-wrap justify-center gap-4">
//               {backendSkills.map((skill, index) => (
//                 <motion.span
//                   key={index}
//                   custom={index}
//                   variants={cardVariant}
//                   className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium shadow-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
//                 >
//                   {skill}
//                 </motion.span>
//               ))}
//             </div>
//           </motion.div>

//           {/* Database Section */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
//           >
//             <div className="flex items-center justify-center gap-3 mb-6">
//               <Database className="text-purple-600 w-8 h-8" />
//               <h3 className="text-2xl font-semibold text-purple-700">Database</h3>
//             </div>
//             <div className="flex flex-wrap justify-center gap-4">
//               {databaseSkills.map((skill, index) => (
//                 <motion.span
//                   key={index}
//                   custom={index}
//                   variants={cardVariant}
//                   className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium shadow-md hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
//                 >
//                   {skill}
//                 </motion.span>
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         {/* Tools Section */}
//         <motion.div
//           className="mt-16 text-center"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           <h4 className="text-xl font-semibold text-indigo-600 mb-3">
//             Tools & Technologies
//           </h4>
//           <p className="text-gray-700 max-w-2xl mx-auto">
//             Git • GitHub • Postman • VS Code  • RESTful APIs
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Skills;









