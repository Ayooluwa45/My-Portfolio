import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsMessenger } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import './Contact.css'
import emailjs from 'emailjs-com';
import { useRef } from 'react';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4gj3rkk', 'template_mc9nvpd', form.current, 'phnRRYa0ghqEDdB9W')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contactContainer">
        <div className="contactOptions">
          <article className="contactOpt">
            <HiOutlineMail className="contactIcons"/>
            <h4>Email</h4>
            <h5>sanniayooluwa45@gmail.com</h5>
            <a href="mailto:sanniayooluwa45qgmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contactOpt">
            <BsMessenger className="contactIcons"/>
            <h4>Messenger</h4>
            <h5>sanniayooluwa45@gmail.com</h5>
            <a href="https://m.me/sanni.emmanuel3" target='_blank'>Send a message</a>
          </article>

          <article className="contactOpt">
            <FaWhatsapp className="contactIcons"/>
            <h4>Whatsapp</h4>
            <h5>+4915212904698</h5>
            <a href="https://api.whatsapp.com/send?phone=+4915212904698" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Fulll Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="10" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
