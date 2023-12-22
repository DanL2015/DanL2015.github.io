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
        <Link
          to="/typing"
          className={curPage === "Typing" ? "button-active" : "button"}
        >
          Typing
        </Link>
      </div>
      <div className="group">
        <div
          className="theme-button"
          unselectable="on"
          onClick={() => {
            setTheme(theme === "Light" ? "Dark" : "Light");
          }}
        >
          <FaLightbulb className="theme-icon" />
          {theme || "Dark"}
        </div>
        <div className="name">Daniel Liu</div>
      </div>
    </div>
  );
}

export default Navbar;
