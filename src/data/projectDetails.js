const person = "/assets/Person-C58LgjpP.png";
const flower = "/assets/Flower-CngYJ9uc.png";
const kids = "/assets/amenity-kids.png";
const car = "/assets/Car-ldrE71Zv.png";
const camera = "/assets/Camera-DQGQm5AE.png";
const lights = "/assets/amenity-lights.png";
const elevator = "/assets/Elevator-Dq7WkICw.png";
const gate = "/assets/Gate-CMIXCFaI.png";
const road = "/assets/Road-CMHr181P.png";
const security = "/assets/Security-T8AbgCTD.png";
const gym = "/assets/gym-CMCeRyEF.png";
const yoga = "/assets/yoga-D6mMj9qA.png";
const temple = "/assets/temple-CiGnEZlu.png";
const lawn = "/assets/lawn-CX2-p2LS.png";
const pool = "/assets/childpool-DylUnO_d.png";
const hall = "/assets/hall-B5Cvgwqo.png";
const screen = "/assets/screen-CZXEv4YX.png";
const light = "/assets/light-DKrCgsT3.png";
const sport = "/assets/sportArea-C7cNE3ql.png";
const club = "/assets/amenity-clubhouse.png";
const path = "/assets/GardenPath-CyRPncjC.png";

const group = "/assets/Group-DCcfz6CG.png";

export const projects = [
  {
    id: 1,
    slug: "radhe-anantam",
    name: "Radhe Anantam",
    location: "Wadhmukhwadi",
    status: "Ongoing",
    banner: "/assets/banner11-DtQlLcAU.png",
    project: "/assets/Project1-1-DvCeZnIO.png",
    logo: "/assets/ProjectLogo-CICDRvan.png",
    isDetailed: true,
    gallery: [11, 12, 13, 14, 15, 16, 17].map((n, index) => ({
      id: index + 1,
      src: `/assets/${["p11-DM9KHbon", "p12-DSJNVeJo", "p13-BWHSZSEe", "p14-DR8iiRNm", "p15-DS8K1Dmm", "p16-Xjal2VNa", "p17-CX7VfBYD"][index]}.png`,
      alt: `Anantam ${index + 1}`,
    })),
  },
  {
    id: 2,
    slug: "radhe-shlok",
    name: "Radhe Shlok",
    location: "Charholi Budruk",
    status: "Ongoing",
    banner: "/assets/banner3-zMIRzodd.png",
    project: "/assets/Project1-2-CqQhMxMk.png",
    logo: "/assets/ProjectLogo-CICDRvan.png",
    isDetailed: true,
  },
  {
    id: 3,
    slug: "radhe-windsun",
    name: "Radhe Windsun",
    location: "Chovisawadi",
    status: "Ongoing",
    banner: "/assets/fatherAndDaugther-BxcTPJft.png",
    project: group,
    logo: "/assets/ProjectLogo-CICDRvan.png",
    isDetailed: true,
  },
  {
    id: 4,
    slug: "radhe-harmony",
    name: "Radhe Harmony",
    location: "Moshi alandi road",
    status: "Completed",
    banner: "/assets/Pankh-FDYaXq2E.png",
    project: "/assets/Project1-4-BdlrMOJc.png",
    logo: "/assets/ProjectLogo-CICDRvan.png",
    isDetailed: true,
  },
  {
    id: 5,
    slug: "radhe-regal",
    name: "Radhe Regal",
    location: "Moshi alandi road",
    status: "Completed",
    banner: "/assets/banner3-zMIRzodd.png",
    project: "/assets/Project1-5-sao-mOUX.png",
    logo: "/assets/ProjectLogo-CICDRvan.png",
    isDetailed: true,
  },
  ...[
    ["sanskruti-homes", "Sanskruti Homes", "Chikhli"],
    ["sanskruti-heights", "Sanskruti Heights", "Chikhli"],
    ["sanskruti-darsan", "Sanskriti Darsan", "Chinchwad"],
    ["sanskruti-apartment", "Sanskriti Apartment", "Chinchwad"],
    ["umiya-residency", "Umiya Residency", "Bhosari"],
    ["kesar-garden", "Kesar Garden", "Bhosari"],
    ["sanskruti", "Sanskruti", "Chikhli"],
    ["regency-heights", "Regency Heights", "Chikhli"],
    ["sundaram-residency", "Sundaram Residency", "Bhosari"],
    ["shivam-residency", "Shivam Residency", "Chikhli"],
    ["satyam-residency", "Satyam Residency", "Chikhli"],
    ["indrayani-garden", "Indrayani Garden", "Bhosari"],
    ["regency-garden", "Regency Garden", "Chikhli"],
  ].map(([slug, name, location], index) => ({
    id: index + 6,
    slug,
    name,
    location,
    image: group,
    isDetailed: false,
  })),
];

