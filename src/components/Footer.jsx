import { Link } from "react-router-dom";

import { styles } from "../styles";
import { services } from "../constants/services";
import { SITE } from "../constants/site";

const Footer = () => (
  <footer className={`${styles.paddingX} py-10 bg-tertiary2 font-serif`}>
    <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:flex-row sm:justify-between text-secondary text-[16px]">
      <div>
        <p className="font-sans font-bold text-primary text-[18px]">
          {SITE.name}
        </p>
        <p>{SITE.tagline}</p>
        <p className="text-[14px]">
          {SITE.legalName}, UEN {SITE.uen}
        </p>
        <address className="mt-3 not-italic">
          {SITE.address.street}
          <br />
          {SITE.address.locality} {SITE.address.postalCode}
          <br />
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <br />
          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
        </address>
      </div>
      <nav aria-label="Services">
        <p className="font-sans font-bold text-primary">Services</p>
        <ul className="list-none mt-2 flex flex-col gap-1">
          {services.map((s) => (
            <li key={s.slug}>
              <Link to={`/services/${s.slug}/`}>{s.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav aria-label="Company">
        <p className="font-sans font-bold text-primary">Company</p>
        <ul className="list-none mt-2 flex flex-col gap-1">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <Link to="/projects/">Projects</Link>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
