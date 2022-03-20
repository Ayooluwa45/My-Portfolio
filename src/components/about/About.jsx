import React from "react";
import ME from "../../assets/me-about.jpg";
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ipsum, aperiam ipsa doloribus veniam ratione temporibus? Ipsum facere ab eius dignissimos ullam, repellendus in quia, sint dolores voluptates, tempore laboriosam.
            
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
