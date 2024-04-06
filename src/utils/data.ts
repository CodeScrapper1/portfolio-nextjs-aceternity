export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/trello.jpg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/kanban.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/gemini.jpg",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/rental.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/trello2.jpg",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/trello2.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/dashboard.jpg",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/blogging.jpg",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/rental.jpg",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/gemini.jpg",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  desc: string;
  image: string;
  categoryId: number;
}
export const categories: Category[] = [
  { id: 1, name: "Prisma" },
  { id: 2, name: "Nextjs" },
  // Add more categories here
];

export const work: Product[] = [
  {
    id: 1,
    name: "ecommerce",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "/mobile-1.jpg",
    categoryId: 1,
  },
  {
    id: 4,
    name: "trello clone",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "/laptop-1.jpg",
    categoryId: 2,
  },
  {
    id: 6,
    name: "kanban clone",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "/laptop-3.jpg",
    categoryId: 2,
  },
  {
    id: 2,
    name: "portfolio",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "/mobile-2.jpg",
    categoryId: 1,
  },
  {
    id: 3,
    name: "dashboard",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "/mobile-3.jpg",
    categoryId: 1,
  },
  {
    id: 5,
    name: "gemini clone",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "/laptop-2.jpg",
    categoryId: 2,
  },
];

export const skills = [
  {
    name: "React js",
    percentage: "95%",
    image: "/react.svg",
  },
  {
    name: "XD",
    percentage: "90%",
    image: "/xd.svg",
  },
  {
    name: "Javascript",
    percentage: "85%",
    image: "/js.svg",
  },
  {
    name: "Figma",
    percentage: "97%",
    image: "/figma.svg",
  },
  {
    name: "Wordpress",
    percentage: "75%",
    image: "/wp.svg",
  },
  {
    name: "Sketch",
    percentage: "70%",
    image: "/sketch.svg",
  },
];

export const experience = [
  {
    id: 1,
    startDate: "2020",
    endDate: "2021",
    title: "MERN stack developer",
    description: "MERN stack, full stack 1 year experienced developer",
  },
  {
    id: 2,
    startDate: "2021",
    endDate: "2023",
    title: "MERN stack developer",
    description: "MERN stack, full stack 1 year experienced developer",
  },
  {
    id: 3,
    startDate: "2020",
    endDate: "2023",
    title: "FULL stack developer",
    description: "MERN stack, full stack 1 year experienced developer",
  },
  {
    id: 4,
    startDate: "2022",
    endDate: "present",
    title: "Lead developer",
    description: "MERN stack, full stack 1 year experienced developer",
  },
  {
    id: 5,
    startDate: "2020",
    endDate: "2021",
    title: "MERN stack developer",
    description: "MERN stack, full stack 1 year experienced developer",
  },
  {
    id: 6,
    startDate: "2020",
    endDate: "2021",
    title: "MERN stack developer",
    description: "MERN stack, full stack 1 year experienced developer",
  },
];
