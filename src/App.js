import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";

import Navbar from "./components/navbar/navbar";

import Sidebar from "./components/sidebar/sidebar";

function App() {
  const [toggleSidebar, setToggleSidebar] = useState("");

  const showSidebar = () => {
    setToggleSidebar("show-sidebar");
  };

  const hideSidebar = () => {
    setToggleSidebar("");
  };

  return (
    <>
      <Navbar showSidebar={showSidebar} />
      <Sidebar hideSidebar={hideSidebar} toggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
