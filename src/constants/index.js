import {
    aiglass,
    alarmsystem,
    mobile,
    backend,
    creator,
    web,
    fitlife,
    javascript,
    logistics,
    clogo,
    c,
    numpy,
    pandas,
    rust,
    tf,
    nodejs,
    mongodb,
    git,
    docker,
    distiller,
    emtech,
    sfl,
    threejs,
    oskernel,
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
      title: "Embedded Software Engineer",
      icon: creator,
    },
    {
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "Machine Learning Engineer",
      icon: backend,
    },
    {
      title: "Test Automation Engineer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C++",
      icon: clogo,
    },
    {
      name: "c",
      icon: c,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "rust",
      icon: rust,
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
      title: "Software Developer",
      company_name: "Emtech Group Inc.",
      icon: emtech,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Apr 2023",
      points: [
        "Develop and maintain cross-platform desktop applications to automate business workflows.",
        "Design and implement tools for data validation and quality assurance to ensure accuracy and compliance.",
        "Build and manage modular components and plugin systems to enhance application functionality.",
        "Optimize and maintain build, testing, and deployment pipelines to improve release efficiency.",
        "Create dynamic user interfaces and interactive components to improve usability and workflow.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "DistillerSR",
      icon: distiller,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Apr 2023",
      points: [
        "Utilized Postman to design and execute API tests during backend development, ensuring the reliability and performance of API endpoints and contributing to the stability of the overall system.",
        "Design and maintain automated testing frameworks to improve software quality and reduce manual QA efforts.",
        "Ensure backend code reliability and maintainability through thorough testing and quality assurance practices.",
        "Test and validate APIs to guarantee performance, stability, and seamless integration across systems.",
      ],
    },
    {
      title: "Quality Control Engineer",
      company_name: "DistillerSR",
      icon: distiller,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Apr 2022",
      points: [
        "Develop and execute automated test scenarios and protocols to ensure software quality.",
        "Reduce manual testing effort and accelerate production releases through test automation.",
        "Investigate and resolve test failures, provide coverage analysis, and report defects.",
        "Collaborate with cross-functional teams to validate API functionality and ensure system integration.",
      ],
    },
    {
      title: "Logistics Coordinator",
      company_name: "Wipebook Corporation",
      icon: logistics,
      iconBg: "#383E56",
      date: "May 2021 - Aug 2021",
      points: [
        "Streamlined operational workflows to improve efficiency in order processing.",
        "Provided responsive customer support, addressing inquiries and resolving issues effectively.",
        "Managed relationships with delivery partners to ensure reliable service and accurate tracking.",
        "Oversaw invoicing and billing processes, improving accuracy and consistency.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company_name: "Software For Love",
      icon: sfl,
      iconBg: "#383E56",
      date: "Sep 2020 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality websites.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "AI Glass",
      description:
        "Designed and engineered an embedded device for real-time sign language-to-text/speech translation using a Raspberry Pi and Machine Learning libraries.",
      tags: [
        {
          name: "raspberry pi",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "yellow-text-gradient",
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
      ],
      image: aiglass,
      source_code_link: "https://github.com/Bensmrz/CEG4912-4913-CapstoneGroup4",
    },
    {
      name: "Custom OS Kernel",
      description:
        "Developed a 64-bit OS kernel in C++/Assembly, initializing hardware and memory on bare-metal.",
      tags: [
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "Assembly",
          color: "orange-text-gradient",
        },
        {
          name: "low-level",
          color: "yellow-text-gradient",
        },
        {
          name: "interrupt handling",
          color: "pink-text-gradient",
        },
      ],
      image: oskernel,
      source_code_link: "https://github.com/Abilaash01/My-Operating-System",
    },
    {
      name: "IoT Home Security System",
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
          name: "STM32 Nucleo-64",
          color: "yellow-text-gradient",
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
      source_code_link: "https://github.com/Abilaash01/Alarm-System-RTS/",
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