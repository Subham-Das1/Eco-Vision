import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Classify from "./components/Classify";

function App() {
  return (
    <div className="min-h-screen bg-[#152e1b]">
      <Navbar />
      <Hero />
      <Classify />
    </div>
  );
}

export default App;