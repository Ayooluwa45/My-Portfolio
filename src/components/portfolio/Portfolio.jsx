import React from "react";
import IMG1 from "../../assets/my.jpeg";
import IMG2 from "../../assets/my2.jpeg";
import IMG3 from "../../assets/my3.jpeg";
import IMG4 from "../../assets/my4.jpeg";
import IMG5 from "../../assets/my5.jpeg";



import IMG6 from "../../assets/portfolio6.jpg";
import "./Portfolio.css";

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Using Github REST API to search users and display info.',
    github: "https://github.com/Ayooluwa45/Github-Finder",
    demo: "https://dribbble.com/shots/10410812-GitHub-Homepage",
  },
  {
    id: 2,
    image: IMG2,
    title: "A house market place app where you can rent amd sell your house.",
    github: "https://github.com/Ayooluwa45/house-marketplace-project",
    demo: "https://drible.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 3,
    image: IMG3,
    title: "An app where you can register and create viewer ticket using MERN Stack.",
    github: "https://github.com/Ayooluwa45/Support-Desk",
    demo: "https://dribbble.com/shots/4571422-Joany-Support",
  },
  {
    id: 4,
    image: IMG4,
    title: "A responsive static food website page using Html, Css and Javascript",
    github: "ttps://github.com/Ayooluwa45/food-website",
    demo: "https://drible.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 5,
    image: IMG5,
    title: "This app is created to test my Javascript knowledge",
    github: "https://github.com/Ayooluwa45/Score-Project",
    demo: "https://dribbble.com/shots/17238538-Pivot-Project-Management-Brand",
  },

  {
    id: 6,
    image: IMG6,
    title: "",
    github: "https://github.com",
    demo: "https://drible.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolioContainer">
        {data.map(({ id, image, title, github, demo }) => (
          <article className="portfolioItem" key={id}>
            <div className="portfolioItemImg">
              <img src={image} alt='' />
            </div>
            <h3>{title}</h3>
            <div className="portfolioCta">
              <a href={github} className="btn" target="_blank">
                Github
              </a>
              <a href={demo} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
