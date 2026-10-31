import { sectors, hdbProjects } from "./portfolio";

// Case studies are written only from the client project reference and the
// descriptions already on the site. "involves" paragraphs describe the general
// nature of this kind of work, not outcomes on specific projects.

const sector = (id) => sectors.find((s) => s.id === id);

const hdbCount = (status) =>
  hdbProjects.filter((p) => p.status === status).length;

export const caseStudies = [
  {
    slug: "fnb-outlets",
    title: "CHAGEE outlets across Singapore",
    kicker: "F&B outlets",
    summary:
      "Building services consultancy for 19 CHAGEE tea outlets across Singapore, plus the CHAGEE main office.",
    overview:
      "SUPEREKA has provided building services consultancy for 19 CHAGEE tea outlets in Singapore and the CHAGEE main office at Gluco Midtown on North Bridge Road. Sites range from shopping malls such as VivoCity, JEM, Raffles City, Plaza Singapura, Great World City and Orchard Gateway, to NEX, Tampines One, Changi Airport Terminal 2, the NUS campus and Resorts World Sentosa.",
    highlights: [
      ["19", "CHAGEE outlets"],
      ["1", "CHAGEE main office"],
    ],
    involves:
      "Every F&B unit sits inside a different building with its own services, so the air-conditioning, ventilation and electrical design has to be fitted to each site. Repeating a brand across many locations rewards consistent design standards, careful coordination with each building, and fast turnaround.",
    scope: [
      ["acmv", "Air-conditioning and ventilation for each unit"],
      ["electrical", "Electrical design and load checks"],
    ],
    sectorId: "fnb-outlets",
  },
  {
    slug: "central-kitchens",
    title: "Central kitchens for the food delivery supply chain",
    kicker: "Central kitchens",
    summary:
      "Design specifications for 11 multi-stall central kitchens across Singapore, supporting the regional food delivery supply chain.",
    overview:
      "SUPEREKA has prepared building services design for 11 multi-stall central kitchens across Singapore, from Tampines and Kallang to Pandan Crescent, Serangoon North, Bedok, Bukit Batok, China Square and Thomson Road. These facilities support the growth of the food delivery supply chain.",
    highlights: [
      ["11", "central kitchen sites"],
      ["3", "disciplines: ACMV, electrical, plumbing"],
    ],
    involves:
      "Kitchens concentrate heat, grease and electrical load in a small space. Getting kitchen exhaust, fresh air, cooling and power right early keeps stalls compliant and comfortable to work in, and keeps the building's services within their limits.",
    scope: [
      ["acmv", "Kitchen exhaust, fresh air and cooling"],
      ["electrical", "Power distribution for multiple stalls"],
    ],
    sectorId: "central-kitchens",
  },
  {
    slug: "hdb-neighbourhood-upgrading",
    title: "HDB neighbourhood upgrading",
    kicker: "Public housing",
    summary:
      "M&E design and construction supervision for HDB Neighbourhood Renewal Programme works and covered linkway upgrading across Singapore.",
    overview:
      "SUPEREKA is involved in nine HDB neighbourhood upgrading projects: Neighbourhood Renewal Programme (NRP) works in Bukit Batok and Woodlands, including two 27-block batches in Woodlands, and covered linkways and community improvements in Tampines, Jurong and Simei.",
    highlights: [
      ["9", "HDB projects"],
      ["2 × 27", "blocks in two Woodlands NRP batches"],
      [String(hdbCount("Completed")), "completed"],
    ],
    involves:
      "Upgrading works take place in occupied estates, so design has to be practical to build and supervised through to completion. On NRP Batch 15 at Bukit Batok Central, SUPEREKA provides M&E design and supervises construction until completion.",
    scope: [
      ["project-management", "Construction supervision until completion"],
      ["electrical", "M&E design for blocks and multi-storey car parks"],
    ],
    sectorId: "hdb-neighbourhood-upgrading",
    projectsFrom: "hdb",
  },
  {
    slug: "places-of-worship",
    title: "Mosques and temples: upgrading historic buildings",
    kicker: "Places of worship",
    summary:
      "Additions and alterations to two mosques and a temple in Singapore, upgrading facilities in the least invasive way possible.",
    overview:
      "SUPEREKA has worked on additions and alterations to Masjid Mujahidin, Fatimah Mosque on North Bridge Road and a temple at 14 Tai Gin Road, updating building services for use today.",
    highlights: [
      ["3", "places of worship"],
      ["2", "mosques and 1 temple"],
    ],
    involves:
      "Historic and cultural buildings must be navigated carefully while their facilities are updated for the 21st century. The aim is innovative solutions that preserve and upgrade these buildings in the least invasive way possible.",
    scope: [
      ["acmv", "Cooling and ventilation upgrades"],
      ["electrical", "Electrical upgrades"],
    ],
    sectorId: "places-of-worship",
  },
  {
    slug: "residential",
    title: "Landed homes with efficient building services",
    kicker: "Residential",
    summary:
      "Energy-efficient ACMV and electrical design for five new landed homes in Singapore, including pools and smart-home infrastructure.",
    overview:
      "SUPEREKA has provided building services for five new landed homes, from semi-detached houses with attics and swimming pools at Thomson Heights, Kings Road and Jalan Selanting, to a semi-detached house at Clementi Crescent and a terrace at Goldhill Drive.",
    highlights: [
      ["5", "new landed homes"],
      ["3", "with swimming pools"],
    ],
    involves:
      "Our expertise ensures a safe, comfortable and technologically advanced living environment, with energy-efficient ACMV solutions and the infrastructure that supports a smart home.",
    scope: [
      ["acmv", "Energy-efficient air-conditioning"],
      ["electrical", "Electrical and smart-home infrastructure"],
    ],
    sectorId: "residential",
  },
  {
    slug: "commercial",
    title: "Offices, restaurants and retail spaces",
    kicker: "Commercial and hospitality",
    summary:
      "Building services for seven commercial projects, from the Water Boat Restaurant at Fullerton to TIPO venues and offices.",
    overview:
      "SUPEREKA has delivered seven commercial projects: the Water Boat Restaurant at Fullerton, TIPO at Kampong Bugis and Stamford Arts Centre, a 7-storey office on Geylang Road, a 6-storey office at Upper Circular Road, the Design Link Architects office revamp, and a fitness gym at Raffles Hospital.",
    highlights: [
      ["7", "commercial projects"],
      ["2", "TIPO venues"],
    ],
    involves:
      "We work closely with architects and builders to produce vibrant, inviting spaces using lighting, ACMV and electrical systems, balancing behind-the-scenes operations with the front-facing elegance hospitality needs.",
    scope: [
      ["acmv", "Air-conditioning and ventilation"],
      ["electrical", "Lighting and electrical systems"],
    ],
    sectorId: "commercial",
  },
];

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);

export const getCaseProjects = (study) =>
  study.projectsFrom === "hdb"
    ? hdbProjects.map((p) => ({ name: p.name, status: p.status }))
    : sector(study.sectorId).projects.map((name) => ({ name }));
