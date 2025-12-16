import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-emerald-50">
      {/* Heading */}
      <div className="text-center max-w-xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Physiotherapy Gallery
        </h2>
        <p className="mt-3 text-gray-500">
          A glimpse of our clinic, equipment, and therapy sessions.
        </p>
      </div>

      {/* Images */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-14 px-6">
        {["test1", "test2", "test3", "test4", "test5", "test6"].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <img
              src={`/${i}.jpeg`}
              alt={`Physiotherapy session ${i}`}
              className="w-full h-full object-cover hover:scale-110 transition duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
