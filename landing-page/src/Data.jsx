import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode, FaInfoCircle, FaBookOpen } from "react-icons/fa";
import { BsBarChartLine, BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { GoPersonFill } from "react-icons/go";

import courses1 from "./assets/courses1.webp";
import courses2 from "./assets/courses2.webp";
import courses3 from "./assets/courses3.webp";
import courses4 from "./assets/courses8.webp";
import courses5 from "./assets/courses1.webp";
import courses6 from "./assets/courses2.webp";
import courses7 from "./assets/courses6.webp";
import courses8 from "./assets/courses8.webp";
import courses9 from "./assets/courses3.webp";

import logo1 from "./assets/logo1.webp";
import logo2 from "./assets/logo2.webp";
import logo3 from "./assets/logo3.webp";
import logo4 from "./assets/logo4.webp";
import logo5 from "./assets/logo5.webp";
import logo6 from "./assets/logo6.webp";
import logo7 from "./assets/logo7.webp";

export const navLinks = [
  {
    id: 1,
    href: "home",
    link: "Home",
    icon : <IoHomeSharp/>,
  },

  {
    id: 2,
    href: "about",
    link: "About",
    icon : <FaInfoCircle/>,
  },

  {
    id: 3,
    href: "courses",
    link: "Courses",
    icon : <FaBookOpen/>,
  },

  {
    id: 4,
    href: "teacher",
    link: "Teacher",
    icon : <GoPersonFill/>,
  },

  {
    id: 5,
    href: "contact",
    link: "Contact",
    icon : <BsFillTelephoneFill/>,
  },
];

export const categories = [
  {
    id: 1,
    icon: <FiPenTool />,
    category: "Design",
    description:
      "Explore web design with our courses on design principles, UX/UI, responsive design, and coding basics. Learn to create stunning, functional websites.",
  },

  {
    id: 2,
    icon: <FaLaptopCode />,
    category: "Development",
    description:
      "Explore development with courses on programming fundamentals, software engineering, and modern technologies. Learn to build and maintain it.",
  },

  {
    id: 3,
    icon: <BsBarChartLine />,
    category: "Business",
    description:
      "Explore business with our courses on management principles, strategic planning, marketing, and financial fundamentals. Learn to develop strategies.",
  },

  {
    id: 4,
    icon: <MdOutlineScience />,
    category: "Science",
    description:
      "Explore science with our courses on fundamental principles, and experimental techniques. Learn to understand and analyze the natural world.",
  },
];

export const courses = [
  {
    id: 1,
    image: courses1,
    category: "Web Design",
    title: "The Complete Web Design Course for beginners",
    rating: 4.9,
    participants: 500,
    price: 105,
  },

  {
    id: 2,
    image: courses2,
    category: "Web Development",
    title: "FullStack Web Development Course",
    rating: 4.8,
    participants: 700,
    price: 125,
  },

  {
    id: 3,
    image: courses3,
    category: "Web Development",
    title: "Python Beginner to Advanced Course",
    rating: 4.9,
    participants: 300,
    price: 99,
  },
  {
    id: 4,
    image: courses4,
    category: "Web Design",
    title: "UI/UX Design Crazy Course With Harrys",
    rating: 4.7,
    participants: 600,
    price: 85,
  },

  {
    id: 5,
    image: courses5,
    category: "AI Development",
    title: "AI Development With Python (complete beginner course)",
    rating: 4.9,
    participants: 500,
    price: 105,
  },

  {
    id: 6,
    image: courses6,
    category: "Web Design",
    title: "The Complete Web Design Course for beginners",
    rating: 4.9,
    participants: 500,
    price: 105,
  },

  {
    id: 7,
    image: courses7,
    category: "Web Design",
    title: "The Complete Web Design Course for beginners",
    rating: 4.9,
    participants: 500,
    price: 105,
  },

  {
    id: 8,
    image: courses8,
    category: "Web Design",
    title: "The Complete Web Design Course for beginners",
    rating: 4.9,
    participants: 500,
    price: 105,
  },

  {
    id: 9,
    image: courses9,
    category: "AI Development",
    title: "AI Development With Python (complete beginner course)",
    rating: 4.9,
    participants: 500,
    price: 115,
  },
];

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

export const accordions = [
  {
    id: 1,
    title: "What is Estelle Academy?",
    content:
      "Estelle Academy is an online learning platform offering high-quality courses across various fields, designed to help you achieve your personal and professional goals.",
  },
  {
    id: 2,
    title: "What can I learn from Estelle Academy?",
    content:
      "You can learn a diverse range of subjects including technology, business, arts, and personal development, all taught by industry experts.",
  },
  {
    id: 3,
    title: "Can I teach on Estelle Academy?",
    content:
      "Yes, you can become an instructor by creating and teaching courses on your area of expertise and reaching a global audience.",
  },
  {
    id: 4,
    title: "What is included in my Estelle Academy membership?",
    content:
      "Membership includes unlimited access to all courses, downloadable resources, and exclusive member-only content and events.",
  },
  {
    id: 5,
    title: "How can I access courses on Estelle Academy?",
    content:
      "You can access courses anytime, anywhere with an internet connection. Our platform is available on both desktop and mobile devices for flexible learning.",
  },
];

