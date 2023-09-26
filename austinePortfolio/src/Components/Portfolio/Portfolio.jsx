import './Portfolio.scss'
import { useEffect, useState } from 'react'
import AtomLoader from 'react-loaders-kit/lib/atom/AtomLoader'
import Animated from '../AnimatedLetters/Animated'
import Portfolio_content from './Portfolio-content'

const Portfolio = () => {
  const portfolioArray = 'Portfolio'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')

  const [loading, setLoading] = useState(true)
  const loaderProps = {
    loading,
    size: 53,
    duration: 1,
    colors: ['#5e22f0', '#f6b93b'],
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <Animated
              letterClass={letterClass}
              strArray={portfolioArray}
              idx={15}
            />
          </h1>
        </div>
        <div className="project-wrapper">
          <Portfolio_content />
        </div>
      </div>

      <div className="loaderContainer">
        <AtomLoader {...loaderProps} />
      </div>
    </>
  )
}

export default Portfolio
