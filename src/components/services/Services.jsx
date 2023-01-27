import React from 'react'
import './services.css'
import { BsCheck } from 'react-icons/bs'

const Services = () => {
  return (
    <div>
      <section id='services'>
        <h5>Ce que j'offre</h5>
        <h2>Mon profil</h2>

        <div className="container services__container">
          <article className="service">
            <div className="services__head">
              <h3>Design et Frontend</h3>
            </div>

            <ul className="service__list">
              <li>
                <BsCheck className="service__list-icon" />
                <p>Durant ma formation, j'ai pu élaboré en groupe un projet innovant sur le domaine de la crypto-monnaie qui m'a permis d'affiner mon savoir faire sur l'aspect design et frontend. Mes collaborateurs de projet m'ont fait confiance quant à la stylisation de notre application mobile</p>
              </li>
              
              
            </ul>
          </article>

          <article className="service">
            <div className="services__head">
              <h3>Web Development</h3>
            </div>

            <ul className="service__list">
              <li>
                <BsCheck className="service__list-icon" />
                <p>Le JavaScript en lien avec le HTML et le CSS m'ont permis de découvrir un univers de possibilité créatives assez gigantesque, si on additionne à cela le ReactJS et le React Native qui ont été lors de ma formation mes modules favoris, de ce fait je pense que j'ai beaucoup à offrir à une entreprise en recherche d'alternant.</p>
              </li>
              
            </ul>
          </article>

          <article className="service">
            <div className="services__head">
              <h3>Motivation</h3>
            </div>

            <ul className="service__list">
              <li>
                <BsCheck className="service__list-icon" />
                <p>Me considérant comme junior à la recherche d'une alternance, en m'embauchant vous aurez un travailleur acharné qui est prêt à réaliser toutes les missions qu'on lui donne quoi qu'il arrive, le monde du web dév a été ma découverte de l'année 2022 et je souhaite devenir un acteur important de ce milieu.</p>
              </li>
              
            </ul>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Services
