import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { MapSection } from "./components/MapSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <MapSection />
      <Footer />
    </div>
  );
}