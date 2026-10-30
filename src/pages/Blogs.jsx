import { useNavigate } from "react-router-dom";
import { Calendar, User } from "lucide-react";
import PageHeader from "../components/PageHeader";

const posts = [
  {
    id: 1,
    image: "/assets/Blog1-Dj7dVyUK.png",
    title: "Certified Expert Guidance Certified Expert Guidance",
    description:
      "Our team of certified IT professionals provides expert advice to help you choose the right technology solutions for your business needs.Our team of certified IT professionals provides expert advice to help you choose the right technology solutions for your business needs.",
    date: "April 20, 2024",
    author: "Abhijeet Patil",
  },
  {
    id: 2,
    image: "/assets/Blog2-Bi8Jpe_W.png",
    title: "Certified Expert Guidance Certified Expert Guidance",
    description:
      "Our team of certified IT professionals provides expert advice to help you choose the right technology solutions for your business needs.Our team of certified IT professionals provides expert advice to help you choose the right technology solutions for your business needs.",
    date: "April 20, 2024",
    author: "Abhijeet Patil",
  },
  {
    id: 3,
    image: "/assets/Blog3-CzJpTm1F.png",
    title: "Certified Expert Guidance Certified Expert Guidance",
    description:
      "Our team of certified IT professionals provides expert advice to help you choose the right technology solutions for your business needs.Our team of certified IT professionals provides expert advice to help you choose the right technology solutions for your business needs.",
    date: "April 20, 2024",
    author: "Abhijeet Patil",
  },
  {
    id: 4,
    image: "/assets/Blog1-Dj7dVyUK.png",
    title: "Certified Expert Guidance Certified Expert Guidance",
    description:
      "Our team of certified IT professionals provides expert advice to help you choose the right technology solutions for your business needs.Our team of certified IT professionals provides expert advice to help you choose the right technology solutions for your business needs.",
    date: "April 20, 2024",
    author: "Abhijeet Patil",
  },
  {
    id: 5,
    image: "/assets/Blog3-CzJpTm1F.png",
    title: "Certified Expert Guidance Certified Expert Guidance",
    description:
      "Our team of certified IT professionals provides expert advice to help you choose the right technology solutions for your business needs.Our team of certified IT professionals provides expert advice to help you choose the right technology solutions for your business needs.",
    date: "April 20, 2024",
    author: "Abhijeet Patil",
  },
];

export default function Blogs() {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader title="Blogs" />
      <section className="bg-white py-12 px-6 md:px-20 lg:px-40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#E67E22] text-3xl font-medium mb-10">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                onClick={() => navigate("/blogdetails")}
                className="bg-[#FFF5EA] rounded-2xl overflow-hidden p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-xl mb-4" />
                <div className="px-1">
                  <h3 className="text-[#1A365D] font-bold text-lg leading-snug mb-3">{post.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">{post.description}</p>
                  <div className="flex items-center gap-4 text-sm text-[#000000] font-medium border-t border-orange-100 pt-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="text-[#000000]" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={12} className="text-[#000000]" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
