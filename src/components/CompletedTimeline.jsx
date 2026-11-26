import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const completedProjects = [
  { year: "2022", name: "Radhe Regal", location: "Moshi" },
  { year: "2020", name: "Radhe Harmony", location: "Moshi" },
  { year: "2017", name: "Sanskriti Homes", location: "Bhosari" },
  { year: "2015", name: "Sanskriti Heights", location: "Ravet" },
  { year: "2014", name: "Sanskriti Darsan", location: "Chinchwad" },
  { year: "2013", name: "Sanskriti Apartment", location: "Chinchwad" },
  { year: "2013", name: "Umiya Residency", location: "Bhosari" },
  { year: "2013", name: "Kesar Garden", location: "Bhosari" },
  { year: "2012", name: "Sanskriti", location: "Chikhali" },
  { year: "2011", name: "Regency Heights", location: "Chikhali" },
  { year: "2010", name: "Sudaram Residency", location: "Bhosari" },
  { year: "2010", name: "Satyam Residency", location: "Chikhali" },
  { year: "2010", name: "Shivam Residency", location: "Chikhali" },
  { year: "2010", name: "Indrayani Garden", location: "Bhosari" },
  { year: "2009", name: "Regency Garden", location: "Chikhali" },
];

function YearMark({ year }) {
  return (
    <div className="relative z-10">
      <div className="grid h-[52px] w-[52px] place-items-center rounded-full border-[3px] border-[#E7720E] bg-[#111] font-josefin text-[12px] font-bold text-white">
        {year}
      </div>
      <span className="absolute left-1/2 top-[58px] h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-[#E7720E]" />
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="w-full max-w-[220px] min-w-0 rounded-[16px] border border-[#e8e8e8] bg-white px-4 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.05)]">
      <p className="font-josefin text-[15px] font-semibold leading-[1.15] text-[#1a1a1a]">{project.name}</p>
      <p className="mt-1.5 flex items-center gap-1 font-josefin text-[12px] text-[#444]">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 text-[#E7720E]" fill="currentColor" aria-hidden="true">
          <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
        </svg>
        {project.location}
      </p>
    </div>
  );
}

export default function CompletedTimeline() {
  const scrollerRef = useRef(null);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => {
      setAtEnd(el.scrollTop + el.clientHeight >= el.scrollHeight - 12);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="relative w-full h-[560px] lg:h-auto lg:aspect-[5580/2596]">
      <div ref={scrollerRef} className="absolute inset-0 overflow-y-auto scrollbar-hide">
        <div className="relative mx-auto max-w-3xl px-2 py-4 md:hidden">
          <div className="absolute bottom-4 left-[25px] top-4 w-[2px] bg-[#1a1a1a]" />
          <div className="space-y-5">
            {completedProjects.map((project) => (
              <div key={`${project.year}-${project.name}`} className="relative flex min-w-0 items-center gap-3 pl-1 sm:gap-4">
                <YearMark year={project.year} />
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto hidden max-w-3xl px-4 py-3 md:block">
          <div className="absolute bottom-3 left-1/2 top-3 w-[2px] -translate-x-1/2 bg-[#1a1a1a]" />
          <div>
            {completedProjects.map((project, index) => {
              const onRight = index % 2 === 0;
              return (
                <div key={`${project.year}-${project.name}`} className="relative grid h-[104px] grid-cols-2 items-center">
                  <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                    <YearMark year={project.year} />
                  </div>
                  {onRight ? (
                    <div className="col-start-2 pl-12">
                      <ProjectCard project={project} />
                    </div>
                  ) : (
                    <div className="col-start-1 flex justify-end pr-12">
                      <ProjectCard project={project} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {!atEnd && (
        <>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 bg-white text-[#1a1a1a]">
            <ChevronDown size={20} strokeWidth={2.4} />
          </div>
        </>
      )}
    </div>
  );
}
