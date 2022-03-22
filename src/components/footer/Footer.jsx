import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import './Footer.css'

function Footer() {

    
  return (
    
    <footer>
      <a href="#" className='footerLogo'>PRODIGY</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className='footerSocials'>
          <a href="https://facebook.com"><FaFacebook/></a>
          <a href="https://instagram.com"><FaInstagram/></a>
          <a href="https://twitter.com"><FaTwitterSquare/></a>
        </div>

        <div className='footerCopyright'>
          <small>
            &copy; PRODIGY. All rights reserved. 
          </small>
        </div>
    </footer>
  )
}

export default Footer