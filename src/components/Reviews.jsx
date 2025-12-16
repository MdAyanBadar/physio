import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rahul Sharma",
    text: "The therapists were professional and very supportive throughout my recovery.",
    rating: 5,
  },
  {
    name: "Anita Verma",
    text: "Clean clinic, modern equipment, and excellent personalized care.",
    rating: 5,
  },
  {
    name: "Sourav Das",
    text: "I noticed improvement within weeks. Highly recommended physiotherapy clinic.",
    rating: 4,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-emerald-50">
      {/* Heading */}
      <div className="text-center max-w-xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          What Our Patients Say
        </h2>
        <p className="mt-3 text-gray-500">
          Real experiences from patients who trusted us with their recovery.
        </p>
      </div>

      {/* Reviews */}
      <div className="max-w-6xl mx-auto mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            {/* Stars */}
            <div className="text-emerald-500 mb-3">
              {"★".repeat(review.rating)}
            </div>

            <p className="text-gray-600 italic leading-relaxed">
              “{review.text}”
            </p>

            <h4 className="mt-4 font-medium text-gray-800">
              — {review.name}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
