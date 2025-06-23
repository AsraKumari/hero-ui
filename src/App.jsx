// src/App.jsx

import { Routes, Route, Navigate } from "react-router-dom"; // Added Navigate for fallback redirect
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import './index.css';

const App = () => {
  return (
    <>
      {/* This is the top navigation bar, visible on all pages */}
      <Navbar />

      {/* Define the main routes of the website */}
      <Routes>
        {/* Show Home page when user visits "/" */}
        <Route path="/" element={<Home />} />

        {/* Show About page when user visits "/about" */}
        <Route path="/about" element={<About />} />

        {/* Redirect any unknown routes to Home page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
