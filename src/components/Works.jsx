import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { carrent, hospitalityVenue } from "../assets";
import { SectionWrapper } from "../hoc";
import { caseStudies } from "../constants/caseStudies";
import { getService } from "../constants/services";
import { fadeIn, textVariant } from "../utils/motion";

// Photos are shown only where they depict the sector.
const photos = {
  "central-kitchens": {
    src: carrent,
    alt: "Corridor between food stalls in a central kitchen",
  },
  commercial: { src: hospitalityVenue, alt: "Interior of a hospitality venue" },
};

const ScheduleRow = ({ study }) => {
  const [figure, figureLabel] = study.highlights[0];
  const photo = photos[study.slug];

  return (
    <li className="border-b border-tertiary">
      <Link
        to={`/projects/${study.slug}/`}
        className="group grid gap-x-8 gap-y-3 py-7 sm:grid-cols-[130px_1fr_auto] sm:items-center"
      >
        <span>
          <span className="block font-sans font-black text-primary text-[48px] leading-none">
            {figure}
          </span>
          <span className="block mt-1 font-serif text-secondary text-[15px]">
            {figureLabel}
          </span>
        </span>

        <span className="block max-w-2xl">
          <span className="block font-serif text-primary text-[26px] leading-[32px] group-hover:underline">
            {study.title}
          </span>
          <span className="block mt-2 font-serif text-secondary text-[17px] leading-[27px]">
            {study.summary}
          </span>
          <span className="mt-3 flex flex-wrap gap-2">
            {study.scope.map(([slug]) => (
              <span
                key={slug}
                className="font-sans text-[13px] text-secondary border border-tertiary rounded-full px-3 py-0.5"
              >
                {getService(slug).shortTitle}
              </span>
            ))}
          </span>
        </span>

        {photo ? (
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className="hidden sm:block w-[200px] h-[120px] object-cover rounded-md"
          />
        ) : (
          <span className="hidden sm:block w-[200px]" aria-hidden="true" />
        )}
      </Link>
    </li>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Building services systems are essential for the comfort, safety and
        functionality of buildings. SUPEREKA has delivered more than 60
        projects in Singapore, from tea-brand outlets and central kitchens to
        HDB neighbourhood upgrading, places of worship and landed homes.
      </motion.p>

      <ul className="mt-10 list-none border-t border-tertiary">
        {caseStudies.map((study) => (
          <ScheduleRow key={study.slug} study={study} />
        ))}
      </ul>

      <div className="mt-8 flex flex-row justify-between font-serif text-[18px]">
        <Link to="/projects/" className="text-secondary underline">
          See every project
        </Link>
        <a href="#contact" className="underline font-bold text-primary">
          Let&apos;s talk
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
