import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-hidden"
    >
      {/* ✨ Glowing background orbs */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-[#818cf8] rounded-full blur-[150px] opacity-30 -top-32 -left-32"
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-[#f472b6] rounded-full blur-[150px] opacity-25 -bottom-32 -right-32"
        animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-2xl mx-auto text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#facc15] via-[#a78bfa] to-[#f472b6] text-transparent bg-clip-text drop-shadow-[0_0_20px_#818cf8]"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 mb-12 max-w-lg mx-auto"
        >
          Have a project in mind or just want to say hi? Fill out the form below
          and I’ll get back to you soon!
        </motion.p>

        {/* ✨ Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1e1b4b]/60 backdrop-blur-lg rounded-2xl p-8 flex flex-col gap-6 border border-[#818cf8]/30 shadow-[0_0_30px_#6366f1]/30 hover:shadow-[0_0_50px_#6366f1]/40 transition-all duration-500"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-4 rounded-lg bg-transparent border border-[#6366f1]/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#818cf8] focus:border-[#818cf8] transition"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-4 rounded-lg bg-transparent border border-[#6366f1]/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#818cf8] focus:border-[#818cf8] transition"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            className="p-4 rounded-lg bg-transparent border border-[#6366f1]/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#818cf8] focus:border-[#818cf8] transition"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #818cf8" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] text-white py-3 rounded-xl font-semibold transition-all duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;






// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     alert("Message sent successfully!");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <section
//       id="contact"
//       className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
//     >
//       <div className="max-w-xl mx-auto text-center mb-12">
//         <h2 className="text-4xl font-extrabold text-indigo-700 mb-4">
//           Contact Me
//         </h2>
//         <p className="text-gray-600">
//           Have a project in mind or just want to say hi? Fill out the form below and I’ll get back to you soon!
//         </p>
//       </div>

//       <motion.form
//         className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-5"
//         onSubmit={handleSubmit}
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//       >
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
//           rows="6"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         ></textarea>
//         <button
//           type="submit"
//           className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition transform duration-300"
//         >
//           Send Message
//         </button>
//       </motion.form>
//     </section>
//   );
// };

// export default Contact




