import { GiClick } from "react-icons/gi";
import { motion } from "framer-motion";

const fadeInCorner = {
  hidden: { opacity: 0, x: 10, y: 30, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    x: 10,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.2,
    },
  }),
};

const Categories = ({
  icon,
  category,
  description,
  scrollToCourses,
  index,
}) => {
  return (
    <motion.div
      className="relative flex flex-col items-center gap-4 p-8 rounded-lg bg-white group"
      variants={fadeInCorner}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
    >
      <div className="text-4xl text-Teal">{icon}</div>
      <div>{category}</div>
      <p className="text-base cursor-pointer flex items-center gap-2 text-Gray">
        <GiClick className="text-Teal" /> View More
      </p>
      <div className="absolute h-full bottom-0 p-4 bg-white shadow-lg rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-200">
        <p className="text-sm text-Gray">{description}</p>
        <button
          className="text-sm w-fit mt-2 text-Teal"
          onClick={scrollToCourses}
        >
          Go to Courses
        </button>
      </div>
    </motion.div>
  );
};

export default Categories;
