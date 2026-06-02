import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Classify from "./components/Classify";
import Analytics from "./components/Analytics";

function App() {
  return (
    <div className="min-h-screen bg-[#112716]">
      <Navbar />
      <Hero />
      <Classify />
      <Analytics />
    </div>
  );
}

export default App;