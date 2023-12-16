import { Link } from "react-router-dom";
import "../css/Navbar.css";
import useLocalStorageState from "use-local-storage-state";
import { FaLightbulb } from "react-icons/fa";

function Navbar({ curPage }) {
  const [theme, setTheme] = useLocalStorageState("theme", "Dark");
  return (
    <div className="bar">
      <div className="group">
        <Link
          to="/"
          className={curPage === "Home" ? "button-active" : "button"}
        >
          Home
        </Link>
        <Link
          to="/projects"
          className={curPage === "Projects" ? "button-active" : "button"}
        >
          Projects
        </Link>
        <Link
          to="/blog"
          className={curPage === "Blog" ? "button-active" : "button"}
        >
          Blog
        </Link>
      </div>
      <div className="group">
        <div
          className="theme-button"
          unselectable="on"
          onClick={() => {
            setTheme(theme === "Dark" ? "Light" : "Dark");
          }}
        >
          <FaLightbulb className="theme-icon" />
          {theme}
        </div>
        <div className="name">Daniel Liu</div>
      </div>
    </div>
  );
}

export default Navbar;
