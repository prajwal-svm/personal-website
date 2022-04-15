export const RESUME_URI = 'https://resume.prajwalsv.dev/'

export const CONTAINER_DATA = {
  avatar: {
    name: 'Prajwal S Venkatsh',
    uri:
      'https://i.postimg.cc/FHRgLsF9/273391645-515349003237096-7535402446863100521-n.jpg'
  },
  navLinks: [
    {
      title: 'Home',
      href: '/',
      icon: 'FaHome'
    },
    {
      title: 'About',
      href: '/#about',
      icon: 'FaUser'
    },
    {
      title: 'Experience',
      href: '/#experience',
      icon: 'FaBusinessTime'
    },
    {
      title: 'Work',
      href: '/#work',
      icon: 'MdComputer'
    },
    {
      title: 'Contact',
      href: '/#contact',
      icon: 'MdOutlineEmail'
    },
    {
      title: 'Blog',
      href: 'https://blog.prajwalsv.dev',
      icon: 'MdWeb'
    }
  ],
  colorVariant: {
    bgColor: {
      light: 'white',
      dark: '#0a192f'
    },
    color: {
      light: 'black',
      dark: 'white'
    },
    navHoverBg: {
      light: 'gray.100',
      dark: 'gray.700'
    }
  }
}

export const HOME_DATA = {
  titleA: 'Hey 👋, my name is',
  titleB: 'Prajwal S Venkatesh.',
  titleC: 'I build stuff for the web.',
  titleDescription:
    " I'm a software engineer specializing in building exceptional digital experiences ✨. I'm an inquisite, creative, brainstorming mastermind behind computer programs of all sorts 🤓. Currently, I'm working as a Mid Frontend Engineer at Certa 👨‍💻.",
  ctaText: 'Download Resume',
  colorSwitch: {
    titleA: {
      light: 'gray.700',
      dark: '#ccd6f6'
    },
    titleB: {
      light: 'gray.600',
      dark: 'teal.300'
    },
    titleC: {
      light: 'gray.500',
      dark: 'gray.500'
    },
    titleDescription: {
      light: 'gray.900',
      dark: '#8892b0'
    },
    ctaBtn: {
      light: 'black',
      dark: 'teal'
    },
    ctaVariant: {
      light: 'outline',
      dark: 'outline'
    },
    scrollMouseIcon: {
      light: 'gray.700',
      dark: '#ccd6f6'
    }
  }
}

export const ABOUT_ME_DATA = {
  ttle: 'About Me',
  textA:
    'Hey there! I‘m a Software Engineer based out of Bengaluru, India, with ~3 years of experience in building scalable applications with exceptional digital experiences. I‘m an effective and driven software engineering professional, offering a wealth of expertise. I am an analytical thinker with a proven track record of delivering excellent results. I‘m highly skilled in building an end-to-end MERN stack solution for your company! I‘m currently working at Certa as a Mid Frontend Engineer, I‘ve been fascinated about Open Source Projects since the inception of my coding journey.',
  textB:
    'Here are a few technologies I‘ve been working with recently (and in the past):',
  skills: [
    {
      title: '📜 Programming Languages',
      list: ['JavaScript', 'TypeScript', 'Python', 'C++', 'Go']
    },
    {
      title: '🖥️ Frontend',
      list: ['ReactJS', 'NextJS']
    },
    {
      title: '🔥 Backend',
      list: ['NodeJS', 'ExpressJS']
    },
    {
      title: '💿 Databases',
      list: ['SQL', 'MongoDB', 'Redis', 'Elastic Search']
    },
    {
      title: '🛠️ Build Tools',
      list: ['Webpack', 'Snowpack', 'Gulp']
    },
    {
      title: '🤖 Testing',
      list: ['Jest', 'React Testing Library', 'Cypress']
    },
    {
      title: '☁️ Cloud',
      list: ['AWS (EC2, S3, Cloudwatch, SQS, SNS)']
    },
    {
      title: '🚀 CI/CD',
      list: ['Jenkins CI', 'Docker']
    }
  ],
  img: {
    uri:
      'https://i.postimg.cc/CKtgg15d/273391645-515349003237096-7535402446863100521-n.jpg',
    alt: 'Prajwal S Venkatesh'
  },
  colorSwitch: {
    text: {
      light: 'gray.600',
      dark: '#8892b0'
    }
  }
}

