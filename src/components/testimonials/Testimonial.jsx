import React from "react";
import cv1 from "../../assets/Bsc.pdf";
import cv2 from "../../assets/Javascript.pdf";
import cv4 from "../../assets/Html.pdf";
import cv3 from "../../assets/Css.pdf";

import "./Testimonial.css";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    image: cv1,
    detail: "First degree certificate in Remote Sensing and GIS at the Federal University of Technology, Akure ",
    name: "Bsc Certificate",
  },
  {
    image: cv2,
    detail:
      "This certificate indicate the completion of the entire Javscript course on Udemy ",
    name: "Javascript Certificate",
  },
  {
    image: cv3,
    detail:
      "This certificate indicate the completion of the entire CSS course on Udemy ",
    name: "CSS Certificate",
  },
  {
    image: cv4,
    detail:
      "This certificate indicate the completion of the entire HTML course on Udemy ",
    name: "HTML Certificate",
  },
];

function Testimonial() {
  return (
    <section id="section">
      <h2>My Certifications</h2>

      <Swiper
        className="container testimonialContainer"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ image, detail, name }, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="testimonialCta">
                <a href={image} download className="btn btn-primary">
                  {name}
                </a>
              </div>
              <div className="testimonialP">
                {detail}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonial;
