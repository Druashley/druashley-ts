export interface IProject {
  id: number;
  title: string;
  description: string;
  technologies: ITechnologies[];
  image?: string;
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
      { key: "Django RestFramework", data: 45 },
      { key: "Stripe", data: 15 },
    ],
  },
  {
    id: 2,
    title: "NBA Stats",
    description:
      "This app showcases NBA player season stat averages with ChartJS. It allows users to compare NBA players across different and eras.",
    technologies: [
      { key: "Redux", data: 20 },
      { key: "ChartJs", data: 30 },
      { key: "Axios", data: 22 },
      { key: "React", data: 75 },
    ],
  },
];

export default Projects;
