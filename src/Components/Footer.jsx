import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-300 py-10 border-t border-gray-800 relative overflow-hidden">
      {/* Soft Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left side */}
        <p className="text-sm text-center md:text-left text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            Ajay Chaudhary
          </span>
          . All rights reserved.
        </p>

        {/* Center - Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-6 text-sm font-medium">
          {["#home", "#about", "#skills", "#projects", "#contact"].map((link, i) => (
            <motion.a
              key={i}
              href={link}
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300"
            >
              {link.replace("#", "").toUpperCase()}
            </motion.a>
          ))}
        </div>

        {/* Right side - Social Links */}
        <div className="flex space-x-6 text-2xl">
          <motion.a
            whileHover={{ scale: 1.2, color: "#a855f7", textShadow: "0px 0px 8px rgba(168,85,247,0.8)" }}
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 text-gray-400 hover:text-purple-400"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, color: "#38bdf8", textShadow: "0px 0px 8px rgba(56,189,248,0.8)" }}
            href="https://linkedin.com/in/ajaychaudhary24"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 text-gray-400 hover:text-cyan-400"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, color: "#f87171", textShadow: "0px 0px 8px rgba(248,113,113,0.8)" }}
            href="mailto:chaudharyajay8097@email.com"
            className="transition-all duration-300 text-gray-400 hover:text-rose-400"
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </div>

      {/* Glowing Accent Bar */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-8 h-[2px] w-3/4 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 rounded-full"
      ></motion.div>
    </footer>
  );
};

export default Footer;










// import React from "react";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-10">
//       <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
//         {/* Left side - Name & Copyright */}
//         <p className="text-sm text-center md:text-left text-gray-400">
//           © {new Date().getFullYear()}{" "}
//           <span className="font-semibold text-white">Ajay Chaudhary</span>. All rights reserved.
//         </p>

//         {/* Center - Navigation Links */}
//         <div className="flex flex-wrap justify-center space-x-6 text-sm">
//           {["#home", "#about", "#skills", "#projects", "#contact"].map((link, i) => (
//             <a
//               key={i}
//               href={link}
//               className="hover:text-indigo-500 transition-colors duration-300 font-medium"
//             >
//               {link.replace("#", "").toUpperCase()}
//             </a>
//           ))}
//         </div>

//         {/* Right side - Social Links */}
//         <div className="flex space-x-6 text-2xl">
//           <motion.a
//             whileHover={{ scale: 1.2, color: "#6ee7b7" }}
//             href="https://github.com/yourusername"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="transition-colors duration-300"
//           >
//             <FaGithub />
//           </motion.a>
//           <motion.a
//             whileHover={{ scale: 1.2, color: "#0ea5e9" }}
//             href="https://linkedin.com/in/ajaychaudhary24"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="transition-colors duration-300"
//           >
//             <FaLinkedin />
//           </motion.a>
//           <motion.a
//             whileHover={{ scale: 1.2, color: "#f87171" }}
//             href="mailto:chaudharyajay8097@email.com"
//             className="transition-colors duration-300"
//           >
//             <FaEnvelope />
//           </motion.a>
//         </div>
//       </div>

//       {/* Optional: Bottom accent bar */}
//       {/* <div className="mt-6 h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div> */}
//     </footer>
//   );
// };

// export default Footer;