export const EXPERIENCE_DATA = {
  title: "Where I've Worked",
  data: [
    {
      key: '0',
      company: 'Certa',
      from: 'March 2022',
      to: 'Present',
      designation: 'Mid Frontend Engineer',
      roleDescription: [
        'Working on building a no-code platform',
        'Write modern, performant, maintainable code for a diverse array of client and internal projects',
        'Work with a variety of different languages, platforms, frameworks such as JavaScript, TypeScript, React, RTL',
        'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
      ],
      link: 'https://www.getcerta.com/',
      skills: ['JavaScript', 'TypeScript', 'ReactJs', 'React Testing Library']
    },
    {
      key: '1',
      company: 'GoGuardian',
      from: 'Aug 2020',
      to: 'March 2022',
      designation: 'Software Engineer',
      roleDescription: [
        'Develop and deliver core application features for Edulastic',
        'Work on application feature such as Question Types, Item Banks, Assignments, Assessements, Playlist, Subscription and many more...',
        'Extensive work on improving application load time and performance',
        'Write e2e tests for the features developed in each sprint cycle'
      ],
      link: 'https://www.goguardian.com/',
      skills: [
        'JavaScript',
        'ReactJs',
        'NodeJs',
        'ExpressJs',
        'MongoDB',
        'Firebase',
        'Redis',
        'Umzug'
      ]
    },
    {
      key: '2',
      company: 'Snapwiz',
      from: 'Aug 2019',
      to: 'Aug 2020',
      designation: 'Associate Software Engineer',
      roleDescription: [
        'Develop and deliver application features for Edulastic',
        'Work on application feature such as Question Types, Assignments & Assessements for various supported roles',
        'Work on resolving production and regression bugs from previous releases leveraging cloudwatch logs, oplogs & sentry',
        'Work on development of complex tasks involving integration of 3rd party feature support'
      ],
      link: 'https://edulastic.com/',
      skills: ['JavaScript', 'ReactJs', 'NodeJs', 'ExpressJs', 'MongoDB']
    },
    {
      key: '3',
      company: 'Lycan 3D',
      from: 'Jan 2019',
      to: 'Feb 2019',
      designation: 'Fullstack Developer Intern',
      roleDescription: [
        'Work on solely designing, developing and deploying of an E-Commerce application for the company from ground up',
        'Work on frontend for building exceptional digital experiences where users could view a 3D models of mechanical parts',
        'Work on setting up backend service for persisting application data',
        'Integrate PayTM as payment gateway for purchase transactions pertaining to application'
      ],
      link: 'http://lycan3d.com/',
      skills: [
        'HTML5',
        'CSS3',
        'WebGL',
        'JavaScript',
        'PHP',
        'AJAX',
        'MySQL',
        'MariaDB',
        'Apache Server'
      ]
    },
    {
      key: '4',
      company: 'Netchronix',
      from: 'Aug 2018',
      to: 'Nov 2018',
      designation: 'Frontend Intern',
      roleDescription: [
        'Developed and maintained code for in-house and client websites primarily using HTML, CSS, JavaScript, and PHP',
        'Manually tested sites across various browsers and mobile devices to ensure cross-browser compatibility and responsiveness',
        'Designed logos, menu-cards, webpages for various clients such as MeltIn Cafe, JC Constructions, Talent Clouds and many more...'
      ],
      link: 'http://netchronix.com/',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'PHP',
        'AJAX',
        'Adobe Illustrator',
        'Adobe Illustrator'
      ]
    }
  ],
  colorVariant: {
    colorSecondary: {
      light: 'gray.600',
      dark: '#8892b0'
    },
    titleColor: {
      light: 'gray.600',
      dark: '#ccd6f6'
    }
  }
}

export const CONTACT = {
  title: 'Get In Touch',
  message: `Although I‘m not looking for any new opportunities at the moment, my inbox is always open. I‘d like to know who you are and how you ended up on this page! If you have a question or just want to say "Hey" use the below form, I‘ll try my best to get back to you!`,
  btnText: 'Send',
  btnLoadingText: 'Sending...',
  toast: {
    invalidEmail: `Invalid Email!`,
    fieldsRequired: `Name, Email & Message are mandatory fields!`,
    success: `Awesome! I'll to get back to you as soon as possible`,
    error: `Issue with email service!`,
    generalError: `Something went wrong!`,
    captchaError: `hCaptcha token verification failed!`
  },
  colorSwitch: {
    text: {
      light: 'gray.600',
      dark: '#8892b0'
    },
    fieldBorderColor: {
      light: 'darkgray',
      dark: '#233554'
    },
    btnBorderColor: {
      light: 'black',
      dark: 'initial'
    },
    btnColor: {
      light: 'gray.700',
      dark: 'primary'
    },
    btnVariant: {
      light: 'outline',
      dark: 'solid'
    },
    placeholderColor: { color: 'gray.500' }
  }
}

export const FOOTER = {
  socialMediaHandles: [
    {
      href: 'https://www.instagram.com/prajwalsvenkatesh/',
      icon: 'FaInstagram'
    },
    {
      href: 'https://twitter.com/__Prajwal_SV__',
      icon: 'FaTwitter'
    },
    {
      href: 'https://github.com/Prajwal-S-Venkatesh',
      icon: 'FaGithub'
    },
    {
      href: 'https://www.linkedin.com/in/prajwal-s-venkatesh/',
      icon: 'FaLinkedinIn'
    },
    {
      href: 'mailto:hey@prajwalsv.dev',
      icon: 'MdMailOutline'
    }
  ],
  colorSwitch: {
    notes: {
      light: 'gray.700',
      dark: '#ccd6f6'
    },
    divider: {
      light: 'darkgray',
      dark: '#233554'
    },
    link: {
      light: 'gray.700',
      dark: '#ccd6f6'
    },
    linkHover: {
      light: 'gray',
      dark: 'white'
    }
  }
}
