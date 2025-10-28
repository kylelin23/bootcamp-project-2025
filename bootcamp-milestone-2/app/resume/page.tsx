import Link from "next/link";
import style from "./resume.module.css";

export default function Resume() {
  return (
    <div className={style.resume}>
      <div className={style.gradientContainer}>
        <h1 className={style.pageTitle}>Resume</h1>
      </div>

      <div className={style.resumeInfoContainer}>
        <div className={style.resumeButtonContainer}>
          <Link className={style.resumeButton} href="assets/resume.pdf">
            Download Resume
          </Link>
        </div>

        <div className={style.entry}>
          <p className={style.sectionTitle}>Education</p>
          <div className={style.schools}>
            <div className={style.outerContainer}>
              <div className={style.schoolContainer}>
                <img
                  src="assets/logos/calPolyLogo.jpg"
                  alt="Cal Poly Logo"
                  width={300}
                />
                <div className={style.schoolDetails}>
                  <p className={style.schoolName}>
                    California Polytechnic State University San Luis Obispo
                  </p>
                  <p className={style.schoolDescription}>
                    <strong>Concentration: </strong>Bachelor of Science Computer
                    Science
                  </p>
                  <p className={style.schoolDescription}>
                    <strong>Expected Graduation Date: </strong>May 2027
                  </p>
                  <p className={style.schoolDescription}>
                    <strong>Coursework: </strong>Data Structures, Introduction
                    to Computer Organization, Object Oriented Programming,
                    Discrete Structures, Systems Programming, Design and
                    Analysis of Algorithms, Intro to Database Systems
                  </p>
                  <p className={style.schoolDescription}>
                    <strong>Relevant Projects: </strong>Adventure game made in
                    Java including polymorphism and class inheritance and rental
                    review app made with React, Express, and MongoDB
                  </p>
                </div>
              </div>
            </div>

            <div className={style.outerContainer}>
              <div className={style.schoolContainer}>
                <img
                  src="assets/logos/ntuLogo.jpeg"
                  alt="NTU Logo"
                  width={300}
                />
                <div className={style.schoolDetails}>
                  <p className={style.schoolName}>
                    Nanyang Technological University
                  </p>
                  <p className={style.schoolDescription}>
                    <strong>Term: </strong>Summer 2025 Study Abroad
                  </p>
                  <p className={style.schoolDescription}>
                    <strong>Coursework: </strong>Cybersecurity (learned about
                    cyberattacks and encryption algorithms)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.entry}>
          <p className={style.sectionTitle}>Skills</p>

          <p className={style.skillSectionTitle}>Programming Languages</p>
          <div className={style.skills}>
            <div className={style.skill}>
              <img
                src="assets/logos/python-logo-only.png"
                width = {100}
                alt="Python Logo"
              />
              Python
            </div>
            <div className={style.skill}>
              <img
                src="assets/logos/javaLogo.png"
                width = {100}
                alt="Java Logo"
              />
              Java
            </div>
            <div className={style.skill}>
              <img
                src="assets/logos/cLogo.png"
                width = {100}
                alt="C Logo"
              />
              C
            </div>
            <div className={style.skill}>
              <img
                src="assets/logos/javascriptLogo.png"
                width = {100}
                alt="JavaScript Logo"
              />
              JavaScript
            </div>
            <div className={style.skill}>
              <img
                src="assets/logos/typescriptLogo.png"
                width = {100}
                alt="TypeScript Logo"
              />
              TypeScript
            </div>
          </div>

          <p className={style.skillSectionTitle}>Front-End</p>
          <div className={style.skills}>
            <div className={style.skill}>
              <img
                src="assets/logos/reactNativeIcon.png"
                width = {100}
                alt="React Native Logo"
              />
              React Native
            </div>
            <div className={style.skill}>
              <img
                src="assets/logos/reactNativeIcon.png"
                width = {100}
                alt="React Logo"
              />
              React
            </div>
            <div className={style.skill}>
              <img
                src="assets/logos/viteLogo.png"
                width = {100}
                alt="Vite Logo"
              />
              Vite
            </div>
            <div className={style.skill}>
              <img
                src="assets/logos/htmlIcon.png"
                width = {100}
                alt="HTML Logo"
              />
              HTML
            </div>
            <div className={style.skill}>
              <img
                src="assets/logos/cssIcon.png"
                width = {100}
                alt="CSS Logo"
              />
              CSS
            </div>
            <div className={style.skill}>
              <img
                src="assets/logos/figmaIcon.png"
                width = {100}
                alt="Figma Logo"
              />
              Figma
            </div>
          </div>

          <p className={style.skillSectionTitle}>Back-End</p>
          <div className={style.skills}>
            <div className={style.skill}>
              <img
                src="assets/logos/supabase-logo-icon.png"
                width = {100}
                alt="Supabase Logo"
              />
              Supabase
            </div>
            <div className={style.skill}>
              <img
                src="assets/logos/postgresqlLogo.png"
                width = {100}
                alt="PostgreSQL Logo"
              />
              PostgreSQL
            </div>
            <div className={style.skill}>
              <img
                src="assets/logos/mongoDBLogo.png"
                width = {100}
                alt="MongoDB Logo"
              />
              MongoDB
            </div>
          </div>

          <p className={style.skillSectionTitle}>Other</p>
          <div className={style.skills}>
            <div className={style.skill}>
              <img
                src="assets/logos/gitLogo.png"
                width = {100}
                alt="Git Logo"
              />
              Git
            </div>
            <div className={style.skill}>
              <img
                src="assets/logos/github-mark.png"
                width = {100}
                alt="GitHub Logo"
              />
              GitHub
            </div>
          </div>

          <p className={style.skillSectionTitle}>Certifications</p>
          <div className={style.skills}>
            <div className={style.skill}>
              <img
                src="assets/logos/awsIcon.png"
                width = {100}
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
