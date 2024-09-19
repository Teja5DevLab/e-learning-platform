import { motion } from "framer-motion";
import teacher1 from "../../assets/teacher1.webp";
import teacher2 from "../../assets/teacher2.webp";
import { Button } from "@nextui-org/button";
import { accordions } from "../../Data";
import Accordion from "./Accordion";

const fadeInLeft = {
  hidden: { opacity: 0, x: -70, scale: 0.5 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 70, scale: 0.5 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Teacher = () => {
  return (
    <div id="teacher" className="section">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <motion.div
          className="pl-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
        >
          <h2 className="font-bold text-[1.875rem] mb-4">
            Become <span className="text-Teal">An Instructor</span> <br /> of
            Our Platform
          </h2>
          <p className="text-base leading-relaxed text-Gray mb-5">
            Share your expertise and inspire learners worldwide by becoming an
            instructor on our platform. Create and teach courses in your field,
            reach a global audience, and help others achieve their goals.
          </p>
          <Button className="bg-Teal border-Teal border-[1.5px] text-white font-bold px-7 py-5 rounded-lg mr-4 text-sm">
            Start Teaching
          </Button>
        </motion.div>
        <motion.div
          className="p-4 md:w-3/4 sm:row-start-1"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={teacher1} alt="Teacher" />
        </motion.div>
        <motion.div
          className="pl-4"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-bold text-[1.875rem] mb-4">
            Become <span className="text-Teal">An Instructor</span> <br /> of
            Our Platform
          </h2>
          <p className="text-base leading-relaxed text-Gray mb-5">
            Share your expertise and inspire learners worldwide by becoming an
            instructor on our platform. Create and teach courses in your field,
            reach a global audience, and help others achieve their goals.
          </p>
          <Button className="bg-Teal border-Teal border-[1.5px] text-white font-bold px-7 py-5 rounded-lg mr-4 text-sm">
            Get Started
          </Button>
        </motion.div>
        <motion.div
          className="p-4 md:w-3/4"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={teacher2} alt="Teacher" />
        </motion.div>
      </div>
      <h2 className="font-bold text-center text-[1.875rem] my-8">
        Frequently <span className="text-Teal">Asked Questions</span>
      </h2>
      <motion.div
        className="mx-auto max-w-[700px]"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true }}
      >
        {accordions.map((accordion, index) => (
          <Accordion key={accordion.id} {...accordion} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default Teacher;
