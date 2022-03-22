import React from "react";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import "./Portfolio.css";

const data = [{
  id: 1,
  image: IMG1,
  tite: '',
  github: 'https://github.com',
  demo: 'https://drible.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
},
{
id: 2,
  image: IMG2,
  tite: '',
  github: 'https://github.com',
  demo: 'https://drible.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'},
  {
    id: 3,
      image: IMG3,
      tite: '',
      github: 'https://github.com',
      demo: 'https://drible.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'},
      {
        id: 4,
          image: IMG4,
          tite: '',
          github: 'https://github.com',
          demo: 'https://drible.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'},
          {
            id: 5,
              image: IMG5,
              tite: '',
              github: 'https://github.com',
              demo: 'https://drible.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'},
            
              {
                id: 6,
                  image: IMG6,
                  tite: '',
                  github: 'https://github.com',
                  demo: 'https://drible.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'},
                
]

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolioContainer">
        {data.map(({id,image,title,github,demo})=>(<article className="portfolioItem" key={id}>
          <div className="portfolioItemImg">
            <img src={image} alt={title} />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolioCta">
            <a href={github}className="btn" target='_blank'>
              Github
            </a>
            <a
              href={demo}
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>))}

      </div>
    </section>
  );
}

export default Portfolio;
