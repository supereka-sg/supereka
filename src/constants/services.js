import { me, ee, fp, qp, pm, diligence } from "../assets";

// Regulatory statements are based on the public guidance of the Singapore
// authorities linked in each `regulation` entry (BCA, SCDF, EMA, LTA, URA, SFA)
// and on the Singapore Standards catalogue. Rules and editions change, so each
// page tells readers to confirm the current requirements for their project.

export const sources = {
  bcaPlans: {
    label: "BCA: Building plan submission",
    href: "https://www1.bca.gov.sg/safety-and-standards/applications-and-licenses/building-plan-submission/",
  },
  bcaSustain: {
    label: "BCA: Environmental sustainability requirements for new buildings and major additions and alterations",
    href: "https://www1.bca.gov.sg/sustainability/legislation-on-environmental-sustainability-for-buildings/new-buildings-and-existing-buildings-undergoing-major-additions-and-alterations/",
  },
  ss553: {
    label: "Singapore Standards eShop: SS 553, air-conditioning and mechanical ventilation in buildings",
    href: "https://www.singaporestandardseshop.sg/Product/SSPdtDetail/c417dc9a-0cca-4562-a19e-b076c9a4957e",
  },
  sfa: {
    label: "SFA: Guidelines for licensed food retail premises",
    href: "https://www.sfa.gov.sg/food-retail/licence-permit/guidelines-for-licensed-food-retail-premises",
  },
  emaLew: {
    label: "EMA: Engaging Licensed Electrical Workers",
    href: "https://www.ema.gov.sg/consumer-information/electricity/engaging-licensed-workers",
  },
  emaLicences: {
    label: "EMA: Electrical and supply installation licences",
    href: "https://www.ema.gov.sg/regulations-licences/licences/electrical-supply-installation-licences",
  },
  ltaEv: {
    label: "LTA: Regulating the safety of EV chargers",
    href: "https://www.lta.gov.sg/content/ltagov/en/industry_innovations/technologies/electric_vehicles/regulating_safety_of_ev_chargers.html",
  },
  scdfPlans: {
    label: "SCDF: Plan approval",
    href: "https://www.scdf.gov.sg/fire-safety-services-listing/plans-submission-process/plan-approval",
  },
  scdfCert: {
    label: "SCDF: Fire Safety Certificate and Temporary Fire Permit",
    href: "https://www.scdf.gov.sg/fire-safety-services-listing/plans-submission-process/fire-safety-certificate-temporary-fire-permit",
  },
  uraLanded: {
    label: "URA: Additions and alterations to a landed house",
    href: "https://www.ura.gov.sg/guidelines/development-control/planning-permission/plan-lodgment-application/additions-and-alterations-landed-house/",
  },
  uraConservation: {
    label: "URA: Revised conservation guidelines",
    href: "https://www.ura.gov.sg/Corporate/Guidelines/Circulars/dc23-09",
  },
};

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
      "Design guided by Singapore Standards SS 553 (air-conditioning and mechanical ventilation) and SS 554 (indoor air quality)",
      "Energy-efficiency compliance where BCA's environmental sustainability requirements apply",
      "Tender documents, contractor evaluation and site supervision",
      "Additional air-conditioning systems for existing premises",
    ],
    regulation: [
      {
        text: "SS 553 is the Singapore Standard code of practice for air-conditioning and mechanical ventilation in buildings. SS 554 covers indoor air quality in air-conditioned buildings.",
        source: "ss553",
      },
      {
        text: "Building plans are submitted to BCA for approval through a Qualified Person (QP). BCA also lists the building works that do not require approval.",
        source: "bcaPlans",
      },
      {
        text: "Under BCA's Building Control (Environmental Sustainability) Regulations, new buildings and existing buildings undergoing major additions and alterations of 5,000 m² gross floor area or more must meet the environmental sustainability requirements. For cooling systems, the information is signed by a Professional Engineer (Mechanical).",
        source: "bcaSustain",
      },
    ],
    faqs: [
      {
        q: "What does ACMV stand for?",
        a: "ACMV stands for air-conditioning and mechanical ventilation. It covers the systems that cool, ventilate and exhaust air in a building.",
      },
      {
        q: "Which Singapore standards apply to ACMV design?",
        a: "SS 553 is the code of practice for air-conditioning and mechanical ventilation in buildings, and SS 554 covers indoor air quality in air-conditioned buildings. The edition that applies depends on the project and its submission date, so we confirm this at the start.",
      },
      {
        q: "Does air-conditioning work need BCA approval?",
        a: "Building plans are submitted to BCA through a Qualified Person, unless the works are on BCA's list of building works not requiring approval. Larger buildings (5,000 m² gross floor area or more) also have energy-efficiency requirements for their cooling systems. We advise on what applies to your project.",
      },
      {
        q: "What are the rules for kitchen exhaust in food premises?",
        a: "SFA's licensing requirements expect cooking fumes to be captured, treated by an air-cleaning system and discharged outdoors, with make-up air supplied so the kitchen stays under negative pressure. Exhaust ducts and hoods also need regular specialist cleaning under the SCDF Fire Code. We design kitchen exhaust for F&B outlets and central kitchens with these requirements in mind.",
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
      "Electrical load assessment and applications to change the approved load",
      "EV charging station site assessment and electrical design",
      "Design to Singapore Standard SS 638 (electrical installations)",
      "Licensed Electrical Worker (LEW) services",
    ],
    regulation: [
      {
        text: "Electrical installations are planned, installed and supervised by Licensed Electrical Workers (LEWs), who are licensed by the Energy Market Authority (EMA). The LEW responsible for an installation must ensure it complies with SS 638, the code of practice for electrical installations.",
        source: "emaLew",
      },
      {
        text: "EMA requires an electrical installation licence where the approved load of a non-domestic installation exceeds 45 kVA, and in certain other cases regardless of load.",
        source: "emaLicences",
      },
      {
        text: "Fixed EV chargers must be installed by a LEW in line with SS 638 and TR 25, and registered with LTA once a Certificate of Fitness has been issued.",
        source: "ltaEv",
      },
    ],
    faqs: [
      {
        q: "What is a Licensed Electrical Worker (LEW)?",
        a: "A LEW is a person licensed by the Energy Market Authority (EMA) to plan, install and supervise electrical installations in Singapore. Licences come in grades (electrician, technician and engineer), each with limits on the size of installation they can handle.",
      },
      {
        q: "What is electrical load upgrading?",
        a: "Electrical load upgrading increases the approved electrical capacity of a premises, for example when EV chargers, kitchen equipment or additional air-conditioning is added. The appointed LEW assesses the load and the modifications needed, then applies to SP Services to change the approved load and updates it on EMA's ELISE portal.",
      },
      {
        q: "Which standards apply to electrical installations in Singapore?",
        a: "SS 638, the code of practice for electrical installations, is the main standard, and the responsible LEW must ensure installations comply with it. EV chargers must also meet TR 25.",
      },
      {
        q: "Do you handle EV charging stations?",
        a: "Yes. We carry out site assessments and design the electrical systems for EV charging stations, with a focus on energy efficiency and smooth installation. Installation is carried out by a Licensed Electrical Worker, and chargers are registered with LTA.",
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
      "Fire protection system design to the Singapore Fire Code, coordinated with architecture and other building services",
      "Fire safety plan submissions to SCDF through the CORENET e-Submission System",
      "Support for the Fire Safety Certificate application after works are complete",
      "Fire protection works for additions and alterations to existing buildings",
    ],
    regulation: [
      {
        text: "Fire safety plans are prepared and submitted to SCDF by a Qualified Person (a registered architect or professional engineer) on behalf of the building owner, through the CORENET e-Submission System.",
        source: "scdfPlans",
      },
      {
        text: "A Fire Safety Certificate is required before premises are occupied. The QP applies for it once the works are complete.",
        source: "scdfCert",
      },
      {
        text: "Where a design departs from the Fire Code through an alternative solution, a fire safety engineer prepares it and a separate peer reviewer assesses it.",
        source: "scdfPlans",
      },
    ],
    faqs: [
      {
        q: "Which authority approves fire protection systems in Singapore?",
        a: "The Singapore Civil Defence Force (SCDF) reviews fire safety plans against the Fire Code. Plans are submitted by a Qualified Person through the CORENET e-Submission System.",
      },
      {
        q: "What is a Fire Safety Certificate?",
        a: "It is the SCDF certificate required before a building or premises can be occupied. The Qualified Person applies for it after the works are completed.",
      },
      {
        q: "Can you upgrade fire protection in an older building?",
        a: "Yes. We have worked on additions and alterations to existing and historic buildings, designing upgrades that meet current requirements while keeping the work as unobtrusive as possible.",
      },
    ],
  },
  {
    slug: "qualified-person-endorsement",
    title: "Qualified Person (QP) Endorsement",
    shortTitle: "QP Endorsement",
    icon: qp,
    summary:
      "Endorsement of building services plans and submissions for BCA, SCDF and other regulatory approvals in Singapore.",
    scope: [
      "Endorsement of building services plans and submissions",
      "Coordination with architects, builders and the authorities",
      "Review of design and site works against approved plans",
    ],
    regulation: [
      {
        text: "Building plans must be submitted to BCA for approval through a Qualified Person (QP): an architect registered with the Board of Architects or a professional engineer registered with the Professional Engineers Board, holding a valid practising certificate.",
        source: "bcaPlans",
      },
      {
        text: "The Third Schedule of the Building Control Regulations determines which QP may be appointed to sign or prepare particular building works.",
        source: "bcaPlans",
      },
      {
        text: "Submissions are made through CORENET. New projects of 30,000 m² gross floor area or more must use CORENET X from 1 October 2025; other submissions are made through CORENET 2.0.",
        source: "bcaPlans",
      },
      {
        text: "Fire safety plans are submitted to SCDF by a QP through CORENET.",
        source: "scdfPlans",
      },
    ],
    faqs: [
      {
        q: "What is a Qualified Person (QP)?",
        a: "Under Singapore's building control system, a QP is a registered architect or professional engineer who holds a valid practising certificate. Building plans are submitted to BCA through a QP.",
      },
      {
        q: "Which kind of QP can sign building services submissions?",
        a: "The Third Schedule of the Building Control Regulations sets out which QP may sign or prepare particular building works. We confirm the appointment required for your project at the outset.",
      },
      {
        q: "How are plans submitted?",
        a: "Through CORENET. New projects of 30,000 m² gross floor area or more use CORENET X, and other submissions use CORENET 2.0.",
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
    regulation: [],
    faqs: [
      {
        q: "Do you supervise construction as well as design?",
        a: "Yes. On public housing upgrading projects we provide M&E design and supervise construction until completion.",
      },
      {
        q: "What kinds of projects do you manage?",
        a: "Our experience spans public housing neighbourhood upgrading, central kitchens, F&B outlets, offices, landed homes and places of worship.",
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
    regulation: [],
    faqs: [
      {
        q: "When is building services due diligence useful?",
        a: "Typically before buying or leasing a building, or before committing to a refurbishment, so that the condition and capacity of existing systems are understood up front.",
      },
    ],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
