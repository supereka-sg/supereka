import { Link, useParams } from "react-router-dom";

import PageLayout from "../components/PageLayout";
import { styles } from "../styles";
import { caseStudies, getCaseStudy, getCaseProjects } from "../constants/caseStudies";
import { getService } from "../constants/services";
import { SITE } from "../constants/site";
import NotFound from "./NotFound";

const CaseStudyPage = () => {
  const { slug } = useParams();
  const study = getCaseStudy(slug);
  if (!study) return <NotFound />;

  const projects = getCaseProjects(study);
  const others = caseStudies.filter((c) => c.slug !== study.slug);

  return (
    <PageLayout>
      <article className={`${styles.padding} max-w-4xl mx-auto pt-32 sm:pt-40 font-serif`}>
        <nav aria-label="Breadcrumb" className="text-tertiary text-[16px]">
          <Link to="/">Home</Link> / <Link to="/projects/">Projects</Link> /{" "}
          <span className="text-secondary">{study.kicker}</span>
        </nav>

        <h1 className={`${styles.sectionHeadText} mt-4`}>{study.title}</h1>
        <p className="mt-4 text-secondary text-[19px] leading-[32px]">
          {study.overview}
        </p>

        <ul className="mt-8 list-none flex flex-wrap gap-4">
          {study.highlights.map(([figure, label]) => (
            <li key={label} className="bg-tertiary2 rounded-2xl px-6 py-4 min-w-[140px]">
              <span className="block font-sans font-black text-primary text-[36px] leading-none">
                {figure}
              </span>
              <span className="block mt-1 text-secondary text-[15px]">{label}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-primary font-bold text-[28px]">About this work</h2>
        <p className="mt-4 text-secondary text-[17px] leading-[30px]">
          {study.involves}
        </p>

        <h2 className="mt-12 text-primary font-bold text-[28px]">Our scope</h2>
        <ul className="mt-4 list-disc pl-6 text-secondary text-[17px] leading-[30px]">
          {study.scope.map(([serviceSlug, text]) => {
            const service = getService(serviceSlug);
            return (
              <li key={serviceSlug}>
                {text}.{" "}
                <Link className="underline" to={`/services/${serviceSlug}/`}>
                  About {service.shortTitle}
                </Link>
              </li>
            );
          })}
        </ul>

        <h2 className="mt-12 text-primary font-bold text-[28px]">
          Projects{" "}
          <span className="text-tertiary font-normal text-[20px]">({projects.length})</span>
        </h2>
        <ul className="mt-4 list-disc pl-6 text-secondary text-[17px] leading-[30px]">
          {projects.map((p) => (
            <li key={p.name} className="mb-1">
              {p.name}
              {p.status ? <> — <b>{p.status}</b></> : null}
            </li>
          ))}
        </ul>

        <div className="mt-12 p-6 rounded-2xl bg-tertiary2 text-secondary text-[17px]">
          <p className="font-bold text-primary text-[20px]">
            Planning something similar?
          </p>
          <p className="mt-2">
            Email{" "}
            <a className="underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>{" "}
            or call{" "}
            <a className="underline" href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
              {SITE.phone}
            </a>
            .
          </p>
        </div>

        <h2 className="mt-12 text-primary font-bold text-[28px]">More projects</h2>
        <ul className="mt-4 list-none flex flex-col gap-2 text-secondary text-[17px]">
          {others.map((c) => (
            <li key={c.slug}>
              <Link className="underline" to={`/projects/${c.slug}/`}>
                {c.title}
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </PageLayout>
  );
};

export default CaseStudyPage;
