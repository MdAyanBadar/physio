import { useState } from "react";
import { motion } from "framer-motion";

export default function Appointment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
  });
  const [success, setSuccess] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setSuccess(true);
    setForm({ name: "", phone: "", date: "" });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section id="appointment" className="py-24 bg-white">
      {/* Heading */}
      <div className="text-center max-w-xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Book an Appointment
        </h2>
        <p className="mt-3 text-gray-500">
          Schedule a consultation with our certified physiotherapists.
        </p>
      </div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={submitHandler}
        className="max-w-md mx-auto mt-12 bg-emerald-50 rounded-2xl p-8 shadow-sm"
      >
        {success && (
          <div className="mb-4 text-center text-emerald-600 font-medium">
            ✔ Appointment booked successfully!
          </div>
        )}

        <input
          className="w-full mb-4 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          className="w-full mb-4 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
        />

        <input
          type="date"
          className="w-full mb-6 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
        />

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full bg-emerald-600 text-white py-3 rounded-full font-medium hover:bg-emerald-700 transition"
        >
          Confirm Booking
        </motion.button>
      </motion.form>
    </section>
  );
}
