import './Contact.scss'
import Animated from '../AnimatedLetters/Animated'
import AtomLoader from 'react-loaders-kit/lib/atom/AtomLoader'
import { useEffect, useRef, useState } from 'react'
import emailjs from 'emailjs-com'


const About = () => {
  const form = useRef()

  const titleArray = 'Contact me'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')
  const [loading, setLoading] = useState(true)
  const loaderProps = {
    loading,
    size: 53,
    duration: 1,
    colors: ['#5e22f0', '#f6b93b'],
  }

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)

    setTimeout(() => {
      return setLoading(false)
    }, 1000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_aou9xo8',
        'template_ojtca3y',
        form.current,
        'FaY5y4k8sTvEih3II'
      )
      .then(
        (result) => {
          console.log(result.text)
          alert('MAIL SENT')
          window.location.reload(false)
        },
        (error) => {
          console.log(error.text)
          alert('FAILED...', error)
        }
      )
  }


  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <Animated
              letterClass={letterClass}
              strArray={titleArray}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fuga,
            exercitationem enim, consequatur sed facere eveniet modi minus
            laudantium natus perferendis, et quia? Harum, iure. Libero
            temporibus pariatur saepe. Mollitia.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <section className="half">
                  <li>
                    <input type="text" name="name" placeholder="Name" />
                  </li>
                  <li>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </li>
                </section>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input className="btn" type="submit" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Augustine Odoh,
          <br />
          Nigeria,
          <br />
          Beside Gideon Suite, flat No.2 Karshi, FCT, ABuja.
          <br />
          <span>austynomilano77@gmail.com</span>
        </div>
        <div className="map-wrap">
          
        </div>
      </div>
      <div className="loaderContainer">
        <AtomLoader {...loaderProps} />
      </div>
    </>
  )
}
export default About
