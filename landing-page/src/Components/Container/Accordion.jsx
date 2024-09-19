import { Accordion, AccordionItem } from "@nextui-org/react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 70 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.3,
    },
  }),
};

const AccordionComponent = ({ title, content, index }) => {
  return (
    <motion.div custom={index} variants={fadeInUp}>
      <Accordion>
        <AccordionItem title={title}>
          {content}
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
};

export default AccordionComponent;
