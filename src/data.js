import avatar_1 from "./assets/images/avatar-1.png"
import avatar_2 from "./assets/images/avatar-2.png"
// eslint-disable-next-line no-unused-vars
import avatar_3 from "./assets/images/avatar-3.png"
import avatar_4 from "./assets/images/avatar-4.png"

import icon_dev from "./assets/images/icon-dev.svg"
import my_avatar from "./assets/images/my-avatar.png"
import chef_choice from "./assets/images/chef_choice.png"
import portfolio_logo from "./assets/images/logo.ico"
import chat_app from "./assets/images/chat_app.png"

export const navItems = [
  {
    value: "About",
  },
  {
    value: "Resume",
  },
  {
    value: "Portfolio",
  },
  {
    value: "Contact",
  },
]

export const aboutTextData = [
  {
    p: "Hi, I am Gaurav Verma, a Computer Science undergraduate with a strong background in Full Stack Development and Machine Learning",
  },
  {
    p: `My expertise lies in building scalable, secure web applications using React, Node.js, and MongoDB. I enjoy transforming complex challenges into efficient, user-friendly solutions. My goal is to create applications that not only meet but exceed expectations by focusing on performance, collaboration, and continuous learning. I have successfully led projects from concept to completion, always aiming to deliver impactful results.

`,
  },
]

export const serviceItems = [
  {
    src: icon_dev,
    alt: "Web development icon",
    h4: "Web development",
    p: "High-quality development of sites at the professional level",
  },
  {
    src: icon_dev,
    alt: "Machine Learning icon",
    h4: "Machine Learning",
    p: "Innovative ML solutions using PyTorch, scikit-learn, and advanced deep learning techniques.",
  },
  {
    src: icon_dev,
    alt: "AI Applications icon",
    h4: "AI Applications",
    p: "Developing intelligent applications with focus on computer vision and natural language processing.",
  },
  {
    src: icon_dev,
    alt: "design icon",
    h4: "Data Analysis",
    p: "Unlock insights and trends from your data effectively.",
  },
]

export const testimonialsItems = [
  {
    src: avatar_1,
    date: "14 June, 2021",
    alt: "Ansh Goel",
    h4: "Ansh Goel",
    p: `His ability to tackle complex problems with innovative solutions is truly impressive. Gaurav’s expertise in full stack development, combined with his strong understanding of machine learning, made a significant impact on our projects`,
  },
  {
    src: avatar_2,
    date: "14 June, 2021",
    alt: "Kruti Malvi",
    h4: "Kruti Malvi",
    p: "The AI-powered app this engineer created is revolutionary. It demonstrates a rare blend of machine learning knowledge and practical application.",
  },
  {
    src: avatar_4,
    date: "14 June, 2021",
    alt: "Harshit Katiyar",
    h4: "Harshit Katiyar",
    p: "As a fellow coder, I'm amazed by Gaurav's dedication. 100+ day streak on LeetCode and 300+ DSA questions solved? That's commitment!",
  },
]

export const clientItems = [
  // {
  //   src: client,
  // },
  // {
  //   src: client,
  // },
  // {
  //   src: client,
  // },
  // {
  //   src: client,
  // },
  // {
  //   src: client,
  // },
]

export const timelineItems = [
  {
    icon: "book-outline",
    heading: "Education",
    items: [
      {
        h4: "SRM Institute of Science and Technology",
        span: "2021 - 2025",
        p: "B.Tech in Computer Science and Artificial Intelligence - CGPA: 9.12 / 10",
      },
      {
        h4: "Kendriya Vidyalaya, Panvel",
        span: "2019-2020",
        p: "Class XII - Percentage: 82.20%",
      },
      {
        h4: "Kendriya Vidyalaya, Panvel",
        span: "2017-2018",
        p: "Class X - Percentage: 77%",
      },
    ],
  },
  {
    icon: "briefcase-outline",
    heading: "Experience",
    items: [
      {
        h4: "Full-Stack Intern",
        span: "ONGC, Mumbai",
        p: "Developed a full-stack project for the Hospitality and Welfare Department, improving resource management efficiency by 40%.",
      },
    ],
  },
]
//Sidebar

export const myInfo = {
  my_avatar,
  name: "Gaurav Verma",
  domains: ["Full Stack Developer", "Machine Learning"],
}

export const contactItems = [
  {
    logo: "mail-outline",
    p: "Email",
    href: "mailto:gaurav94266@gmail.com",
    value: "gaurav94266@gmail.com",
  },
  {
    logo: "phone-portrait-outline",
    p: "Phone",
    href: "tel:+917990521189",
    value: "+91 7990521189",
  },
]

export const socialLists = [
  {
    link: "https://github.com/ChimeraElixir",
    logo: "logo-github",
  },
  {
    link: "https://www.linkedin.com/in/gaurav-verma-83b338221/",
    logo: "logo-linkedin",
  },
  {
    link: "https://leetcode.com/u/gaurav94266/",
    logo: "code-outline",
  },
]

export const map =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241412.99927145528!2d72.86870243966365!3d19.01627929067582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9f0b81f13ad%3A0x3c12f7681185f869!2sNavi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1721825656791!5m2!1sen!2sin"

export const mySkills = [
  {
    skill: "React",
    value: 85,
  },
  {
    skill: "Python",
    value: 90,
  },
  {
    skill: "C++",
    value: 80,
  },
  {
    skill: "Node.js",
    value: 70,
  },
  {
    skill: "PyTorch",
    value: 75,
  },
]
export const filterLists = [
  "ALL",
  "Web Design",
  "Application",
  "Web Development",
]

export const portfolioItems = [
  {
    src: chef_choice,
    alt: "Chef Choice",
    title: "Chef Choice",
    category: "Machine Learning",
    href: "https://huggingface.co/spaces/ChimeraElixir/Recipe_Recommendation",
  },
  {
    src: portfolio_logo,
    alt: "Portfolio",
    title: "Portfolio",
    category: "Web Design",
    href: "https://chimera-portfolio.netlify.app/",
  },
  {
    src: chat_app,
    alt: "Chat App",
    title: "Chat App",
    category: "Web Development",
    href: "https://react-bxea.onrender.com/",
  },
]
