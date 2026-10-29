import { useEffect, useState } from "react";
import Cta from "../components/Cta";

const beliefs = [
  {
    id: "vision",
    label: "Our Vision",
    icon: "/assets/vision-icon.png",
    title: "Vision",
    text: "To be a trusted and enduring name in real estate by creating developments that enhance quality of life while consistently upholding transparency and customer confidence.",
    image: "/assets/visionImg-DEul7Xp_.png",
  },
  {
    id: "mission",
    label: "Our Mission",
    icon: "/assets/mission-icon.png",
    title: "Mission",
    text: " To deliver well-planned developments through strategic land selection, disciplined execution, and a customer-centric approach that ensures clarity at every stage.",
    image: "/assets/missionImg-DSGanyRc.png",
  },
  {
    id: "principles",
    label: "Our Principles",
    icon: "/assets/vision-icon.png",
    title: "Principles",
    text: "Integrity in decisions, precision in execution, and accountability in delivery form the foundation of every Radhe development.",
    image: "/assets/principalImg-DgX-gSyq.png",
  },
];

const olderText =
  "Developed by a team with a successful track record of delivering multiple residential projects, this development is built with a strong focus on quality construction, thoughtful planning, and customer satisfaction. Every stage, from booking to possession, is managed with complete transparency, ensuring a smooth and trustworthy home-buying experience.";

const milestoneImage = "/assets/MilestonesImg-C9BI1EIN.png";

const milestones = [
  {
    year: 2030,
    projectName: "RADHE ANANTAM",
    subtitle: "- Wadhmukhwadi",
    image: "/assets/Project1-1-DvCeZnIO.png",
    text: "Radhe Anantam Spread across 3 acres, this premium residential project offers spacious 2 & 3 BHK homes designed for comfortable and modern living. With thoughtfully planned layouts and 40+ premium amenities, it ensures a perfect lifestyle for families. Located in a well-connected area, the project provides easy access to schools, hospitals, and daily essentials, while maintaining a peaceful living environment.",
  },
  {
    year: 2027,
    projectName: "RADHE SHLOK",
    subtitle: "- Charholi Budruk",
    image: "/assets/Project1-2-CqQhMxMk.png",
    text: "Radhe Shlok is an exclusive low-density residential project in Charholi Budruk, Pune, offering thoughtfully designed 2 & 3 BHK homes. 7 floor construction With limited units, modern amenities, and excellent connectivity, main road at 1 min it provides a peaceful, comfortable, and well-connected lifestyle for modern families.",
  },
  {
    year: 2026,
    projectName: "Radhe Windsun",
    subtitle: "- Chovisawadi",
    image: "/assets/Project1-3-BjaKVqjV.png",
    text: "Radhe Windsun is residential project in Charholi Budruk, Pune, offering thoughtfully designed 2, 2.5 & 3 BHK homes within a 14-storey single-tower development spread across 1 acres. Combining modern amenities, quality construction, and a secure living environment ensures a comfortable lifestyle with landscaped spaces and essential facilities, while its strategic location excellent connectivity to Alandi Road, Pune Airport, and key city destinations.",
  },
  {
    year: 2022,
    projectName: "RADHE HARMONY",
    subtitle: "- Moshi alandi road",
    image: "/assets/Project1-4-BdlrMOJc.png",
    text: "Radhe Harmony by Radhe Group combines quality construction, contemporary design, and lasting value. Every home is crafted with premium materials for superior comfort, durability, and everyday living. With transparent processes, easy home loan assistance, and dedicated customer support, we make your home-buying journey smooth and stress-free. Trust, quality, and customer satisfaction define every Radhe Group project.",
  },
  {
    year: 2020,
    projectName: "RADHE REGAL",
    subtitle: "- Moshi alandi road",
    image: "/assets/Project1-5-sao-mOUX.png",
    text: "Radhe Regal Residency by Radhe Group is built with premium quality, modern design, and exceptional craftsmanship. Every home offers lasting comfort, durability, and a refined lifestyle. With transparent processes, easy home loan assistance, and dedicated support, we ensure a seamless home-buying experience. Quality, trust, and customer satisfaction are at the core of everything we create.",
  },
  { year: 2017, projectName: "SANSKRITI HOMES", subtitle: "- Bhosari", image: milestoneImage, text: olderText },
  { year: 2015, projectName: "SANSKRUTI HEIGHTS", subtitle: "- Ravet", image: milestoneImage, text: olderText },
  { year: 2014, projectName: "SANSKRUTI DARSAN", subtitle: "- Chinchwad", image: milestoneImage, text: olderText },
  { year: 2013, projectName: "SANSKRUTI APARTMENT", subtitle: "- Chinchwad", image: milestoneImage, text: olderText },
  { year: 2013, projectName: "Umiya Residency", subtitle: "- Bhosari", image: milestoneImage, text: olderText },
  { year: 2013, projectName: "Kesar Garden", subtitle: "- Bhosari", image: milestoneImage, text: olderText },
  { year: 2012, projectName: "Sanskruti", subtitle: "- Bhosari", image: milestoneImage, text: olderText },
  { year: 2011, projectName: "Regency Heights", subtitle: "- Chikhli", image: milestoneImage, text: olderText },
  { year: 2010, projectName: "Indrayani Garden", subtitle: "- Indrayaninagar", image: milestoneImage, text: olderText },
  { year: 2010, projectName: "Satyam Residency", subtitle: "- Chikhli", image: milestoneImage, text: olderText },
  { year: 2010, projectName: "Shivam Residency", subtitle: "- Chikhli", image: milestoneImage, text: olderText },
  { year: 2010, projectName: "Sundaram Residency", subtitle: "- Bhosari", image: milestoneImage, text: olderText },
  { year: 2009, projectName: "Regency Garden", subtitle: "- Chikhli", image: milestoneImage, text: olderText },
];

