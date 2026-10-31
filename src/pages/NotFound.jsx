import { Link } from "react-router-dom";

import PageLayout from "../components/PageLayout";
import { styles } from "../styles";

const NotFound = () => (
  <PageLayout>
    <div className={`${styles.padding} max-w-4xl mx-auto pt-32 sm:pt-40 font-serif`}>
      <h1 className={styles.sectionHeadText}>Page not found.</h1>
      <p className="mt-4 text-secondary text-[19px]">
        That page doesn&apos;t exist. Try the{" "}
        <Link to="/" className="underline">
          home page
        </Link>
        , our{" "}
        <Link to="/projects/" className="underline">
          projects
        </Link>{" "}
        or{" "}
        <Link to="/services/acmv/" className="underline">
          services
        </Link>
        .
      </p>
    </div>
  </PageLayout>
);

export default NotFound;
