import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 10, scale: 1, speed: 250 }}
        className="bg-tertiary2 p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[280px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] truncate">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} `}>My work</p> */}
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-0 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Our projects range across commercial, residential, hospitality and
          food & beverage applications.
        </motion.p>
      </div>

      <div className="mt-5 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <br></br>
      <div className="flex flex-row justify-between font-serif">
        <div className="text-tertiary">
          <a href="#testimonial">See what our customers have to say</a>
        </div>
        <div className="underline font-bold text-secondary">
          <a href="#contact">Let's Talk!</a>
        </div>
      </div>
    </>
  );
};

// const Works = () => {
//   return (
//     <>
//       {/* <section className={`relative w-full h-screen mx-auto content-between`}> */}
//         <motion.div variants={textVariant()}>
//           <h2 className={`${styles.sectionHeadText}`}>Projects. </h2>
//           <p className="text-secondary font-serif text-[18px]">
//             Our projects range across commercial, residential, hospitality and
//             food & beverage applications.
//           </p>
//         </motion.div>
//         <div className="flex flex-wrap gap-7">
//           {projects.map((project, index) => (
//             <ProjectCard key={`project-${index}`} index={index} {...project} />
//           ))}
//         </div>

{
  /* <div>
  <div className="flex flex-row justify-between font-serif">
    <div className="text-tertiary">
      <a href="#testimonial">See what our customers have to say</a>
    </div>
    <div className="text-tertiary underline">
      <a href="#contact">or Let's Talk</a>
    </div>
  </div>
</div>; */
}
//       </section>
//     </>
//   );
// };

export default SectionWrapper(Works, "works");
