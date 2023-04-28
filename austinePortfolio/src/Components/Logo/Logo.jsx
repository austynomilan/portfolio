import { useMotionValue, useTransform, motion } from 'framer-motion'
import LogoS from '../../assets/images/A.png'
import './Logo.scss'


const Logo = () => {
  return (
    <div>
      <motion.div
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={0.6}
        className="logo-container"
      >
        <motion.img className="box bounce-1" src={LogoS} alt="letter A" />
      </motion.div>
    </div>
  )
}

export default Logo
