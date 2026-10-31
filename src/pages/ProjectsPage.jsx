import { Link } from "react-router-dom";

import PageLayout from "../components/PageLayout";
import { styles } from "../styles";
import { sectors, hdbProjects, stats } from "../constants/portfolio";
import { SITE } from "../constants/site";

const ProjectsPage = () => (
  <PageLayout>
    <div className={`${styles.padding} max-w-5xl mx-auto pt-32 sm:pt-40 font-serif`}>
      <nav aria-label="Breadcrumb" className="text-tertiary text-[16px]">
        <Link to="/">Home</Link> /{" "}
        <span className="text-secondary">Projects</span>
      </nav>

      <h1 className={`${styles.sectionHeadText} mt-4`}>Projects.</h1>
      <p className="mt-4 text-secondary text-[19px] leading-[32px] max-w-3xl">
        {SITE.name} has delivered {stats.totalProjects}+ building services
        projects in Singapore since {SITE.foundingYear}: {stats.fnbOutlets}{" "}
        CHAGEE outlets, {stats.centralKitchens} central kitchens, {stats.hdbProjects}{" "}
        HDB neighbourhood upgrading projects, places of worship, commercial
        buildings and landed homes. Our{" "}
        <Link to="/services/acmv/" className="underline">
          ACMV
        </Link>
        ,{" "}
        <Link to="/services/electrical/" className="underline">
          electrical
        </Link>{" "}
        and{" "}
        <Link to="/services/fire-protection/" className="underline">
          fire protection
        </Link>{" "}
        services are applied across all of them.
      </p>

      <nav aria-label="Project sectors" className="mt-8">
        <ul className="list-none flex flex-wrap gap-x-6 gap-y-2 text-secondary underline text-[17px]">
          {sectors.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{s.name}</a>
            </li>
          ))}
          <li>
            <a href="#hdb-neighbourhood-upgrading">HDB neighbourhood upgrading</a>
          </li>
        </ul>
      </nav>

      {sectors.map((s) => (
        <section key={s.id} id={s.id} className="mt-14 scroll-mt-28">
          <h2 className="text-primary font-bold text-[30px]">
            {s.name}{" "}
            <span className="text-tertiary font-normal text-[20px]">
              ({s.projects.length})
            </span>
          </h2>
          <p className="mt-2 text-secondary text-[17px]">
            {s.summary}{" "}
            <Link className="underline font-bold" to={`/projects/${s.id}/`}>
              Read more
            </Link>
          </p>
          <ul className="mt-4 list-disc pl-6 text-secondary text-[17px] leading-[30px]">
            {s.projects.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>
      ))}

      <section id="hdb-neighbourhood-upgrading" className="mt-14 scroll-mt-28">
        <h2 className="text-primary font-bold text-[30px]">
          HDB neighbourhood upgrading{" "}
          <span className="text-tertiary font-normal text-[20px]">
            ({hdbProjects.length})
          </span>
        </h2>
        <p className="mt-2 text-secondary text-[17px]">
          Neighbourhood Renewal Programme works, covered linkways and
          community improvements for public housing estates.{" "}
          <Link
            className="underline font-bold"
            to="/projects/hdb-neighbourhood-upgrading/"
          >
            Read more
          </Link>
        </p>
        <ul className="mt-4 list-disc pl-6 text-secondary text-[17px] leading-[30px]">
          {hdbProjects.map((p) => (
            <li key={p.name} className="mb-2">
              {p.name}
              {p.scope ? `. Scope: ${p.scope}` : ""}. <b>Status:</b> {p.status}.
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-14 text-secondary text-[17px]">
        Planning a project?{" "}
        <a className="underline font-bold" href="/#contact">
          Get in touch
        </a>
        .
      </p>
    </div>
  </PageLayout>
);

export default ProjectsPage;
