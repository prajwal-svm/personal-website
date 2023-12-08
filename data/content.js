import {
  mutedForegroundColor,
  primaryBackgroundColor,
  primaryDarkColor,
} from "../styles/theme";

export const RESUME_URI = "https://resume.prajwalsv.dev/";

export const CONTAINER_DATA = {
  avatar: {
    name: "Prajwal S Venkatsh",
    uri: "/logo.jpg",
  },
  navLinks: [
    {
      title: "Home",
      href: "/",
      icon: "FaHome",
    },
    {
      title: "About",
      href: "/#about",
      icon: "FaUser",
    },
    {
      title: "Experience",
      href: "/#experience",
      icon: "FaBusinessTime",
    },
    {
      title: "Work",
      href: "/#work",
      icon: "MdComputer",
    },
    {
      title: "Contact",
      href: "/#contact",
      icon: "MdOutlineEmail",
    },
    {
      title: "Blog",
      href: "https://blog.prajwalsv.dev",
      icon: "MdWeb",
    },
  ],
  colorVariant: {
    bgColor: {
      light: "white",
      dark: primaryBackgroundColor,
    },
    color: {
      light: "black",
      dark: "white",
    },
    navHoverBg: {
      light: "gray.100",
      dark: "#1e293b",
    },
  },
};

export const HOME_DATA = {
  titleA: "Hey 👋, my name is",
  titleB: "Prajwal S Venkateshmurthy",
  ctaText: "Download Resume",
  colorSwitch: {
    titleA: {
      light: "gray.700",
      dark: "blue.50",
    },
    titleB: {
      light: primaryDarkColor,
      dark: primaryDarkColor,
    },
    titleC: {
      light: "gray.500",
      dark: mutedForegroundColor,
    },
    titleDescription: {
      light: "gray.900",
      dark: "blue.50",
    },
    ctaBtn: {
      light: "crimson",
      dark: "gray",
    },
    ctaVariant: {
      light: "outline",
      dark: "outline",
    },
    scrollMouseIcon: {
      light: "gray.700",
      dark: "gray.300",
    },
  },
};

export const ABOUT_ME_DATA = {
  ttle: "About Me",
  textA:
    "Over the past three years, I've carved a niche for myself in the tech world, taking on challenges that blur the lines between design and development. My hands have danced across keyboards, scripting solutions in ReactJS and NodeJS, pushing the envelope of what's possible in the digital domain. Each project I've taken on speaks of a commitment to excellence, a keen eye for detail, and an insatiable thirst for innovation. From startups to established giants, my code has left its mark, and as the tech landscape evolves, so does my journey of discovery and creation",
  textB:
    "Here are a few technologies I‘ve been working with recently (and in the past):",
  skills: [
    {
      title: "Programming Languages",
      list: ["JavaScript", "TypeScript", "Python", "C++", "Go"],
    },
    {
      title: "Frontend",
      list: ["ReactJS", "NextJS"],
    },
    {
      title: "Backend",
      list: ["NodeJS", "ExpressJS"],
    },
    {
      title: "Databases",
      list: ["SQL", "MongoDB", "Redis", "Elastic Search"],
    },
    {
      title: "Build Tools",
      list: ["Webpack", "Snowpack", "Gulp"],
    },
    {
      title: "Testing",
      list: ["Jest", "React Testing Library", "Cypress"],
    },
    {
      title: "Cloud",
      list: ["AWS (EC2, S3, Cloudwatch, SQS, SNS)"],
    },
    {
      title: "CI/CD",
      list: ["Jenkins CI", "Docker"],
    },
  ],
  img: {
    uri: "/about.webp",
    alt: "Prajwal S Venkatesh",
  },
  colorSwitch: {
    text: {
      light: "gray.600",
      dark: "blue.50",
    },
  },
};

