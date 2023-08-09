type Skill = {
  name: string;
  icon: {
    devicon?: string;
    fontAwesome?: string;
    svg?: string;
    img?: string;
  };
};

const skills: Skill[] = [
  {
    name: "HTML5",
    icon: {
      devicon: "devicon-html5-plain colored",
      svg: "/images/skills/html5.svg",
    },
  },
  {
    name: "CSS3",
    icon: {
      devicon: "devicon-css3-plain colored",
      svg: "/images/skills/css3.svg",
    },
  },
  {
    name: "JavaScript",
    icon: {
      devicon: "devicon-javascript-plain colored",
      svg: "/images/skills/javascript.svg",
    },
  },
  {
    name: "TypeScript",
    icon: {
      devicon: "devicon-typescript-plain colored",
      svg: "/images/skills/typescript.svg",
    },
  },
  {
    name: "React",
    icon: {
      devicon: "devicon-react-original colored",
      svg: "/images/skills/react.svg",
    },
  },
  {
    name: "Next.js",
    icon: {
      devicon: "devicon-nextjs-original-wordmark colored",
      svg: "/images/skills/nextjs.svg",
    },
  },
  {
    name: "Node.js",
    icon: {
      devicon: "devicon-nodejs-plain colored",
      svg: "/images/skills/nodejs.svg",
    },
  },
  {
    name: "Express",
    icon: {
      devicon: "devicon-express-original colored",
      svg: "/images/skills/express.svg",
    },
  },
  {
    name: "MongoDB",
    icon: {
      devicon: "devicon-mongodb-plain colored",
      svg: "/images/skills/mongodb.svg",
    },
  },
  {
    name: "MySQL",
    icon: {
      devicon: "devicon-mysql-plain-wordmark colored",
      svg: "/images/skills/mysql.svg",
    },
  },
  {
    name: "SQL",
    icon: {
      svg: "/images/skills/sql.svg",
    },
  },
  {
    name: "Python",
    icon: {
      devicon: "devicon-python-plain colored",
      svg: "/images/skills/python.svg",
    },
  },
  {
    name: "C++",
    icon: {
      devicon: "devicon-cplusplus-plain colored",
      svg: "/images/skills/cplusplus.svg",
    },
  },
  {
    name: "C",
    icon: { devicon: "devicon-c-plain colored", svg: "/images/skills/c.svg" },
  },
  {
    name: "C#",
    icon: {
      devicon: "devicon-csharp-plain colored",
      svg: "/images/skills/csharp.svg",
    },
  },
  {
    name: "Java",
    icon: {
      devicon: "devicon-java-plain colored",
      svg: "/images/skills/java.svg",
    },
  },
  {
    name: "Git",
    icon: {
      devicon: "devicon-git-plain colored",
      svg: "/images/skills/git.svg",
    },
  },
  {
    name: "GitHub",
    icon: {
      devicon: "devicon-github-original colored",
      svg: "/images/skills/github.svg",
    },
  },
  {
    name: "Linux",
    icon: {
      devicon: "devicon-linux-plain colored",
      svg: "/images/skills/linux.svg",
    },
  },
  {
    name: "Windows",
    icon: {
      devicon: "devicon-windows8-original colored",
      svg: "/images/skills/windows.svg",
    },
  },
  {
    name: "Visual Studio Code",
    icon: {
      devicon: "devicon-vscode-plain colored",
      svg: "/images/skills/vscode.svg",
    },
  },
  {
    name: "Visual Studio",
    icon: {
      devicon: "devicon-visualstudio-plain colored",
      svg: "/images/skills/visualstudio.svg",
    },
  },
  {
    name: "Atom",
    icon: {
      devicon: "devicon-atom-plain colored",
      svg: "/images/skills/atom.svg",
    },
  },
  {
    name: "Eclipse",
    icon: {},
  },
  {
    name: "Firebase",
    icon: {
      devicon: "devicon-firebase-plain colored",
      svg: "/images/skills/firebase.svg",
    },
  },
  {
    name: "NPM",
    icon: {
      devicon: "devicon-npm-original-wordmark colored",
      svg: "/images/skills/npm.svg",
    },
  },
  {
    name: "Markdown",
    icon: {
      devicon: "devicon-markdown-plain colored",
      svg: "/images/skills/markdown.svg",
    },
  },
  {
    name: "Tailwind CSS",
    icon: {
      devicon: "devicon-tailwindcss-plain colored",
      svg: "/images/skills/tailwindcss.svg",
    },
  },
  {
    name: "Material UI",
    icon: {
      devicon: "devicon-materialui-plain colored",
      svg: "/images/skills/materialui.svg",
    },
  },
  {
    name: "Vercel",
    icon: {},
  },
  {
    name: "Figma",
    icon: {
      devicon: "devicon-figma-plain colored",
      svg: "/images/skills/figma.svg",
    },
  },
  {
    name: "Framer Motion",
    icon: {},
  },
  {
    name: "Unity",
    icon: {
      devicon: "devicon-unity-original colored",
      svg: "/images/skills/unity.svg",
    },
  },
  {
    name: "Blender",
    icon: {
      devicon: "devicon-blender-original colored",
      svg: "/images/skills/blender.svg",
    },
  },
  {
    name: "Maya",
    icon: {
      devicon: "devicon-maya-plain colored",
      svg: "/images/skills/maya.svg",
    },
  },
  {
    name: "Android Studio",
    icon: {
      devicon: "devicon-androidstudio-plain colored",
      svg: "/images/skills/androidstudio.svg",
    },
  },
  {
    name: "Android",
    icon: {
      devicon: "devicon-android-plain colored",
      svg: "/images/skills/android.svg",
    },
  },
  {
    name: "Pandas",
    icon: {
      devicon: "devicon-pandas-original colored",
      svg: "/images/skills/pandas.svg",
    },
  },
  {
    name: "NumPy",
    icon: {
      devicon: "devicon-numpy-original colored",
      svg: "/images/skills/numpy.svg",
    },
  },
  {
    name: "Google Cloud",
    icon: {
      devicon: "devicon-googlecloud-plain colored",
      svg: "/images/skills/googlecloud.svg",
    },
  },
  {
    name: "Jupyter",
    icon: {
      devicon: "devicon-jupyter-plain colored",
      svg: "/images/skills/jupyter.svg",
    },
  },
  {
    name: "Three.js",
    icon: {
      devicon: "devicon-threejs-original",
      svg: "/images/skills/threejs.svg",
    },
  },
  {
    name: "Trello",
    icon: {
      devicon: "devicon-trello-plain colored",
      svg: "/images/skills/trello.svg",
    },
  },
];

export default skills;
