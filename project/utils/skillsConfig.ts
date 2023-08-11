declare type Skill = {
  name: string;
  icon: {
    devicon?: string;
    svg?: string;
  };
  tags?: AllKeys<SkillTag>[];
  description?: string;
  link?: string;
};

type AllKeys<T> = T extends any ? keyof T : never;

declare type SkillTag = (typeof Tags)[number];

const Tags = [
  { Frontend: { color: "#61DAFB" } },
  { Backend: { color: "#000000" } },
  { Database: { color: "#4479A1" } },
  { "Programming Language": { color: "#F7DF1E" } },
  { "3D": { color: "#F7DF1E" } },
  { "Game Engine": { color: "#F7DF1E" } },
  { "Version Control": { color: "#F7DF1E" } },
  { Design: { color: "#F7DF1E" } },
  { Testing: { color: "#F7DF1E" } },
  { Cloud: { color: "#F7DF1E" } },
  { Mobile: { color: "#F7DF1E" } },
  { Web: { color: "#F7DF1E" } },
  { "AI/ML": { color: "#F7DF1E" } },
  { "UI/UX": { color: "#F7DF1E" } },
  { "Game Development": { color: "#F7DF1E" } },
  { Soft: { color: "#F7DF1E" } },
  { Other: { color: "#F7DF1E" } },
] as const;

