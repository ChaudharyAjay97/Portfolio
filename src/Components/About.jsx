import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-hidden"
    >
      {/* ✨ Background Glow Orbs */}
      <motion.div
        className="absolute w-96 h-96 bg-[#818cf8] rounded-full blur-[130px] opacity-30 -top-40 -left-32"
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-[#f472b6] rounded-full blur-[130px] opacity-25 -bottom-40 -right-32"
        animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ✨ Content */}
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-10 bg-gradient-to-r from-[#facc15] via-[#a78bfa] to-[#f472b6] text-transparent bg-clip-text drop-shadow-[0_0_20px_#818cf8]"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl leading-8 text-gray-200 mb-6"
        >
          Hi, I'm{" "}
          <span className="font-semibold text-[#facc15] drop-shadow-[0_0_8px_#facc15]">
            Ajay Chaudhary
          </span>{" "}
          — a passionate{" "}
          <span className="font-semibold text-[#a5b4fc] drop-shadow-[0_0_8px_#818cf8]">
            MERN Stack Developer
          </span>{" "}
          dedicated to building interactive, scalable, and performance-driven web
          applications.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl leading-8 text-gray-300 mb-6"
        >
          I specialize in creating full-stack projects using{" "}
          <span className="font-medium text-[#f472b6]">
            React, Node.js, Express, and MongoDB
          </span>
          , focusing on clean architecture, reusable UI components, and
          seamless user experiences. I also enjoy optimizing backend logic and
          integrating secure authentication systems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl leading-8 text-gray-300"
        >
          I’m constantly learning new technologies and exploring better ways to
          deliver fast, modern, and accessible digital solutions that truly make
          an impact.
        </motion.p>

        {/* ✨ Decorative Divider Glow Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="mt-12 w-32 h-[3px] mx-auto bg-gradient-to-r from-[#818cf8] via-[#facc15] to-[#f472b6] shadow-[0_0_20px_#818cf8]"
        ></motion.div>
      </div>
    </section>
  );
}

export default About;





// import React from "react";

// function About() {
//   return (
//     <section
//       id="about"
//       className="py-20 px-6 bg-gray-50 text-gray-800"
//     >
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-4xl font-extrabold mb-6 text-indigo-600">
//           About Me
//         </h2>
//         <p className="text-lg md:text-xl leading-8 text-gray-700 mb-6">
//           Hi, I'm <span className="font-semibold text-indigo-700">Ajay Chaudhary</span> — a dedicated and results-driven{" "}
//           <span className="font-semibold">MERN Stack Developer</span> with hands-on
//           experience in designing and developing modern, scalable, and high-performance web applications.
//         </p>
//         <p className="text-lg md:text-xl leading-8 text-gray-700 mb-6">
//           Over the past years, I’ve built full-stack projects using{" "}
//           <span className="font-medium">React, Node.js, Express, and MongoDB</span>,
//           focusing on clean code, reusable components, and seamless user experiences.
//           I have a strong understanding of REST APIs, authentication systems, and modern deployment workflows.
//         </p>
//         <p className="text-lg md:text-xl leading-8 text-gray-700">
//           I’m passionate about continuous learning and staying up-to-date with
//           emerging technologies. My goal is to craft intuitive digital experiences
//           that not only solve problems but also make a lasting impact.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default About;





// import React from 'react'

// function About() {
//   return (
//     <section id="about" className="p-10 max-w-4xl mx-auto">
//       <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
//       <p className="text-lg leading-7 text-gray-700">
//         Hello! I'm Ajay Chaudhary, a passionate MERN Stack Developer.
//          I specialize in building responsive and dynamic web applications using React, Node.js, Express, and MongoDB. I enjoy learning new technologies and turning ideas into real-world applications.
//       </p>
//     </section>
//   )
// }

// export default About
