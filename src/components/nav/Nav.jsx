import React from 'react'
import {FaHome} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {RiContactsFill} from 'react-icons/ri'

function Nav() {
  return (
    <nav>
      <a href="#home"><FaHome/></a>
      <a href="#about"><FaUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><RiContactsFill/></a>
    </nav>
  )
}

export default Nav