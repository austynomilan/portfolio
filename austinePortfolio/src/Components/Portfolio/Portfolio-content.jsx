import './Portfolio-content.scss'
import PortfolioData from '../../Data/Portfolio.json'

const Portfolio_content = () => {
  return (
    <div className="images-container">
      {PortfolioData.portfolio.map((item) => {
        return (
          <div className="image-box" key={item.index}>
            <img
              src={item.cover}
              alt={`portfolio-${item.index}`}
              className="portfolio-image"
            />
            <div className="portfolio-content">
              <h3 className='title'>{item.title}</h3>
              <h4 className='description'>{item.description}</h4>
              <button className='btn' onClick={() => window.open(item.url)}>
                View
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Portfolio_content