export const heroTaglines = {
  "radhe-anantam": "An Address Designed for an Abundance of Life",
  "radhe-windsun": "The Future of Home Living",
  "radhe-shlok": "A Quiet Address for Thoughtful Living",
  "radhe-regal": "Where Comfortable Living Feels Effortless",
  "radhe-harmony": "Live in Harmony with Nature, Every Day",
};

export const aboutImages = {
  "radhe-regal": "/assets/image%2032-G8DmFdk_.png",
  "radhe-shlok": "/assets/About-mC8SVI2k.png",
};

export const aboutCopy = {
  "radhe-anantam": {
    heading: "Where Abundant Living Defines a Perfect Life",
    para1:
      "is a premium 2 & 3 BHK residential community thoughtfully crafted across 3 acres in Charholi. With just 4 elegant towers, 40+ lifestyle amenities, and seamless connectivity, it creates a peaceful ecosystem where abundance becomes a way of life.",
    para2: "",
    points: [
      "Prime Location – Charholi, Pune",
      "14 Storey Premium Towers",
      "2 & 3 BHK Spacious Homes",
      "40+ Lifestyle Amenities",
      "Low Density Living Experience",
    ],
  },
  "radhe-windsun": {
    heading: "Where Spiritual Calm Meets Everyday Luxury.",
    para1:
      "Radhe Windsun offers thoughtfully designed 2 & 3 BHK homes in Charholi, Pune, within a well-planned high-rise development. Created to deliver a gracious lifestyle, the project combines modern living spaces with essential amenities and a comfortable environment.",
    para2:
      "With a focus on efficient layouts, open surroundings, and everyday convenience, Radhe Windsun brings together functionality and lifestyle in one address—making it ideal for both families and long-term investment.",
    points: [
      "Prime Location – Charholi, Pune",
      "3 & 2 BHK Apartments",
      "High-Rise Tower Living",
      "Lifestyle Amenities",
      "Comfortable & Practical Layouts",
    ],
  },
  "radhe-harmony": {
    heading: "Experience the True Harmony in Nature",
    para1:
      "Radhe Harmony is a thoughtfully designed residential development located in Dudulgaon, Pune, offering well-planned 1 & 2 BHK homes. Designed to create a perfect balance between nature and modern living, the project brings together peaceful surroundings with functional living spaces.",
    para2:
      "With a focus on comfort, greenery, and everyday usability, Radhe Harmony provides a lifestyle where families can enjoy calm, open spaces while staying well connected to the city. It is an ideal choice for those seeking a balanced and comfortable home environment.",
    points: [
      "Prime Location – Dudulgaon, Pune",
      "1 & 2 BHK Lavish Homes",
      "Nature-Inspired Living",
      "Peaceful & Green Surroundings",
      "Practical & Comfortable Layouts",
    ],
  },
  "radhe-regal": {
    heading: "Where Comfort Becomes a Way of Living",
    para1:
      "Radhe Regal Residency is a thoughtfully planned residential development designed to offer comfortable and balanced living. Located in Dudulgaon near Moshi–Alandi Road, the project brings together well-designed 1 & 2 BHK homes with a focus on simplicity, usability, and everyday convenience.",
    para2:
      "Built with attention to space planning and quality construction, Radhe Regal Residency creates an environment where families can enjoy a peaceful lifestyle with all essential amenities close at hand. Designed to enhance daily living, it offers a practical and comfortable home experience.",
    points: [
      "Prime Location – Dudulgaon, Pune",
      "1 & 2 BHK Comfortable Homes",
      "Practical & Efficient Layouts",
      "Peaceful Residential Environment",
      "Everyday Living Amenities",
    ],
  },
  "radhe-shlok": {
    heading: "Where Classic Living Defines a Perfect Life",
    para1:
      "Radhe Shlok is an exclusive low-density residential development in Charholi, Pune, offering thoughtfully designed 2 & 3 BHK homes. Crafted across a 7-storey structure with limited residences, it creates a peaceful and comfortable living environment.",
    para2:
      "Designed for families who value space, privacy, and everyday convenience, Radhe Shlok combines practical layouts with essential amenities. Its prime location ensures seamless connectivity while maintaining a calm and well-connected lifestyle.",
    points: [
      "Prime Location – Charholi, Pune",
      "7 Storey Residential Tower",
      "2 & 3 BHK Spacious Homes",
      "Limited Families (Low Density Living)",
      "Peaceful & Well-Connected Lifestyle",
      "Effective Space Utilization",
    ],
  },
};

