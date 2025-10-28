import Link from "next/link";
import style from "./portfolio.module.css"

export default function Portfolio() {
  return (
    <div>
        <div className = {style.gradientContainer}>
            <h1 className = {style.pageTitle}>Portfolio</h1>
        </div>
        <div className = {style.project}>
            <div className = {style.outerContainer}>
                <div className = {style.projectContainer}>
                    <Link href = "https://ehs-learning-library-pb25.onrender.com">
                        <img className = {style.projectImage} src = "assets/EHSProjectScreenshot.png" alt = "EHS Website Screenshot" width = {300}/>
                    </Link>
                    <div className = {style.projectDetails}>
                        <p className = {style.projectName}>Early Head Start Learning Library</p>
                        <p className = {style.projectDescription}>
                            This is a website for teachers to access a database of best teaching practices
                            for infants and toddlers for the Neighborhood House Association.
                            There are many resources to access teaching strategies from, however
                            this website will be a centralized place to access all of them.
                            The website will accomplish this by fetching, filtering (based off of dropdowns),
                            and displaying data from over 2000 rows of google sheet data.
                            I was the project lead in charge of a group of four
                            (one first year who I mentored in React.js and two UI designers). As a
                            project lead, I led weekly team meetings and assigned work.
                        </p>
                        <p className = {style.projectDescription}><strong>Technologies Used: </strong>React.js, Vite</p>
                        <p>
                            <a className = {style.learnMore} href = "https://ehs-learning-library-pb25.onrender.com">Learn More</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className = {style.projectContainer}>
                <Link href = "https://github.com/kylelin23/catAdoptionApp">
                    <img className = {style.projectImage} src = "assets/catAdoptionAppScreenshot.png" alt = "Cat Adoption App Screenshot" width = {100}/>
                </Link>
                <div className = {style.projectDetails}>
                    <p className = {style.projectName}>Cat Adoption App</p>
                    <p className = {style.projectDescription}>
                        The goal of this app is to let new cat adopters have a more smooth adoption.
                        There are countless things to remember and worry about when adopting a cat,
                        such as what to feed them, whether or not to let them outside, and much more.
                        So, this app's goal is to create a user-friendly way for new cat adopters
                        to easily access reliable information on cat adoption.
                    </p>
                    <p className = {style.projectDescription}><strong>Technologies Used: </strong>React Native, Expo Go</p>
                    <p>
                        <Link className = {style.learnMore} href = "https://github.com/kylelin23/catAdoptionApp">Learn More</Link>
                    </p>
                </div>
            </div>

            <div className = {style.projectContainer}>
                <Link href = "https://github.com/kylelin23/aether">
                    <img className = {style.projectImage} src = "assets/aetherScreenshot.png" alt = "Aether Screenshot" width = {100}/>
                </Link>
                <div className = {style.projectDetails}>
                    <p className = {style.projectName}>Aether</p>
                    <p className = {style.projectDescription}>
                        When college students and young adults enter the adult world,
                        they face many challenges, one of which is financial responsibility.
                        Being a student in college or entering life as an adult allows individuals
                        to spend as much as they like on items such as food, fashion, and accessories.
                        This in turn creates bad spending habits leading to irresponsible and
                        unchecked spending. The purpose of this app is to help control this chaotic spending.
                    </p>
                    <p className = {style.projectDescription}><strong>Technologies Used: </strong>React Native, Expo Go, Supabase</p>
                    <p>
                        <Link className = {style.learnMore} href = "https://github.com/kylelin23/aether">Learn More</Link>
                    </p>
                </div>
            </div>

            <div className = {style.projectContainer}>
                <Link href = "index.html">
                    <img className = {style.projectImage} src = "assets/personal-website.png" alt = "Personal Website Screenshot" width = {300}/>
                </Link>
                <div className = {style.projectDetails}>
                    <p className = {style.projectName}>Personal Website</p>
                    <p className = {style.projectDescription}>
                        This is a personal website built using the Hack4Impact Starter Pack!
                        The goal of this website is to showcase who I am and my skills as
                        a software engineer. Features of the website include an about me page,
                        my resume, a blog, a portfolio, and a contact page in case you ever
                        need to contact me!
                    </p>
                    <p>
                        <a className = {style.learnMore} href = "index.html">Learn More</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}
