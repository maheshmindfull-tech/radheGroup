import { CalendarDays, MessageCircle, User } from "lucide-react";
import PageHeader from "../components/PageHeader";

const body =
  "t we specialize in providing top-quality IT and electronic products tailored for professionals. Our commitment to swift service ensures that your tech needs are met with efficiency and reliabilityt Devnik Ghana, we specialize in providing top-quality IT and electronic products tailored for professionals. Our commitment to swift service ensures that your tech needs are met with efficiency and reliabilityt Devnik Ghana, we specialize in providing top-quality IT and electronic products tailored for professionals. Our commitment to swift service ensures that your tech needs are met with efficiency and reliability";

const longCopy =
  "Devnik Ghana, we specialize in providing top-quality IT and electronic products tailored for professionals. Our commitment to swift service ensures that your tech needs are met with efficiency and reliabilityt Devnik Ghana, we specialize in providing top-quality IT and electronic products tailored for professionals. Our commitment to swift service ensures that your tech needs are met with efficiency and reliabilityt Devnik Ghana, we specialize in providing top-quality IT and electronic products tailored for professionals. Our commitment to swift service ensures that your tech needs are met with efficiency and reliability Devnik Ghana, we specialize in providing top-quality IT and electronic products tailored for professionals. Our commitment to swift service ensures that your tech needs are met with efficiency and reliability";

export default function BlogDetails() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <PageHeader title="Blogs" />
      <section className="max-w-auto mx-auto px-8 sm:px-18 md:px-22 lg:px-35 py-10 md:py-16">
        <h1 className="text-[#E7720E] font-medium leading-[1.15] text-[28px] sm:text-[38px] md:text-[52px] max-w-[950px]">
          Empowering Businesses with Reliable
          <br />
          Technology Solutions
        </h1>
        <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-5 text-black">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            <span className="text-[13px] md:text-[14px]">April 20, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <User size={16} />
            <span className="text-[13px] md:text-[14px]">Abhijeet Patil</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle size={16} />
            <span className="text-[13px] md:text-[14px]">2 Comments</span>
          </div>
        </div>
        <div className="mt-8 md:mt-10 rounded-[24px] overflow-hidden">
          <img src="/assets/BlogDetails-CebS4smk.png" alt="blog" className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover" />
        </div>
        <div className="mt-12 md:mt-16 max-w-5xl mx-auto">
          <div className="flex items-start gap-4 md:gap-6">
            <span className="text-[70px] mt-5 md:text-[90px] leading-[0.8] font-normal text-black">A</span>
            <p className="text-black leading-[2] text-[14px] md:text-[16px]">{body}</p>
          </div>
          <div className="mt-10">
            <p className="text-black leading-[2] text-[14px] md:text-[16px]">{body.replace(/^t we/, "Devnik Ghana, we")}</p>
          </div>
          <div className="mt-16">
            <h2 className="text-black font-medium leading-[1.2] text-[28px] sm:text-[38px] md:text-[52px] mb-8">HP ALL-IN-ONE ProONE 240 G10</h2>
            <p className="text-black leading-[2] text-[14px] md:text-[16px]">{longCopy}</p>
            <div className="mt-10 rounded-[12px] overflow-hidden">
              <img src="/assets/BlogDetails2-BVLgsskW.png" alt="blog-details" className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover" />
            </div>
            <div className="mt-12 space-y-10">
              <p className="text-black leading-[2] text-[14px] md:text-[16px]">{longCopy}</p>
              <p className="text-black leading-[2] text-[14px] md:text-[16px]">{longCopy}</p>
            </div>
          </div>
        </div>
        <div className="mt-20 bg-[#1D1D1D] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-white leading-[1.4] font-medium px-25 text-[26px] sm:text-[34px] md:text-[48px] max-w-full">
              Lorem ligula eget dolor. Aenean massa.Lorem ligula eget dolor. Aenean massa.
            </h3>
            <div className="mt-6 px-25">
              <p className="text-[#D8FF45] text-[16px] md:text-[18px]">-Abhijeet Patil</p>
              <p className="text-[#0D7C8B] text-[18px] md:text-[22px]">GH₵11,550</p>
            </div>
          </div>
        </div>
        <div className="bg-[#F5F5F5] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 py-14 md:py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[#0A5962] font-medium text-[30px] sm:text-[38px] md:text-[52px] mb-8 align-middle">HP ALL-IN-ONE ProONE 240 G10</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-black leading-[2] align-middle text-[14px] md:text-[16px]">
                At Devnik Ghana, we specialize in providing top-quality IT and electronic products tailored for professionals. Our commitment to swift service ensures that your tech needs are met with efficiency and reliabilityt Devnik Ghana, we specialize in providing top-quality IT and electronic products tailored for professionals. Our commitment to swift service ensures that your tech needs are met with efficiency and reliabilityt Devnik Ghana, we specialize in providing top-quality IT and electronic products tailored for professionals. Our commitment to swift service ensures that your tech needs are met with efficiency and reliability
              </p>
              <ul className="list-disc pl-5 mt-6 space-y-3 text-[14px] md:text-[16px] leading-[1.8]">
                <li>At Devnik Ghana, we specialize in providing top-quality IT and electronic products tailored for professionals.</li>
                <li>Our commitment to swift service ensures that your tech needs are met with efficiency and reliability.</li>
                <li>Need are met with efficiency and reliability Devnik Ghana.</li>
                <li>We specialize in providing top-quality IT and electronic products tailored for professionals.</li>
              </ul>
              <p className="mt-8 text-black leading-[2] text-[14px] md:text-[16px]">
                At Devnik Ghana, we specialize in providing top-quality IT and electronic products tailored for professionals. Our commitment to swift service ensures that your tech needs are met with efficiency and reliability Devnik Ghana, we specialize in providing top-quality IT and electronic products tailored for professionals.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#EFE5DD] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 py-14 md:py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[#E7720E] font-medium text-[28px] sm:text-[34px] md:text-[42px] mb-10">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-[18px] overflow-hidden p-3">
                  <img src="/assets/BlogDetails3-nMki4JcH.png" alt="related" className="w-full h-[220px] object-cover rounded-[12px]" />
                  <div className="p-3">
                    <h3 className="text-[#0A5962] font-medium leading-[1.4] text-[18px] md:text-[22px]">
                      Certified Expert Guidance Certified Expert Guidance
                    </h3>
                    <p className="mt-4 text-gray-600 leading-[1.8] text-[13px]">
                      Our team of certified IT professionals provide expert advice to help you choose the right technology solutions for your business needs.
                    </p>
                    <button className="mt-8 text-[#0A5962] text-[14px] font-medium">Read more-</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
