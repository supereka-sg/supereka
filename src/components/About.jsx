import { motion } from "framer-motion";

import { styles } from "../styles";
import { SITE } from "../constants/site";
import { stats } from "../constants/portfolio";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

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
        Established in {SITE.foundingYear},{" "}
        <b className="font-sans text-[20px]">SUPEREKA</b> is a building
        services consultancy in Singapore, founded by a collective of
        architects and mechanical and electrical engineers. We provide
        building owners, developers and builders with air-conditioning and
        mechanical ventilation (ACMV), electrical and fire protection design,
        Qualified Person (QP) endorsement, project management and due
        diligence. <br></br>
        <br></br>
        Our work spans {stats.totalProjects}+ projects: {stats.fnbOutlets}{" "}
        outlets for a leading premium tea brand, {stats.centralKitchens} central kitchens, HDB
        neighbourhood upgrading, places of worship, commercial buildings and
        landed homes. <br></br>
        <br></br>
        <b>Why choose SUPEREKA?</b>
        <br></br>
        <br></br>
        <b>Multi-disciplinary expertise:</b> architects and M&amp;E engineers
        working together, so systems integrate cleanly with the building.
        <br></br>
        <br></br>
        <b>Collaboration:</b> we work closely with clients, fellow consultants
        and builders to deliver quality projects through to completion.
        <br></br>
        <br></br>
        <b>A diverse clientele:</b> private developers, public organisations,
        builders and individual property owners, across projects of every
        scale.
        <br></br>
        <br></br>
        <b>Practical innovation:</b> energy-efficient, maintainable solutions
        that suit the way each building is actually used.
      </motion.p>
      <br />
      <br />
      <a href="#services">
        <h3 className="flex flex-row items-stretch align-baseline justify-end font-serif text-[24px] text-primary font-thin">
          ➡️ Browse our services
        </h3>
      </a>

    </>
  );
};

export default SectionWrapper(About, "about");
