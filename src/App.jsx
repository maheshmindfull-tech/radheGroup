import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsPage from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import ProjectDefault from "./pages/ProjectDefault";
import BlogDetails from "./pages/BlogDetails";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="overflow-x-hidden bg-[#FFFCF5]">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:slug" element={<ProjectDetails />} />
        <Route path="/default-project" element={<ProjectDefault />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}
