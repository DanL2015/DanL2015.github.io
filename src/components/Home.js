import Navbar from "./Navbar";
import "../css/Page.css";
import Right from "./Right";
import useLocalStorageState from "use-local-storage-state";

function Home() {
  const [theme, setTheme] = useLocalStorageState("theme", "Dark");
  return (
    <div className="background" data-theme={theme}>
      <Navbar curPage="Home" />
      <div className="h-container">
        <div className="l-container">
          <div className="section">
            <h1>About</h1>
            <hr />
            <p>
              Welcome to my website! My name is Daniel Liu, and I'm a Sophmore
              at UC Berkeley majoring in Computer Science (and maybe Economics
              in the future). I grew up in the California East Bay region.
            </p>
            <p>
              Programming is both my hobby and passion, and I'm always looking
              to expand my programming skills. I'm interested in a variety of
              coding aspects, from website and software development to Linux. My
              favorite language is C++ (since it was my first language), but I'm
              always interested in learning more!
            </p>
            <p>
              Besides simply coding, I enjoy swimming in my spare time. In high
              school, I used to be a part of the Varsity team and specialized in
              breaststroke, but now I mainly swim just for fun and to stay
              healthy.
            </p>
          </div>
          <div className="section">
            <h1>Classes</h1>
            <hr></hr>
            <ul>
              <li>
                <a href="https://www.data8.org/">DATA 8</a>: Foundations of Data
                Science - <b>A+</b>
              </li>
              <li>
                <a href="https://www.stat20.org/">STAT 20</a>: Introduction to Probability and Statistics - <b>A+</b>
              </li>
              <li>
                <a href="https://math.berkeley.edu/courses/choosing/lowerdivcourses/math54">
                  MATH 54
                </a>
                : Linear Algebra and Differential Equations - <b>A+</b>
              </li>
              <li>
                <a href="https://fullstackdecal.com/">CS 198-199</a>:
                Introduction to Full Stack Development - <b>P</b>
              </li>
              <li>
                <a href="https://cs61a.org/">CS 61A</a>: The Structure and
                Interpretation of Computer Programs - <b>A+</b>
              </li>
              <li>
                <a href="https://datastructur.es">CS 61B</a>: Data Structures -{" "}
                <b>A+</b>
              </li>
              <li>
                <a href="https://www.eecs70.org/">CS 70</a>: Discrete
                Mathematics and Probability Theory - <b>A</b>
              </li>
              <li>
                <a href="https://www.cs61c.org/">CS 61C</a>: Great Ideas in Computer Architecture - <b>A+</b>
              </li>
              <li>
                <a href="https://ds100.org/">Data 100</a>: Principles and Techniques in Data Science - <b>Current</b>
              </li>
              <li>
                <a href="https://cs161.org/">CS 161</a>: Computer Security - <b>Current</b>
              </li>
              <li>
                <a href="https://inst.eecs.berkeley.edu/~cs188/">CS 188</a>: Introduction to Artificial Intelligence - <b>Current</b>
              </li>
              <li>
                <a href="https://cs170.org/">CS 170</a>: Efficient Algorithms and Intractable Problems - <b>Current</b>
              </li>
            </ul>
          </div>
        </div>
        <Right></Right>
      </div>
    </div>
  );
}

export default Home;