const team = [
  { name: "Mr. Pravin Patel", role: "Founder", image: "/assets/PravinPatel-CqTA9mJX.png" },
  { name: "Mr. Amit Patel", role: "Founder", image: "/assets/AmitPatel-D6yN10WK.png" },
  { name: "Mr. Narendra Patel", role: "Founder", image: "/assets/NarendraPatel-aKYloahq.png" },
];

const teamPhotos = ["/assets/Team1-DJ9b41_u.png", "/assets/Team2-kVz6ub5I.png"];

function Hero() {
  return (
    <div className="relative w-full h-[90vh] md:h-screen overflow-hidden">
      <img src="/assets/AboutHero-C3YzdzBk.avif" alt="About Hero" className="absolute w-full h-full object-cover" />
      <div className="absolute bottom-[-9px] left-30 text-white z-10">
        <h1 className="text-4xl md:text-[120px] font-semibold leading-none m-0">
          ABOUT <br />
          <span>RADHE GROUP</span>
        </h1>
      </div>
    </div>
  );
}

function WhoWeAre() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto px-8 md:px-32">
        <h2 className="text-orange-500 text-lg md:text-4xl font-medium mb-10">Who We Are</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 items-start">
          <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
            <img src="/assets/AboutLogo-CFzVpB-L.png" alt="building" className="max-w-full max-h-full object-contain rounded-lg" />
          </div>
          <div className="text-gray-600 text-xl md:text-xl leading-6 space-y-4 max-w-xl">
            <p>
              <span className="font-semibold text-gray-800">Radhe Group</span> is a respected name in the real estate sector, committed to delivering
              <span className="font-semibold text-gray-800"> high-quality residential and commercial developments</span> that reflect the expectations of modern living. Built on a foundation of trust, transparency, and execution discipline, the group has steadily established itself as a reliable choice for both homebuyers and investors.
            </p>
            <p>
              <span className="font-semibold text-gray-800">
                Each development is approached with a clear intent—to create spaces that are not only well-constructed, but also thoughtfully planned to enhance everyday life.
              </span>{" "}
              From efficient layouts to community-focused environments, every detail is designed to balance comfort, functionality, and long-term value.
            </p>
            <p>
              With a forward-looking vision, Radhe Group continues to expand its presence while staying anchored to its core principles of integrity, innovation, and customer satisfaction—ensuring that every project stands as a reflection of both quality and responsibility.
            </p>
          </div>
        </div>
        <div className="mt-14 border-t border-gray-300" />
      </div>
    </section>
  );
}

