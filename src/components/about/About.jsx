import React from 'react'
import './about.css'
import ME from '../../assets/sj.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { AiFillFolderOpen } from 'react-icons/ai'

const About = () => {
  return (
    <div>
      <section id='about'>
        <h5>
          Parcours
        </h5>
        <h2>
          A propos de moi
        </h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ ME } alt="Me" />
            </div>
          </div>
          
          <div className="about__content">
            <div className="about__cards">

              <article className="about__card">
                <FaAward className='about__icon'/>
                <h5>
                  Expérience
                </h5>
                <small>
                  7 mois
                </small>
              </article>

              <article className="about__card">
                <FiUsers className='about__icon'/>
                <h5>
                  Entreprise
                </h5>
                <small>
                  Je souhaite monter mon entreprise plus tard ! 
                </small>
              </article>

              <article className="about__card">
                <AiFillFolderOpen className='about__icon'/>
                <h5>
                  Projets
                </h5>
                <small>
                  10+ projets complétés
                </small>
              </article>
            </div>

            <p>
              Durant mon cursus scolaire, la motivation du monde de l'informatique que m'a donnée mon frère et ma formation à la Capsule en tant que Développeur JS, j'ai eu l'occasion de construire pas mal de projets intéressants qui m'ont permis de m'améliorer et d'en apprendre énormèment sur le monde du développement web et mobile.
            </p>

            <a href="#contact" className='btn btn-primary'>Échanger quelques mots</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
