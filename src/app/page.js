'use client'
import { TypeAnimation } from "react-type-animation";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Break from "./components/break";

export default function Home() {
  const skills = [
    "C/C++",
    "Java",
    "Python",
    "Javascript",
    "RISC-V",
    "R",
    "Go",
    "SQL",
    "Lua",
    "HTML/CSS",
    "TailwindCSS",
    "React.js",
    "Next.js",
    "Node.js",
    "React Native",
    "MongoDB",
    "Figma",
    "Linux",
    "Bash",
    "Pytorch",
    "NumPy",
    "Pandas",
    "Seaborn",
  ];
  return (
    <main className="content-container">
      <div className="section-bg">
        <TypeAnimation
          sequence={["Hi. I'm Daniel.", 1000]}
          wrapper="span"
          speed={10}
          repeat={0}
          cursor={true}
          className="text-3xl md:text-6xl text-b5 font-sans m-4"
        ></TypeAnimation>
        <div className="text-lg md:text-2xl text-b3 md:self-end m-4">
          <b>Computer Science</b> and <b>Data Science</b> at <b>UC Berkeley</b>
        </div>
      </div>
      <Break></Break>
      <div className="section">
        <div className="flex-container">
          <h1 className="text-b3">About&nbsp;</h1>
          <h1>Me</h1>
        </div>
      </div>
      <div className="section">
        <p>
          Welcome to my website! My name is <b>Daniel Liu</b>, and I&apos;m a{" "}
          <b>Sophomore</b> at <b>UC Berkeley</b> majoring in{" "}
          <b>Computer Science</b> and minoring in <b>Data Science</b>. I am also
          a part of Berkeley&apos;s <b>Upsilon Pi Epsilon (UPE)</b> chapter.
        </p>
        <p>
          Programming is both my hobby and passion, and I&apos;m always looking to
          expand my programming skills. I&apos;m interested in every facet of
          programming, including <b>Data Structures and Algorithms</b>,{" "}
          <b>Fullstack Web Development</b>, <b>Cybersecurity</b> and{" "}
          <b>Machine Learning and Artificial Intelligence</b>.
        </p>
      </div>
      <div className="flex-container">
        <a href="https://github.com/DanL2015/" rel="noreferrer" target="_blank">
          <FaGithub className="text-b4 hover:text-blue hover: text-3xl m-2" />
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-liu-2004/"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedin className="text-b4 hover:text-blue text-3xl m-2" />
        </a>
        <a
          href="mailto:danielliu@berkeley.edu"
          rel="noreferrer"
          target="_blank"
        >
          <IoMdMail className="text-b4 hover:text-blue text-3xl m-2" />
        </a>
        <a
          href="https://drive.google.com/file/d/1xV2n1RpcpustAJ4uy5K7xyC20DJdYeH2/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
          <FaFilePdf className="text-b4 hover:text-blue text-3xl m-2" />
        </a>
      </div>
      <Break></Break>
      <div className="section">
        <div className="flex-container">
          <h1 className="text-b3">Skill&nbsp;</h1>
          <h1>Set</h1>
        </div>
      </div>
      <div className="flex-container flex-wrap">
        {skills &&
          skills.map((name, index) => {
            return (
              <div className="skill-container" key={index}>
                {name}
              </div>
            );
          })}
      </div>
      <Break></Break>
      <div className="section">
        <div className="flex-container">
          <h1 className="text-b3">Courses&nbsp;</h1>
          <h1>Taken</h1>
        </div>
      </div>
      <div className="section-bg">
        <h2>Fall 2022</h2>
        <ul>
          <li>
            <a href="https://math.berkeley.edu/courses/choosing/lowerdivcourses/math54">
              MATH 54
            </a>
            : Linear Algebra and Differential Equations - <b>A+</b>
          </li>
          <li>
            <a href="https://fullstackdecal.com/">CS 198-199</a>: Introduction
            to Full Stack Development - <b>P</b>
          </li>
          <li>
            <a href="https://cs61a.org/">CS 61A</a>: The Structure and
            Interpretation of Computer Programs - <b>A+</b>
          </li>
        </ul>
      </div>
      <div className="section-bg">
        <h2>Spring 2023</h2>
        <ul>
          <li>
            <a href="https://www.data8.org/">DATA 8</a>: Foundations of Data
            Science - <b>A+</b>
          </li>
          <li>
            <a href="https://datastructur.es">CS 61B</a>: Data Structures -{" "}
            <b>A+</b>
          </li>
          <li>
            <a href="https://www.eecs70.org/">CS 70</a>: Discrete Mathematics
            and Probability Theory - <b>A</b>
          </li>
        </ul>
      </div>
      <div className="section-bg">
        <h2>Fall 2023</h2>
        <ul>
          <li>
            <a href="https://www.stat20.org/">STAT 20</a>: Introduction to
            Probability and Statistics - <b>A+</b>
          </li>
          <li>
            <a href="https://www.cs61c.org/">CS 61C</a>: Great Ideas in Computer
            Architecture - <b>A+</b>
          </li>
        </ul>
      </div>
      <div className="section-bg">
        <h2>Spring 2024</h2>
        <ul>
          <li>
            <a href="https://ds100.org/">Data 100</a>: Principles and Techniques
            in Data Science - <b>Current</b>
          </li>
          <li>
            <a href="https://cs161.org/">CS 161</a>: Computer Security -{" "}
            <b>Current</b>
          </li>
          <li>
            <a href="https://inst.eecs.berkeley.edu/~cs188/">CS 188</a>:
            Introduction to Artificial Intelligence - <b>Current</b>
          </li>
          <li>
            <a href="https://cs170.org/">CS 170</a>: Efficient Algorithms and
            Intractable Problems - <b>Current</b>
          </li>
        </ul>
      </div>
    </main>
  );
}
