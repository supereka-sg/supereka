import { SITE } from "../constants/site";
import { services } from "../constants/services";
import { sectors, hdbProjects, stats } from "../constants/portfolio";

const url = (path) => `${SITE.url}${path}`;

const ORG_ID = `${SITE.url}/#organization`;

const organization = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: SITE.name,
  url: SITE.url,
  logo: url("/logo.svg"),
  description: SITE.description,
  foundingDate: String(SITE.foundingYear),
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  areaServed: { "@type": "Country", name: "Singapore" },
  knowsAbout: services.map((s) => s.shortTitle),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Building services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        url: url(`/services/${s.slug}/`),
      },
    })),
  },
});

const breadcrumbs = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: url(path),
  })),
});

const faqPage = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

const HOME_META = {
  title: "SUPEREKA | Building Services Consultancy in Singapore (ACMV, Electrical, Fire)",
  description: `${SITE.description} ${stats.totalProjects}+ projects including ${stats.fnbOutlets} CHAGEE outlets, ${stats.centralKitchens} central kitchens and HDB neighbourhood upgrading.`,
};

export const getRouteMeta = (path) => {
  if (path === "/") {
    return {
      ...HOME_META,
      path: "/",
      jsonLd: [organization()],
    };
  }

  if (path === "/projects/") {
    const items = [
      ...sectors.flatMap((s) => s.projects),
      ...hdbProjects.map((p) => p.name),
    ];
    return {
      title: "Projects | SUPEREKA Building Services Consultancy, Singapore",
      description: `Selected SUPEREKA projects in Singapore: ${stats.fnbOutlets} CHAGEE F&B outlets, ${stats.centralKitchens} central kitchens, HDB neighbourhood upgrading, places of worship, commercial and residential buildings.`,
      path,
      jsonLd: [
        organization(),
        breadcrumbs([
          ["Home", "/"],
          ["Projects", "/projects/"],
        ]),
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "SUPEREKA projects",
          numberOfItems: items.length,
          itemListElement: items.map((name, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name,
          })),
        },
      ],
    };
  }

  const match = path.match(/^\/services\/([^/]+)\/$/);
  const service = match && services.find((s) => s.slug === match[1]);
  if (service) {
    return {
      title: `${service.title} in Singapore | SUPEREKA`,
      description: service.summary,
      path,
      jsonLd: [
        organization(),
        breadcrumbs([
          ["Home", "/"],
          ["Services", "/#services"],
          [service.title, path],
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.summary,
          url: url(path),
          provider: { "@id": ORG_ID },
          areaServed: { "@type": "Country", name: "Singapore" },
        },
        faqPage(service.faqs),
      ],
    };
  }

  return {
    title: "Page not found | SUPEREKA",
    description: HOME_META.description,
    path: "/404/",
    noindex: true,
    jsonLd: [],
  };
};

export const indexablePaths = [
  "/",
  "/projects/",
  ...services.map((s) => `/services/${s.slug}/`),
];

export const buildLlmsTxt = () => `# ${SITE.name}

> ${SITE.description}

${SITE.name} is a building services (M&E) consultancy based in Singapore, founded in ${SITE.foundingYear} by architects and mechanical and electrical engineers. It serves building owners, developers, builders and homeowners.

Contact: ${SITE.email} | ${SITE.phone}
Address: ${SITE.address.street}, ${SITE.address.locality} ${SITE.address.postalCode}

## Services
${services
  .map((s) => `- [${s.title}](${url(`/services/${s.slug}/`)}): ${s.summary}`)
  .join("\n")}

## Projects
- [Selected projects](${url("/projects/")}): ${stats.totalProjects}+ projects across ${sectors.length} sectors and HDB neighbourhood upgrading, including ${stats.fnbOutlets} CHAGEE outlets and ${stats.centralKitchens} central kitchens.

## Key facts
- Founded: ${SITE.foundingYear}
- Location: Singapore
- Disciplines: ${services.map((s) => s.shortTitle).join(", ")}
`;
