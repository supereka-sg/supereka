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

const About = () => {
  return (
    <>
      <section className={`relative w-full h-screen mx-auto content-between`}>
        <div className="flex flex-col items-stretch">
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>About Us.</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-black-100 text-[28px] text-thin max-w-3xl leading-[30px] font-serif"
          >
            Founded in 2018 by a group of like-minded architects, mechanical and
            electrical engineers to render to building owners, developers and
            builders, service with solutions. Bringing together years of
            experience in the field of engineering & project management,{" "}
            <b className="font-sans text-[20px]">SUPEREKA</b> strives to work in
            close collaboration with clients, fellow consultants and builders to
            deliver quality projects in the building and construction field. Our
            current pool of clients range from private developers and public
            organizations to builders and individual property owners.
          </motion.p>
          <div className="mt-10 flex flex-wrap gap-10 border-collapse w-full">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                index={index}
                {...service}
                className="font-serif"
              />
            ))}
          </div>
          <br />
          <br />
          <a href="#projects">
            <h3 className="flex flex-row items-stretch align-baseline justify-end font-serif text-[24px] text-primary font-thin">
              ➡️ Browse our projects
            </h3>
          </a>
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(About, "about");
