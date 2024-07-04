import "./App.css";
import profile from "./assets/images14.jpg";
function App() {
  let arrayOfExp = [
    {
      experience: "Experience",
      position: "Computer Science Engineer",
      timeSpan: "Medilife, 2023 - 2024",
      description: ` Strong analytical and problem-solving skills, with a keen
        ability to translate complex requirements into scalable and
        efficient solutions. Excellent communicator and collaborator,
        adept at working with cross-functional teams to achieve
        project goals and deliver high-quality results..`,
    },
    {
      experience: "Education",
      position: "Computer Science Engineer",
      timeSpan: "University of Management and technology 2019 - 2023",
      description: ` Programming Languages: Java, Python, C++, JavaScript, SQL
        Frameworks and Tools: React, Node.js, Django, Spring Boot,
        Docker, Kubernetes Software Development: Full-Stack
        Development, API Development, Agile Methodologies, Version
        Control (Git) System Design: Database Design, Network
        Security, Cloud Computing (AWS, Azure) Project Management:
        Requirement Analysis, Task Prioritization, Team Leadership.`,
    },
  ];
  let skillsArr = ["C++", "Python", "React"];
  return (
    <div className="layout d-flex container">
      <div className="row">
        <div className="left text-center bg-light p-4 col-md-4">
          <div>
            <img src={profile} alt="Wardah" className="picture" />
          </div>
          <div>
            <h2 className="text-primary">Wardah Ali</h2>
            <p>BS-Computer Science</p>
          </div>
          <div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Email:{" "}
                <a href="mailto:Wardahali284@gmail.com">
                  Wardahali284@gmail.com
                </a>
              </li>
              <li className="list-group-item">
                Phone: <a href="tel:+923484600213">+923484600213</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right col-md-8 bg-white p-4">
          <div className="col-md-8 bg-white p-4">
            <h3 className="text-primary">About Me</h3>
            <p>
              Highly skilled and motivated Computer Science Engineer with over
              [X] years of experience in software development, system design,
              and project management. Proficient in a wide range of programming
              languages, frameworks, and tools, including Java, Python, C++,
              JavaScript, and SQL. Proven track record of developing innovative
              solutions, optimizing system performance, and leading successful
              projects from inception to completion.
            </p>

            {arrayOfExp.map((item, index) => {
              return (
                <div key={index}>
                  <h3 className="text-primary">{item.experience}</h3>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <h4 className="text-secondary">{item.position}</h4>
                      <p>{item.timeSpan}</p>
                      <p>{item.description}</p>
                    </li>
                  </ul>
                </div>
              );
            })}
            <h3 className="text-primary">Skills</h3>
            <ul className="list-inline">
              {skillsArr.map((item, index) => {
                return (
                  <li
                    className="list-inline-item badge badge-primary p-2"
                    key={index}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
