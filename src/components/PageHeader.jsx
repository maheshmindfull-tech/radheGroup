export default function PageHeader({ title }) {
  return (
    <header className="relative w-full bg-[#260F01] min-h-[200px] md:min-h-[250px] px-4 md:px-10 flex flex-col justify-end overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        <h1 className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-[120px] font-bold leading-[0.5] sm:leading-[0.5] md:leading-[0.4] lg:leading-[0.5] tracking-tight uppercase">
          {title}
        </h1>
      </div>
    </header>
  );
}
