import { sectors, hdbProjects, countOf } from "./portfolio";

// Case studies are written only from the client project reference and the
// descriptions already on the site. Clients, venues and street names are left
// out on purpose. "involves" paragraphs describe the general nature of this kind
// of work, not outcomes on specific projects. `regulation` entries point to keys
// in `sources` (services.js).

const sector = (id) => sectors.find((s) => s.id === id);

const hdbCount = (status) =>
  hdbProjects.filter((p) => p.status === status).length;

export const caseStudies = [
  {
    slug: "fnb-outlets",
    title: "Outlet rollout for a leading premium tea brand",
    kicker: "F&B outlets",
    summary:
      "Building services consultancy for 19 outlets of a leading premium tea brand across Singapore, plus the brand's head office.",
    overview:
      "SUPEREKA has provided building services consultancy for 19 outlets of a leading premium tea brand in Singapore, and for the brand's head office. Sites include 11 shopping malls, city office buildings, an international airport terminal, a university campus, an integrated resort and a healthcare building.",
    highlights: [
      ["19", "outlets"],
      ["11", "in shopping malls"],
    ],
    involves:
      "Every F&B unit sits inside a different building with its own services, so the air-conditioning, ventilation and electrical design has to be fitted to each site. Repeating a brand across many locations rewards consistent design standards, careful coordination with each building, and fast turnaround.",
    scope: [
      ["acmv", "Air-conditioning and ventilation for each unit"],
      ["electrical", "Electrical design and load checks"],
    ],
    regulation: [
      {
        text: "Food shops are licensed by the Singapore Food Agency (SFA), whose requirements address kitchen exhaust, ventilation and make-up air.",
        source: "sfa",
      },
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
      "SUPEREKA has prepared building services design for 11 multi-stall central kitchens in industrial and commercial buildings across Singapore, from the east to the west of the island. These facilities support the growth of the food delivery supply chain. Recent kitchens were delivered as full consultancy in about three months each.",
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
    regulation: [
      {
        text: "SFA's licensing requirements expect cooking fumes to be captured, treated by an air-cleaning system and discharged outdoors, with make-up air supplied so the kitchen stays under negative pressure.",
        source: "sfa",
      },
      {
        text: "Building plans for the works are submitted to BCA through a Qualified Person.",
        source: "bcaPlans",
      },
    ],
    sectorId: "central-kitchens",
  },
  {
    slug: "hdb-neighbourhood-upgrading",
    title: "Public housing neighbourhood upgrading",
    kicker: "Public housing",
    summary:
      "M&E design and construction supervision for HDB Neighbourhood Renewal Programme works and covered linkway upgrading across Singapore.",
    overview:
      "SUPEREKA is involved in nine public housing neighbourhood upgrading projects: Neighbourhood Renewal Programme (NRP) works in Bukit Batok and Woodlands, including two 27-block batches in Woodlands, and covered linkways and community improvements in Tampines, Jurong and Simei.",
    highlights: [
      ["9", "public housing projects"],
      ["2 × 27", "blocks in two Woodlands NRP batches"],
      [String(hdbCount("Completed")), "completed"],
    ],
    involves:
      "Upgrading works take place in occupied estates, so design has to be practical to build and supervised through to completion. On NRP Batch 15 at Bukit Batok Central, SUPEREKA provides M&E design and supervises construction until completion.",
    scope: [
      ["project-management", "Construction supervision until completion"],
      ["electrical", "M&E design for blocks and multi-storey car parks"],
    ],
    regulation: [
      {
        text: "Building plans for the works are submitted to BCA through a Qualified Person.",
        source: "bcaPlans",
      },
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
      "SUPEREKA has worked on additions and alterations to two mosques and a temple in Singapore, updating building services for use today. The temple project is a programme of about 18 months.",
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
    regulation: [
      {
        text: "Where a building is conserved or lies within a Conservation Area, works must comply with URA's Conservation Guidelines.",
        source: "uraConservation",
      },
      {
        text: "Building plans for additions and alterations are submitted to BCA through a Qualified Person.",
        source: "bcaPlans",
      },
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
      "SUPEREKA has provided building services for five new envelope-control landed homes: semi-detached houses with attics and swimming pools, a semi-detached house, and an intermediate terrace house. Full consultancy on a landed home can run for around 18 months.",
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
    regulation: [
      {
        text: "New landed housing is subject to URA's Envelope Control Guidelines, which set the permissible building envelope, including height controls of two or three storeys.",
        source: "uraLanded",
      },
    ],
    sectorId: "residential",
  },
  {
    slug: "commercial",
    title: "Offices, restaurants and hospitality venues",
    kicker: "Commercial and hospitality",
    summary:
      "Building services for seven commercial and hospitality projects, from a waterfront restaurant to offices and a fitness gym.",
    overview:
      "SUPEREKA has delivered seven commercial and hospitality projects: a waterfront restaurant in the downtown core, two hospitality venues, a 7-storey office building, a 6-storey office building, an office revamp for an architecture practice, and a fitness gym in a private healthcare building.",
    highlights: [
      ["7", "commercial projects"],
      ["2", "hospitality venues"],
    ],
    involves:
      "We work closely with architects and builders to produce vibrant, inviting spaces using lighting, ACMV and electrical systems, balancing behind-the-scenes operations with the front-facing elegance hospitality needs.",
    scope: [
      ["acmv", "Air-conditioning and ventilation"],
      ["electrical", "Lighting and electrical systems"],
    ],
    regulation: [
      {
        text: "Building plans are submitted to BCA through a Qualified Person, with fire safety plans submitted to SCDF.",
        source: "bcaPlans",
      },
    ],
    sectorId: "commercial",
  },
  {
    slug: "offices",
    title: "Office design and management, in Singapore and overseas",
    kicker: "Offices",
    summary:
      "Office design and management for companies in Singapore and overseas, including projects in South Korea and the Philippines.",
    overview:
      "SUPEREKA has delivered office design and management projects beyond Singapore, in South Korea and the Philippines, as well as an office design in Singapore. The overseas projects were each delivered in about three months.",
    highlights: [
      ["3", "office projects"],
      ["2", "overseas: South Korea and the Philippines"],
    ],
    involves:
      "Office projects are shaped by short programmes and by the landlord's building. Design and management covers the building services that make a workplace comfortable and compliant, coordinated so the fit-out can be delivered on time.",
    scope: [
      ["acmv", "Air-conditioning and ventilation"],
      ["electrical", "Electrical and lighting design"],
      ["project-management", "Design and management through delivery"],
    ],
    regulation: [],
    sectorId: "offices",
  },
  {
    slug: "regulatory-submissions",
    title: "Vetting and regulatory submissions",
    kicker: "Submissions",
    summary:
      "Vetting and submission of building services designs to landlords and authorities, including a PUB submission with QP endorsement of calculations.",
    overview:
      "Alongside full consultancy, SUPEREKA vets and submits building services designs to landlords and authorities. Recent examples include a landlord submission for a new office fit-out, a building plan, ACMV and fire protection submission for an office completed in about two weeks, and a PUB submission with QP endorsement of calculations for a temporary toilet facility.",
    highlights: [
      ["3", "submission projects"],
      ["2 weeks", "for one office submission"],
    ],
    involves:
      "Not every project needs a full design appointment. Where a design already exists, a submission-only scope reviews the drawings, completes the submission to the right authority or landlord, and provides the endorsement required.",
    scope: [
      ["qualified-person-endorsement", "Vetting and endorsement of submissions"],
      ["acmv", "ACMV submissions"],
      ["fire-protection", "Fire protection submissions"],
    ],
    regulation: [
      {
        text: "Building plans are submitted to BCA through a Qualified Person (QP).",
        source: "bcaPlans",
      },
      {
        text: "Fire safety plans are submitted to SCDF by a QP through the CORENET e-Submission System.",
        source: "scdfPlans",
      },
    ],
    sectorId: "regulatory-submissions",
  },
];

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);

export const getCaseProjects = (study) =>
  study.projectsFrom === "hdb"
    ? hdbProjects.map((p) => ({ name: p.name, status: p.status }))
    : sector(study.sectorId).projects.map((p) => ({
        name: p.name,
        count: countOf(p),
      }));
