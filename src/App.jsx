import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./index.css";

function App() {
  return (
    <main className="bg-[#0f0f0f] min-h-screen text-white font-sans">
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