export const EXPERIENCE_DATA = {
  title: "Where I've Worked",
  data: [
    {
      key: "-1",
      company: "Illinois Tech",
      from: "September 2023",
      to: "December 2023",
      designation: "Graduate Student Researcher",
      link: "https://www.iit.edu/pritzker-institute/res-match",
      roleDescription: [
        "Working on an exciting research project titled \"Distributed Computation for Light Propagation Modeling\" as part of the RES-MATCH program",
        "Using discrete event simulation tools like the CODES framework and ROSS simulation engine to develop a software model for light propagation across nodes",
        "Actively involved in the research and development process, presenting findings at the RES-MATCH Expo",
        "Producing a conference-quality report summarizing the research implications",
      ],
      skills: ["C++", "Python", "Discrete Event Simulation", "Distributed Computing", "ROSS Simulation Engine"],
    },
    {
      key: "0",
      company: "Certa",
      from: "March 2022",
      to: "November 2022",
      designation: "Mid Frontend Engineer",
      roleDescription: [
        "Spearheaded the creation of Certa 2.0, our pioneering no-code platform",
        "Oversaw the transition of codebase from React16 to React18 coupled with updates to React Query from v2 to v4, boosting app responsiveness by 10% and slashing load times by 30%",
        "Initiated the development of proprietary tools, amplifying test coverage for front-end components from 50% to 90%",
        "Leveraged technologies to enhance software performance by 40%. As a result, user engagement soared by 50%, attributed mainly to improved UI/UX",
      ],
      link: "https://www.getcerta.com/",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "RTL"
      ],
    },
    {
      key: "1",
      company: "GoGuardian",
      from: "August 2021",
      to: "March 2022",
      designation: "Software Engineer",
      roleDescription: [
        "Developed and delivered core application features for Edulastic",
        "Worked on various features including Question Types, ItemBanks, Assignments, Assessments, Playlist, Subscription, and more",
        "Made significant contributions to improving application load time and performance",
        "Wrote end-to-end Cypress tests for features developed in each sprint cycle",
      ],
      link: "https://www.goguardian.com/",
      skills: [
        "JavaScript",
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "Cypress"
      ]
    },
    {
      key: "2",
      company: "Snapwiz",
      from: "August 2019",
      to: "August 2020",
      designation: "Associate Software Engineer",
      roleDescription: [
        "Develop and deliver application features for Edulastic",
        "Work on application feature such as Question Types, Assignments & Assessements for various supported roles",
        "Work on resolving production and regression bugs from previous releases leveraging cloudwatch logs, oplogs & sentry",
        "Work on development of complex tasks involving integration of 3rd party feature support",
      ],
      link: "https://edulastic.com/",
      skills: ["JavaScript", "ReactJs", "NodeJs", "ExpressJs", "MongoDB"],
    },
    {
      key: "3",
      company: "Lycan 3D",
      from: "January 2019",
      to: "February 2019",
      designation: "Fullstack Developer Intern",
      roleDescription: [
        "Work on solely designing, developing and deploying of an E-Commerce application for the company from ground up",
        "Work on frontend for building exceptional digital experiences where users could view a 3D models of mechanical parts",
        "Work on setting up backend service for persisting application data",
        "Integrate PayTM as payment gateway for purchase transactions pertaining to application",
      ],
      link: "http://lycan3d.com/",
      skills: [
        "HTML5",
        "CSS3",
        "WebGL",
        "JavaScript",
        "PHP",
        "AJAX",
        "MySQL",
        "MariaDB",
        "Apache Server",
      ],
    },
    {
      key: "4",
      company: "Netchronix",
      from: "August 2018",
      to: "November 2018",
      designation: "Frontend Intern",
      roleDescription: [
        "Developed and maintained code for in-house and client websites primarily using HTML, CSS, JavaScript, and PHP",
        "Manually tested sites across various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
        "Designed logos, menu-cards, webpages for various clients such as MeltIn Cafe, JC Constructions, Talent Clouds and many more...",
      ],
      link: "http://netchronix.com/",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "PHP",
        "AJAX",
        "Adobe Illustrator",
        "Adobe Illustrator",
      ],
    },
  ],
  colorVariant: {
    colorSecondaryDuration: {
      light: mutedForegroundColor,
      dark: mutedForegroundColor,
    },
    colorSecondary: {
      light: "gray.600",
      dark: "blue.50",
    },
    titleColor: {
      light: primaryDarkColor,
      dark: primaryDarkColor,
    },
  },
};

export const CONTACT = {
  title: "Get In Touch",
  message: `On the lookout for Spring/Summer 2024 internship or co-op roles! While I'm eager to dive into fresh challenges and contribute my skills, I'm also genuinely curious about the tech enthusiasts and trailblazers who visit this space. How did our digital paths cross? Whether you've got an exciting opportunity, a burning question, or just fancy a chat, hit up the form below. I promise, every message sparks my interest, and I'll get back to you with the same zest!`,
  btnText: "Send",
  btnLoadingText: "Sending...",
  toast: {
    invalidEmail: `Please enter a valid e-mail!`,
    fieldsRequired: `Your Name, Email & Message are required!`,
    success: `Thanks for reaching out to me! I'll get back to you as soon as possible`,
    error: `There must be some issue with the email service! If the problem persists, please reach out to me on my e-mail!`,
    generalError: `Hmm! This shouldn't have happened! Please try again later!`,
    captchaError: `hCaptcha token verification failed! Please try again!`,
  },
  colorSwitch: {
    text: {
      light: "gray.600",
      dark: "blue.50",
    },
    fieldBorderColor: {
      light: "darkgray",
      dark: mutedForegroundColor,
    },
    btnBorderColor: {
      light: "black",
      dark: "initial",
    },
    btnColor: {
      light: "gray.700",
      dark: "blue.50",
    },
    btnVariant: {
      light: "outline",
      dark: "solid",
    },
    placeholderColor: { color: "gray.500" },
  },
};

export const FOOTER = {
  socialMediaHandles: [
    {
      href: "https://www.instagram.com/prajwalsvenkatesh/",
      icon: "FaInstagram",
    },
    {
      href: "https://twitter.com/__Prajwal_SV__",
      icon: "FaTwitter",
    },
    {
      href: "https://github.com/Prajwal-S-Venkatesh",
      icon: "FaGithub",
    },
    {
      href: "https://www.linkedin.com/in/prajwal-s-venkatesh/",
      icon: "FaLinkedinIn",
    },
    {
      href: "mailto:hey@prajwalsv.dev",
      icon: "MdMailOutline",
    },
  ],
  colorSwitch: {
    notes: {
      light: "gray.700",
      dark: "blue.50",
    },
    divider: {
      light: "darkgray",
      dark: "#1e293b",
    },
    link: {
      light: "gray.700",
      dark: "gray.300",
    },
    linkHover: {
      light: "gray",
      dark: "white",
    },
  },
};
