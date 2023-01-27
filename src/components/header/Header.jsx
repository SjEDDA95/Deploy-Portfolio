import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/chef de projet.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <div>
      <header>
        <div className="container header__container">
          <h5>Bonjour je suis</h5>
          <h1>Skander JEDDA</h1>
          <h5 className="text-light">Développeur JS Fullstack</h5>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
      </header>
    </div>
  )
}

export default Header