export const stats = {
  "radhe-anantam": [
    { value: "3 Acres", label: "Of Development" },
    { value: "40+", label: "Premium Amenities" },
    { value: "4 Towers", label: "Low Density Planning" },
    { value: "45%", label: "Abundance Focused Living" },
  ],
  "radhe-windsun": [
    { value: "150+", label: "Happy Buyers" },
    { value: "110+", label: "Client Reviews" },
    { value: "2.5L+", label: "Sq.ft. of Development" },
    { value: "95%", label: "Positive Rating" },
  ],
  "radhe-harmony": [
    { value: "200+", label: "Happy Buyers" },
    { value: "150+", label: "Client Reviews" },
    { value: "3L+", label: "Sq.ft. of Development" },
    { value: "94%", label: "Positive Rating" },
  ],
  "radhe-regal": [
    { value: "120+", label: "Happy Buyers" },
    { value: "85+", label: "Client Reviews" },
    { value: "1.2L+", label: "Sq.ft. of Development" },
    { value: "92%", label: "Positive Rating" },
  ],
  "radhe-shlok": [
    { value: "35+", label: "Happy Buyers" },
    { value: "40+", label: "Client Reviews" },
    { value: "55K+", label: "Sq.ft. of Development" },
    { value: "90%", label: "Positive Rating" },
  ],
};

export const amenities = {
  "radhe-anantam": {
    subtitle: "Premium amenities crafted for an abundant lifestyle.",
    items: [
      { icon: person, title: "Senior Seating" },
      { icon: flower, title: "Landscaping" },
      { icon: kids, title: "Kids Play Area" },
      { icon: gym, title: "Gymnasium" },
      { icon: yoga, title: "Yoga Deck" },
      { icon: car, title: "Parking" },
      { icon: temple, title: "Ganesh Temple" },
      { icon: gate, title: "Grand Entrance" },
      { icon: lawn, title: "Lawn" },
      { icon: security, title: "24x7 Security" },
      { icon: elevator, title: "Elevator" },
      { icon: pool, title: "Children's pool" },
      { icon: hall, title: "Functional hall" },
      { icon: screen, title: "Amphitheatre" },
      { icon: light, title: "Architectural Lighting" },
      { icon: sport, title: "Sports Area" },
    ],
  },
  "radhe-windsun": {
    subtitle: "The belief that guides our long-term thinking.",
    items: [
      { icon: gate, title: "Entrance Gate" },
      { icon: camera, title: "CCTV Camera" },
      { icon: lights, title: "Adequate Pole Lights" },
      { icon: car, title: "Basement" },
      { icon: security, title: "24x7 Security" },
      { icon: road, title: "RCC Internal Road" },
      { icon: kids, title: "Children Play Area" },
      { icon: elevator, title: "Automatic Elevators" },
      { icon: person, title: "Senior Citizen Seating" },
      { icon: flower, title: "Landscape Garden" },
      { icon: club, title: "Mini clubhouse" },
      { icon: path, title: "Garden Path-Way" },
    ],
  },
  "radhe-harmony": {
    subtitle: "The belief that guides our long-term thinking.",
    items: [
      { icon: person, title: "Senior Seating" },
      { icon: flower, title: "Landscaping" },
      { icon: kids, title: "Kids Play Area" },
      { icon: road, title: "Rooftop Gym" },
      { icon: flower, title: "Lawn" },
      { icon: car, title: "Parking" },
      { icon: kids, title: "Indoor Games" },
      { icon: security, title: "24x7 Security" },
      { icon: camera, title: "CCTV Camera" },
      { icon: elevator, title: "Elevator" },
    ],
  },
  "radhe-regal": {
    subtitle: "The belief that guides our long-term thinking.",
    items: [
      { icon: kids, title: "Green Space" },
      { icon: kids, title: "Kids Zone" },
      { icon: person, title: "Senior Lounge" },
      { icon: car, title: "Spacious Parking" },
      { icon: flower, title: "Premium Elevators" },
      { icon: flower, title: "Eco Water System" },
      { icon: gate, title: "Grand Entrance" },
      { icon: security, title: "24x7 Security" },
      { icon: road, title: "Fire Safety System" },
      { icon: lights, title: "Common Lighting" },
    ],
  },
  "radhe-shlok": {
    subtitle: "Essential comforts designed for everyday living.",
    items: [
      { icon: person, title: "Senior Seating" },
      { icon: flower, title: "Landscaping" },
      { icon: kids, title: "Kids Play Area" },
      { icon: road, title: "Rooftop Gym" },
      { icon: flower, title: "Lawn" },
      { icon: car, title: "Parking" },
      { icon: kids, title: "Indoor Games" },
      { icon: gate, title: "Grand Entrance" },
      { icon: security, title: "24x7 Security" },
      { icon: elevator, title: "Elevator" },
    ],
  },
};

