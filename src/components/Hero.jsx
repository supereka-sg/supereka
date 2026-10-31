import { lazy, Suspense } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { stats } from "../constants/portfolio";
import { SITE } from "../constants/site";
import ClientOnly from "./ClientOnly";

const ComputersCanvas = lazy(() => import("./canvas/Computers"));

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <ClientOnly>
        <Suspense fallback={null}>
          <ComputersCanvas />
        </Suspense>
      </ClientOnly>

      <div
        className={`absolute inset-0 top-[120px] z-10 pointer-events-none max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-tertiary font-serif`}>
            Hello, we are{" "}
            <span className="text-primary font-bold">SUPEREKA</span>
          </h1>
          <p
            className={`${styles.heroSubText} text-[24px] mt-2 font-serif text-black-100`}
          >
            Building services consultancy <br className="sm:block hidden" />
            <i className="text-[18px] mt-2 font-serif italic text-black-100">
              Founded {SITE.foundingYear}
              <br className="sm:block hidden" />
            </i>
          </p>
          <p className="mt-4 max-w-xl font-serif text-[18px] text-secondary">
            ACMV, electrical, fire protection and Qualified Professional
            endorsement for buildings in Singapore.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-serif text-secondary list-none">
            <li>
              <b className="font-sans text-primary text-[22px]">
                {stats.totalProjects}+
              </b>{" "}
              projects
            </li>
            <li>
              <b className="font-sans text-primary text-[22px]">
                {stats.fnbOutlets}
              </b>{" "}
              F&amp;B outlets
            </li>
            <li>
              <b className="font-sans text-primary text-[22px]">
                {stats.centralKitchens}
              </b>{" "}
              central kitchens
            </li>
          </ul>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
