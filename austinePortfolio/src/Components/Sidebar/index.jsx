import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoA from '../../assets/images/A.png'
import { FaGithub, FaLinkedinIn, FaTwitter, } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import LogoSub from '../../assets/images/ff.png'
import { useState } from 'react'

const Sidebar = () => {

  const [showNav, setShowNav] = useState(false)

  return (
    <div className="mainContainer w-24 h-screen bg-zinc-900 justify-center py-6">
      <Link className='site-logo' to="/">
        <img src={LogoA} alt="logo" className="w-20 h-auto m-auto" />
        <img src={LogoSub} alt="ausine" className="w-18 h-auto px-2" />
      </Link>
      <nav className={showNav? 'mobile-show' : ''}>
        <NavLink activeclassname="active" exact="true" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="about-link"
          exact="true"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        
        <NavLink
          activeclassname="active"
          className="Portfolio-link"
          exact="true"
          to="/Portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          exact="true"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
        <FontAwesomeIcon 
        onClick={()=>setShowNav(false)}
        className='close-icon'
        icon={faClose}
        size='2x'
        color='#ffd700'
        />
      </nav>
      <ul className='absolute bottom-6 m-6 '>
        <li>
          <a
            href="https://linkedin.com/in/augustine-ogonna-odoh-627b44107"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/austynomilan"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Austynomilan"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
      onClick={()=>setShowNav(true)}
      icon={faBars}
      className='Hamburger'
      />
    </div>
  )
}

export default Sidebar

