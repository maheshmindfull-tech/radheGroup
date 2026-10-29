import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsPage from "./pages/Projects";

const pages = {
  "/gallery": "Gallery",
  "/blogs": "Blogs",
  "/contact": "Contact",
  "/terms": "Terms of Use",
  "/privacy": "Privacy Policy",
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function SimplePage({ title }) {
  return (
    <section className="min-h-[60vh] px-6 pt-40 pb-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[#E7720E] text-[40px] md:text-[56px] font-normal leading-none">{title}</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-2xl">
          This page is part of the Radhe Group site. The homepage is ready, and this section can be filled in next.
        </p>
      </div>
    </section>
  );
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
        {Object.entries(pages).map(([path, title]) => (
          <Route key={path} path={path} element={<SimplePage title={title} />} />
        ))}
        <Route path="/project/:slug" element={<SimplePage title="Project" />} />
      </Routes>
      <Footer />
    </div>
  );
}
