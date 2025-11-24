import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-lg bg-[#0f0c29]/70 border-b border-white/10 shadow-[0_0_25px_#6366f1]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-white">
        {/* ✨ Logo with glow */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] to-[#f472b6] drop-shadow-[0_0_15px_#818cf8]"
        >
          My<span className="text-yellow-300 drop-shadow-[0_0_10px_#facc15]">Portfolio</span>
        </motion.h1>

        {/* 🌟 Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.1, textShadow: "0px 0px 8px #60a5fa" }}
              className="relative font-medium text-gray-200 hover:text-[#60a5fa] transition-all duration-300"
            >
              {link.name}
              <motion.span
                className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#818cf8] to-[#f472b6]"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* 🌈 Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)}
            className="text-white hover:text-[#60a5fa] focus:outline-none drop-shadow-[0_0_8px_#818cf8]"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* 📱 Mobile Dropdown Menu with glow */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1e1b4b]/95 border-t border-[#818cf8]/20 shadow-[0_0_30px_#818cf8] text-center flex flex-col space-y-5 py-6 backdrop-blur-xl"
          >
            {links.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                whileHover={{
                  scale: 1.1,
                  color: "#60a5fa",
                  textShadow: "0 0 12px #60a5fa",
                }}
                className="text-lg font-medium text-gray-200 transition-all duration-300"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;










// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react"; // modern icons

// function Navbar() {
//   const [open, setOpen] = useState(false);

//   const links = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-gray-900/70 text-white shadow-lg">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
//         {/* Logo */}
//         <h1 className="text-2xl font-extrabold tracking-wide text-blue-400">
//           My<span className="text-white">Portfolio</span>
//         </h1>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-8 text-lg">
//           {links.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="hover:text-blue-400 transition-all duration-300 hover:scale-105"
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setOpen(!open)}
//             className="text-2xl focus:outline-none"
//           >
//             {open ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-gray-800/95 text-center flex flex-col space-y-4 py-6"
//           >
//             {links.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setOpen(false)}
//                 className="text-lg hover:text-blue-400 transition-all duration-300 hover:scale-105"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

// export default Navbar;










