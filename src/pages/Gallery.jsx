import { useState } from "react";
import PageHeader from "../components/PageHeader";

const filters = ["ALL", "Videos", "Images"];

const images = [
  "/assets/p11-DM9KHbon.png",
  "/assets/p12-DSJNVeJo.png",
  "/assets/p13-BWHSZSEe.png",
  "/assets/p14-DR8iiRNm.png",
  "/assets/p15-DS8K1Dmm.png",
  "/assets/p16-Xjal2VNa.png",
  "/assets/p17-CX7VfBYD.png",
  "/assets/shlok1-BXarQmKX.png",
  "/assets/shlok2-5_0E-HEp.png",
  "/assets/shlok3-i2Fvi6Ce.png",
  "/assets/shlok4-5UT_lJxP.png",
  "/assets/WidsonImg1-zQm5MIUA.png",
  "/assets/WidsonImg2-W64qrdSK.png",
  "/assets/WidsonImg3-g7dsrKxh.png",
  "/assets/WidsonImg4-rVNo8lUX.png",
  "/assets/WidsonImg7-CmXt68Oy.png",
  "/assets/WidsonImg6-5NO-iCxv.png",
  "/assets/WidsonImg5-CUjAglI9.png",
  "/assets/Harmony1-on69M8Zb.png",
  "/assets/Harmony2-CIX8Smu3.png",
  "/assets/Harmony3-CxjKFkLf.png",
  "/assets/Harmony4-BP7L2EaO.png",
  "/assets/regal1-D2-k6RxP.png",
  "/assets/regal2-RMO9U6gO.png",
  "/assets/regal3-Uw2aXCPm.png",
  "/assets/regal4-DTLMyZq2.png",
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
            <div className="flex mt-6 md:mt-0 items-center">
              {filters.map((name) => (
                <button
                  key={name}
                  onClick={() => setFilter(name)}
                  className={`relative px-9 py-3 text-sm font-josefin rounded-full border transition-all duration-300 cursor-pointer ${
                    filter === name
                      ? "bg-[#E7720E] text-white border-[#E7720E] z-20"
                      : "bg-white text-[#E7720E] border-[#E7720E] z-10"
                  } ${name === 0 ? "" : "-ml-8"}`}
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
            className="absolute left-4 text-white text-7xl font-light z-10 hover:text-[#E7720E] select-none"
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
            className="absolute right-4 text-white text-7xl font-light z-10 hover:text-[#E7720E] select-none"
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
