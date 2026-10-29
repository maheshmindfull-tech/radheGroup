import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Cta from "../components/Cta";

const projects = [
  {
    title: "Radhe Anantam",
    location: "Wadhmukhwadi",
    image: "/assets/HomeProject1-DeMDYaZl.png",
    slug: "radhe-anantam",
  },
  {
    title: "Radhe Shlok",
    location: "Charholi Budruk",
    image: "/assets/HomeProject2--SycYWeM.png",
    slug: "radhe-shlok",
  },
  {
    title: "Radhe Windsun",
    location: "Chovisawadi",
    image: "/assets/HomeProject3-BOetiZdE.png",
    slug: "radhe-windsun",
  },
];

function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div
      className="relative group h-[380px] overflow-hidden rounded-[24px] cursor-pointer bg-black shadow-sm"
      onClick={() => navigate(`/project/${project.slug}`)}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />
      <div className="absolute bottom-3 left-6 right-3 flex justify-between items-end gap-4">
        <div className="text-white">
          <h3 className="font-josefin font-normal text-[20px] leading-none">{project.title}</h3>
          <div className="mt-2 flex items-center text-[13px] leading-none opacity-95">
            <img src="/assets/pin.png" alt="location" className="w-[16px] h-[16px] mr-1.5 object-contain" />
            {project.location}
          </div>
        </div>
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#E7720E] text-white transition group-hover:bg-[#ff861f]">
          <ArrowUpRight size={30} strokeWidth={2.2} />
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="PROJECTS" />
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div>
            <h2 className="text-center font-josefin text-[28px] md:text-[36px] font-bold text-[#E7720E] tracking-widest mb-10">
              COMPLETED PROJECTS
            </h2>
            <img
              src="/assets/Completed_Image-Cs8KsV8A.png"
              alt="Completed Projects"
              className="w-full rounded-[14px] object-cover"
            />
          </div>
        </div>
      </section>
      <Cta
        title="Say hello to brighter days together"
        subtitle="Trusted real estate platform committed to making property ownership and investment easy and transparent."
        buttonText="Contact us"
      />
    </>
  );
}
