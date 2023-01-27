import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/GDC-Projet.png'
import IMG2 from '../../assets/MORNINGNEWS-Projet.png'
import IMG3 from '../../assets/LOCAPIC-Projet.png'
import IMG4 from '../../assets/MYMOVIZ-Projet.png'
import IMG5 from '../../assets/FACEUP-Projet.png'


const Portfolio = () => {
  return (
    <div>
      <section id='portfolio'>
        <h5>Mes Travaux</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">

          <article className="portfolio__item">
            <div className="portfolio_item-image">
              <img src={IMG1} alt="GDC" />
            </div>
            <h3>GOOD DADDY CRYPTO - APPLI REACT NATIVE</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/SjEDDA95/goodDaddyCryptoFRONTEND" className='btn' target='__blank'>FRONTEND</a>
            <a href="https://github.com/SjEDDA95/goodDaddyCryptoBACKEND" className='btn' target='__blank'>BACKEND</a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio_item-image">
              <img src={IMG2} alt="GDC" />
            </div>
            <h3>Morning News</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/SjEDDA95/MorningNewsCapsule" className='btn' target='__blank'>Github</a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio_item-image">
              <img src={IMG3} alt="GDC" />
            </div>
            <h3>LOCAPIC - Appli mobile de géolocalisation et IA</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/SjEDDA95/LocaPicCapsule" className='btn' target='__blank'>Github</a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio_item-image">
              <img src={IMG4} alt="GDC" />
            </div>
            <h3>MYMOVIZ - Appli react web se basant sur netflix</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/SjEDDA95/MyMovizCapsule" className='btn' target='__blank'>Github</a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio_item-image">
              <img src={IMG5} alt="GDC" />
            </div>
            <h3>FaceUP - Appli mobile BDD et IA</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/SjEDDA95/FaceUpCapsule" className='btn' target='__blank'>Github</a>
            </div>
          </article>

        </div>
      </section>
    </div>
  )
}

export default Portfolio
