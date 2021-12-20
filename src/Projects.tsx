export interface IProject {
  id: number;
  title: string;
  description: string;
  technologies: ITechnologies[];
  image?: string;
  url: string;
  github: string;
}

export interface ITechnologies {
  key: string;
  data: number;
  image?: string;
}

const Projects: IProject[] = [
  {
    id: 1,
    title: "OurProtocol",
    description:
      "The goal of this project is to provide a user created content platform for EMS (emergency medical service) agencies to distribute doctor / medical director mandated medicine guidelines, protocols, and procedures. In the US, every EMS agency must provide strict guidelines, medicine dosages, and other answers for their EMTs, Paramedics, and RNs to follow. Examples may include - Detailed information about all drugs on the ambulance, including dosages, when to use, when not to use, and other various aspects to each product. Another example would be what steps do you follow when approaching a scene where a person is unconscious.",
    technologies: [
      { key: "AWS", data: 10 },
      { key: "Digital Ocean", data: 20 },
      { key: "React", data: 75 },
      { key: "MongoDB", data: 20 },
      { key: "Django", data: 35 },
      { key: "TailwindCSS", data: 22 },
      { key: "Django RestFramework", data: 45 },
      { key: "Stripe", data: 15 },
    ],
    url: "https://dru-react-bcuri.ondigitalocean.app/#/",
    github: "https://github.com/protocol-ems/dru-react",
  },
  {
    id: 2,
    title: "NBA Stats",
    description:
      "This app showcases NBA player season stat averages with ChartJS. It allows users to compare NBA players across different years and eras in a visual manner. There is no limit to the number players a user can compare.",
    technologies: [
      { key: "Redux", data: 20 },
      { key: "ChartJS", data: 30 },
      { key: "Axios", data: 22 },
      { key: "TailwindCSS", data: 22 },
      { key: "React", data: 75 },
    ],
    url: "https://nbav-2-rkw3y.ondigitalocean.app/",
    github: "https://github.com/Druashley/nbav2",
  },

  {
    id: 3,
    title: "druashley.com",
    description:
      "This is my portfoilio website. You're currently on this website. I used this project to learn Typscript and Styled-components. Reaviz is an npm package I used to create the bubble charts.",
    technologies: [
      { key: "Reaviz", data: 22 },
      { key: "Styled-Components", data: 30 },
      { key: "Vultr", data: 15 },
      { key: "Nginx", data: 15 },
      { key: "CertBot", data: 15 },
      { key: "Typescript", data: 30 },
      { key: "React", data: 55 },
    ],
    url: "https://www.druashley.com/",
    github: "https://github.com/Druashley/druashley-ts",
  },
];

export default Projects;
