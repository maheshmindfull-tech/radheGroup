import { useEffect, useRef, useState } from "react";

function Counter({ target, suffix }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const duration = 2000;
        const start = performance.now();

        const tick = (now) => {
          const progress = Math.min(1, (now - start) / duration);
          const next = target * progress;
          setValue(Number.isInteger(target) ? Math.floor(next) : Math.round(next * 10) / 10);
          if (progress < 1) requestAnimationFrame(tick);
          else setValue(target);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  const shown = Number.isInteger(target) ? value : Number(value).toFixed(1);

  return (
    <h3 ref={ref} className="text-[48px] sm:text-[56px] md:text-[64px] mt-10 sm:mt-12 font-medium leading-none">
      {shown}
      {suffix}
    </h3>
  );
}

const cards = [
  { target: 18, suffix: "+", label: "Completed Projects", tone: "muted" },
  { target: 1000, suffix: "+", label: "Happy Customers", tone: "orange" },
  { target: 24, suffix: "+", label: "Years Experience", tone: "muted" },
  { target: 1.5, suffix: "M+", label: "Sq.Ft. Total area Developed", tone: "orange" },
];

export default function Stats() {
  return (
    <section className="bg-white pt-14 sm:pt-16 md:pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6">
        <h2 className="font-josefin font-normal text-[25px] sm:text-[32px] md:text-[45px] leading-[1.1] text-[#E7720E] mb-4 md:mb-6 mt-6 md:mt-10">
          Built for Better Living
        </h2>
        <p className="font-normal text-[16px] sm:text-[22px] md:text-[35px] leading-[1.4] text-gray-800 max-w-6xl mx-auto">
          We create thoughtfully planned homes that bring together space, comfort, and long-term value—so everyday living feels simpler, better, and more complete.
        </p>

        <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 justify-items-center">
          {cards.map((card) => {
            const orange = card.tone === "orange";
            return (
              <div
                key={card.label}
                className={`relative rounded-3xl w-full max-w-[320px] h-[180px] sm:h-[210px] p-6 sm:p-8 text-left ${
                  orange ? "bg-[#E7720E] text-white shadow-lg flex flex-col justify-center" : "bg-[#D9D9D9]"
                }`}
              >
                <div className={`absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full ${orange ? "bg-white" : "bg-[#E7720E]"}`} />
                <Counter target={card.target} suffix={card.suffix} />
                <p className={`text-[16px] sm:text-[18px] leading-none ${orange ? "" : "text-gray-700"}`}>{card.label}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 md:mt-24 border-2 border-gray-300" />
      </div>
    </section>
  );
}
