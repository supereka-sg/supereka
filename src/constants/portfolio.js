// Source: SUPEREKA PROJECT REFERENCE (client-supplied). Client, venue and street
// names are deliberately left out: projects are described by type and setting,
// and a brand is referred to by a descriptive title. Per-project status is only
// listed for public housing projects, where the reference maps it clearly.

export const sectors = [
  {
    id: "commercial",
    name: "Commercial and hospitality",
    summary:
      "Offices, restaurants, hospitality venues and fitness spaces, working closely with architects and builders.",
    projects: [
      { name: "Waterfront restaurant in the downtown core" },
      { name: "7-storey office building in Geylang" },
      { name: "Office revamp for an architecture practice" },
      { name: "Hospitality venue in the Kallang area" },
      { name: "Hospitality venue in an arts centre" },
      { name: "6-storey office building in the city centre" },
      { name: "Fitness gym in a private healthcare building" },
    ],
  },
  {
    id: "central-kitchens",
    name: "Central kitchens",
    summary:
      "Multi-stall central kitchen facilities supporting Singapore's food delivery and F&B supply chain.",
    projects: [
      {
        name: "Multi-stall central kitchen facilities in industrial and commercial buildings across Singapore",
        count: 11,
      },
    ],
  },
  {
    id: "places-of-worship",
    name: "Places of worship",
    summary:
      "Additions and alterations to mosques and temples, upgrading facilities with minimal disruption.",
    projects: [
      { name: "Additions and alterations to a mosque", count: 2 },
      { name: "Additions and alterations to a temple" },
    ],
  },
  {
    id: "residential",
    name: "Residential",
    summary:
      "New landed homes with energy-efficient ACMV and electrical systems.",
    projects: [
      {
        name: "2-storey envelope-control semi-detached house with attic and swimming pool",
        count: 2,
      },
      {
        name: "3-storey envelope-control semi-detached house with attic and swimming pool",
      },
      { name: "3-storey envelope-control semi-detached house" },
      {
        name: "2-storey envelope-control intermediate terrace house with attic",
      },
    ],
  },
  {
    id: "fnb-outlets",
    name: "F&B outlets",
    summary:
      "A rollout of outlets for a leading premium tea brand across Singapore, from shopping malls and transport hubs to a campus and a resort, plus the brand's head office.",
    projects: [
      { name: "Outlets in shopping malls across Singapore", count: 11 },
      { name: "Outlets in city office buildings", count: 3 },
      { name: "Outlet at an international airport terminal" },
      { name: "Outlet on a university campus" },
      { name: "Outlet at an integrated resort" },
      { name: "Outlet in a healthcare building" },
      { name: "Outlet in a mixed-use building" },
      { name: "Head office fit-out for the brand", office: true },
    ],
  },
  {
    id: "offices",
    name: "Offices: local and overseas",
    summary:
      "Office design and management for companies in Singapore and overseas, delivered in a matter of weeks.",
    projects: [
      { name: "Office design and management in South Korea" },
      { name: "Office design and management in the Philippines" },
      { name: "Office design" },
    ],
  },
  {
    id: "regulatory-submissions",
    name: "Vetting and regulatory submissions",
    summary:
      "Vetting and submission of building services designs to landlords and authorities, including a PUB submission with QP endorsement of calculations.",
    projects: [
      { name: "Vetting and landlord submission for a new office fit-out" },
      {
        name: "Building plan, ACMV and fire protection submission for an office",
      },
      {
        name: "PUB submission with QP endorsement of calculations for a temporary toilet facility",
      },
    ],
  },
];

export const hdbProjects = [
  {
    name: "Neighbourhood Renewal Programme (NRP) Batch 15, Blocks 632–634 and 636–644 (MSCP), Bukit Batok Central",
    scope: "M&E design and supervision of construction until completion",
    status: "Contract awarded",
  },
  {
    name: "Covered linkways, drop-off porches, barrier-free access ramps and hardcourt in Tampines, including upgrading of a senior citizens' corner",
    status: "Completed",
  },
  {
    name: "Community Improvement Projects Committee (CIPC) project in Tampines: upgrading of a senior citizens' corner",
    status: "Completed",
  },
  {
    name: "CIPC project in Tampines: construction of a high-low linkway between three blocks",
    status: "Completed",
  },
  {
    name: "Covered linkway from a Jurong housing block to a polyclinic",
    status: "Contract awarded",
  },
  {
    name: "Addition and alteration of low linkways to existing public housing blocks (CIPC) in Simei",
    status: "Ongoing",
  },
  {
    name: "NRP Batch 16 (27 blocks) in Woodlands, including multi-storey car parks",
    status: "Tender stage",
  },
  {
    name: "NRP Batch 16 (27 blocks) in Woodlands, including multi-storey car parks",
    status: "Tender stage",
  },
  {
    name: "NRP Batch 15 (5 blocks) in Woodlands",
    status: "Contract awarded",
  },
];

export const countOf = (project) => project.count || 1;

const sum = (projects) => projects.reduce((n, p) => n + countOf(p), 0);

const sector = (id) => sectors.find((s) => s.id === id);

export const stats = {
  totalProjects:
    sectors.reduce((n, s) => n + sum(s.projects), 0) + hdbProjects.length,
  centralKitchens: sum(sector("central-kitchens").projects),
  // The reference lists 20 projects for the brand, one of which is its head office.
  fnbOutlets: sum(sector("fnb-outlets").projects.filter((p) => !p.office)),
  hdbProjects: hdbProjects.length,
};
