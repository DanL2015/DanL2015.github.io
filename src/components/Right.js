import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "../css/Page.css";

function Right() {
  return (
    <div className="r-container">
      <div className="section">
        <h1>Skills</h1>
        <hr></hr>
        <div className="skill-container">
          <div className="skill-l">
            <ul>
              <li>C/C++</li>
              <li>Java</li>
              <li>Python</li>
              <li>Javascript</li>
              <li>RISC-V</li>
              <li>R</li>
            </ul>
          </div>
          <div className="skill-m">
            <ul>
              <li>HTML/CSS</li>
              <li>Node.js</li>
              <li>React.js</li>
              <li>React Native</li>
              <li>MongoDB</li>
              <li>Figma</li>
            </ul>
          </div>
          <div className="skill-r">
            <ul>
              <li>Linux</li>
              <li>Bash</li>
              <li>Lua</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <h1>Contact Me</h1>
        <hr></hr>
        <div className="contact-group">
          <FaGithub className="contact-icon" />
          <a
            href="https://github.com/DanL2015/"
            rel="noreferrer"
            target="_blank"
          >
            Github
          </a>
        </div>
        <div className="contact-group">
          <FaLinkedin className="contact-icon" />
          <a
            href="https://www.aedin.com/in/daniel-liu-2004/"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div className="contact-group">
          <IoMdMail className="contact-icon" />
          <a
            href="mailto:danielliu@berkeley.edu"
            rel="noreferrer"
            target="_blank"
          >
            Email
          </a>
        </div>
        <div className="contact-group">
          <FaDiscord className="contact-icon" />
          <a
            href="https://discord.com/users/330550318305640458"
            rel="noreferrer"
            target="_blank"
          >
            Discord
          </a>
        </div>
      </div>
    </div>
  );
}

export default Right;
