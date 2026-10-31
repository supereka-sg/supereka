import { me, ee, fp, qp, pm, diligence } from "../assets";

export const services = [
  {
    slug: "acmv",
    title: "Air-Conditioning & Mechanical Ventilation Services (ACMV)",
    shortTitle: "ACMV",
    icon: me,
    summary:
      "Design and supervision of air-conditioning and mechanical ventilation systems for offices, retail, F&B, central kitchens, homes and places of worship in Singapore.",
    scope: [
      "Cooling load calculations and air-conditioning system selection",
      "Ventilation and exhaust design, including kitchen exhaust for F&B outlets and central kitchens",
      "Design to Singapore standards such as SS 553 and the requirements of the relevant authorities",
      "Tender documents, contractor evaluation and site supervision",
      "Additional air-conditioning systems for existing premises",
    ],
    faqs: [
      {
        q: "What does ACMV stand for?",
        a: "ACMV stands for air-conditioning and mechanical ventilation. It covers the systems that cool, ventilate and exhaust air in a building.",
      },
      {
        q: "Do you design ventilation for F&B outlets and central kitchens?",
        a: "Yes. SUPEREKA has provided building services design for eleven central kitchen developments and 19 CHAGEE outlets in Singapore, including kitchen exhaust and fresh-air provision.",
      },
      {
        q: "Can an air-conditioning system be added to an existing building?",
        a: "Yes. We have designed additional air-conditioning systems for existing premises, and we plan the work to minimise disruption to the building and its occupants.",
      },
    ],
  },
  {
    slug: "electrical",
    title: "Electrical Services",
    shortTitle: "Electrical",
    icon: ee,
    summary:
      "Electrical design, load assessment and Licensed Electrical Worker (LEW) services, including electrical load upgrading and EV charging infrastructure in Singapore.",
    scope: [
      "Power distribution, lighting and small power design",
      "Electrical load assessment and electrical load upgrading",
      "EV charging station site assessment and electrical design",
      "Design to Singapore standards such as SS 638",
      "Licensed Electrical Worker (LEW) services",
    ],
    faqs: [
      {
        q: "What is a Licensed Electrical Worker (LEW)?",
        a: "In Singapore, electrical installations must be planned, installed and supervised by a Licensed Electrical Worker. A LEW is licensed by the Energy Market Authority (EMA).",
      },
      {
        q: "What is electrical load upgrading?",
        a: "Electrical load upgrading increases the approved electrical capacity of a premises, for example when new equipment such as EV chargers, kitchen equipment or additional air-conditioning is added.",
      },
      {
        q: "Do you handle EV charging stations?",
        a: "Yes. We carry out site assessments and design the electrical systems for EV charging stations, with a focus on energy efficiency and smooth installation.",
      },
    ],
  },
  {
    slug: "fire-protection",
    title: "Fire Protection Services",
    shortTitle: "Fire Protection",
    icon: fp,
    summary:
      "Fire protection system design and regulatory submissions for new and existing buildings in Singapore.",
    scope: [
      "Fire protection system design coordinated with architecture and other building services",
      "Fire safety design in line with the Singapore Fire Code and SCDF requirements",
      "Submissions to the authorities and coordination of approvals",
      "Fire protection works for additions and alterations to existing buildings",
    ],
    faqs: [
      {
        q: "Which authority approves fire protection systems in Singapore?",
        a: "Fire safety plans and systems are reviewed by the Singapore Civil Defence Force (SCDF) under the Fire Code.",
      },
      {
        q: "Can you upgrade fire protection in an older building?",
        a: "Yes. We have worked on additions and alterations to existing and historic buildings, designing upgrades that meet current requirements while keeping the work as unobtrusive as possible.",
      },
    ],
  },
  {
    slug: "qualified-professional-endorsement",
    title: "Qualified Professional Endorsement",
    shortTitle: "QP Endorsement",
    icon: qp,
    summary:
      "Qualified Professional endorsement of building services submissions for regulatory approval in Singapore.",
    scope: [
      "Endorsement of building services plans and submissions",
      "Coordination with architects, builders and the authorities",
      "Review of design and site works against approved plans",
    ],
    faqs: [
      {
        q: "Why is Qualified Professional endorsement needed?",
        a: "Building plans and submissions in Singapore must be endorsed by a suitably qualified professional before the authorities will approve them. We act as that endorsing professional for building services submissions.",
      },
      {
        q: "Can SUPEREKA endorse submissions designed by another consultant?",
        a: "Please contact us with the scope of your project and we will advise on what is possible.",
      },
    ],
  },
  {
    slug: "project-management",
    title: "Project Management",
    shortTitle: "Project Management",
    icon: pm,
    summary:
      "Project management and construction supervision for building services works, from design through to completion.",
    scope: [
      "Design coordination between architects, engineers and builders",
      "Tender preparation and contractor evaluation",
      "Site supervision until completion",
      "Programme, cost and quality monitoring",
    ],
    faqs: [
      {
        q: "Do you supervise construction as well as design?",
        a: "Yes. On public housing upgrading projects we provide M&E design and supervise construction until completion.",
      },
      {
        q: "What kinds of projects do you manage?",
        a: "Our experience spans HDB neighbourhood upgrading, central kitchens, F&B outlets, offices, residential developments and places of worship.",
      },
    ],
  },
  {
    slug: "due-diligence",
    title: "Due Diligence",
    shortTitle: "Due Diligence",
    icon: diligence,
    summary:
      "Building services due diligence for owners, buyers and tenants who need an independent view of a building's mechanical and electrical systems.",
    scope: [
      "Review of existing air-conditioning, electrical and fire protection systems",
      "Assessment of condition, capacity and compliance",
      "Advice on upgrading needs and budget",
    ],
    faqs: [
      {
        q: "When is building services due diligence useful?",
        a: "Typically before buying or leasing a building, or before committing to a refurbishment, so that the condition and capacity of existing systems are understood up front.",
      },
    ],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
