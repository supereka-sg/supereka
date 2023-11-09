import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[0px] rounded-[20px] "
    >
      <div
        options={{
          max: 5,
          scale: 0.2,
          speed: 50,
        }}
        className="bg-tertiary2 rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-12 h-12 object-contain"
        />

        <h3 className="text-secondary text-[20px] text-center font-serif text-align-left">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Services</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      ></motion.p>
      <br />
      <br />

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <a href="#works">
        <h3 className="flex flex-row items-stretch align-baseline justify-end font-serif text-[24px] text-primary font-thin">
          ➡️ Browse our projects
        </h3>
      </a>
    </>
  );
};

export default SectionWrapper(Services, "services");
