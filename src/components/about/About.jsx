import React from "react";
import ME from "../../assets/mine.jpeg";
import{FaAward} from 'react-icons/fa'
import{FaFolderOpen} from 'react-icons/fa'
import './About.css'

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container aboutContainer">
        <div className="aboutMe">
          <div className="aboutMeImage">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="aboutContent">
          <div className="aboutCards">
            <article className="aboutCard">
            <FaAward className="aboutIcons"/>
               <h5>Experience</h5>
               <small>1 year Working </small>
            </article>
            
            

            <article className="aboutCard">
            <FaFolderOpen className="aboutIcons"/>
               <h5>Projects</h5>
               <small>10+ Completed </small>
            </article>
          </div>

          <p>
           I am innovative, creative and optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer with ability to learn and collaborate in rapidly changing environment. I am looking for a challenging position where i can apply my knowledge, develop my skills and contribute to the growth of the organization.
            
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
