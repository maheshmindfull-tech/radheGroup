import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";
import CompletedTimeline from "./CompletedTimeline";

const filters = ["Ongoing", "Completed"];

export default function Projects() {
  const [filter, setFilter] = useState("Ongoing");
  const navigate = useNavigate();
  const visible = projects.filter((project) => project.status === filter);

  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-15">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="font-josefin font-normal text-[30px] md:text-[53px] leading-[1] text-[#E7720E]">
              Our Projects
            </h2>
            <p className="font-josefin font-light text-[12px] md:text-[20px] leading-[1] text-black mt-3 max-w-[800px]">
              Explore thoughtfully developed spaces designed for modern living.
            </p>
          </div>
          <div className="mt-6 flex max-w-full items-center md:mt-0">
            {filters.map((name, i) => (
              <button
                key={name}
                onClick={() => setFilter(name)}
                className={`relative rounded-full border px-5 py-2.5 text-sm font-josefin transition-all duration-300 cursor-pointer sm:px-9 sm:py-3 ${
                  filter === name
                    ? "bg-[#E7720E] text-white border-[#E7720E] z-20"
                    : "bg-white text-[#E7720E] border-[#E7720E] z-10"
                } ${i === 0 ? "" : "-ml-4 sm:-ml-8"}`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {filter === "Completed" ? (
          <CompletedTimeline />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((project) => (
              <div
                key={project.slug}
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
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
