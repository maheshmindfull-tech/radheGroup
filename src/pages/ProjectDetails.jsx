import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Cta from "../components/Cta";
import {
  aboutCopy,
  aboutImages,
  amenities,
  brochureKeys,
  brochures,
  galleries,
  galleryIntro,
  heroTaglines,
  locations,
  planCopy,
  plans,
  projects,
  stats,
  testimonialIntro,
  testimonials,
} from "../data/projectDetails";
import { pushEnquiry } from "../lib/mdoc";
import { sendEnquiryEmail } from "../lib/notifyEmail";

function FaIcon({ viewBox, d, className = "" }) {
  return (
    <svg viewBox={viewBox} className={`inline-block w-[1em] h-[1em] ${className}`} fill="currentColor" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

function Star({ className }) {
  return (
    <FaIcon
      viewBox="0 0 576 512"
      className={className}
      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
    />
  );
}

function ArrowLeft() {
  return (
    <FaIcon
      viewBox="0 0 448 512"
      d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L105.2 232H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H105.2l152.3 152.2c9.4 9.4 9.4 24.6 0 33.9z"
    />
  );
}

function ArrowRight() {
  return (
    <FaIcon
      viewBox="0 0 448 512"
      d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L342.8 280H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h318.8L190.5 100.8c-9.4-9.4-9.4-24.6 0-33.9z"
    />
  );
}

function parseStat(value) {
  const match = value.match(/^(\d+(?:\.\d+)?)(K|L)?([+%]?)$/);
  if (!match) return { num: 0, suffix: value };
  const unit = match[2] || "";
  const sign = match[3] || "";
  return { num: parseFloat(match[1]), suffix: unit + sign };
}

function StatValue({ value }) {
  const trimmed = value.trim();
  const { num, suffix } = parseStat(trimmed);
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const step = num / 60;
          let next = 0;
          const timer = setInterval(() => {
            next += step;
            if (next >= num) {
              setCurrent(num);
              clearInterval(timer);
            } else setCurrent(next);
          }, 1500 / 60);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [num]);

  const staticText = num === 0 && suffix === trimmed;
  const shown = staticText ? trimmed : num % 1 === 0 ? Math.floor(current).toString() : current.toFixed(1);

  return (
    <span ref={ref} style={{ display: "inline-block", whiteSpace: "nowrap", textAlign: "center" }}>
      {staticText ? shown : <>{shown}{suffix}</>}
    </span>
  );
}

function Hero({ project }) {
  const tagline = heroTaglines[project.slug] ?? "The Future of Home Living";
  return (
    <section className="relative w-full overflow-hidden bg-[#2f2f2f]">
      <div className="mx-auto w-full">
        <p className="absolute left-4 top-4 z-20 font-josefin text-[18px] font-semibold text-white/45 md:left-8 md:text-[22px] lg:left-10">
          {project.name}
        </p>
        <div className="relative h-screen min-h-[420px] w-full overflow-hidden bg-black">
          <img src={project.project} alt={project.name} className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
          <div className="absolute bottom-10 left-7 z-10 text-white sm:left-12 md:bottom-14 md:left-16 lg:left-20">
            <img src={project.logo} alt={`${project.name} logo`} className="mb-3 w-[110px] object-contain sm:w-[135px] md:w-[155px]" />
            <h1 className="font-josefin text-[44px] font-semibold leading-[0.95] text-white sm:text-[62px] md:text-[78px] lg:text-[92px]">
              {project.name}
            </h1>
            <p className="mt-2 font-josefin text-[15px] font-normal uppercase leading-tight tracking-[0.04em] text-white sm:text-[20px] md:text-[24px]">
              {tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ project }) {
  const image = aboutImages[project.slug] ?? project.banner;
  const copy = aboutCopy[project.slug];
  const points = (
    <ul className="space-y-2 text-gray-800 text-sm md:text-base">
      {copy.points.map((point) => (
        <li key={point}>• {point}</li>
      ))}
    </ul>
  );

  if (project.slug === "radhe-anantam") {
    return (
      <section className="w-full py-10 md:py-20 overflow-hidden">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative flex items-center w-full">
            <div className="absolute top-[20%] left-0 w-[60%] h-[45%] z-0" />
            <img src={image} alt={project.name} className="relative z-10 object-contain w-full max-w-[320px] sm:max-w-[420px] md:max-w-[600px]" />
          </div>
          <div className="px-6 md:px-0 md:pr-20">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#E7720E] leading-tight mb-6">{copy.heading}</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-5">
              <span className="font-semibold text-gray-800">{project.name}</span> {copy.para1}
            </p>
            {points}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center relative overflow-hidden">
          <img
            src={image}
            alt={project.name}
            className={`object-contain ${project.slug === "radhe-harmony" ? "w-[65%] max-w-[340px] rotate-[-30deg]" : "w-full max-w-[520px]"}`}
          />
          <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-[#E7720E]/20 rounded-full" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#E7720E] leading-tight mb-6">{copy.heading}</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-5">
            <span className="font-semibold text-gray-800">{project.name}</span> {copy.para1}
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-8">{copy.para2}</p>
          {points}
        </div>
      </div>
    </section>
  );
}

function Stats({ project }) {
  return (
    <section className="w-full bg-[#1F1F1F] py-10 md:py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center text-white">
        {(stats[project.slug] || []).map((item) => (
          <div key={item.label}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-2">
              <StatValue value={item.value} />
            </h2>
            <p className="text-white text-xs sm:text-sm md:text-base lg:text-xl tracking-wide">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Amenities({ project }) {
  const content = amenities[project.slug] ?? amenities["radhe-windsun"];
  const cards = useRef([]);
  const [visible, setVisible] = useState([]);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    setVisible([]);
    cards.current = cards.current.slice(0, content.items.length);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          setVisible((current) =>
            entry.isIntersecting ? [...new Set([...current, index])] : current.filter((item) => item !== index),
          );
        });
      },
      { threshold: 0.2 },
    );
    cards.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, [content]);

  return (
    <section className="w-full bg-[#260F0133]/20 py-12 md:py-16 px-4 md:px-16">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
        @keyframes fadeOutDown {
          from { opacity: 1; transform: translateY(0)   scale(1); }
          to   { opacity: 0; transform: translateY(40px) scale(0.95); }
        }
        @keyframes iconSpin {
          0%   { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0 rgba(231,114,14,0.5); }
          70%  { box-shadow: 0 0 0 10px rgba(231,114,14,0); }
          100% { box-shadow: 0 0 0 0 rgba(231,114,14,0); }
        }
        .amenity-card-in { animation: fadeInUp 0.5s cubic-bezier(0.22,1,0.36,1) forwards; }
        .amenity-card-out { animation: fadeOutDown 0.4s ease forwards; }
        .amenity-card-base { opacity: 0; cursor: pointer; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .amenity-card-base:hover { transform: translateY(-6px) scale(1.03); box-shadow: 0 12px 32px rgba(231,114,14,0.22); }
        .amenity-card-base:hover .icon-box { animation: pulse-ring 1s ease infinite, iconSpin 0.6s ease; background: #c95e08; }
        .icon-box { transition: background 0.3s ease; }
      `}</style>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#E7720E] mb-2">Amenities</h2>
        <p className="text-gray-500 mb-12 font-light">{content.subtitle}</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {content.items.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              data-index={index}
              ref={(node) => {
                cards.current[index] = node;
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`amenity-card-base flex items-center gap-3 bg-white rounded-2xl px-3 py-3 shadow-sm border border-[#260F0133] w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-18px)] ${visible.includes(index) ? "amenity-card-in" : "amenity-card-out"}`}
              style={{ animationDelay: visible.includes(index) ? `${index * 0.07}s` : "0s" }}
            >
              <div className="icon-box bg-[#E7720E] p-3 rounded-2xl flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 shrink-0">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  style={{
                    transform: hovered === index ? "scale(1.15) rotate(-8deg)" : "scale(1) rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>
              <p className="text-gray-800 font-medium text-sm md:text-base text-left leading-snug">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloorPlans({ project }) {
  const slug = project.slug;
  const copy = planCopy[slug] ?? planCopy["radhe-windsun"];
  const options = plans[slug] ?? plans["radhe-windsun"];
  const [selected, setSelected] = useState(options[0]?.label || "");
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", number: "", email: "", bhk: options[0]?.label || "" });
  const [state, setState] = useState("");
  const [toast, setToast] = useState(false);

  useEffect(() => {
    const label = options[0]?.label || "";
    setSelected(label);
    setForm({ name: "", number: "", email: "", bhk: label });
    setOpen(false);
    setState("");
  }, [slug]);

  const image = options.find((item) => item.label === selected)?.image;

  const close = () => {
    setOpen(false);
    setState("");
    setForm({ name: "", number: "", email: "", bhk: selected });
  };

  const download = () => {
    const href = brochures[slug];
    if (!href) return;
    const link = document.createElement("a");
    link.href = href;
    link.download = `${slug}-brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const submitEnquiry = () => {
    const layout = form.bhk && !["1BHK", "2BHK", "3BHK", "1 BHK", "2 BHK", "3 BHK"].includes(form.bhk) ? `Layout: ${form.bhk}` : "";
    return pushEnquiry({
      apiKey: brochureKeys[slug],
      firstName: form.name,
      mobile: form.number,
      email: form.email,
      preference: form.bhk,
      remark: [`Brochure Download - ${project.name || slug}`, layout].filter(Boolean).join(". "),
      sourceDescription: "Website Brochure Download",
    });
  };

  return (
    <>
      <section className="bg-[#1F1F1F] text-white py-12 md:py-20 px-4 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-4 md:space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#E7720E] mb-2 md:mb-3">Floor Plans & Layouts</h2>
              <p className="text-sm md:text-base max-w-md leading-relaxed font-light">{copy.subtitle}</p>
            </div>
            <div className="p-2 md:p-4">
              <img src={image} alt="Floor Plan" className="w-full max-h-[300px] md:max-h-none rounded-xl object-contain" />
            </div>
          </div>
          <div className="space-y-4 md:space-y-6">
            <div className="flex flex-wrap gap-2 md:gap-4">
              {options.map(({ label }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => {
                    setSelected(label);
                    setForm((current) => ({ ...current, bhk: label }));
                  }}
                  className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm lg:text-base font-medium transition-all duration-300 cursor-pointer ${selected === label ? "bg-[#E7720E] text-white shadow-md" : "bg-[#FFFFFF] text-black hover:bg-gray-600"}`}
                >
                  {label}
                </button>
              ))}
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-snug">{copy.heading}</h3>
            <p className="text-sm md:text-base leading-relaxed max-w-lg font-light">{copy.description}</p>
            <button
              type="button"
              onClick={() => {
                setOpen(true);
                setForm((current) => ({ ...current, bhk: selected }));
              }}
              className="bg-white text-[#E7720E] px-6 md:px-7 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-[#E7720E] hover:text-white hover:scale-105 cursor-pointer"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </section>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          onClick={() => state !== "sending" && close()}
        >
          <div className="bg-[#f5e6d8] rounded-2xl p-8 w-[320px] shadow-2xl relative" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => state !== "sending" && close()}
              className="absolute top-3 right-4 text-gray-500 text-xl font-bold cursor-pointer"
            >
              ×
            </button>
            <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">Download Brochure</h2>
            <form
              className="flex flex-col gap-4"
              onSubmit={async (event) => {
                event.preventDefault();
                if (state === "sending") return;
                setState("sending");
                try {
                  const [saved] = await Promise.allSettled([
                    submitEnquiry(),
                    sendEnquiryEmail({
                      subject: `Brochure enquiry - ${project.name || slug}`,
                      name: form.name.trim(),
                      email: form.email.trim(),
                      fields: {
                        Mobile: form.number,
                        Project: project.name || slug,
                        Plan: form.bhk || "Not selected",
                        Form: "Brochure download",
                      },
                    }),
                  ]);
                  if (saved.status === "rejected") throw saved.reason;
                  setState("done");
                  download();
                  setTimeout(() => {
                    close();
                    setToast(true);
                    setTimeout(() => setToast(false), 3000);
                  }, 1500);
                } catch (error) {
                  console.error("MDOC API Error:", error);
                  setState("error");
                  setTimeout(() => setState(""), 3000);
                }
              }}
            >
              <div>
                <label className="text-sm text-gray-700 mb-1 block">Name</label>
                <input type="text" placeholder="Name" value={form.name} required maxLength={50} onChange={(event) => setForm({ ...form, name: event.target.value })} className="w-full rounded-full px-4 py-2 text-sm border border-gray-200 outline-none bg-white" />
              </div>
              <div>
                <label className="text-sm text-gray-700 mb-1 block">Number</label>
                <input type="tel" placeholder="10 digit mobile number" value={form.number} required minLength={10} maxLength={10} pattern="[0-9]{10}" onChange={(event) => setForm({ ...form, number: event.target.value.replace(/\D/g, "").slice(0, 10) })} className="w-full rounded-full px-4 py-2 text-sm border border-gray-200 outline-none bg-white" />
              </div>
              <div>
                <label className="text-sm text-gray-700 mb-1 block">Email</label>
                <input type="email" placeholder="Email" value={form.email} required onChange={(event) => setForm({ ...form, email: event.target.value })} className="w-full rounded-full px-4 py-2 text-sm border border-gray-200 outline-none bg-white" />
              </div>
              <div>
                <label className="text-sm text-gray-700 mb-1 block">BHK</label>
                <input type="text" placeholder="2 BHK" value={form.bhk} required onChange={(event) => setForm({ ...form, bhk: event.target.value })} className="w-full rounded-full px-4 py-2 text-sm border border-gray-200 outline-none bg-white" />
              </div>
              <button type="submit" disabled={state === "sending"} className="mt-2 bg-[#E7720E] text-white rounded-full py-2.5 text-sm font-semibold tracking-wide hover:bg-[#c95e08] transition cursor-pointer disabled:opacity-60">
                {state === "sending" ? "Sending..." : state === "done" ? "✓ Downloading!" : "DOWNLOAD"}
              </button>
              {state === "error" && <p className="text-red-500 text-xs text-center">Failed to send enquiry. Please try again.</p>}
            </form>
          </div>
        </div>
      )}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium animate-fade-in">
          ✓ Brochure downloaded successfully!
        </div>
      )}
    </>
  );
}

function Gallery({ project }) {
  const images = galleries[project.slug] || project.gallery || [];
  const intro = galleryIntro[project.slug] ?? "A closer look at the spaces and lifestyle.";
  return (
    <section className="py-16 px-4 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-[#E7720E] mb-2">Gallery</h2>
        <h3 className="text-2xl font-medium text-gray-900 tracking-tight max-w-lg mx-auto leading-snug">{intro}</h3>
      </div>
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4">
        {images.map((item) => (
          <div key={item.id} className="w-full md:w-[calc(25%-1rem)] lg:w-[230px] h-[350px] overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
            <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials({ project }) {
  const [page, setPage] = useState(0);
  const items = testimonials[project.slug] ?? testimonials["radhe-windsun"];
  const pages = Math.ceil(items.length / 3);
  const visible = items.slice(page * 3, page * 3 + 3);

  return (
    <section className="bg-[#1F1F1F] py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-[#E7720E] text-4xl font-medium mb-4">Testimonials</h2>
        <p className="text-white text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
          {testimonialIntro[project.slug] ?? testimonialIntro["radhe-windsun"]}
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {visible.map((item) => (
          <div key={item.id} className={`rounded-[2.5rem] p-10 flex flex-col justify-between transition-transform duration-300 hover:scale-105 ${item.featured ? "bg-[#E7720E] text-white" : "bg-[#f5f5f5] text-gray-800"}`}>
            <div className="flex-grow">
              <div className="flex gap-1 mb-8">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className={`rounded-full p-1 flex items-center justify-center ${item.featured ? "bg-white" : "bg-gray-800"}`}>
                    <Star className={`text-[8px] ${item.featured ? "text-[#E7720E]" : "text-white"}`} />
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed opacity-90">{item.text}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-semibold text-lg">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto flex justify-end gap-4 px-4">
        <button onClick={() => setPage((current) => (current === 0 ? pages - 1 : current - 1))} className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
          <ArrowLeft />
        </button>
        <button onClick={() => setPage((current) => (current === pages - 1 ? 0 : current + 1))} className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}

function Location({ project }) {
  const content = locations[project.slug] ?? locations["radhe-windsun"];
  return (
    <section className="bg-white py-16 px-6 md:px-12 font-sans">
      <div className="text-center mb-10">
        <h2 className="text-[#E7720E] text-4xl mb-2 font-medium">Location</h2>
        <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
      </div>
      <div className="max-w-7xl mx-auto mb-12 overflow-hidden rounded-[2rem] shadow-sm h-[300px] border border-gray-100 relative">
        {content.mapUrl ? (
          <iframe
            src={`https://maps.google.com/maps?q=${encodeURIComponent(`${project.name} Pune`)}&output=embed`}
            className="h-full w-full grayscale contrast-125 saturate-50"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={project.name}
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gray-100 text-gray-400">Map coming soon</div>
        )}
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">
        {content.data.map((group) => (
          <div key={group.category}>
            <h4 className="font-bold text-[#062E2C] mb-4 border-b pb-2 inline-block">{group.category}</h4>
            <ul className="space-y-3">
              {group.items.map((item) => (
                <li key={`${item.name}-${item.time}`} className="flex items-end justify-between">
                  <span className="text-[#062E2C] text-sm whitespace-nowrap">{item.name}</span>
                  <div className="flex-grow border-b border-dotted border-gray-400 mx-2 mb-1" />
                  <span className="text-[#062E2C] text-sm font-medium whitespace-nowrap">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug?.toLowerCase() === slug?.toLowerCase());

  if (!project) {
    return <div className="p-10 text-center text-xl font-semibold">Project not found ❌</div>;
  }

  if (!project.isDetailed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-10">
        <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
        <p className="text-gray-600 mb-2">{project.location}</p>
        <p className="text-lg text-gray-500">Details for this project are coming soon 🚧</p>
      </div>
    );
  }

  return (
    <>
      <Hero project={project} />
      <About project={project} />
      <Stats project={project} />
      <Amenities project={project} />
      <FloorPlans project={project} />
      <Gallery project={project} />
      <Testimonials project={project} />
      <Location project={project} />
      <Cta
        title={"Say hello to brighter\r\n               days together"}
        subtitle="Trusted real estate platform committed to making property ownership and investment easy and transparent."
        buttonText="Contact us"
      />
    </>
  );
}
