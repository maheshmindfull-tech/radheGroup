import { useState } from "react";
import { Check, ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { enquiryProjects, projectApiKeys, pushEnquiry } from "../lib/mdoc";
import { sendEnquiryEmail } from "../lib/notifyEmail";

const possessionOptions = ["1 year", "1+ years", "Ready to Move"];

const emptyForm = {
  name: "",
  number: "",
  email: "",
  project: "",
  plan: "",
  possession: "",
  location: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [possession, setPossession] = useState(possessionOptions[0]);
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    else if (!/^[A-Za-z ]+$/.test(form.name.trim())) next.name = "Name cannot contain digits";
    else if (form.name.trim().length > 50) next.name = "Name must be 50 characters or less";
    if (!form.number.trim()) next.number = "Number is required";
    else if (!/^[0-9]{10}$/.test(form.number)) next.number = "Enter valid 10-digit number";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = "Enter a valid email address";
    if (!form.project) next.project = "Project is required";
    return next;
  };

  const update = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: "" }));
  };

  const submitEnquiry = () =>
    pushEnquiry({
      apiKey: projectApiKeys[form.project],
      firstName: form.name,
      mobile: form.number,
      email: form.email,
      preference: form.plan,
      possession,
      location: form.location,
      remark: form.message,
      sourceDescription: "Website Contact Form",
    });

  const onSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }
    setSending(true);
    setStatus({ type: "", text: "" });
    try {
      const projectName = enquiryProjects.find((project) => project.slug === form.project)?.name || form.project;
      await Promise.all([
        submitEnquiry(),
        sendEnquiryEmail({
          subject: `Website enquiry - ${projectName}`,
          name: form.name.trim(),
          email: form.email.trim(),
          fields: {
            Mobile: form.number,
            Project: projectName,
            Plan: form.plan || "Not selected",
            Possession: possession,
            Location: form.location || "Not provided",
            Message: form.message || "Not provided",
          },
        }),
      ]);
      setStatus({ type: "success", text: "Message sent successfully!" });
      setForm(emptyForm);
      setPossession(possessionOptions[0]);
    } catch (error) {
      setStatus({ type: "error", text: error.message || "Something went wrong. Please try again." });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHeader title="Contact Us" />
      <section className="bg-white py-10 px-4 md:px-10 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 bg-[#FFEEE0] p-8 md:p-10 rounded-[2.5rem] shadow-sm w-full">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-1">Contact Us</h2>
            <p className="text-[#6E6E6E] text-sm mb-8 font-medium">
              Enquire now and take the next step towards your new home.
            </p>
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[#2D2D2D] text-md font-semibold ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(event) => update("name", event.target.value)}
                    maxLength={50}
                    onKeyDown={(event) => /[0-9]/.test(event.key) && event.preventDefault()}
                    className={`w-full px-5 py-3 rounded-full bg-white border-none focus:ring-2 focus:ring-orange-400 outline-none text-sm ${errors.name ? "ring-2 ring-red-400" : ""}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs ml-2">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[#2D2D2D] text-md font-semibold ml-1">Number</label>
                  <input
                    type="tel"
                    placeholder="+91"
                    value={form.number}
                    maxLength={10}
                    onChange={(event) => update("number", event.target.value.replace(/\D/g, ""))}
                    className={`w-full px-5 py-3 rounded-full bg-white border-none focus:ring-2 focus:ring-orange-400 outline-none text-sm ${errors.number ? "ring-2 ring-red-400" : ""}`}
                  />
                  {errors.number && <p className="text-red-500 text-xs ml-2">{errors.number}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[#2D2D2D] text-md font-semibold ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="Hello@email"
                    value={form.email}
                    onChange={(event) => update("email", event.target.value)}
                    className={`w-full px-5 py-3 rounded-full bg-white border-none focus:ring-2 focus:ring-orange-400 outline-none text-sm ${errors.email ? "ring-2 ring-red-400" : ""}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs ml-2">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[#2D2D2D] text-md font-semibold ml-1">Project</label>
                  <div className="relative">
                    <select
                      value={form.project}
                      onChange={(event) => update("project", event.target.value)}
                      className={`w-full px-5 py-3 rounded-full bg-white border-none focus:ring-2 focus:ring-orange-400 outline-none text-sm text-black appearance-none cursor-pointer ${errors.project ? "ring-2 ring-red-400" : ""}`}
                    >
                      <option value="">-- Select Project --</option>
                      {enquiryProjects.map((project) => (
                        <option key={project.slug} value={project.slug}>
                          {project.name}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {errors.project && <p className="text-red-500 text-xs ml-2">{errors.project}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[#2D2D2D] text-md font-semibold ml-1">PLAN</label>
                  <div className="relative">
                    <select
                      value={form.plan}
                      onChange={(event) => update("plan", event.target.value)}
                      className="w-full px-5 py-3 rounded-full bg-white border-none focus:ring-2 focus:ring-orange-400 outline-none text-sm text-black appearance-none cursor-pointer"
                    >
                      <option value="" className="text-gray-400">
                        -- 2BHK OR 3BHK --
                      </option>
                      <option value="2 BHK">2BHK</option>
                      <option value="3 BHK">3BHK</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative w-full">
                  <label className="block mb-2 font-semibold">Possession requirement</label>
                  <button
                    type="button"
                    onClick={() => setOpen((current) => !current)}
                    className="w-full h-14 px-5 rounded-full border-2 border-orange-400 bg-[#F5F5F5] flex items-center justify-between"
                  >
                    <span>{possession}</span>
                    <ChevronDown size={18} />
                  </button>
                  {open && (
                    <div className="absolute top-9 mb-2 left-0 w-full bg-gray-300 rounded-2xl shadow-lg z-50">
                      {possessionOptions.map((option) => (
                        <div
                          key={option}
                          onClick={() => {
                            setPossession(option);
                            setOpen(false);
                          }}
                          className="flex items-center gap-2 px-4 py-3 cursor-pointer hover:bg-gray-300"
                        >
                          <div className="w-5">{possession === option && <Check size={16} />}</div>
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-[#2D2D2D] text-md font-semibold ml-1">Location requirement</label>
                  <input
                    type="text"
                    placeholder="Location"
                    value={form.location}
                    onChange={(event) => update("location", event.target.value)}
                    className="w-full px-5 py-3 rounded-full bg-white border-none focus:ring-2 focus:ring-orange-400 outline-none text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[#4A3728] text-md font-semibold ml-1">Message</label>
                <textarea
                  placeholder="Type here"
                  rows="4"
                  value={form.message}
                  onChange={(event) => update("message", event.target.value)}
                  className="w-full px-5 py-4 rounded-[2rem] bg-white border-none focus:ring-2 focus:ring-orange-400 outline-none text-sm resize-none"
                />
              </div>

              {status.text && (
                <p className={`text-sm ml-2 ${status.type === "success" ? "text-green-600" : "text-red-500"}`}>
                  {status.text}
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="bg-[#E7720E] hover:bg-orange-600 text-white font-bold py-3 px-10 rounded-full transition-colors uppercase text-sm tracking-wider shadow-md cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="lg:col-span-4 lg:pt-10 space-y-10 px-2 w-full">
            <p className="text-[#6E6E6E] italic text-lg leading-snug">
              Let's start a conversation about your next address.
            </p>
            <div className="space-y-8">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sr.+No.+185P+Near+Redcliff+School+Wadmukhwadi+Charholi+Pune+412105"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="mt-1 flex-shrink-0">
                  <div className="bg-[#E7720E] p-2 rounded-md shadow-sm">
                    <MapPin size={18} className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#2D2D2D] text-lg">Location</h4>
                  <p className="text-[#6E6E6E] text-md leading-relaxed mt-1">
                    Sr. No. 185P, Near Redcliff School,
                    <br />
                    Wadmukhwadi, Charholi, Pune - 412105
                  </p>
                </div>
              </a>
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="bg-[#E7720E] p-2 rounded-md shadow-sm">
                    <Mail size={18} className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#2D2D2D] text-lg">Email Address</h4>
                  <div className="mt-1 space-y-0.5">
                    <a href="mailto:shrutibuildtechsales@gmail.com" className="block text-[#6E6E6E] text-md hover:opacity-80 transition-opacity">
                      shrutibuildtechsales@gmail.com
                    </a>
                    <a href="mailto:radhegroup30@gmail.com" className="block text-[#6E6E6E] text-md hover:opacity-80 transition-opacity">
                      radhegroup30@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="bg-[#E7720E] p-2 rounded-md shadow-sm">
                    <Phone size={18} className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#2D2D2D] text-lg">Telephone</h4>
                  <div className="mt-1 space-y-0.5">
                    <a href="tel:+918806120002" className="block text-[#6E6E6E] text-md hover:opacity-80 transition-opacity">
                      +91 8806120002
                    </a>
                    <a href="tel:+918506420004" className="block text-[#6E6E6E] text-md hover:opacity-80 transition-opacity">
                      +91 8506420004
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1F1F1F] py-16 px-4 sm:px-6 md:px-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <a
            href="https://www.google.com/maps/dir//Radhe+Anantam+By+Radhe+Group,+MV5F%2B5H,+Chovisawadi,+Charholi+Budruk,+Pimpri-Chinchwad,+Maharashtra+412105,+Maharashtra+411019/@18.6010531,73.8024721,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2c793e1a7e109:0xa7ef5095f63d80f7!2m2!1d73.8748816!2d18.6583848?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDgwMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl overflow-hidden shadow-lg cursor-pointer"
          >
            <iframe
              title="Radhe Group"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.123!2d73.8722!3d18.6584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c793e1a7e109:0xa7ef5095f63d80f7!2sRadhe+Anantam+By+Radhe+Group!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
        </div>
      </section>
    </>
  );
}
