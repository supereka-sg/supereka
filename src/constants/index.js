import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  pm,
  me,
  ee,
  diligence,
  fp,
  qp,
  HPV,
  Palais,
  Tipo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Air-Conditioning & Mechanical Ventilation Services (ACMV)",
    icon: me,
  },
  {
    title: "Electrical Services",
    icon: ee,
  },
  {
    title: "Fire Protection Services",
    icon: fp,
  },
  {
    title: "Qualified Professional Endorsement",
    icon: qp,
  },
  {
    title: "Project Management",
    icon: pm,
  },
  {
    title: "Due Diligence",
    icon: diligence,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Supereka provides expert consultancy, keeping both the financial & experential needs of the client in mind",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Working with Supereka, I have no doubt in the quality of work being produced and their ability to overcome engineering challenges",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Partners who take pride in producing top quality work efficiently",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Central Kitchens",
    description:
      "Design specifications for multiple central kitchens across the APAC region, supporting the growth of the regional food delivery supply chain",
    tags: [
      {
        name: "ACMV",
        color: "blue-text-gradient",
      },
      {
        name: "electrical",
        color: "green-text-gradient",
      },
      {
        name: "plumbing",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Residential",
    description:
      "Providing energy-efficient ACMV solutions, supporting infrastructure for a smart home, our expertise ensures a safe, comfortable and technonoglically advanecd living environment",
    tags: [
      {
        name: "ACMV",
        color: "blue-text-gradient",
      },
      {
        name: "electrical",
        color: "green-text-gradient",
      },
      {
        name: "plumbing",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Commercial",
    description:
      "Working closely with architects & builders to produce a vibrant & inviting retail experienec in shopping malls and retail spaces using lighting, ACMV, and electrical systems.",
    tags: [
      {
        name: "ACMV",
        color: "blue-text-gradient",
      },
      {
        name: "electrical",
        color: "green-text-gradient",
      },
      {
        name: "plumbing",
        color: "pink-text-gradient",
      },
    ],
    image: Palais,
    source_code_link: "https://github.com/",
  },
  {
    name: "Hospitality",
    description:
      "Balancing the behind-the-scenes operations & the front-facing elegance required in hospitality, our expertise is in ensuring a classy, efficient & reliable space where high quality service can be delivered without the expense of luxury",
    tags: [
      {
        name: "ACMV",
        color: "blue-text-gradient",
      },
      {
        name: "electrical",
        color: "green-text-gradient",
      },
      {
        name: "plumbing",
        color: "pink-text-gradient",
      },
    ],
    image: Tipo,
    source_code_link: "https://github.com/",
  },
  {
    name: "Historic Buildings",
    description:
      "Historic & cultural buildings must be navigated carefully whilst updating their facilities for the 21st century. Our expertise lie in innovative solutions to preserve and upgrade these buildings in the least invasive ways possible",
    tags: [
      {
        name: "ACMV",
        color: "blue-text-gradient",
      },
      {
        name: "electrical",
        color: "green-text-gradient",
      },
      {
        name: "plumbing",
        color: "pink-text-gradient",
      },
    ],
    image: HPV,
    source_code_link: "https://github.com/",
  },
  {
    name: "EV Charging Station",
    description:
      "Our expert team conducts thorough site assessments and designs efficient electrical systems to ensure smooth installations. We prioritize energy efficiency, optimizing the charging station's performance",
    tags: [
      {
        name: "LEW",
        color: "blue-text-gradient",
      },
      {
        name: "electricalloadupgrading",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
