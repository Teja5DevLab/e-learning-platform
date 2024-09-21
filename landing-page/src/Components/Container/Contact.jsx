import { Button } from "@nextui-org/button";
import { FaPhoneAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";
import { motion } from "framer-motion";

const fadeInLeft = {
  hidden: { opacity: 0, x: -70, scale: 0.5 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 70, scale: 0.5 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1 } },
};

const Contact = () => {
  return (
    <div id="contact" className="section">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">
          Get <span className="text-Teal">In touch</span>{" "}
        </h2>
        <p className="text-Gray text text-base leading-relaxed mb-10">
          Want to get in touch? We’d love to hear from you. Here’s how you can
          reach us...
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          className="bg-white shadow-lg p-6 mx-1 rounded-lg text-center"
        >
          <div className="flex justify-center mb-4">
            <span className="text-3xl text-Gray">
              <FaPhoneAlt />
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-4">Talk to Sales</h3>
          <p className="text-Gray text-base leading-relaxed mb-4">
            Interested in our Program? Just pick up the phone to chat with a
            member of our sales team.
          </p>
          <p className="text-lg font-bold text-gray-700 mb-4">
            +1 657 829 5060
          </p>
          <p className="text-Teal cursor-pointer">
            View all global numbers
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
          className="bg-white shadow-lg p-6 mx-1 rounded-lg text-center"
        >
          <div className="flex justify-center mb-4">
            <span className="text-4xl text-Gray">
              <FaComments />
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-4">
            Contact Customer Support
          </h3>
          <p className="text-Gray text-base leading-relaxed mb-4">
            Sometimes you need a little help from your friends or a support rep.
            Don't worry, we're here for you.
          </p>
          <Button className="bg-Teal text-white font-bold px-7 py-5 mb-4 rounded-lg text-sm">
            Contact Support
          </Button>
          <p className="text-Teal cursor-pointer">
            View our Employees
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
