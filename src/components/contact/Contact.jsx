import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsTwitter } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zjo97tb', 'template_zm1bsda', form.current, 'Eq9tB1cD9zyTgX-36')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };


  return (
    <div>
      <section id='contact'>
        <h5>Apprenez à me connaître</h5>
        <h2>Contactez moi</h2>

        <div className="container contact__container">
          <div className="contact__options">

            <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>skander.jedda95@gmail.com</h5>
              <a href="mailto:skander.jedda95@gmail.com" target="__blank">Envoyer un message</a>
            </article>

            <article className="contact__option">
              <BsTwitter className='contact__option-icon' />
              <h4>Twitter</h4>
              <h5>skanderjeddaDEV</h5>
              <a href="https://twitter.com/skanderjeddaDEV" target="__blank">Envoyer un message</a>
            </article>

            <article className="contact__option">
              <BsWhatsapp className='contact__option-icon' />
              <h4>WhatsApp / Téléphone</h4>
              <h5>0624967321</h5>
              <a href="https://api.whatsapp.com/send?phone=+330624967321" target="__blank">Envoyer un message</a>
            </article>

          </div>
          {/*END OF CONTACT OPTIONS*/}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Votre Nom" required />
            <input type="email" name="email" placeholder="Votre Email" required />
            <textarea name="message" placeholder='Votre Message' rows="7" required></textarea>
            <button type='submit' className='btn btn-primary'>Envoyer le message</button>
          </form> 
        </div>
      </section>
    </div>
  )
}

export default Contact
