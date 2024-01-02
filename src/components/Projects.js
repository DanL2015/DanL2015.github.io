import Navbar from "./Navbar";
import "../css/Page.css";
import Right from "./Right";
import useLocalStorageState from "use-local-storage-state";

function Projects() {
  const [theme, setTheme] = useLocalStorageState("theme", "Dark");
  return (
    <div className="background" data-theme={theme}>
      <Navbar curPage="Projects" />
      <div className="h-container">
        <div className="l-container">
          <div className="section">
            <h1>Projects</h1>
            <hr></hr>
            <p>
              These are a few personal projects that I have worked on in my free
              time.
            </p>
          </div>

          <div className="section">
            <h1>
              <a
                href="https://github.com/DanL2015/pathfinding-algorithms"
                target="_blank"
                rel="noreferrer"
              >
                Pathfinding Algorithms - C++
              </a>
            </h1>
            <hr></hr>
            <div className="project-container">
              <iframe
                src="https://www.youtube.com/embed/6qfkz1bI73o?si=kFjBfFAMSg8IM4k0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <p>
                I developed a pathfinding algorithm utilizing C++ and SFML to
                incorporate basic graphics capabilities. This interactive
                project allows users to select from a range of pathfinding
                algorithms, including DFS, BFS, Dijkstra, and A*, and apply them
                to either a randomly generated maze or an open area. The
                algorithm visually highlights the visited squares, providing
                insight into their distinct characteristics and behavior.
              </p>
              <p>
                During my journey of learning C++ and algorithms, I embarked on
                this project as a means to solidify my comprehension of
                pathfinding algorithms. Through its implementation, I gained a
                clearer understanding of the intricacies involved in determining
                optimal paths. Furthermore, I acquired proficiency in utilizing
                the SFML library, enabling me to seamlessly integrate simple
                graphics functionalities within the realm of C++.
              </p>
              <p>
                This undertaking proved to be instrumental in deepening my
                knowledge of both programming fundamentals and algorithmic
                problem-solving techniques, equipping me with valuable skills
                and insights applicable to a diverse range of computational
                challenges.
              </p>
            </div>
          </div>

          <div className="section">
            <h1>
              <a
                href="https://github.com/DanL2015/CourseSeatBot"
                target="_blank"
                rel="noreferrer"
              >
                Berkeley Course Seat Bot - Python
              </a>
            </h1>
            <hr></hr>
            <p>
              At UC Berkeley, one of the major issues I have with classes is not
              the difficulty, but the enrollment times. As a Sophomore, I have
              encountered issues with not being able to enroll in classes before
              they fill up, forcing me to change my schedule and my entire
              college plans. However, I discovered from my friends, that people
              are not necessarily enrolling directly from the waitlist to the
              class open spots.
            </p>
            <p>
              Therefore, I have created this Discord bot that checks if there
              are any open seats, and to send a message if there are. It does
              this by fetching the HTML of the Berkeley course catalog, then
              filtering for the seat numbers. This can potentially allow
              students to skip the waitlist and enroll directly into the class,
              saving their class schedules.
            </p>
            <p>
              This is still a work in progress Discord bot, as I am still trying
              to fix the issue with reserved seats and how to represent it by
              the bot.
            </p>
          </div>
        </div>
        <Right></Right>
      </div>
    </div>
  );
}

export default Projects;
