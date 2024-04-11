import { FaChevronRight } from "react-icons/fa";
import projects from "./projects.json";

function Projects() {
  var projs = JSON.parse(JSON.stringify(projects));
  return (
    <main className="content-container">
      {projs &&
        projs.map((section, index) => {
          var words = section.section.split(" ");
          return (
            <div className="section" key={index}>
              <div className="flex-container justify-center">
                <h1 className="text-b3">{words[0]}&nbsp;</h1>
                <h1>{words.slice(1).join(" ")}</h1>
              </div>
              {section.projects &&
                section.projects.map((project, index) => {
                  return (
                    <a
                      className="cursor-pointer"
                      href={project.link}
                      key={index}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <div className="section-outline">
                        <div className="flex-container flex-col md:flex-row">
                          <div className="text-blue text-2xl">
                            {project.name}
                          </div>
                          <div className="flex-container m-2 justify-center">
                            {project.skills &&
                              project.skills.map((skill, index) => {
                                return (
                                  <div
                                    className="skill-container"
                                    key={index}
                                  >
                                    {skill}
                                  </div>
                                );
                              })}
                          </div>
                          <FaChevronRight className="hidden md:flex"></FaChevronRight>
                        </div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: project.description,
                          }}
                        ></div>
                      </div>
                    </a>
                  );
                })}
            </div>
          );
        })}
    </main>
  );
}

export default Projects;
