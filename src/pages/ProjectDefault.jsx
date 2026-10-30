import { useParams } from "react-router-dom";
import { projects } from "../data/projectDetails";

export default function ProjectDefault() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) return <div className="text-center mt-20">Project not found</div>;

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img src="/assets/defaultProject-D7awZce2.png" alt={project.name} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-20 pb-20 text-white">
        {project.logo && <img src="/assets/defaultLogo-Dm9RMUSN.png" alt={project.name} className="w-48 h-auto object-contain mb-4" />}
        <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6">{project.name}</h1>
        <div className="flex items-center gap-6 text-sm md:text-lg opacity-90">
          <span>📍 {project.location}</span>
          <span>🏗️ {project.status || "N/A"}</span>
        </div>
      </div>
    </section>
  );
}
