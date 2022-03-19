import CTA from './CTA'
import './header.css'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
  <header>
    <div className='container header_container'>
      <h5>Hello I am </h5>
      <h1>EMMANUEL SANNI</h1>
      <h5 className='text-light'>React Developer</h5>
      <CTA />
      <HeaderSocials/>
    </div>
 
  </header>
  )
}

export default Header