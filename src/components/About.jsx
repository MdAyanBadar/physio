import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-emerald-50 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 px-6 items-center">

        {/* Image */}
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src="/about.jpeg"
          alt="Physiotherapist"
          className="rounded-2xl shadow-md"
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            About Our Clinic
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            With over <span className="font-medium text-emerald-600">10 years of experience</span>, our
            licensed physiotherapists specialize in evidence-based treatments
            designed to restore mobility, relieve pain, and improve everyday life.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We focus on personalized care, modern equipment, and compassionate
            guidance to help you recover safely and confidently.
          </p>

          {/* Trust highlights */}
          <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              ✔ Certified Therapists
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              ✔ Modern Equipment
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              ✔ Personal Treatment Plans
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              ✔ Patient-First Approach
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
