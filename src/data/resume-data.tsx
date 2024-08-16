import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Gajanan Wattamwar",
  initials: "BJ",
  location: "Hyderabad, Telangana, India",
  locationLink: "https://maps.app.goo.gl/EriXW9VWK1cJPjKa9",
  about:
    "Senior Developer focused on building products with extra attention to detail",
  summary:
    "As a Senior Developer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 4 years of experience in working with companies all around the world.",
  // avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  avatarUrl: "https://i.ibb.co/tZ1WBcw/prof.jpg",
  personalWebsiteUrl: "https://cv-sigma-pearl.vercel.app/",
  contact: {
    email: "wattamwargaj@gmail.com",
    tel: "+919156015117",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Gajanan-Watt",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gajanan-wattamwar",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/its_me_Gajanan",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Masai School",
      degree: "Computer Science Bootcamp",
      start: "2021",
      end: "2022",
    },
    {
      school: "Dr. D.Y.Patil College of Engineering, Akurdi, Pune",
      degree: "Bachelor's Degree in Control systems engineering and Robotics",
      start: "2015",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Asint, Inc",
      link: "https://asint.net/",
      badges: ["Houston, Texas, United States · Remote"],
      title: "Senior Developer",
      logo: ParabolLogo,
      start: "Aug 2024",
      end: "Current",
      description: [
        // "Technologies: React, Redux, TailwindCSS, NodeJs, AngularJs, TypeScript, SQL, MongoDB.",
        // "Developed operational toolkit for admin with a focus on microservices and RESTful APIs using MySQL, ReactJS, Material UI, NodeJS along with google cloud and ci/cd integration for a prominent consulting firm with international clients. This tool has created end-to-end traceability of waste and trucks.",
        // "Designed reusable components, integrated APIs with the front-end, and implemented key features like Google Analytics integration and password recovery flows. Reduced frontend loading time by 25% and user experience. Upgraded the admin website using React and MaterialUI, resulting in a 50% increase in the operation team's speed and efficiency.",
        // "Created a specialized toolkit for Consumer Market Insight (CMI) professionals in the FMCG sector, resulting in a 2x increase in quarter on quarter client acquisition.",
        // "Mentored and guided a team of 3 interns, providing them with hands-on training in frontend development."
      ]
    },
    {
      company: "Bintix",
      link: "https://bintix.com",
      badges: ["Hyderabad"],
      title: "Frontend Developer → Full Stack Developer",
      logo: ParabolLogo,
      start: "Mar 2022",
      end: "Aug 2024",
      description: [
        "Technologies: React, Redux, TailwindCSS, NodeJs, AngularJs, TypeScript, SQL, MongoDB.",
        "Developed operational toolkit for admin with a focus on microservices and RESTful APIs using MySQL, ReactJS, Material UI, NodeJS along with google cloud and ci/cd integration for a prominent consulting firm with international clients. This tool has created end-to-end traceability of waste and trucks.",
        "Designed reusable components, integrated APIs with the front-end, and implemented key features like Google Analytics integration and password recovery flows. Reduced frontend loading time by 25% and user experience. Upgraded the admin website using React and MaterialUI, resulting in a 50% increase in the operation team's speed and efficiency.",
        "Created a specialized toolkit for Consumer Market Insight (CMI) professionals in the FMCG sector, resulting in a 2x increase in quarter on quarter client acquisition.",
        "Mentored and guided a team of 3 interns, providing them with hands-on training in frontend development."
      ]
    },
    {
      company: "Freelancing",
      link: "",
      badges: ["Remote"],
      title: "Web Developer",
      logo: ClevertechLogo,
      start: "Mar 2020",
      end: "Feb 2022",
      description: [
        "Developed Full Stack applications using ReactJs for frontend and NodeJs/expressJs for backend, ensuring seamless user experience and efficient server side rendering.",
        "Optimized state management in complex React applications using Redux, leading to improved application performance and maintainability."
      ]
    },
    {
      company: "Skillovate",
      link: "",
      badges: ["Pune"],
      title: "Software Engineer Intern",
      logo: ClevertechLogo,
      start: "Jun 2018",
      end: "Sep 2018",
      description: [
        "Collaborated on website design and backend API development, gaining practical experience in web development.",
        "Demonstrated hands-on expertise in creating electronic projects, including robotic arms and drones, leveraging Arduino and Raspberry Pi technologies."
      ]
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
    "Recoil",
    "Express.js",
    "WebRTC",
    "SQL",
    "MongoDB",
    "Docker", 
    "Kubernetes"
  ],
  projects: [
    {
      title: "Pixel Picture",
      techStack: [
        "Side Project",
        "React.js",
        "Javascript",
        "HTML/CSS",
      ],
      description: "A platform to build and create your own pixel pictures",
      logo: ConsultlyLogo,
      link: {
        label: "pixel-pic.vercel.app",
        href: "http://pixel-pic.vercel.app/",
      },
    },
    {
      title: "Social Media Platform",
      techStack: ["Side Project", "TypeScript", "React.js", "Redux", "TailwindCSS", "NodeJs", "ExpressJs", "Firebase", "MongoDB"],
      description:
        "Replica of Twitter aka X, to send images and videos to your close friends.",
      logo: MonitoLogo,
      link: {
        label: "twitter-clone-blond-xi.vercel.app",
        href: "https://twitter-clone-blond-xi.vercel.app/",
      },
    },
    {
      title: "Educational Platform",
      techStack: ["Side Project", "React.js", "Redux", "Javascript"],
      description:
        "Replica of India's best educational platform - Unacademy",
      logo: JarockiMeLogo,
      link: {
        label: "github.com/Gajanan-Watt/unacademy_clone",
        href: "https://github.com/Gajanan-Watt/unacademy_clone",
      },
    },
    // {
    //   title: "Personal Website",
    //   techStack: ["Side Project", "React.js", "TailwindCSS"],
    //   description:
    //     "Personal Website, created using ReactJS and TailwindCSS",
    //   logo: Minimal,
    //   link: {
    //     label: "gwatt.vercel.app",
    //     href: "https://gwatt.vercel.app",
    //   },
    // },
    ],
} as const;
