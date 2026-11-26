import { useState } from "react";
import PageHeader from "../components/PageHeader";

const filters = ["ALL", "Videos", "Images"];

const images = [
  "/assets/p11-DM9KHbon.webp",
  "/assets/p12-DSJNVeJo.webp",
  "/assets/p13-BWHSZSEe.webp",
  "/assets/p14-DR8iiRNm.webp",
  "/assets/p15-DS8K1Dmm.webp",
  "/assets/p16-Xjal2VNa.webp",
  "/assets/p17-CX7VfBYD.webp",
  "/assets/shlok1-BXarQmKX.webp",
  "/assets/shlok2-5_0E-HEp.webp",
  "/assets/shlok3-i2Fvi6Ce.webp",
  "/assets/shlok4-5UT_lJxP.webp",
  "/assets/WidsonImg1-zQm5MIUA.webp",
  "/assets/WidsonImg2-W64qrdSK.webp",
  "/assets/WidsonImg3-g7dsrKxh.webp",
  "/assets/WidsonImg4-rVNo8lUX.webp",
  "/assets/WidsonImg7-CmXt68Oy.webp",
  "/assets/WidsonImg6-5NO-iCxv.webp",
  "/assets/WidsonImg5-CUjAglI9.webp",
  "/assets/Harmony1-on69M8Zb.webp",
  "/assets/Harmony2-CIX8Smu3.webp",
  "/assets/Harmony3-CxjKFkLf.webp",
  "/assets/Harmony4-BP7L2EaO.webp",
  "/assets/regal1-D2-k6RxP.webp",
  "/assets/regal2-RMO9U6gO.webp",
  "/assets/regal3-Uw2aXCPm.webp",
  "/assets/regal4-DTLMyZq2.webp",
];

const items = images.map((image, index) => ({
  id: index + 1,
  type: "Images",
  image,
}));

export default function Gallery() {
  const [filter, setFilter] = useState("ALL");
  const [active, setActive] = useState(null);
  const visible = filter === "ALL" ? items : items.filter((item) => item.type === filter);

  const showPrevious = () => setActive((active - 1 + visible.length) % visible.length);
  const showNext = () => setActive((active + 1) % visible.length);

  return (
    <>
      <PageHeader title="Gallary" />
      <section className="bg-white py-16 px-4 md:px-10 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div className="max-w-2xl">
              <p className="text-gray-500 text-xl leading-relaxed italic">
                A visual glimpse into the spaces, design, and lifestyle of Radha Group developments.
              </p>
            </div>
            <div className="mt-6 flex max-w-full flex-wrap items-center md:mt-0">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 min-h-[400px]">
            {visible.map((item, index) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-[1.5rem] bg-gray-100 aspect-square relative cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
                onClick={() => setActive(index)}
              >
                <img
                  src={item.image}
                  alt={`Gallery ${item.type}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {item.type === "Videos" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                    <div className="w-16 h-16 bg-white/70 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.841z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 bg-black overflow-hidden flex items-center justify-center"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-4 right-6 text-white text-4xl font-bold z-10 hover:text-[#E7720E]"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            ×
          </button>
          <button
            className="absolute left-2 z-10 select-none text-5xl font-light text-white hover:text-[#E7720E] sm:left-4 sm:text-7xl"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <img
            src={visible[active].image}
            alt="Gallery"
            style={{ width: "100vw", height: "100vh", objectFit: "contain" }}
            onClick={(event) => event.stopPropagation()}
          />
          <button
            className="absolute right-2 z-10 select-none text-5xl font-light text-white hover:text-[#E7720E] sm:right-4 sm:text-7xl"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>
          <span className="absolute bottom-4 text-white text-sm">
            {active + 1} / {visible.length}
          </span>
        </div>
      )}
    </>
  );
}
