import { useState } from "react";
import { motion } from "framer-motion";

export default function Appointment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", phone: "", date: "" });

      setTimeout(() => setSuccess(false), 3000);
    }, 2000);
  };

  return (
    <section id="appointment" className="py-24 bg-white scroll-mt-28">
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
        className="max-w-md mx-auto mt-12 bg-emerald-50 rounded-2xl p-8 shadow-sm space-y-6"
      >
        {success && (
          <div className="text-center text-emerald-600 font-medium">
            ✔ Appointment booked successfully!
          </div>
        )}

        {/* Floating Input */}
        {[
          { label: "Full Name", value: form.name, key: "name", type: "text" },
          { label: "Phone Number", value: form.phone, key: "phone", type: "tel" },
        ].map((field) => (
          <div key={field.key} className="relative">
            <input
              type={field.type}
              value={field.value}
              onChange={(e) =>
                setForm({ ...form, [field.key]: e.target.value })
              }
              required
              className="peer w-full h-12 px-4 pt-4 border border-gray-200 rounded-xl
                         focus:outline-none focus:ring-2 focus:ring-emerald-500
                         appearance-none bg-white"
            />
            <label
              className="absolute left-4 top-3 text-gray-500 text-sm
                         peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-600
                         peer-valid:-top-2 peer-valid:text-xs
                         bg-white px-1 transition-all"
            >
              {field.label}
            </label>
          </div>
        ))}

        {/* Date Field */}
        {/* Date Field */}
<div className="space-y-2">
  <label className="block text-sm font-medium text-gray-600">
    Preferred Date
  </label>

  <div className="relative">
    <input
      type="date"
      min={today}
      value={form.date}
      onChange={(e) => setForm({ ...form, date: e.target.value })}
      required
      className="w-full h-12 px-4 pr-12 border border-gray-200 rounded-xl
                 focus:outline-none focus:ring-2 focus:ring-emerald-500
                 appearance-none bg-white"
    />

    
  </div>
</div>


        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: loading ? 1 : 1.03 }}
          whileTap={{ scale: loading ? 1 : 0.97 }}
          disabled={loading}
          className="w-full bg-emerald-600 text-white py-3 rounded-full font-medium
                     hover:bg-emerald-700 transition flex justify-center items-center gap-2
                     disabled:opacity-70"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Booking...
            </>
          ) : (
            "Confirm Booking"
          )}
        </motion.button>
      </motion.form>
    </section>
  );
}
