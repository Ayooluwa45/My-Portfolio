import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsMessenger } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contactContainer">
        <div className="contactOptions">
          <article className="contactOpt">
            <HiOutlineMail />
            <h4>Email</h4>
            <h5>sanniayooluwa45@gmail.com</h5>
            <a href="mailto:sanniayooluwa45qgmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contactOpt">
            <BsMessenger />
            <h4>Messenger</h4>
            <h5>sanniayooluwa45@gmail.com</h5>
            <a href="https://m.me/sanni.emmanuel3" target='_blank'>Send a message</a>
          </article>

          <article className="contactOpt">
            <FaWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+4915212904698</h5>
            <a href="https://api.whatsapp.com/send?phone=+4915212904698" target='_blank'>Send a message</a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Contact;
