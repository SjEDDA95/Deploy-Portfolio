import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <div>
      <section id='experience'>
        <h5>Talents</h5>
        <h2>Mon Expérience</h2>

        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>FRONTEND</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Expérimenté</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermédiaire</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Confirmé</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Bonnes notions</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>React / React Native</h4>
                  <small className='text-light'>Confirmé</small>
                </div>
              </article>
            </div>
          </div>
          
          <div className="experience__backend">
          <h3>BACKEND</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>NodeJS</h4>
                  <small className='text-light'>Intermédiaire</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Intermédiaire</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Débutant</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Débutant</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Notions de bases</small>
                </div>
              </article>
            </div>

          </div>

        </div>
      </section>
    </div>
    
   
  )
}

export default Experience
