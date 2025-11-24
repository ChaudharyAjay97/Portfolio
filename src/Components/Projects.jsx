import React from "react";
import { motion } from "framer-motion";
import auc from "../assets/Bidding-process.jpg"
import fresh from "../assets/farm_fresh.webp"


const projects = [
  {
    title: "Farm Fresh E-commerce",
    description:
      "A full-stack e-commerce website built with React, Node.js, Express, and MongoDB. Users can browse products, add to cart, and checkout securely.",
    image: {fresh},
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Responsive React portfolio showcasing projects and skills with smooth scrolling and modern UI design.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    link: "#",
  },
  {
    title: "Online Auction System",
    description:
      "A MERN stack-based online auction platform where users can list products, place live bids, and track real-time bidding updates using Socket.io.",
    image: {auc},
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100"
    >
      {/* Fixed Title (no text clipping now) */}
      <motion.h2
        className="text-5xl font-extrabold mb-14 text-center bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-[1.2] pb-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-900/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-500 transform hover:-translate-y-2"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-3 text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
                >
                  View Project
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;






// import React from "react";
// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "Farm Fresh E-commerce",
//     description:
//       "A full-stack e-commerce website built with React, Node.js, Express, and MongoDB. Users can browse products, add to cart, and checkout securely.",
//     image: "/farm_fresh.webp",
//     link: "#",
//   },
//   {
//     title: "Portfolio Website",
//     description:
//       "Responsive React portfolio showcasing projects and skills with smooth scrolling and modern UI design.",
//     image:
//       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
//     link: "#",
//   },
//   {
//     title: "Online Auction System",
//     description:
//       "A MERN stack-based online auction platform where users can list products, place live bids, and track real-time bidding updates using Socket.io.",
//     image: "/Bidding-process.jpg",
//     link: "#",
//   },
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="py-20 px-6 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100"
//     >
//       {/* Title */}
//       <motion.h2
//         className="text-5xl font-extrabold mb-14 text-center bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//       >
//         My Projects
//       </motion.h2>

//       {/* Cards Grid */}
//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             className="bg-gray-900/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-500 transform hover:-translate-y-2"
//           >
//             {/* Image */}
//             <div className="overflow-hidden">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-52 object-cover transition-transform duration-500 hover:scale-110"
//               />
//             </div>

//             {/* Content */}
//             <div className="p-6 text-center">
//               <h3 className="text-2xl font-semibold mb-3 text-white">
//                 {project.title}
//               </h3>
//               <p className="text-gray-400 mb-6 text-sm leading-relaxed">
//                 {project.description}
//               </p>

//               {project.link && (
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
//                 >
//                   View Project
//                 </a>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;











// import React from "react";
// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "Farm Fresh E-commerce",
//     description:
//       "A full-stack e-commerce website built with React, Node.js, Express, and MongoDB. Users can browse products, add to cart, and checkout securely.",
//     image: "public/farm_fresh.webp",
//     link: "#",
//   },
//   {
//     title: "Portfolio Website",
//     description:
//       "Responsive React portfolio showcasing projects and skills with smooth scrolling and modern UI design.",
//     image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
//     link: "#",
//   },
//   {
//     title: "Online Auctio System",
//     description:
//      "A MERN stack-based online auction platform where users can list products, place live bids, and track real-time bidding updates using Socket.io.",
//      image: "public/Bidding-process.jpg",
//     link: "#",
//   }
  
 
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="py-20 px-6 max-w-7xl mx-auto bg-gray-50 text-gray-800"
//     >
//       <h2 className="text-4xl font-extrabold mb-12 text-center text-indigo-700">
//         My Projects
//       </h2>

//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
//           >
//             <div className="overflow-hidden">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
//               />
//             </div>
//             <div className="p-6">
//               <h3 className="text-2xl font-semibold mb-3 text-gray-800">
//                 {project.title}
//               </h3>
//               <p className="text-gray-600 mb-4">{project.description}</p>
//               {project.link && (
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-300"
//                 >
//                   View Project
//                 </a>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;




