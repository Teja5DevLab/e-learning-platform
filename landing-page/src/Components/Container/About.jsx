import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import about from "../../assets/About.webp";
import about2 from "../../assets/About2.webp";

const fadeInUp = {
  hidden: { opacity: 0, y: 70, scale: 0.5 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -70, scale: 0.5 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 70, scale: 0.5 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1 } },
};

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <motion.div
      id="about"
      className="section py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          className="border-[3px] border-Teal rounded-lg overflow-hidden"
        >
          <img
            src={about}
            alt="About Estelle Academy"
            className="object-cover w-full h-full p-4"
          />
        </motion.div>
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center md:text-left"
        >
          <h2 className="font-bold text-[1.875rem] mb-4">
            We provide the <br />
            Best <span className="text-Teal">Online Courses</span>
          </h2>
          <p className="text-Gray text-base leading-relaxed mb-6">
            At Estelle Academy, we offer world-class online courses designed to
            help you excel in your career. With a focus on high-quality content,
            expert instructors, and a flexible learning experience, we ensure
            that you can achieve your goals at your own pace.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Button className="bg-Teal text-white font-bold px-6 py-4 rounded-lg">
              Know More
            </Button>
            <Button className="bg-transparent border-Teal border-[2px] text-Teal font-bold px-6 py-4 rounded-lg">
              Courses
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-center md:items-start"
        >
          <h3 className="font-bold text-[1.5rem] mb-4 text-Teal">
            Why Choose Us?
          </h3>
          <ul className="text-Gray text-base leading-relaxed list-none space-y-4 pl-2">
            <li>
              <strong>Interactive Learning Material:</strong> Our courses are
              designed to be interactive, with quizzes, exercises, and
              projects.
            </li>
            <li>
              <strong>Career Support:</strong> Receive guidance from career
              coaches and join our network of successful alumni.
            </li>
          </ul>
          <div className="mt-5 pl-2">
            <p className="font-bold text-Teal mb-2">Some Key Numbers:</p>
            <div ref={ref} className="flex gap-7">
              <div>
                <h4 className="font-bold text-[1.3rem] md:text-[2rem] text-Teal">
                  {inView && (
                    <CountUp
                      start={1000}
                      end={8000}
                      duration={2}
                      separator=","
                    />
                  )}
                  +
                </h4>
                <p className="text-Gray text-sm mt-1">Students Enrolled</p>
              </div>
              <div>
                <h4 className="font-bold text-[1.3rem] md:text-[2rem] text-Teal">
                  {inView && (
                    <CountUp start={10} end={95} duration={2} suffix="%" />
                  )}
                </h4>
                <p className="text-Gray text-sm mt-1">Student Satisfaction</p>
              </div>
              <div>
                <h4 className="font-bold text-[1.3rem] md:text-[2rem] text-Teal">
                  {inView && (
                    <CountUp start={100} end={300} duration={2} separator="," />
                  )}
                  +
                </h4>
                <p className="text-Gray text-sm mt-1">Courses Available</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="border-[3px] border-Teal rounded-lg overflow-hidden"
        >
          <img
            src={about2}
            alt="Why Choose Us"
            className="object-cover w-full h-full p-4"
          />
        </motion.div>
      </div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="mt-16 text-center"
      >
        <h3 className="font-bold text-[1.5rem] mb-4 text-Teal">
          What Our Students Say
        </h3>
        <p className="text-Gray text-base leading-relaxed italic">
          "The courses at Estelle Academy helped me change careers and achieve
          my goals faster than I ever thought possible!" – John Doe
        </p>
      </motion.div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="mt-10 text-center"
      >
        <Button className="bg-Teal text-white font-bold px-8 py-4 rounded-lg md:hidden">
          Join Now
        </Button>
      </motion.div>
      <hr className="border-black border-t-1 w-28 mx-auto hidden md:block" />
    </motion.div>
  );
};

export default About;