export const planCopy = {
  "radhe-anantam": {
    subtitle: "Designed for efficient living and practical space utilization.",
    heading: "Thoughtfully Designed For Everyday Comfort",
    description:
      "Every residence at Radhe Anantam is thoughtfully planned to maximise openness, ventilation, and seamless everyday living. Spacious layouts, practical circulation, and abundant natural light create homes that feel elevated, peaceful, and future-ready.",
  },
  "radhe-windsun": {
    subtitle: "Efficiently designed layouts for practical and comfortable living",
    heading: "Thoughtfully Designed for Everyday Comfort",
    description:
      "Each home at Radhe Windsun is designed to maximize usable space, natural light, and ventilation. The layouts ensure a smooth flow between living areas, creating a balance between comfort and functionality for modern families.",
  },
  "radhe-harmony": {
    subtitle: "Efficiently designed layouts for practical and comfortable living",
    heading: "Designed for Balanced and Comfortable Living",
    description:
      "Every home at Radhe Harmony is designed to maximize space, ventilation, and natural light. The layouts are practical and efficient, ensuring smooth movement and comfortable living for modern families.",
  },
  "radhe-regal": {
    subtitle: "Efficiently designed layouts for practical and comfortable living",
    heading: "Thoughtfully Designed for Everyday Comfort",
    description:
      "Every home at Radhe Regal Residency is designed to maximize usable space, natural ventilation, and functional living. The layouts ensure a smooth flow between spaces, making everyday living comfortable and efficient for families.",
  },
  "radhe-shlok": {
    subtitle: "Designed for efficient living and practical space utilization.",
    heading: "Thoughtfully Designed for Everyday Comfort",
    description:
      "Each residence at Radhe Shlok is planned to maximize usable space, natural ventilation, and functional flow. The layouts are crafted to meet the needs of modern families while maintaining simplicity and comfort.",
  },
};

export const plans = {
  "radhe-windsun": [
    { label: "2BHK", image: "/assets/layout-AR7yspgL.png" },
    { label: "3BHK", image: "/assets/RW3BHK-DUauOhFc.png" },
  ],
  "radhe-harmony": [
    { label: "1BHK", image: "/assets/RH1BHK-9TIUXwBW.png" },
    { label: "2BHK", image: "/assets/RH2BHK-5IFLOmRO.png" },
  ],
  "radhe-anantam": [
    { label: "2BHK", image: "/assets/Anantam2BHK-DoPh3vFL.png" },
    { label: "3BHK", image: "/assets/Anantam3BHK-Bxh3SZAv.png" },
  ],
  "radhe-shlok": [
    { label: "1st Floor", image: "/assets/1st%20floor-CVkIYpYG.png" },
    { label: "2nd Floor", image: "/assets/2nd%20floor-DG3kMAKv.png" },
    { label: "3rd Floor to 7th Floor", image: "/assets/3rd%20floor-e77uRC0L.png" },
  ],
};

