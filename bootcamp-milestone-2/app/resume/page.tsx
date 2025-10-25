import style from "./resume.module.css";

export default function Resume() {
  return (
    <div className="resume">
      <div className="gradient-container">
        <h1 className="page-title">Resume</h1>
      </div>

      <div className="resume-info-container">
        <div className="resume-button-container">
          <a className="resume-button" href="assets/resume.pdf">
            Download Resume
          </a>
        </div>

        <div className="entry">
          <p className="section-title">Education</p>
          <div className="schools">
            <div className="outer-container">
              <div className="school-container">
                <img
                  src="assets/logos/calPolyLogo.jpg"
                  alt="Cal Poly Logo"
                  width={300}
                />
                <div className="school-details">
                  <p className="school-name">
                    California Polytechnic State University San Luis Obispo
                  </p>
                  <p className="school-description">
                    <strong>Concentration: </strong>Bachelor of Science Computer
                    Science
                  </p>
                  <p className="school-description">
                    <strong>Expected Graduation Date: </strong>May 2027
                  </p>
                  <p className="school-description">
                    <strong>Coursework: </strong>Data Structures, Introduction
                    to Computer Organization, Object Oriented Programming,
                    Discrete Structures, Systems Programming, Design and
                    Analysis of Algorithms, Intro to Database Systems
                  </p>
                  <p className="school-description">
                    <strong>Relevant Projects: </strong>Adventure game made in
                    Java including polymorphism and class inheritance and rental
                    review app made with React, Express, and MongoDB
                  </p>
                </div>
              </div>
            </div>

            <div className="outer-container">
              <div className="school-container">
                <img
                  src="assets/logos/ntuLogo.jpeg"
                  alt="NTU Logo"
                  width={300}
                />
                <div className="school-details">
                  <p className="school-name">Nanyang Technological University</p>
                  <p className="school-description">
                    <strong>Term: </strong>Summer 2025 Study Abroad
                  </p>
                  <p className="school-description">
                    <strong>Coursework: </strong>Cybersecurity (learned about
                    cyberattacks and encryption algorithms)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="entry">
          <p className="section-title">Skills</p>

          <p className="skill-section-title">Programming Languages</p>
          <div className="skills">
            <div className="skill">
              <img
                src="assets/logos/python-logo-only.png"
                height="100px"
                alt="Python Logo"
              />
              Python
            </div>
            <div className="skill">
              <img
                src="assets/logos/javaLogo.png"
                height="100px"
                alt="Java Logo"
              />
              Java
            </div>
            <div className="skill">
              <img src="assets/logos/cLogo.png" height="100px" alt="C Logo" />
              C
            </div>
            <div className="skill">
              <img
                src="assets/logos/javascriptLogo.png"
                height="100px"
                alt="JavaScript Logo"
              />
              JavaScript
            </div>
            <div className="skill">
              <img
                src="assets/logos/typescriptLogo.png"
                height="100px"
                alt="TypeScript Logo"
              />
              TypeScript
            </div>
          </div>

          <p className="skill-section-title">Front-End</p>
          <div className="skills">
            <div className="skill">
              <img
                src="assets/logos/reactNativeIcon.png"
                height="100px"
                alt="React Native Logo"
              />
              React Native
            </div>
            <div className="skill">
              <img
                src="assets/logos/reactNativeIcon.png"
                height="100px"
                alt="React Logo"
              />
              React
            </div>
            <div className="skill">
              <img
                src="assets/logos/viteLogo.png"
                height="100px"
                alt="Vite Logo"
              />
              Vite
            </div>
            <div className="skill">
              <img
                src="assets/logos/htmlIcon.png"
                height="100px"
                alt="HTML Logo"
              />
              HTML
            </div>
            <div className="skill">
              <img
                src="assets/logos/cssIcon.png"
                height="100px"
                alt="CSS Logo"
              />
              CSS
            </div>
            <div className="skill">
              <img
                src="assets/logos/figmaIcon.png"
                height="100px"
                alt="Figma Logo"
              />
              Figma
            </div>
          </div>

          <p className="skill-section-title">Back-End</p>
          <div className="skills">
            <div className="skill">
              <img
                src="assets/logos/supabase-logo-icon.png"
                height="100px"
                alt="Supabase Logo"
              />
              Supabase
            </div>
            <div className="skill">
              <img
                src="assets/logos/postgresqlLogo.png"
                height="100px"
                alt="PostgreSQL Logo"
              />
              PostgreSQL
            </div>
            <div className="skill">
              <img
                src="assets/logos/mongoDBLogo.png"
                height="100px"
                alt="MongoDB Logo"
              />
              MongoDB
            </div>
          </div>

          <p className="skill-section-title">Other</p>
          <div className="skills">
            <div className="skill">
              <img
                src="assets/logos/gitLogo.png"
                height="100px"
                alt="Git Logo"
              />
              Git
            </div>
            <div className="skill">
              <img
                src="assets/logos/github-mark.png"
                height="100px"
                alt="GitHub Logo"
              />
              GitHub
            </div>
          </div>

          <p className="skill-section-title">Certifications</p>
          <div className="skills">
            <div className="skill">
              <img
                src="assets/logos/awsIcon.png"
                height="100px"
                alt="AWS Logo"
              />
              AWS Certified Cloud Practitioner
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
