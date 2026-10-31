// Source: SUPEREKA PROJECT REFERENCE (client-supplied). Per-project scope and
// status are only listed for HDB projects, where the reference maps them clearly.

export const sectors = [
  {
    id: "commercial",
    name: "Commercial",
    summary:
      "Offices, restaurants, retail and fitness spaces, working closely with architects and builders.",
    projects: [
      "Water Boat Restaurant at Fullerton",
      "7-storey office building at 19 Lorong 10 Geylang Road",
      "Office revamp for Design Link Architects at 60A Peck Siah Street",
      "TIPO at 51 Kampong Bugis",
      "TIPO at Stamford Arts Centre",
      "6-storey office at 12 Upper Circular Road",
      "Fitness gym at Raffles Hospital",
    ],
  },
  {
    id: "central-kitchens",
    name: "Central kitchens",
    summary:
      "Multi-stall central kitchen facilities supporting Singapore's food delivery and F&B supply chain.",
    projects: [
      "Multiple food stalls at JTC Space, Tampines",
      "Multiple food stalls, HH at Kallang, 26 Pudding Road",
      "Multiple food stalls at Pandan Crescent",
      "Multiple food stalls at Northcom II",
      "Multiple food stalls at S9, Serangoon North",
      "Multiple food stalls, BFC at Bedok",
      "Multiple food stalls at 59 Jalan Pemimpin",
      "Multiple food stalls at Midview, Bukit Batok",
      "Multiple food stalls at 8 Bulim Avenue",
      "Multiple food stalls at China Square",
      "Multiple food stalls at 200 Thomson Road",
    ],
  },
  {
    id: "places-of-worship",
    name: "Places of worship",
    summary:
      "Additions and alterations to mosques and temples, upgrading facilities with minimal disruption.",
    projects: [
      "Additions and alterations to Masjid Mujahidin",
      "Additions and alterations to Fatimah Mosque, North Bridge Road",
      "Additions and alterations to temple at 14 Tai Gin Road",
    ],
  },
  {
    id: "residential",
    name: "Residential",
    summary:
      "New landed homes with energy-efficient ACMV and electrical systems.",
    projects: [
      "New 2-storey envelope-control semi-detached house with attic and swimming pool at 7 Thomson Heights",
      "New 2-storey envelope-control semi-detached house with attic and swimming pool at 65 Kings Road",
      "New 3-storey envelope-control semi-detached house with attic and swimming pool at 45 Jalan Selanting",
      "New 3-storey envelope-control semi-detached house at 35 Clementi Crescent",
      "New 2-storey envelope-control intermediate terrace with attic at 22 Goldhill Drive",
    ],
  },
  {
    id: "fnb-outlets",
    name: "F&B outlets",
    summary:
      "A rollout of CHAGEE tea outlets across Singapore, from malls and MRT hubs to campuses and resorts.",
    projects: [
      "CHAGEE at VivoCity",
      "CHAGEE main office at Gluco Midtown, North Bridge Road",
      "CHAGEE at Raffles Medical, North Bridge Road",
      "CHAGEE at Waterway Point, Punggol",
      "CHAGEE at JEM",
      "CHAGEE at Parkway Parade",
      "CHAGEE at 18 Cross Street",
      "CHAGEE at NUS",
      "CHAGEE at Resorts World Sentosa",
      "CHAGEE at ARC, Alexandra",
      "CHAGEE at 1 Raffles Place",
      "CHAGEE at Orchard Gateway",
      "CHAGEE at Raffles City",
      "CHAGEE at Plaza Singapura",
      "CHAGEE at Great World City",
      "CHAGEE at Gluco Tower",
      "CHAGEE at Tampines One",
      "CHAGEE at NEX",
      "CHAGEE at Changi Airport Terminal 2",
      "CHAGEE at The Star Vista",
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
    name: "Covered linkways, drop-off porches, barrier-free access ramps and hardcourt, Tampines East, West and Central, including upgrading of senior citizens' corner at Blk 234 Tampines Street 21",
    status: "Completed",
  },
  {
    name: "CIPC, Tampines Changkat: upgrading of senior citizens' corner at Block 306 Tampines Street 32",
    status: "Completed",
  },
  {
    name: "CIPC, Tampines Changkat: construction of high-low linkway from Block 293 to 295, Tampines Street 22",
    status: "Completed",
  },
  {
    name: "Covered linkway from Block 329 Jurong to MOHH Jurong Central Polyclinic",
    status: "Contract awarded",
  },
  {
    name: "Addition and alteration of low linkways to existing public housing Blocks 247, 221–222 and 234–235 (CIPC), Simei Street 4 and 5",
    status: "Ongoing",
  },
  {
    name: "NRP Batch 16 (27 blocks): Blocks 619–623, 624A–624B, 625A–625B, 626–627, 628A–628B, 629–631, 659–664 and MSCPs 622A, 626A, 630A, 661A, Woodlands Drive 52, Avenue 6 and Ring Road",
    status: "Tender stage",
  },
  {
    name: "NRP Batch 16 (27 blocks): Blocks 721–747 and MSCPs 721A, 728A, 737A, 739A, 747A, Woodlands Avenue 6 and Circle",
    status: "Tender stage",
  },
  {
    name: "NRP Batch 15 (5 blocks): Blocks 601–605 and 605A, Woodlands Drive 42",
    status: "Contract awarded",
  },
];

const sectorCount = sectors.reduce((n, s) => n + s.projects.length, 0);

export const stats = {
  totalProjects: sectorCount + hdbProjects.length,
  centralKitchens: sectors.find((s) => s.id === "central-kitchens").projects
    .length,
  fnbOutlets: sectors.find((s) => s.id === "fnb-outlets").projects.length,
  hdbProjects: hdbProjects.length,
};
