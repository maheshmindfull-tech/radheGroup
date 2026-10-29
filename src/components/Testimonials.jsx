import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials, videos } from "../data";

function Stars({ count, active }) {
  return (
    <div className="flex gap-1 mb-6 lg:mb-10">
      {Array.from({ length: 5 }).map((_, i) => (
        <img
          key={i}
          src={i < count ? (active ? "/assets/star-empty.png" : "/assets/star-full.png") : "/assets/star-empty.png"}
          alt="star"
          className="w-4 h-4 object-contain"
        />
      ))}
    </div>
  );
}

function QuoteCard({ item, active, className }) {
  return (
    <div
      className={`w-full rounded-[20px] text-left transition-all duration-500 ease-in-out ${
        active
          ? "bg-[#E7720E] text-white shadow-[0_0_35px_rgba(0,0,0,0.15)]"
          : "bg-[#f1f1f1] text-gray-700 shadow-[0_0_25px_rgba(0,0,0,0.10)]"
      } ${className}`}
    >
      <Stars count={item.rating} active={active} />
      <p className="text-[14px] lg:text-[15px] font-light leading-[1.6]">{`"${item.text}"`}</p>
      <p className={`text-[14px] lg:text-[15px] mt-2 ${active ? "text-white/80" : "text-gray-600"}`}>– {item.name}</p>
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(1);
  const [playing, setPlaying] = useState(null);
  const [videoStart, setVideoStart] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const onHide = () => {
      if (document.hidden) setPlaying(null);
    };
    document.addEventListener("visibilitychange", onHide);
    return () => document.removeEventListener("visibilitychange", onHide);
  }, []);

  useEffect(() => {
    if (playing !== null) return;
    const timer = setInterval(() => {
      setVideoStart((current) => (current + 1) % videos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [playing]);

  const visibleVideos = [videoStart % videos.length, (videoStart + 1) % videos.length];
  const desktopCards = [(active - 1 + total) % total, active, (active + 1) % total];

  return (
    <section className="bg-white py-14 sm:py-16 md:py-20 px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[#E7720E] font-medium text-[28px] sm:text-[32px] md:text-[38px]">Testimonials</h2>
        <p className="text-black mt-2 mx-auto max-w-[490px] text-[18px] sm:text-[20px] md:text-[24px] leading-[1.4]">
          Real experiences from homeowners who have <span className="text-gray-500">trusted Radhe Group.</span>
        </p>

        <div className="mt-10">
          <div className="flex gap-4 lg:gap-6 transition-all duration-500">
            {visibleVideos.map((videoIndex) => {
              const id = videos[videoIndex];
              const isPlaying = playing === videoIndex;
              return (
                <div key={id} className="flex-1">
                  <div
                    className={`relative w-full rounded-[20px] overflow-hidden cursor-pointer aspect-video ${
                      isPlaying
                        ? "ring-4 ring-blue-500 shadow-[0_0_35px_rgba(0,0,0,0.2)]"
                        : "shadow-[0_0_25px_rgba(0,0,0,0.10)]"
                    }`}
                    onClick={() => setPlaying(isPlaying ? null : videoIndex)}
                  >
                    {isPlaying ? (
                      <>
                        <iframe
                          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                          title={`Video ${videoIndex + 1}`}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                        <button
                          onClick={(event) => {
                            event.stopPropagation();
                            setPlaying(null);
                          }}
                          className="absolute top-2 right-2 w-8 h-8 bg-black/60 text-white rounded-full flex items-center justify-center z-20"
                        >
                          ✕
                        </button>
                      </>
                    ) : (
                      <>
                        <img
                          src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                          alt={`Video ${videoIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                            <svg viewBox="0 0 24 24" fill="#E7720E" className="w-7 h-7 ml-1">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {videos.map((id, i) => (
              <button
                key={id}
                onClick={() => {
                  setPlaying(null);
                  setVideoStart(i);
                }}
                className={`h-2 rounded-full transition-all ${visibleVideos.includes(i) ? "bg-[#E7720E] w-4" : "bg-gray-300 w-2"}`}
                aria-label={`Show video ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-10 md:hidden">
          {testimonials.map((item, i) => (
            <QuoteCard key={item.name} item={item} active={i === active} className="p-6" />
          ))}
        </div>

        <div className="hidden md:flex mt-16 items-center justify-center gap-4 lg:gap-8 relative">
          {desktopCards.map((cardIndex, position) => {
            const center = position === 1;
            return (
              <QuoteCard
                key={`${cardIndex}-${position}`}
                item={testimonials[cardIndex]}
                active={center}
                className={`max-w-[320px] lg:max-w-[400px] h-[220px] lg:h-[250px] p-6 lg:p-8 ${
                  center ? "md:scale-105 lg:scale-110 z-10" : "scale-95 opacity-80"
                }`}
              />
            );
          })}
        </div>

        <div className="flex justify-center md:justify-end gap-3 mt-8 md:mt-10">
          <button
            onClick={() => setActive((current) => (current - 1 + total) % total)}
            className="w-10 h-10 border-2 rounded-full flex items-center justify-center hover:bg-gray-600 transition cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => setActive((current) => (current + 1) % total)}
            className="w-10 h-10 border-2 rounded-full flex items-center justify-center hover:bg-gray-600 transition cursor-pointer"
            aria-label="Next testimonial"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="mt-14 md:mt-20 border-2 border-gray-300" />
      </div>
    </section>
  );
}