export { projectApiKeys as brochureKeys } from "../lib/mdoc";

export const brochures = {
  "radhe-anantam": "/brochures/radhe-anantam.pdf",
  "radhe-shlok": "/brochures/radhe-shlok.pdf",
  "radhe-windsun": "/brochures/radhe-windsun.pdf",
  "radhe-harmony": "/brochures/radhe-harmony.pdf",
  "radhe-regal": "/brochures/radhe-regal.pdf",
};

export const galleries = {
  "radhe-windsun": ["WidsonImg1-zQm5MIUA", "WidsonImg2-W64qrdSK", "WidsonImg3-g7dsrKxh", "WidsonImg4-rVNo8lUX", "WidsonImg7-CmXt68Oy", "WidsonImg6-5NO-iCxv", "WidsonImg5-CUjAglI9"].map((file, index) => ({
    id: [1, 2, 3, 4, 7, 6, 5][index],
    src: `/assets/${file}.png`,
    alt: `Windsun ${[1, 2, 3, 4, 7, 6, 5][index]}`,
  })),
  "radhe-harmony": [1, 2, 3, 4].map((id) => ({
    id,
    src: `/assets/${["Harmony1-on69M8Zb", "Harmony2-CIX8Smu3", "Harmony3-CxjKFkLf", "Harmony4-BP7L2EaO"][id - 1]}.png`,
    alt: `Harmony ${id}`,
  })),
  "radhe-regal": [1, 2, 3, 4].map((id) => ({
    id,
    src: `/assets/${["regal1-D2-k6RxP", "regal2-RMO9U6gO", "regal3-Uw2aXCPm", "regal4-DTLMyZq2"][id - 1]}.png`,
    alt: `Regal ${id}`,
  })),
  "radhe-shlok": [1, 2, 3, 4].map((id) => ({
    id,
    src: `/assets/${["shlok1-BXarQmKX", "shlok2-5_0E-HEp", "shlok3-i2Fvi6Ce", "shlok4-5UT_lJxP"][id - 1]}.png`,
    alt: `Shlok ${id}`,
  })),
};

export const galleryIntro = {
  "radhe-windsun": "A closer look at the spaces and lifestyle at Radhe Windsun.",
  "radhe-harmony": "A closer look at Radhe Harmony and its serene living spaces.",
  "radhe-regal": "A closer look at Radhe Regal Residency and its living spaces.",
  "radhe-shlok": "A closer look at Radhe Shlok living spaces and surroundings.",
};

const quote = (id, text, name, featured) => ({ id, text, name, featured });

