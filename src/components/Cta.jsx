import { useNavigate } from "react-router-dom";

export default function Cta({
  title = "Take the Next Step\nTowards the Right Home",
  subtitle = "Explore thoughtfully planned spaces designed for comfort, clarity, and long-term value.",
  buttonText = "Get in Touch",
  className = "",
}) {
  const navigate = useNavigate();

  return (
    <section className={`relative h-[500px] md:h-[600px] w-full flex items-center justify-center overflow-hidden font-sans mb-10 ${className}`}>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/assets/bgImg-lqcidsIT.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight uppercase whitespace-pre-line mb-4 drop-shadow-md">
          {title}
        </h2>
        <p className="text-white text-sm md:text-lg font-light opacity-90 mb-8 max-w-2xl mx-auto drop-shadow-sm">
          {subtitle}
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-white text-[#B07D4E] font-semibold py-3 px-10 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:bg-gray-100 cursor-pointer"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}
