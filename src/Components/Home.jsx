import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown } from "lucide-react";
import pic from "../assets/final pic.png"
function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden"
    >
      {/* ✨ Glowing Gradient Orbs Background */}
      <motion.div
        className="absolute w-96 h-96 bg-[#6d28d9] rounded-full blur-[120px] opacity-40 -top-32 -left-32"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-[#ec4899] rounded-full blur-[120px] opacity-40 -bottom-40 -right-32"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🌟 Text Section */}
      <motion.div
        className="md:w-1/2 z-10 space-y-6 text-center md:text-left"
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Hi, I'm{" "}
          <span className="text-[#deb40d] drop-shadow-[0_0_20px_#facc15]">
            Ajay Chaudhary
          </span>
        </h1>

        <TypeAnimation
          sequence={[
            "MERN Stack Developer 💻",
            2500,
            "Frontend Engineer 🎨",
            2500,
            "Backend Builder ⚙️",
            2500,
            "React Enthusiast ⚡",
            2500,
          ]}
          wrapper="p"
          repeat={Infinity}
          className="text-2xl md:text-3xl font-medium text-[#a5b4fc] drop-shadow-[0_0_10px_#818cf8]"
        />

        <p className="text-gray-300 max-w-md text-lg md:text-xl leading-relaxed">
          I design and build glowing, dynamic, and futuristic web experiences
          powered by modern MERN technologies.
        </p>

        {/* ✨ Buttons with Glow */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
          <a
            href="#projects"
            className="px-8 py-3 bg-[#facc15] text-gray-900 font-semibold rounded-full shadow-[0_0_20px_#facc15] hover:shadow-[0_0_40px_#facc15] hover:scale-105 transition-all duration-300"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-[#a5b4fc] text-[#a5b4fc] font-semibold rounded-full hover:bg-[#a5b4fc]/10 hover:shadow-[0_0_25px_#818cf8] hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* 🪩 Glowing Image Section */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-10 md:mb-0 z-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
      >
        <motion.div
          className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#a5b4fc] shadow-[0_0_60px_#818cf8]"
          whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
        >
          <img
            src={pic}
            alt="Ajay Chaudhary"
            className="relative w-full h-full object-cover rounded-full"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#f472b6]/10 to-[#60a5fa]/10"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          ></motion.div>
        </motion.div>
      </motion.div>

      {/* 🔽 Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
        className="absolute bottom-6 flex flex-col items-center text-[#a5b4fc]/80 w-full"
      >
        <p className="text-sm mb-1 tracking-widest uppercase">Scroll Down</p>
        <ArrowDown
          size={28}
          className="drop-shadow-[0_0_10px_#818cf8] animate-bounce"
        />
      </motion.div>
    </section>
  );
}

export default Home;












// import React from "react";
// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import { ArrowDown } from "lucide-react";

// function Home() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 overflow-hidden perspective-1000"
//     >
//       {/* Background Floating 3D Shapes */}
//       <motion.div
//         className="absolute w-64 h-64 bg-purple-500 rounded-full opacity-30 blur-3xl -top-32 -left-32"
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
//       ></motion.div>

//       <motion.div
//         className="absolute w-72 h-72 bg-pink-500 rounded-full opacity-25 blur-3xl -bottom-40 -right-32"
//         animate={{ rotate: -360 }}
//         transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
//       ></motion.div>

//       {/* Left Side: Text */}
//       <motion.div
//         className="md:w-1/2 z-10 space-y-6 text-center md:text-left"
//         initial={{ opacity: 0, x: -200 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//       >
//         <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
//           Hi, I'm{" "}
//           <span className="text-yellow-200 drop-shadow-lg">Ajay Chaudhary</span>
//         </h1>

//         <TypeAnimation
//           sequence={[
//             "MERN Stack Developer 💻",
//             2500,
//             "Frontend Engineer 🎨",
//             2500,
//             "Backend Builder ⚙️",
//             2500,
//             "React Enthusiast ⚡",
//             2500,
//           ]}
//           wrapper="p"
//           repeat={Infinity}
//           className="text-2xl md:text-3xl font-medium text-white/90"
//         />

//         <p className="text-gray-200 max-w-md text-lg md:text-xl">
//           I create interactive, modern, and responsive web applications with depth and motion. Let's build something futuristic together!
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
//           <a
//             href="#projects"
//             className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
//           >
//             Explore Projects
//           </a>
//           <a
//             href="#contact"
//             className="px-8 py-3 border border-white text-white font-semibold rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300"
//           >
//             Contact Me
//           </a>
//         </div>
//       </motion.div>

//       {/* Right Side: 3D Image Card */}
//       <motion.div
//         className="md:w-1/2 flex justify-center mb-10 md:mb-0 z-10"
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//       >
//         <motion.div
//           className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
//           whileHover={{ rotateY: 15, rotateX: 10, scale: 1.05 }}
//           transition={{ type: "spring", stiffness: 100, damping: 10 }}
//         >
//           {/* 3D Glow */}
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 rounded-3xl blur-3xl opacity-40"
//             animate={{ rotate: 360 }}
//             transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
//           ></motion.div>

//           <img
//             src="/final pic.png"
//             alt="Ajay Chaudhary"
//             className="relative w-full h-full object-cover rounded-3xl border-4 border-white shadow-lg"
//           />
//         </motion.div>
//       </motion.div>

//       {/* Scroll Down Indicator */}
//       <motion.div
//         initial={{ opacity: 0, y: 0 }}
//         animate={{ opacity: 1, y: 10 }}
//         transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
//         className="absolute bottom-6 flex flex-col items-center text-white/80 w-full"
//       >
//         <p className="text-sm mb-1 tracking-wider">Scroll Down</p>
//         <ArrowDown size={24} className="animate-bounce" />
//       </motion.div>
//     </section>
//   );
// }

// export default Home;






