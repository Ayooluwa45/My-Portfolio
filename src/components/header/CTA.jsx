import cv from "../../assets/cv.pdf";
import me from "../../assets/me.jpeg";

function CTA() {
  return (
    <div>
      <a href={cv} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>

      <div className="me">
        <img src={me} alt="" />
      </div>
      <a href="#contact" className="scroll__down">Scroll Down</a>
    </div>
  );
}

export default CTA;
