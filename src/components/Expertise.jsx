import { useState } from "react";
import { expertise, expertiseFallback } from "../data";

function Panel({ item, index, active, onActivate, mobile = false }) {
  const open = index === active;
  const number = String(index + 1).padStart(2, "0");

  if (mobile) {
    return (
      <div className="border-b border-white/15">
        <button
          type="button"
          onClick={() => onActivate(index)}
          className="flex w-full items-center gap-4 py-4 text-left"
          aria-expanded={open}
        >
          <span className="w-8 shrink-0 text-[18px] font-medium text-white/80">{number}</span>
          <span className="min-w-0 flex-1 text-[18px] font-medium">{item.title}</span>
          <span className="text-xl text-white/70">{open ? "−" : "+"}</span>
        </button>
        {open && (
          <div className="pb-5 sm:pl-12">
            <div className="h-48 overflow-hidden rounded-2xl sm:h-64">
              <img src={item.image} alt="" className="h-full w-full object-cover" />
            </div>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80">{item.description || expertiseFallback}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => onActivate(index)}
      className="relative cursor-pointer border-l-2 border-gray-700/70 flex items-center overflow-hidden"
      style={{
        flex: open ? "2.6 1 0%" : "0.55 1 0%",
        minWidth: 0,
        transition: "flex 700ms cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <div
        className="absolute inset-0 px-4 lg:px-6 py-4 flex flex-col justify-end"
        style={{ opacity: open ? 1 : 0, transition: "opacity 500ms ease 200ms" }}
      >
        <div className="rounded-2xl overflow-hidden h-[300px] lg:h-[340px]">
          <img
            src={item.image}
            alt=""
            className="w-full h-full object-cover"
            style={{
              transform: open ? "scale(1)" : "scale(1.08)",
              transition: "transform 700ms cubic-bezier(0.4,0,0.2,1)",
            }}
          />
        </div>
        <div className="mt-4 lg:mt-5 flex gap-3 lg:gap-4 items-center">
          <span className="text-white font-semibold leading-none text-[28px] lg:text-[35px]">{number}</span>
          <p className="text-white font-light leading-[1.3] text-[13px] lg:text-[16px] max-w-[220px] lg:max-w-[250px]">
            {item.description || expertiseFallback}
          </p>
        </div>
      </div>
      <div className="absolute inset-0" style={{ opacity: open ? 0 : 1, transition: "opacity 300ms ease" }}>
        <span className="absolute top-4 lg:top-6 left-1/2 -translate-x-1/2 text-white tracking-[2px] text-[24px] lg:text-[34px]">
          {number}
        </span>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 h-[220px] lg:h-[260px] flex items-end justify-center">
          <span className="[writing-mode:vertical-rl] rotate-180 whitespace-nowrap text-white font-medium tracking-wide leading-none text-[22px] lg:text-[30px]">
            {item.title}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Expertise() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#111] text-white py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="w-full">
        <div className="mb-10 md:mb-16">
          <h2 className="text-[#E7720E] font-medium text-[28px] sm:text-[34px] md:text-[40px] mb-3">Our Expertise</h2>
          <p className="text-gray-400 leading-[1.6] text-[14px] sm:text-[15px] md:text-[16px]">
            Delivering excellence across planning, design,
            <br />
            construction, and quality execution.
          </p>
        </div>

        <div className="flex flex-col md:hidden">
          {expertise.map((item, index) => (
            <Panel key={item.title} item={item} index={index} active={active} onActivate={setActive} mobile />
          ))}
        </div>

        <div className="hidden md:flex h-[420px] lg:h-[460px]">
          {expertise.map((item, index) => (
            <Panel key={item.title} item={item} index={index} active={active} onActivate={setActive} />
          ))}
        </div>
      </div>
    </section>
  );
}
