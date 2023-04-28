import './index.scss'
import LogoA from '../../assets/images/A.png'

import LogoLe from '../Logo/Logo'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AtomLoader from 'react-loaders-kit/lib/atom/AtomLoader';
import AnimatedLetters from '../AnimatedLetters/Animated'



const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = 'ugustine'.split('')
  const jobArray = 'web developer.'.split('')
  const introArray = 'Hi,'.split('')
  const intoArray_2 = 'i\'m'.split('')

  const LoaderStyle={
    right: -850,
    top: -300
  }
  const [loading, setLoading] = useState(true);
  const loaderProps = {
      loading,
      size: 53,
      duration: 1,
      colors: ['#5e22f0', '#f6b93b'],
  }


useEffect(() => {
     setTimeout(()=>{
       return setLetterClass('text-animate-hover')
    }, 4000)

    setTimeout(() => {
      return setLoading(false)
  }, 1000);
},[])

  return (
    <>
  <div className="container home-page">
      <div className="text-zone absolute text-3xl">
        <h1 className="immediate">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={introArray}
            idx={10}
          />
        </h1>
        <br />
        <h1 className="flex">
          <span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={intoArray_2}
              idx={13}
            />{' '}
            <img src={LogoA} alt="logo" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </span>
        </h1>
        <h1 className="immediate_2">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Frontend Developer | JavaScript Enthusiast | ReactJs | NextJs</h2>
        <Link
          to="/contact"
          className="glow-on-hover font-normal text-sm tracking-widest font-sans no-underline  py-2 px-6"
        >
          CONTACT ME
        </Link>
      </div>
      <LogoLe />
    </div>
    <div className='loaderContainer'>
    <AtomLoader style={LoaderStyle} {...loaderProps} />
    </div>
    
    </>
  
  )
}

export default Home
