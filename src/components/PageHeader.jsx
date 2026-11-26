export default function PageHeader({ title }) {
  return (
    <header className="relative w-full bg-[#260F01] min-h-[180px] sm:min-h-[220px] md:min-h-[280px] px-4 sm:px-8 md:px-10 pt-28 pb-6 sm:pt-32 sm:pb-8 flex flex-col justify-end overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        <h1 className="text-white text-[clamp(2.4rem,10vw,7.5rem)] font-bold leading-[0.9] tracking-tight uppercase break-words">
          {title}
        </h1>
      </div>
    </header>
  );
}
