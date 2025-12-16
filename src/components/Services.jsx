import { motion } from "framer-motion";

const services = [
  {
    title: "Orthopedic Therapy",
    desc: "Joint, muscle, and spine rehabilitation",
    icon: "🦴",
  },
  {
    title: "Sports Rehabilitation",
    desc: "Injury recovery and performance care",
    icon: "🏃‍♂️",
  },
  {
    title: "Post Surgery Recovery",
    desc: "Safe and guided healing programs",
    icon: "🩺",
  },
  {
    title: "Neurological Therapy",
    desc: "Improving mobility and nerve function",
    icon: "🧠",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      {/* Heading */}
      <div className="text-center max-w-xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Our Physiotherapy Services
        </h2>
        <p className="mt-3 text-gray-500">
          Specialized treatments designed to restore movement, reduce pain,
          and improve your quality of life.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto mt-14 grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl p-7 text-center shadow-sm hover:shadow-md transition"
          >
            <div className="text-4xl mb-4">{service.icon}</div>

            <h3 className="font-semibold text-gray-800">
              {service.title}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
