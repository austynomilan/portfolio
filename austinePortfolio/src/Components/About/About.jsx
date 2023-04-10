import './About.scss'
import Animated from '../AnimatedLetters/Animated'
import AtomLoader from 'react-loaders-kit/lib/atom/AtomLoader';

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
    const [loading, setLoading] = useState(true);
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
    }, 1000);
  }, [])

 
  return (
    <>
         <div className="container about-page">
      <div className="text-zone">
        <h1>
          <Animated letterClass={letterClass} strArray={titleArray} idx={40} />
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fuga,
          exercitationem enim, consequatur sed facere eveniet modi minus
          laudantium natus perferendis, et quia? Harum, iure. Libero temporibus
          pariatur saepe. Mollitia.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          voluptatem excepturi harum ipsum, molestias autem cumque praesentium
          ipsam atque blanditiis ratione necessitatibus illum tenetur adipisci
          ut nam totam temporibus aut.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          voluptatem dolores itaque consectetur amet aperiam necessitatibus
          quia, libero, suscipit facere non totam, rem voluptate earum
          voluptatum maxime. Totam, dolor quia.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1"  >
            <FaHtml5 color="#DD0031"/>
          </div>
          <div className="face2" >
            <FaCss3 color="#F06529"/>
          </div>
          <div className="face3" >
            <FaReact color="#28A4D9"/>
          </div>
          <div className="face4" >
            <FaGithub color="#5ED4FA"/>
          </div>
          <div className="face5" >
            <FaJsSquare color="#EFD81D"/>
          </div>
          <div className="face6" >
            <FaWordpress color="#EC4D28"/>
          </div>
        </div>
      </div>
    </div>
    <div className='loaderContainer'>
    <AtomLoader  {...loaderProps} />
    </div>
    </>
   
  )
}
export default About
