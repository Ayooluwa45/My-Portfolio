import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

function HeaderSocials() {
  return (
    <div className='headerSocials'>
        <a href="https://LinkedIn.com" target='_blank' ><BsLinkedin/></a>
        <a href="https://github.com" target='_blank'><FaGithub/></a>
        <a href="https://dribble.com" target='_blank'><FiDribbble/></a>

    </div>
  )
}

export default HeaderSocials