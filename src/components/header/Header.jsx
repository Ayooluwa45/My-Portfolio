import CTA from './CTA'
import './header.css'
import HeaderSocials from './HeaderSocials'
import ME from "../../assets/image.jpeg";

function Header() {
  return (
  <header>
    <div className='container header_container'>
      <h5>Hello I am </h5>
      <h1>EMMANUEL SANNI</h1>
      <h5 className='text-light'>A Junior React Developer</h5>
      <CTA />
      <HeaderSocials/>
      
      <div className="me">
        <img src={ME} alt="ME" />
      </div>
      <a href="#contact" className="scroll__down">Scroll Down</a>
    
      </div>
 
  </header>
  )
}

export default Header