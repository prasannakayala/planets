import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container" data-testid="planets">
      <Slider {...settings}>
        <h1 className="main-heading">PLANETS</h1>
        <div>
          {planetsList.map(planet => (
            <PlanetItem planetDetails={planet} key={planet.id} />
          ))}
        </div>
      </Slider>
    </div>
  )
}

export default PlanetsSlider