export const testimonials = {
  "radhe-anantam": [
    quote(1, "The open spaces here genuinely make everyday living feel peaceful. It instantly felt like home to us.", "- Aarav Deshmukh", false),
    quote(2, "“We wanted a calm yet connected location for our family. Radhe Anantam gave us exactly that.”", "- Riya Kulkarni", true),
    quote(3, "“The layouts feel spacious and very practical for daily life. Nothing feels cluttered or wasted.”", "- Siddharth Patil", false),
    quote(4, "“The project has a premium vibe without feeling overcrowded. That balance is hard to find today.”", "- Neha Joshi", false),
    quote(5, "“Low-density planning was the biggest reason we chose this project. The openness feels refreshing.”", "- Karan Shah", true),
    quote(6, "“Everything feels thoughtfully designed for modern families. You can notice the attention to comfort.”", "- Pooja Bhandari", false),
    quote(7, "“The amenities feel useful and well planned for all age groups. It’s not just for presentation.”", "- Manav Chitale", false),
    quote(8, "“The peaceful atmosphere was something we instantly connected with. It feels calm even inside the city.”", "- Snehal More", true),
    quote(9, "“Connectivity is excellent while the surroundings still feel relaxed. That combination worked perfectly for us.”", "- Yash Mehta", false),
    quote(10, "“The space between towers creates a much better living experience. It feels breathable and open.”", "- Aditi Jain", false),
    quote(11, "“It feels like a modern project built around comfort first. The planning feels very sensible.”", "- Rohan Tamboli", true),
    quote(12, "“You can genuinely feel the difference from crowded townships. The entire environment feels more liveable.”", "- Krutika Patne", false),
  ],
  "radhe-windsun": [
    quote(1, "The overall planning and tower design give it a premium feel without being overwhelming.", "- Rajesh Kumar", false),
    quote(2, "We liked how the layouts are designed—everything feels usable and well thought out.", "- Anjali Deshmukh", true),
    quote(3, "The project offers a good mix of open space and amenities, which makes daily living more comfortable.", "- Manish Joshi", false),
    quote(4, "Connectivity was a big factor for us, and this location works perfectly for our daily travel.", "- Pankaj Verma", false),
    quote(5, "The building design and overall environment give a modern and clean feel.", "- Snehal Kulkarni", true),
    quote(6, "It's a well-balanced project—nothing feels overdone, just practical and comfortable.", "- Ritesh Shah", false),
    quote(7, "The amenities are simple but useful, which is exactly what we were looking for.", "- Priya Desai", false),
    quote(8, "What stood out was the combination of lifestyle and affordability in one place.", "- Nitin Pawar", true),
    quote(9, "The project feels spacious and well-planned compared to others in the same area.", "- Vaibhav Mehta", false),
    quote(10, "The entire setup—from entry to amenities—feels organized and thoughtfully designed.", "- Kiran More", false),
    quote(11, "We wanted a home that is comfortable for everyday living, and this fits that need well.", "- Aarti Sharma", true),
    quote(12, "The tower structure and surroundings give a good sense of openness and ventilation.", "- Sagar Patil", false),
  ],
  "radhe-harmony": [
    quote(1, "The greenery and open spaces really stand out. It feels peaceful the moment you step in.", "- Rohit Kulkarni", false),
    quote(2, "We were looking for a calm environment, and this project gives that natural comfort.", "- Pooja Mehta", true),
    quote(3, "The layout and surroundings create a relaxed living experience, which is rare in the city.", "- Amit Sharma", false),
    quote(4, "It feels like a place where you can slow down and enjoy everyday life.", "- Sneha Pawar", false),
    quote(5, "The balance between open space and building design is very well maintained.", "- Ketan Shah", true),
    quote(6, "What we liked most is the peaceful atmosphere. It doesn't feel crowded or chaotic.", "- Aarti Deshmukh", false),
    quote(7, "The project has a very positive and calm vibe, especially with the greenery around.", "- Sandeep Jain", false),
    quote(8, "It's a good choice for families who want a quieter and more relaxed lifestyle.", "- Neha Patil", true),
    quote(9, "The planning feels simple yet thoughtful, especially with the open areas.", "- Vijay Bhosale", false),
    quote(10, "We wanted a home close to nature, and this project delivers that experience well.", "- Komal Shah", false),
    quote(11, "The environment feels fresh and open, which makes daily living more enjoyable.", "- Nilesh Chavan", true),
    quote(12, "A comfortable home in a peaceful setting—that's exactly what we were looking for.", "- Swati Joshi", false),
  ],
  "radhe-regal": [
    quote(1, "The project has a very comfortable feel to it. It's simple, practical, and easy to imagine living here.", "- Rahul Verma", false),
    quote(2, "We were looking for a home that fits our daily routine, and this project matches that perfectly.", "- Priya Nair", true),
    quote(3, "The layouts are straightforward and efficient. Nothing feels unnecessary or complicated.", "- Suresh Pawar", false),
    quote(4, "It's a good option for families who want comfort without going over budget.", "- Ritu Sharma", false),
    quote(5, "The surroundings feel calm and suitable for a relaxed lifestyle.", "- Prakash More", true),
    quote(6, "What we liked most is the simplicity of the project. It feels honest and well planned.", "- Swati Kulkarni", false),
    quote(7, "The location works well for our daily commute and essential needs.", "- Ajay Deshmukh", false),
    quote(8, "It's a practical home where everything is designed for real use, not just show.", "- Neha Bhosale", true),
    quote(9, "The open areas and planning make the project feel comfortable and not congested.", "- Kiran Patil", false),
    quote(10, "We wanted a peaceful home environment, and this project gives exactly that.", "- Deepak Jain", false),
    quote(11, "The overall planning feels balanced—good space, good layout, and easy living.", "- Vaishali More", true),
    quote(12, "A home that feels simple, comfortable, and right for everyday life.", "- Nitin Chavan", false),
  ],
  "radhe-shlok": [
    quote(1, "The biggest advantage here is the low-density living. It feels calm, private, and much more livable.", "- Rohit Sharma", false),
    quote(2, "We didn't want a crowded society. Radhe Shlok gives us that peaceful environment along with good connectivity.", "- Pooja Verma", true),
    quote(3, "The layouts are simple, practical, and easy to live in. Nothing feels wasted or overdone.", "- Sunil Joshi", false),
    quote(4, "Everything we needed—location, budget, and comfort—came together well in this project.", "- Ritesh Mehta", false),
    quote(5, "What stood out for us was the limited number of homes. It makes a big difference in daily living.", "- Sneha Kulkarni", true),
    quote(6, "The rooftop amenities are a nice addition. It gives a good space to relax without stepping out.", "- Amit Shah", false),
    quote(7, "The connectivity is very convenient. Main road access within minutes makes daily travel easier.", "- Rahul Desai", false),
    quote(8, "It's a simple, well-planned project without unnecessary complexity. That's what we liked.", "- Neha Patil", true),
    quote(9, "The project feels secure and well thought out. Ideal for families looking for a peaceful setup.", "- Sagar Joshi", false),
    quote(10, "Good balance of pricing, location, and usability. It fits perfectly for end-use.", "- Priyanka More", false),
    quote(11, "We were specifically looking for a smaller community, and this matched our expectation.", "- Ankit Sharma", true),
    quote(12, "A comfortable home with everything planned for daily life. That's what makes it practical.", "- Vaibhav Pawar", false),
  ],
};

