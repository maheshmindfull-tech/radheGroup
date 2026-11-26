import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { slides } from "../data";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {slides.map((item, i) => (
        <img
          key={item.heading}
          src={item.src}
          alt="slide"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      <div className="relative z-10 flex flex-col justify-end min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 pb-2 sm:pb-4 md:pb-6 lg:pb-8 xl:pb-10 2xl:pb-12">
        <div className="w-full max-w-[950px] mt-[20px] 2xl:mt-[210px] pr-16 sm:pr-20">
          <img
            src="/assets/HomeLogo-BCzgr5NY.png"
            alt="Radhe Group"
            className="w-[72px] xs:w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] xl:w-[180px] 2xl:w-[200px]"
          />
          <h1 className="max-w-full uppercase font-semibold text-white tracking-[-0.04em] leading-[0.95] whitespace-normal sm:whitespace-nowrap text-[clamp(2rem,8vw,10rem)]">
            {slide.heading}
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white mt-3 mb-3">
            <div className="flex items-center text-[14px] sm:text-[16px] md:text-[18px] opacity-90">
              <img src="/assets/pin.png" alt="location" className="w-[16px] h-[16px] mr-2 object-contain" />
              <span className="font-josefin font-normal">{slide.location}</span>
            </div>
            <div className="flex items-center text-[14px] sm:text-[16px] md:text-[18px] opacity-90">
              <img src="/assets/calendar.png" alt="year icon" className="w-[16px] h-[16px] mr-2 object-contain" />
              <span className="font-josefin font-normal">{slide.year}</span>
            </div>
          </div>
        </div>
      </div>

      <Link
        to="/projects"
        className="absolute bottom-3 right-3 z-20 flex h-14 w-14 items-center justify-center sm:bottom-4 sm:right-4 sm:h-16 sm:w-16 md:bottom-6 md:right-6 md:h-20 md:w-20 lg:h-24 lg:w-24"
      >
        <img src="/assets/HeroCircle-CtYoJKrT.png" alt="" className="absolute inset-0 w-full h-full" />
        <img
          src="/assets/homeIconText-CgT_oj-V.png"
          alt="view projects"
          className="absolute inset-0 w-full h-full animate-spin-slow p-1 top-[-2px] left-[-1px]"
        />
      </Link>
    </section>
  );
}
