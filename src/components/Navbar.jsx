import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Reviews", id: "reviews" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "appointment" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // 🔹 Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(link.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-semibold text-emerald-600">
          PhysioCare
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`relative transition
                  ${
                    active === l.id
                      ? "text-emerald-600"
                      : "text-gray-600 hover:text-emerald-600"
                  }`}
              >
                {l.label}
                {active === l.id && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-emerald-600" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#appointment"
          className="hidden md:inline bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 transition"
        >
          Book Appointment
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8"
        >
          <span
            className={`absolute h-[2px] w-6 bg-gray-800 transition-transform duration-300
              ${open ? "rotate-45" : "-translate-y-2"}`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-gray-800 transition-opacity duration-300
              ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-gray-800 transition-transform duration-300
              ${open ? "-rotate-45" : "translate-y-2"}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <ul className="flex flex-col gap-6 px-6 py-6 font-medium">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`block transition
                      ${
                        active === l.id
                          ? "text-emerald-600"
                          : "text-gray-700 hover:text-emerald-600"
                      }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}

              <a
                href="#appointment"
                onClick={() => setOpen(false)}
                className="mt-2 bg-emerald-600 text-white text-center py-3 rounded-full font-medium"
              >
                Book Appointment
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
