import React from "react";
import cv from "../../assets/cv.pdf";
import "./Testimonial.css";

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    
    image: cv,
    detail: "First degree certificate in Remote Sensing loreLorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolores architecto, itaque dignissimos alias voluptas vel deleniti iste laboriosam est autem necessitatibus maxime praesentium officiis corporis harum vero excepturi odit?",
    name: "Bsc Certificate",
  },
  {
    
    image: cv,
    detail: "First degree certificate in Remote Sensing loreLorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    name: "Bsc Certificate",
  },
];

function Testimonial() {
  return (
    <section id="section">
      <h2>My Certifications</h2>

      <Swiper className="container testimonialContainer"
      
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={20}
       slidesPerView={1}
       
       pagination={{ clickable: true }}
     
      
      >

      
    

        {data.map(({ image, detail, name },index) => {
          return(
            <SwiperSlide className="testimonial" key={index}>
            <div className="testimonialCta">
              <a href={image} download className="btn btn-primary">
                {name}
              </a>
             
            </div>

            <p>{detail}</p>
          </SwiperSlide>
          )
        }
          
        )}
      </Swiper>
    </section>
  );
}

export default Testimonial;
