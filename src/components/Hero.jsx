import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home"  className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-gray-800">
            Restore Movement,<br />
            <span className="text-emerald-600">
              Relieve Pain Naturally
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-md">
            Trusted physiotherapy care focused on healing, mobility,
            and long-term well-being.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#appointment"
              className="bg-emerald-600 text-white px-8 py-3 rounded-full font-medium shadow hover:bg-emerald-700 transition"
            >
              Book Appointment
            </motion.a>

            <a
              href="#services"
              className="px-8 py-3 rounded-full border border-emerald-600 text-emerald-600 font-medium hover:bg-emerald-100 transition"
            >
              Our Services
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-500">
            <span>✔ Certified Therapists</span>
            <span>✔ Modern Equipment</span>
            <span>✔ Personal Care</span>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src="/hero.jpeg"
          alt="Physiotherapy session"
          className="rounded-2xl shadow-md max-h-[520px] mx-auto"
        />
      </div>

      
    </section>
  );
}
