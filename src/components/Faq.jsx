import { useState } from "react";
import { faqs } from "../data";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white pb-12 sm:pb-14 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#E7720E] font-normal text-[30px] sm:text-[36px] md:text-[43px] leading-[1.2]">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-900 font-light text-[14px] md:text-[15px] leading-[1.7] max-w-[650px] mb-10 md:mb-16">
          We connect people with properties buy & Selling their dreams and lifestyles because{" "}
          <br className="hidden sm:block" />
          a home is more than just a place, it's where life happens.
        </p>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <div className="w-full lg:w-[420px] flex-shrink-0">
            <div className="rounded-[20px] overflow-hidden relative">
              <img
                src="/assets/faq-DB4UuvkV.png"
                alt="faq"
                className="w-full h-[280px] sm:h-[380px] md:h-[450px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-6 rounded-[18px] pointer-events-none" />
            </div>
          </div>

          <div className="flex-1 w-full">
            {faqs.map((item, index) => {
              const isOpen = open === index;
              return (
                <div key={item.q} className="border-b-2 border-gray-300 py-4">
                  <div
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex gap-4 sm:gap-8 md:gap-12">
                      <span className="text-gray-900 font-medium flex-shrink-0 text-[15px] md:text-[17px]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-gray-900 font-medium text-[15px] sm:text-[16px] md:text-[17px] leading-[1.5]">
                        {item.q}
                      </h3>
                    </div>
                    <span className="text-gray-900 flex-shrink-0 text-[20px] md:text-xl">{isOpen ? "−" : "+"}</span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-[300px] mt-3" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-600 text-[13px] sm:text-[14px] leading-[1.7] ml-[32px] sm:ml-[55px] md:ml-[65px] max-w-[600px]">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
