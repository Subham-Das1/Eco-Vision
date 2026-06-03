import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Classify from "./components/Classify";
import Analytics from "./components/Analytics";
import Impact from "./components/Impact";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#112716]">
      <Navbar />
      <Hero />
      <Classify />
      <Analytics />
      <Impact />
      <About />
      <Footer />
    </div>
  );
}

export default App;