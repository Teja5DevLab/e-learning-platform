import {
  BsInstagram,
  BsTwitter,
  BsPinterest,
  BsFacebook,
} from "react-icons/bs";
import { motion } from "framer-motion";

const swipeDown = {
  hidden: { height: 0 },
  visible: { height: "auto", transition: { duration: 1 } },
};

const Footer = () => {
  return (
    <motion.div
      className="bg-Teal p-10"
      variants={swipeDown}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
        <div>
          <div className="font-bold mb-6">Get Started</div>
          <p className="text-sm leading-7">
            <p className="text-sm leading-7">
              Take your online presence to the next level? Our team of
              experts is here to help you with solutions for web
              design, digital marketing, and development. Let’s build something
              amazing together!
            </p>
          </p>
        </div>
        <div>
          <div className="font-bold mb-6">Services</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              Web Design
            </a>
            <a href="" className="text-sm hover:underline">
              Digital Marketing
            </a>
            <a href="" className="text-sm hover:underline">
              Science
            </a>
            <a href="" className="text-sm hover:underline">
              Web Development
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Company</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="" className="text-sm hover:underline">
              Sitemap
            </a>
            <a href="" className="text-sm hover:underline">
              Careers
            </a>
            <a href="" className="text-sm hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
        <div>
          <div className="mb-6 font-bold">Follow Us</div>
          <div className="text-sm mb-4">consult.tejas@gmail.com</div>
          <div>+918707770188</div>
          <div className="flex mt-4 gap-4">
            <a href="" className="text-xl hover:scale-110">
              <BsFacebook />
            </a>
            <a href="" className="text-xl hover:scale-110">
              <BsInstagram />
            </a>
            <a href="" className="text-xl hover:scale-110">
              <BsPinterest />
            </a>
            <a href="" className="text-xl hover:scale-110">
              <BsTwitter />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
