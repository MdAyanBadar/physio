import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Reviews from "../components/Reviews";
import Gallery from "../components/Gallery";
import Appointment from "../components/Appointment";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Reviews />
        <Gallery />
        <Appointment />
      </main>
      <Footer />
    </div>
  );
}
