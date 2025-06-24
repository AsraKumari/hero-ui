import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound"; // Importing the custom 404 page
import './index.css';

const App = () => {
  return (
    <>
      {/* Navbar shown on all pages */}
      <Navbar />

      {/* Main route definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Show custom 404 page for all undefined routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
