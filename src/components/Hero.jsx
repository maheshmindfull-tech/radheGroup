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
        <div className="w-full max-w-[950px] mt-[20px] 2xl:mt-[210px]">
          <img
            src="/assets/HomeLogo-BCzgr5NY.png"
            alt="logo"
            className="w-[80px] xs:w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] xl:w-[180px] 2xl:w-[200px]"
          />
          <h1 className="uppercase font-semibold text-white tracking-[-0.05em] leading-[0.95] whitespace-nowrap overflow-hidden text-[clamp(2.5rem,6vw,7rem)] sm:text-[clamp(3rem,5.5vw,8rem)] md:text-[clamp(4.5rem,4.5vw,9rem)] lg:text-[clamp(5.5rem,4vw,10rem)]">
            {slide.heading}
          </h1>
          <div className="flex items-center text-white mt-3 mb-3 space-x-6">
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

        <Link
          to="/projects"
          className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-20 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[130px] md:h-[130px] flex items-center justify-center"
        >
          <img src="/assets/HeroCircle-CtYoJKrT.png" alt="" className="absolute inset-0 w-full h-full" />
          <img
            src="/assets/homeIconText-CgT_oj-V.png"
            alt="view projects"
            className="absolute inset-0 w-full h-full animate-spin-slow p-1 top-[-2px] left-[-1px]"
          />
        </Link>
      </div>
    </section>
  );
}
