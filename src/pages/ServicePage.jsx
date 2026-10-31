import { Link, useParams } from "react-router-dom";

import PageLayout from "../components/PageLayout";
import { styles } from "../styles";
import { services, getService } from "../constants/services";
import { SITE } from "../constants/site";
import NotFound from "./NotFound";

const ServicePage = () => {
  const { slug } = useParams();
  const service = getService(slug);
  if (!service) return <NotFound />;

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <PageLayout>
      <article className={`${styles.padding} max-w-4xl mx-auto pt-32 sm:pt-40 font-serif`}>
        <nav aria-label="Breadcrumb" className="text-tertiary text-[16px]">
          <Link to="/">Home</Link> / <a href="/#services">Services</a> /{" "}
          <span className="text-secondary">{service.shortTitle}</span>
        </nav>

        <h1 className={`${styles.sectionHeadText} mt-4`}>{service.title}</h1>
        <p className="mt-4 text-secondary text-[19px] leading-[32px]">
          {service.summary}
        </p>

        <h2 className="mt-12 text-primary font-bold text-[28px]">What we do</h2>
        <ul className="mt-4 list-disc pl-6 text-secondary text-[17px] leading-[30px]">
          {service.scope.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className="mt-12 text-primary font-bold text-[28px]">
          Where we have applied it
        </h2>
        <p className="mt-4 text-secondary text-[17px] leading-[30px]">
          {SITE.name} has delivered building services for CHAGEE outlets,
          central kitchens, HDB neighbourhood upgrading, places of worship,
          offices and landed homes. See the{" "}
          <Link to="/projects/" className="underline font-bold">
            full project list
          </Link>
          .
        </p>

        <h2 className="mt-12 text-primary font-bold text-[28px]">
          Frequently asked questions
        </h2>
        <div className="mt-4 flex flex-col gap-6">
          {service.faqs.map((f) => (
            <div key={f.q}>
              <h3 className="text-primary font-bold text-[20px]">{f.q}</h3>
              <p className="mt-1 text-secondary text-[17px] leading-[30px]">
                {f.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-tertiary2 text-secondary text-[17px]">
          <p className="font-bold text-primary text-[20px]">
            Talk to us about your project
          </p>
          <p className="mt-2">
            Email <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>{" "}
            or call{" "}
            <a className="underline" href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
              {SITE.phone}
            </a>
            , or use the <a className="underline" href="/#contact">contact form</a>.
          </p>
        </div>

        <h2 className="mt-12 text-primary font-bold text-[28px]">Other services</h2>
        <ul className="mt-4 list-none flex flex-col gap-2 text-secondary text-[17px]">
          {others.map((s) => (
            <li key={s.slug}>
              <Link className="underline" to={`/services/${s.slug}/`}>
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </PageLayout>
  );
};

export default ServicePage;
