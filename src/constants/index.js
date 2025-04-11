import {
    aiglass,
    aiglassapp,
    alarmsystem,
    mobile,
    backend,
    creator,
    web,
    fitlife,
    javascript,
    typescript,
    html,
    logistics,
    clogo,
    c,
    numpy,
    pandas,
    rust,
    tf,
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
      title: "Python Developer",
      icon: web,
    },
    {
      title: "Machine Learning Engineer",
      icon: mobile,
    },
    {
      title: "Web Developer",
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
      name: "rust",
      icon: rust,
    },
    {
      name: "c",
      icon: c,
    },
    {
      name: "tensorflow",
      icon: tf,
    },
    {
      name: "pandas",
      icon: pandas,
    },
    {
      name: "numpy",
      icon: numpy,
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
        "Design and implement a dynamic, user-focused application using Python and libraries like PySide6 and Selenium.",
        "Develop solutions for XML and PDF validation using Python, integrating ACORD 103 standards and leveraging OpenCV for image processing.",
        "Develop and maintain custom plugin managers using WiX Toolset, to enhance application scalability and maintainability.",
        "Contribute to several improvements in the CI/CD pipelines, employing GitHub Actions to optimize testing, deployment, and release workflows.",
        "Innovate with PySide6 tools to design and implement dynamic docks and modular widgets that display actionable data and configuration managers, enhancing client workflow efficiency and enabling a more intuitive user experience.",
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
      icon: logistics,
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
  
  const projects = [
    {
      name: "AI Glass",
      description:
        "Developed a communication device enabling deaf individuals to communicate with non-sign language users using a Raspberry Pi and Machine Learning libraries.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "linux",
          color: "green-text-gradient",
        },
        {
          name: "machine learning",
          color: "pink-text-gradient",
        },
        {
          name: "pandas",
          color: "orange-text-gradient",
        },
        {
          name: "numpy",
          color: "blue-text-gradient",
        },
        {
          name: "tensorflow",
          color: "pink-text-gradient",
        },
        {
          name: "microcontroller",
          color: "yellow-text-gradient",
        },
      ],
      image: aiglass,
      source_code_link: "https://github.com/Bensmrz/CEG4912-4913-CapstoneGroup4",
    },
    {
      name: "AI Glass App",
      description:
        "Designed and engineered an app to track user interactions and allow them to connect to the device as well as view past chat logs.",
      tags: [
        {
          name: "react native",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "orange-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: aiglassapp,
      source_code_link: "https://github.com/ImCalebP/AiGlassApp",
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
      image: fitlife,
      source_code_link: "https://github.com/Abilaash01/Fitness-Website-Final",
      live_link: "https://sweet-ganache-d23438.netlify.app",
    },
  ];
  
  export { services, technologies, experiences, projects };