function VisionMission() {
  const [activeId, setActiveId] = useState("vision");
  const active = beliefs.find((item) => item.id === activeId);

  return (
    <section className="w-full px-6 sm:px-10 lg:px-24 py-14 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="flex flex-col w-full lg:w-72 shrink-0 gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#E7720E] lg:whitespace-nowrap">Vision & Mission</h2>
              <p className="mt-2 text-[#8A8A8A] text-sm sm:text-base">The belief that guides our long-term thinking.</p>
            </div>
            <div className="flex flex-row lg:flex-col gap-3 w-full overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
              {beliefs.map((item) => {
                const selected = activeId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className="flex items-center gap-3 px-1 py-1 bg-transparent shrink-0 text-left transition-all duration-200 cursor-pointer"
                  >
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${selected ? "bg-[#EF7F1A]" : "bg-[#A5A49A]"}`}>
                      <img src={item.icon} alt={item.label} className="w-5 h-5 object-contain" />
                    </span>
                    <span className="flex flex-col min-w-0">
                      <span className={`text-sm font-semibold whitespace-nowrap ${selected ? "text-[#1F2937]" : "text-[#9C8B7E]"}`}>{item.label}</span>
                      <span className={`block h-[2px] rounded-full mt-1 w-full transition-all duration-200 ${selected ? "bg-[#E7720E]" : "bg-[#B9B7AD]"}`} />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex-1 w-full bg-[#FFF8F0] rounded-[28px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex flex-col sm:flex-row items-stretch p-4 sm:p-5 gap-6 overflow-hidden mt-10 self-stretch">
            <div className="w-full sm:w-[48%] shrink-0 overflow-hidden rounded-2xl">
              <img src={active.image} alt={active.title} className="w-full h-56 sm:h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col py-1 sm:py-6 pr-2 sm:pr-5 min-w-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#E7720E] mb-3">{active.title}</h3>
              <p className="text-[#4B4B4B] text-sm sm:text-base leading-relaxed">{active.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Milestones() {
  const [index, setIndex] = useState(0);
  const current = milestones[index];
  const rest = [...milestones.slice(index + 1), ...milestones.slice(0, index)];

  return (
    <section className="bg-[#1f1f1f] px-4 py-10 sm:px-8 md:px-16 lg:px-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-josefin text-[28px] font-normal leading-none text-[#E7720E] sm:text-[34px] md:text-[48px]">Milestones</h2>
        <p className="mt-2 max-w-3xl font-josefin text-[12px] leading-[1.4] text-white/70 sm:text-[13px] md:text-[15px]">
          A journey shaped by steady progress, thoughtful developments, and a growing portfolio of well-planned communities.
        </p>

        <div className="mt-6 flex flex-col gap-6 lg:mt-8 lg:grid lg:grid-cols-[260px_1fr] lg:gap-14">
          <div className="flex gap-5">
            <div className="relative hidden w-5 shrink-0 lg:block">
              <div className="absolute left-1/2 top-8 h-[calc(100%-16px)] w-[3px] -translate-x-1/2 rounded-full bg-white/35" />
              <span className="absolute left-1/2 top-7 h-5 w-5 -translate-x-1/2 rounded-full border-2 border-white bg-[#E7720E]" />
            </div>
            <div className="min-w-0 w-full">
              <div className="font-josefin text-[48px] font-semibold leading-none text-[#E7720E] sm:text-[64px] lg:text-[78px]">{current.year}</div>
              <div className="mt-3 flex flex-row gap-3 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-x-visible lg:pb-0">
                {rest.map((item, position) => (
                  <button
                    key={`${item.year}-${item.projectName}-${position}`}
                    onClick={() => setIndex(milestones.indexOf(item))}
                    className={`shrink-0 font-josefin text-[14px] font-semibold leading-none text-white/70 transition-colors hover:text-[#E7720E] cursor-pointer sm:text-[20px] lg:text-[24px]${position === milestones.length - index - 1 && index > 0 ? " lg:mt-6" : ""}`}
                  >
                    {item.year}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:pt-5">
            <img
              src={current.image}
              alt={current.projectName}
              className="h-[200px] w-full rounded-tr-[18px] rounded-br-[18px] object-cover sm:h-[260px] md:h-[320px] lg:h-[380px]"
            />
            <div className="mt-3 sm:mt-5">
              <h3 className="font-josefin text-[20px] font-normal leading-tight text-white sm:text-[28px] md:text-[36px] lg:text-[44px]">
                {current.projectName}
              </h3>
              <p className="mt-1 font-josefin text-[12px] font-semibold text-white sm:text-[14px] md:text-[16px]">{current.subtitle}</p>
              <p className="mt-2 font-josefin text-[12px] leading-[1.5] text-white/80 sm:text-[14px] md:text-[16px] lg:text-[20px]">{current.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="bg-white py-12 md:py-16 px-4 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-[#E7720E] mb-2">Meet Our Team</h2>
        <div className="mb-12">
          <p className="text-xl md:text-2xl font-semibold text-[#000000]">Radhe Group is driven by a team built on</p>
          <p className="text-xl md:text-2xl text-gray-400">clarity, precision, and accountability</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-8 md:gap-10">
          {team.map((person) => (
            <div key={person.name} className="flex flex-col items-center w-full sm:w-auto">
              <div className="w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 overflow-hidden rounded-2xl bg-[#e8e8e8] mb-3">
                <img src={person.image} alt={person.name} className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-[#1a1a1a] mt-2">{person.name}</h3>
              <p className="text-xs sm:text-sm text-[#1a1a1a]">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Commitment() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % teamPhotos.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#1a1a1a] flex flex-col items-center py-12 px-6 font-sans text-white">
      <div className="max-w-2xl text-center mb-8">
        <h2 className="text-xl md:text-2xl font-medium tracking-wide leading-tight uppercase">
          A Collective Commitment to Building Better <br /> Living Environments
        </h2>
      </div>
      <div className="relative w-full max-w-5xl px-4 md:px-0">
        <img src={teamPhotos[index]} alt={`team-${index + 1}`} className="w-full h-auto object-contain rounded" />
        <div className="flex justify-center gap-2 mt-4">
          {teamPhotos.map((src, i) => (
            <button
              key={src}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${i === index ? "bg-white" : "bg-white/30"}`}
              aria-label={`Show team photo ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Association() {
  return (
    <section className="bg-white py-16 px-8 md:px-24">
      <div className="w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="w-full md:w-2/5 flex justify-center">
          <img src="/assets/shruti-fEu8JXCS.png" alt="Shruti Buildcon Logo" className="w-64 md:w-80 h-auto object-contain" />
        </div>
        <div className="w-full md:w-3/5">
          <h3 className="text-4xl md:text-5xl font-normal text-[#E67E22] mb-5 leading-tight">
            Crafted In <br /> Association With
          </h3>
          <h4 className="font-bold text-gray-900 text-lg md:text-xl uppercase mb-3">SHRUTI BUILDTECH LLP</h4>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg text-justify">
            A respected name in real estate development, Shruti Buildcon brings its expertise, execution strength, and commitment to quality to this collaboration. The association reflects a shared vision of creating well-planned spaces that combine modern living with lasting value.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <VisionMission />
      <Milestones />
      <Team />
      <Commitment />
      <Association />
      <Cta
        title="Begin Your Next Chapter with Confidence"
        subtitle="Whether you are purchasing your first home or making a long-term investment, Radhe Group offers the clarity, reliability, and thoughtful planning you can trust."
        buttonText="Get in Touch"
      />
    </>
  );
}
