import { carrent, jobit, tripguide, HPV, Palais, Tipo } from "../assets";
import { services } from "./services";

export const navLinks = [
  {
    id: "about",
    title: "About",
    href: "/#about",
  },
  {
    id: "services",
    title: "Services",
    href: "/#services",
  },
  {
    id: "works",
    title: "Projects",
    href: "/projects/",
  },
  {
    id: "contact",
    title: "Contact",
    href: "/#contact",
  },
];

const projects = [
  {
    name: "Central Kitchens",
    description:
      "Design specifications for multiple central kitchens across Singapore, supporting the growth of the food delivery supply chain.",
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
    alt: "Central kitchen with multiple food stalls designed by SUPEREKA",
    href: "/projects/#central-kitchens",
  },
  {
    name: "Residential",
    description:
      "Energy-efficient ACMV solutions and supporting infrastructure for smart homes. Our expertise ensures a safe, comfortable and technologically advanced living environment.",
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
    alt: "Residential building services project by SUPEREKA",
    href: "/projects/#residential",
  },
  {
    name: "Commercial",
    description:
      "Working closely with architects and builders to produce vibrant and inviting retail and office spaces using lighting, ACMV and electrical systems.",
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
    alt: "Commercial retail space with building services by SUPEREKA",
    href: "/projects/#commercial",
  },
  {
    name: "Hospitality",
    description:
      "Balancing the behind-the-scenes operations and front-facing elegance that hospitality demands: a classy, efficient and reliable space where high quality service can be delivered without the expense of luxury.",
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
    alt: "TIPO hospitality venue with building services by SUPEREKA",
    href: "/projects/#commercial",
  },
  {
    name: "Historic Buildings & Places of Worship",
    description:
      "Historic and cultural buildings must be navigated carefully while updating their facilities for the 21st century. We provide innovative solutions that preserve and upgrade these buildings in the least invasive way possible.",
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
    alt: "Historic building upgraded by SUPEREKA",
    href: "/projects/#places-of-worship",
  },
  {
    name: "EV Charging Station",
    description:
      "Our team conducts thorough site assessments and designs efficient electrical systems to ensure smooth installations, prioritising energy efficiency and optimised charging performance.",
    tags: [
      {
        name: "LEW",
        color: "blue-text-gradient",
      },
      {
        name: "electrical load upgrading",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    alt: "EV charging station electrical design by SUPEREKA",
    href: "/services/electrical/",
  },
];

export { services, projects };
