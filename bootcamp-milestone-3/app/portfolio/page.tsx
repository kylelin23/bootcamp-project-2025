import Link from "next/link";
import style from "./portfolio.module.css"
import Project from "../../components/project"
import projects from "../portfolioData"

export default function Portfolio() {
  return (
    <div>
        <div className = {style.gradientContainer}>
            <h1 className = {style.pageTitle}>Portfolio</h1>
        </div>
        <div className = {style.project}>
            {projects.map(project =>
                <Project
                title = {project.title}
                tech = {project.tech}
                description = {project.description}
                image = {project.image}
                imageAlt = {project.imageAlt}
                imageLink = {project.imageLink}
                imageWidth = {project.imageWidth}
                key = {project.key}
                />
            )}
        </div>
    </div>
  );
}