const skills: Skill[] = [
  {
    name: "HTML5",
    icon: {
      devicon: "devicon-html5-plain colored",
      svg: "/images/skills/html5.svg",
    },
    description:
      "HTML5 is the latest version of the Hypertext Markup Language, used for structuring and presenting content on the web. It introduces new semantic elements and features that enable enhanced multimedia and interactive capabilities.",
    tags: ["Frontend", "Web", "Programming Language"],
  },
  {
    name: "CSS3",
    icon: {
      devicon: "devicon-css3-plain colored",
      svg: "/images/skills/css3.svg",
    },
    description:
      "CSS3 is the latest iteration of Cascading Style Sheets, used to style and format the appearance of HTML elements. It brings advanced layout, animation, and design options to create visually appealing web pages.",
  },
  {
    name: "JavaScript",
    icon: {
      devicon: "devicon-javascript-plain colored",
      svg: "/images/skills/javascript.svg",
    },
    description:
      "JavaScript is a versatile scripting language used for adding interactivity and dynamic behavior to web pages. It enables client-side scripting and is an essential component of modern web development.",
  },
  {
    name: "TypeScript",
    icon: {
      devicon: "devicon-typescript-plain colored",
      svg: "/images/skills/typescript.svg",
    },
    description:
      "TypeScript is a superset of JavaScript that introduces static typing and advanced tooling capabilities. It enhances code maintainability and helps catch errors at compile-time.",
  },
  {
    name: "React",
    icon: {
      devicon: "devicon-react-original colored",
      svg: "/images/skills/react.svg",
    },
    description:
      "React is a popular JavaScript library for building user interfaces. It follows a component-based architecture, making it easy to create reusable UI elements and manage application state.",
  },
  {
    name: "Next.js",
    icon: {
      devicon: "devicon-nextjs-original-wordmark colored",
      svg: "/images/skills/nextjs.svg",
    },
    description:
      "Next.js is a meta framework for server-rendered React applications. It simplifies routing, code splitting, and provides server-side rendering for improved performance and SEO.",
  },
  {
    name: "Node.js",
    icon: {
      devicon: "devicon-nodejs-plain colored",
      svg: "/images/skills/nodejs.svg",
    },
    description:
      "Node.js is a runtime environment that allows executing JavaScript code on the server-side. It enables building scalable and efficient network applications using a non-blocking, event-driven architecture.",
  },
  {
    name: "Express",
    icon: {
      devicon: "devicon-express-original colored",
      svg: "/images/skills/express.svg",
    },
    description:
      "Express is a minimalist web application framework for Node.js. It simplifies building APIs and web applications by providing routing, middleware, and other essential features.",
  },
  {
    name: "MongoDB",
    icon: {
      devicon: "devicon-mongodb-plain colored",
      svg: "/images/skills/mongodb.svg",
    },
    description:
      "MongoDB is a NoSQL database that stores data in a flexible, JSON-like format. It offers scalability and high performance, making it suitable for handling large amounts of unstructured or semi-structured data.",
  },
  {
    name: "MySQL",
    icon: {
      devicon: "devicon-mysql-plain-wordmark colored",
      svg: "/images/skills/mysql.svg",
    },
    description:
      "MySQL is a widely used open-source relational database management system. It provides a structured way to store data using tables, rows, and columns, making it suitable for various types of applications.",
  },
  {
    name: "SQL",
    icon: {
      svg: "/images/skills/sql.svg",
    },
    description:
      "SQL (Structured Query Language) is a domain-specific language used to manage and manipulate relational databases. It allows for querying, updating, and managing data in a structured manner.",
  },
  {
    name: "Python",
    icon: {
      devicon: "devicon-python-plain colored",
      svg: "/images/skills/python.svg",
    },
    description:
      "Python is a versatile and readable programming language known for its simplicity and extensive libraries. It is widely used for artificial intelligence, data analysis, automation, and more.",
  },
  {
    name: "C++",
    icon: {
      devicon: "devicon-cplusplus-plain colored",
      svg: "/images/skills/cplusplus.svg",
    },
    description:
      "C++ is a powerful programming language often used for systems programming, game development, and high-performance applications. It provides a balance between low-level control and high-level abstractions.",
  },
  {
    name: "C",
    icon: { devicon: "devicon-c-plain colored", svg: "/images/skills/c.svg" },
    description:
      "C is a foundational programming language known for its efficiency and close relationship with hardware. It is commonly used for operating systems, embedded systems, and low-level programming.",
  },
  {
    name: "C#",
    icon: {
      devicon: "devicon-csharp-plain colored",
      svg: "/images/skills/csharp.svg",
    },
    description:
      "C# is a modern, object-oriented programming language developed by Microsoft. It is widely used for developing Windows applications, games, and web services.",
  },
  {
    name: "Java",
    icon: {
      devicon: "devicon-java-plain colored",
      svg: "/images/skills/java.svg",
    },
    description:
      "Java is a popular and versatile object-oriented programming language used for building cross-platform applications, including web, desktop, mobile, and enterprise solutions.",
  },
  {
    name: "Git",
    icon: {
      devicon: "devicon-git-plain colored",
      svg: "/images/skills/git.svg",
    },
    description:
      "Git is a distributed version control system used for tracking changes in source code during software development. It allows collaboration, branching, and merging with ease.",
  },
  {
    name: "GitHub",
    icon: {
      devicon: "devicon-github-original colored",
      svg: "/images/skills/github.svg",
    },
    description:
      "GitHub is a platform for hosting and collaborating on Git repositories. It provides tools for version control, code review, issue tracking, and more.",
  },
  {
    name: "Linux",
    icon: {
      devicon: "devicon-linux-plain colored",
      svg: "/images/skills/linux.svg",
    },
    description:
      "Linux is an open-source operating system kernel used in various distributions (distros). It powers servers, desktops, and embedded devices, and is known for its stability and security.",
  },
  {
    name: "Windows",
    icon: {
      devicon: "devicon-windows8-original colored",
      svg: "/images/skills/windows.svg",
    },
    description:
      "Windows is a widely used operating system developed by Microsoft. It offers a graphical user interface and supports a wide range of applications.",
  },
  {
    name: "Visual Studio Code",
    icon: {
      devicon: "devicon-vscode-plain colored",
      svg: "/images/skills/vscode.svg",
    },
    description:
      "Visual Studio Code (VSCode) is a popular code editor known for its extensibility and powerful features. It supports a wide range of programming languages and frameworks.",
  },
  {
    name: "Visual Studio",
    icon: {
      devicon: "devicon-visualstudio-plain colored",
      svg: "/images/skills/visualstudio.svg",
    },
    description:
      "Visual Studio is an integrated development environment (IDE) used for building Windows applications, web applications, and services. It offers a comprehensive set of tools and features.",
  },
  {
    name: "Atom",
    icon: {
      devicon: "devicon-atom-plain colored",
      svg: "/images/skills/atom.svg",
    },
    description:
      "Atom is a hackable text editor developed by GitHub. It is highly customizable and offers a range of extensions and packages for various programming languages.",
  },
  {
    name: "Eclipse",
    icon: {
      svg: "/images/skills/eclipse.svg",
    },
    description:
      "Eclipse is a widely used IDE known for its support of multiple programming languages. It provides a rich set of tools for development, debugging, and more.",
  },
  {
    name: "Firebase",
    icon: {
      devicon: "devicon-firebase-plain colored",
      svg: "/images/skills/firebase.svg",
    },
    description:
      "Firebase is a comprehensive platform by Google for building web and mobile applications. It offers features like real-time databases, authentication, hosting, and more.",
  },
  {
    name: "NPM",
    icon: {
      devicon: "devicon-npm-original-wordmark colored",
      svg: "/images/skills/npm.svg",
    },
    description:
      "NPM (Node Package Manager) is a package manager for Node.js. It allows developers to easily install, manage, and publish JavaScript packages and libraries.",
  },
  {
    name: "Markdown",
    icon: {
      devicon: "devicon-markdown-plain colored",
      svg: "/images/skills/markdown.svg",
    },
    description:
      "Markdown is a lightweight markup language used to format plain text. It is commonly used for creating documentation and README files.",
  },
  {
    name: "Tailwind CSS",
    icon: {
      devicon: "devicon-tailwindcss-plain colored",
      svg: "/images/skills/tailwindcss.svg",
    },
    description:
      "Tailwind CSS is a utility-first CSS framework that enables rapid UI development by applying pre-designed utility classes. It promotes a component-driven approach to styling.",
  },
  {
    name: "Material UI",
    icon: {
      devicon: "devicon-materialui-plain colored",
      svg: "/images/skills/materialui.svg",
    },
    description:
      "Material UI is a popular React component library that implements Google's Material Design. It provides a set of visually appealing and responsive UI components.",
  },
  {
    name: "Vercel",
    icon: {
      svg: "/images/skills/vercel.svg",
    },
    description:
      "Vercel is a cloud platform for deploying and hosting web applications. It specializes in providing seamless deployment workflows for frontend projects.",
  },
  {
    name: "Figma",
    icon: {
      devicon: "devicon-figma-plain colored",
      svg: "/images/skills/figma.svg",
    },
    description:
      "Figma is a collaborative design tool used for creating user interfaces, prototypes, and interactive designs. It allows real-time collaboration and efficient design iteration.",
  },
  {
    name: "Framer Motion",
    icon: {},
    description:
      "Framer Motion is a motion library for React that enables smooth animations and transitions. It provides an intuitive API for creating engaging UI animations.",
  },
  {
    name: "Unity",
    icon: {
      devicon: "devicon-unity-original colored",
      svg: "/images/skills/unity.svg",
    },
    description:
      "Unity is a popular game engine used for creating 2D and 3D games. It offers a wide range of tools for designing, developing, and deploying games across various platforms.",
  },
  {
    name: "Blender",
    icon: {
      devicon: "devicon-blender-original colored",
      svg: "/images/skills/blender.svg",
    },
    description:
      "Blender is a powerful open-source 3D creation suite. It is used for modeling, animation, rendering, and more, making it suitable for game development and visual effects.",
  },
  {
    name: "Maya",
    icon: {
      devicon: "devicon-maya-plain colored",
      svg: "/images/skills/maya.svg",
    },
    description:
      "Maya is a professional 3D computer graphics software used for animation, modeling, and simulation. It is widely used in the film and entertainment industry.",
  },
  {
    name: "Android Studio",
    icon: {
      devicon: "devicon-androidstudio-plain colored",
      svg: "/images/skills/androidstudio.svg",
    },
    description:
      "Android Studio is the official IDE for Android app development. It provides tools for designing, coding, testing, and deploying Android applications.",
  },
  {
    name: "Android",
    icon: {
      devicon: "devicon-android-plain colored",
      svg: "/images/skills/android.svg",
    },
    description:
      "Android is a mobile operating system developed by Google. It powers a vast range of mobile devices and offers a rich ecosystem for app development.",
  },
  {
    name: "Pandas",
    icon: {
      devicon: "devicon-pandas-original colored",
      svg: "/images/skills/pandas.svg",
    },
    description:
      "Pandas is a Python library used for data analysis and manipulation. It provides data structures and functions to efficiently work with structured data.",
  },
  {
    name: "NumPy",
    icon: {
      devicon: "devicon-numpy-original colored",
      svg: "/images/skills/numpy.svg",
    },
    description:
      "NumPy is a fundamental Python library for numerical computations. It provides support for arrays, matrices, and mathematical functions, essential for scientific computing.",
  },
  {
    name: "Google Cloud",
    icon: {
      devicon: "devicon-googlecloud-plain colored",
      svg: "/images/skills/googlecloud.svg",
    },
    description:
      "Google Cloud is a cloud computing platform that offers various services for storage, computing, machine learning, and more. It enables scalable and reliable cloud solutions.",
  },
  {
    name: "Jupyter",
    icon: {
      devicon: "devicon-jupyter-plain colored",
      svg: "/images/skills/jupyter.svg",
    },
    description:
      "Jupyter is an open-source web application for creating and sharing interactive documents containing live code, equations, visualizations, and narrative text.",
  },
  {
    name: "Three.js",
    icon: {
      devicon: "devicon-threejs-original",
      svg: "/images/skills/threejs.svg",
    },
    description:
      "Three.js is a JavaScript library for creating 3D graphics and animations in the browser. It simplifies the complex process of 3D rendering and interaction.",
  },
  {
    name: "Trello",
    icon: {
      devicon: "devicon-trello-plain colored",
      svg: "/images/skills/trello.svg",
    },
    description:
      "Trello is a visual project management tool that uses boards, lists, and cards to organize tasks and collaborate with teams. It provides an intuitive interface for tracking progress.",
  },
  {
    name: "LaTeX",
    icon: {
      svg: "/images/skills/latex.svg",
    },
    description:
      "LaTeX is a document preparation system used for typesetting technical and scientific documents. It is widely used in academia and publishing for its high-quality typesetting.",
  },
  {
    name: "Matplotlib",
    icon: {
      svg: "/images/skills/matplotlib.svg",
    },
    description:
      "Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations in Python. Matplotlib makes easy things easy and hard things possible.",
  },
  {
    name: "Postman",
    icon: {
      svg: "/images/skills/postman.svg",
    },
    description:
      "Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.",
  },
  {
    name: "Ren'Py",
    icon: {
      svg: "/images/skills/renpy.svg",
    },
    description:
      "Ren'Py is a visual novel engine – used by thousands of creators from around the world – that helps you use words, images, and sounds to tell interactive stories that run on computers and mobile devices.",
  },
  {
    name: "Vite.js",
    icon: {
      svg: "/images/skills/vite.svg",
    },
    description:
      "Vite.js is a modern build tool and development server optimized for rapid web app creation. With its native ES modules support, Vite.js delivers near-instant feedback during development.",
  },
  {
    name: "scikit-learn",
    icon: {
      svg: "/images/skills/scikit-learn.svg",
    },
    description:
      "scikit-learn is Python's machine learning library, offering tools for data analysis, classification, and regression tasks. It's a go-to choice for implementing machine learning algorithms with ease.",
  },
];

export { skills, Tags };
export type { Skill, SkillTag };
