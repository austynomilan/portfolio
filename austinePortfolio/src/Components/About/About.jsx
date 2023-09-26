import './About.scss'
import Animated from '../AnimatedLetters/Animated'
import AtomLoader from 'react-loaders-kit/lib/atom/AtomLoader'

import { useEffect, useState } from 'react'
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaGithub,
  FaWordpress,
  FaJsSquare,
} from 'react-icons/fa'

const About = () => {
  const titleArray = 'About me'.split('')
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

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <Animated
              letterClass={letterClass}
              strArray={titleArray}
              idx={15}
            />
          </h1>
          <p>
            Hello! I'm Odoh Augustine, a mechanical engineering graduate turned
            frontend developer. My passion for coding led me to explore a
            diverse set of technologies, including C, JavaScript, React,
            Next.js, Tailwind CSS, CSS, Material-UI (MUI), and Git. With a
            strong foundation in engineering problem-solving and a knack for
            creativity, I've found the perfect fusion of logic and design in web
            development.
          </p>
          <p>
            I stand out with my unwavering commitment to learning and adapting
            in the dynamic tech world. Instead of being daunted by the
            ever-changing tech landscape, I embrace it with curiosity. Whether
            it's conquering complex algorithms or perfecting user interfaces, I
            approach every challenge with enthusiasm. I'm not just a developer;
            I'm a rapid learner, always pursuing new skills and pushing the
            limits of frontend development possibilities.
          </p>
          <p>
            Beyond coding, my Engineering background instilled a structured
            mindset, attention to detail, and a focus on user experience. I'm
            excited to collaborate, innovate, and shape the digital future.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FaHtml5 color="#DD0031" />
            </div>
            <div className="face2">
              <FaCss3 color="#F06529" />
            </div>
            <div className="face3">
              <FaReact color="#28A4D9" />
            </div>
            <div className="face4">
              <FaGithub color="#5ED4FA" />
            </div>
            <div className="face5">
              <FaJsSquare color="#EFD81D" />
            </div>
            <div className="face6">
              <FaWordpress color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <div className="loaderContainer">
        <AtomLoader {...loaderProps} />
      </div>
    </>
  )
}
export default About
