import {
    aiglass,
    alarmsystem,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    clogo,
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
    distiller,
    sfl,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Machine Learning Engineer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Embedded Systems Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C++",
      icon: clogo,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer - Co-op",
      company_name: "DistillerSR",
      icon: distiller,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Apr 2023",
      points: [
        "Enhanced user capabilities by implementing advanced features for intricate data analytics through JavaScript, PHP, and React.",
        "Coordinated closely with various teams to plan and execute the transition from the existing technology stack to React.",
        "Spearheaded a project to redesign a critical forms page, employing PHP and JavaScript, enabling users to seamlessly add custom date formats.",
        "Implemented a dynamic feature allowing the format to automatically adjust to future changes made by admins, enhancing flexibility and user customization.",
      ],
    },
    {
      title: "Quality Control Engineer - Co-op",
      company_name: "DistillerSR",
      icon: distiller,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Apr 2022",
      points: [
        "Created test scenarios, test protocols and automation test scripts using Cypress, Protractor, Selenium and other automated testing tools.",
        "Utilized Cypress for streamlined test automation, reducing testing time on production release by over 60%.",
        "Investigated and debugged test failures, updating tests or reporting bugs as necessary, and provided test coverage analysis based on automation results.",
        "Applied Postman for API testing, and collaborated with cross-functional teams to ensure seamless integration.",
      ],
    },
    {
      title: "Logistics Coordinator - Co-op",
      company_name: "Wipebook Corporation",
      icon: sfl,
      iconBg: "#383E56",
      date: "May 2021 - Aug 2021",
      points: [
        "Streamlined workflows to enhance efficiency, reducing order processing time by 30%.",
        "Provided exceptional customer support, addressing inquiries and resolving issues promptly.",
        "Established strong partnerships with carriers, improving delivery reliability and tracking accuracy.",
        "Oversaw the creation and processing of outgoing invoices, streamlining the billing process and reducing errors by 15%.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Software For Love",
      icon: sfl,
      iconBg: "#383E56",
      date: "Sep 2020 - Jan 2023",
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
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AI Glass",
      description:
        "Developed a communication device enabling deaf individuals to communicate with non-sign language users using a Raspberry Pi and Machine Learning libraries.",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "linux",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "machine learning",
          color: "blue-text-gradient",
        },
      ],
      image: aiglass,
      source_code_link: "https://github.com/Bensmrz/CEG4912-4913-CapstoneGroup4",
    },
    {
      name: "Alarm System RTS",
      description:
        "Developed a responsive alarm system that detects motion, displays information on a screen and performs security functions, efficiently managing its operations and data using C programming.",
      tags: [
        {
          name: "Embedded C",
          color: "blue-text-gradient",
        },
        {
          name: "STM32CubeIDE",
          color: "green-text-gradient",
        },
        {
          name: "FreeRTOS",
          color: "orange-text-gradient",
        },
        {
          name: "Multithreading",
          color: "pink-text-gradient",
        },
      ],
      image: alarmsystem,
      source_code_link: "https://github.com/",
    },
    {
      name: "Fitness Website",
      description:
        "Developed a responsive fitness website that offers a variety of fitness services and features, also providing real-time updates on the latest news and trends.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "bootstrap",
          color: "orange-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Abilaash01/Fitness-Website-Final",
      live_link: "https://sweet-ganache-d23438.netlify.app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };