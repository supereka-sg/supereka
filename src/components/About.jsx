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
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About Us.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Established in 2018, <b className="font-sans text-[20px]">SUPEREKA </b>
        is the brainchild of a collective of visionary architects, mechanical
        and electrical engineers. Our mission? To provide building owners,
        developers, and builders with not just services, but innovative
        solutions that redefine excellence in the industry. <br></br>
        <br></br>
        At <b className="font-sans text-[20px]">SUPEREKA</b>, we've woven
        together a tapestry of expertise, fusing years of experience in
        engineering and project management. Our commitment is to forge strong
        partnerships with clients, fellow consultants, and builders, fostering a
        collaborative spirit that brings quality projects to life in the dynamic
        realm of building and construction. <br></br>
        <br></br>
        <b>
          Why choose <b className="font-sans text-[20px]">SUPEREKA</b>?
        </b>
        <br></br>
        <br></br>
        <b>Expertise Unleashed:</b> Our team comprises seasoned architects and
        mechanical and electrical engineers who bring a wealth of knowledge to
        every project. We don't just meet standards; we exceed them.
        Collaboration at the Core: We believe in the power of collaboration. By
        working closely with clients, consultants, and builders, we ensure
        seamless integration and deliver projects that stand the test of time.
        <br></br>
        <br></br>
        <b>Diverse Clientele, Singular Commitment:</b> From private developers
        and public organizations to builders and individual property owners, our
        client portfolio is as diverse as the projects we undertake. Regardless
        of scale or scope, our commitment to excellence remains unwavering.
        <br></br>
        <br></br>
        <b>Innovation Redefined:</b> SUPEREKA isn't just about meeting
        expectations; it's about exceeding them. We embrace innovation, adopting
        cutting-edge solutions to transform challenges into opportunities.
        Discover the SUPEREKA Advantage – Where Vision Meets Precision! Embark
        on a journey of building excellence with SUPEREKA. Our passion for
        innovation, commitment to quality, and dedication to collaborative
        success make us the go-to building services consultancy for your next
        project. Ready to redefine excellence? Let's build together with
        SUPEREKA.
      </motion.p>
      <br />
      <br />
      <a href="#works">
        <h3 className="flex flex-row items-stretch align-baseline justify-end font-serif text-[24px] text-primary font-thin">
          ➡️ Browse our projects
        </h3>
      </a>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