export const testimonialIntro = {
  "radhe-windsun": "Experiences that reflect comfort, planning, and everyday convenience.",
  "radhe-harmony": " Real experiences from homeowners who have trusted us and found more than just a home.",
  "radhe-regal": "Experiences that reflect comfort, simplicity, and everyday living.",
  "radhe-shlok": "Real experiences from homeowners who have trusted us and found more than just a home.",
};

const places = (category, items) => ({
  category,
  items: items.map(([name, time]) => ({ name, time })),
});

export const locations = {
  "radhe-anantam": {
    mapUrl: "https://share.google/2VX5GKFe2u6VqEkSa",
    data: [
      places("Shopping Malls / Multiplexes", [["Phoenix Market City", "25 mins"], ["Reliance Smart", "08 mins"], ["D-Mart Charholi", "10 mins"], ["City One Mall", "22 mins"], ["PVR Cinemas", "25 mins"]]),
      places("Work Spaces", [["EON IT Park", "22 mins"], ["World Trade Center", "20 mins"], ["Chakan MIDC", "25 mins"], ["Talawade IT Park", "20 mins"], ["Bhosari MIDC", "18 mins"]]),
      places("Hospitals", [["Lifeline Hospital", "10 mins"], ["Orchid Hospital", "15 mins"], ["Aditya Birla Hospital", "28 mins"], ["Aditya Birla Hospital", "20 mins"], ["Sant Dnyaneshwar Hospital", "12 mins"]]),
      places("Important Destinations", [["Charholi Phata", "03 mins"], ["Pune Airport", "18 mins"], ["Vishrantwadi", "15 mins"], ["Alandi", "12 mins"], ["Pune Railway Station", "30 mins"]]),
    ],
  },
  "radhe-windsun": {
    mapUrl: "https://share.google/DTLRWHnlmB829XMKh",
    data: [
      places("Shopping Malls / Multiplexes", [["Phoenix Market City", "25 mins"], ["Reliance Smart", "08 mins"], ["D-Mart Charholi", "10 mins"], ["City One Mall", "22 mins"], ["PVR Cinemas", "25 mins"]]),
      places("Work Spaces", [["EON IT Park", "22 mins"], ["World Trade Center", "20 mins"], ["Chakan MIDC", "25 mins"], ["Talawade IT Park", "20 mins"], ["Bhosari MIDC", "18 mins"]]),
      places("Hospitals", [["Lifeline Hospital", "10 mins"], ["Orchid Hospital", "15 mins"], ["Aditya Birla Hospital", "28 mins"], ["Aditya Birla Hospital", "20 mins"], ["Sant Dnyaneshwar Hospital", "12 mins"]]),
      places("Important Destinations", [["Charholi Phata", "03 mins"], ["Pune Airport", "18 mins"], ["Vishrantwadi", "15 mins"], ["Alandi", "12 mins"], ["Pune Railway Station", "30 mins"]]),
    ],
  },
  "radhe-harmony": {
    mapUrl: "",
    data: [
      places("Shopping Malls / Multiplexes", [["D-Mart Moshi", "10 mins"], ["Spine City Mall", "12 mins"], ["City One Mall", "22 mins"], ["Reliance Smart", "15 mins"], ["PVR Cinemas Pimpri", "25 mins"]]),
      places("Work Spaces", [["Chakan MIDC", "20 mins"], ["Talawade IT Park", "18 mins"], ["Bhosari MIDC", "15 mins"], ["Hinjewadi IT Park", "35 mins"]]),
      places("Hospitals", [["Dnyaneshwar Hospital", "05 mins"], ["Sant Dnyaneshwar Hospital", "08 mins"], ["Aditya Birla Hospital", "25 mins"], ["Lifepoint Hospital", "22 mins"]]),
      places("Important Destinations", [["Moshi Chowk", "05 mins"], ["Pune-Nashik Highway", "07 mins"], ["Alandi", "10 mins"], ["Pune Airport", "30 mins"], ["Pune Railway Station", "35 mins"]]),
    ],
  },
  "radhe-regal": {
    mapUrl: "",
    data: [
      places("Shopping Malls / Multiplexes", [["D-Mart Moshi", "08 mins"], ["Spine City Mall", "10 mins"], ["PVR Cinemas Pimpri", "20 mins"], ["Reliance Smart", "22 mins"], ["E-square Multiplex", "12 mins"]]),
      places("Work Spaces", [["Chakan MIDC", "20 mins"], ["Talawade IT Park", "18 mins"], ["Bhosari MIDC", "15 mins"], ["Hinjewadi IT Park", "35 mins"]]),
      places("Hospitals", [["Aditya Birla Hospital", "25 mins"], ["Lifepoint Hospital", "20 mins"], ["Sant Dnyaneshwar Hospital", "08 mins"], ["Orchid Hospital", "12 mins"]]),
      places("Important Destinations", [["Moshi Spine Road", "03 mins"], ["Pune-Nashik Highway", "05 mins"], ["Pune International Airport", "30 mins"], ["Pune Railway Station", "35 mins"], ["Alandi", "10 mins"]]),
    ],
  },
  "radhe-shlok": {
    mapUrl: "https://maps.app.goo.gl/SVmTKfRTHCEJ2Hvg9",
    data: [
      places("Shopping Malls / Multiplexes", [["D-Mart", "10 mins"], ["Phoenix Market City", "25 mins"], ["Reliance Smart", "08 mins"], ["City One Mall", "22 mins"], ["INOX Multiplex", "25 mins"]]),
      places("Work Spaces", [["EON IT Park", "20 mins"], ["World Trade Center", "26 mins"], ["Talawade IT Park", "18 mins"], ["Bhosari MIDC", "15 mins"]]),
      places("Hospitals", [["Lifecare Hospital", "13 mins"], ["Orchid Hospital", "12 mins"], ["Dhanwantari Hospital", "15 mins"], ["Aditya Birla Hospital", "28 mins"]]),
      places("Important Destinations", [["Charholi Phata", "02 mins"], ["Pune Airport", "18 mins"], ["Alandi", "10 mins"], ["Vishrantwad", "15 mins"], ["Pune Railway Station", "20 mins"]]),
    ],
  },
};
