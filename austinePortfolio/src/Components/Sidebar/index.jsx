import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import LogoSub from '../../assets/images/logo_sub.png'

const Sidebar = () => {
  return (
    <div className="w-24 h-screen bg-zinc-900 justify-center py-6">
      <Link to="/">
        <img src={LogoS} alt="logo" className="w-12 h-auto m-auto" />
        <img src={LogoSub} alt="ausine" className="w-18 h-auto py-2" />
      </Link>
<nav>
   <NavLink className='active' exact="true" to="/">
        <FontAwesomeIcon  icon={faHome} />
      </NavLink>
      <NavLink  activeclassname='active' className='about-link' exact="true" to="/about">
        <FontAwesomeIcon icon={faUser} />
      </NavLink>
      <NavLink  activeclassname='active' className='contact-link' exact="true" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} />
      </NavLink> 
</nav>
      
    </div>
  )
}

export default Sidebar
