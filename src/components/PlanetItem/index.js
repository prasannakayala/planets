import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="planet-container">
      <img src={imageUrl} className="image" alt={`planet ${name}`} />
      <h1 className="name">{name}</h1>
      <p className="info">{description}</p>
    </div>
  )
}

export default PlanetItem
