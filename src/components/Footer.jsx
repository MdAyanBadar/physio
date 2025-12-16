export default function Footer() {
  return (
    <footer className="bg-emerald-50 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Clinic Info */}
        <div>
          <h3 className="text-lg font-semibold text-emerald-600">
            PhysioCare
          </h3>
          <p className="mt-3 text-sm text-gray-600">
            Professional physiotherapy care focused on pain relief,
            recovery, and long-term mobility.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-medium mb-3 text-gray-800">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-emerald-600">Services</a></li>
            <li><a href="#about" className="hover:text-emerald-600">About Us</a></li>
            <li><a href="#reviews" className="hover:text-emerald-600">Reviews</a></li>
            <li><a href="#appointment" className="hover:text-emerald-600">Book Appointment</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-medium mb-3 text-gray-800">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>📞 +91 98765 43210</li>
            <li>📧 contact@physiocare.com</li>
            <li>📍 Kolkata, India</li>
          </ul>
        </div>

        {/* Clinic Hours */}
        <div>
          <h4 className="font-medium mb-3 text-gray-800">Clinic Hours</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Mon – Fri: 9:00 AM – 7:00 PM</li>
            <li>Saturday: 9:00 AM – 2:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-emerald-100 text-center py-4 text-sm text-gray-500">
        © 2025 PhysioCare. All rights reserved.
      </div>
    </footer>
  );
}
