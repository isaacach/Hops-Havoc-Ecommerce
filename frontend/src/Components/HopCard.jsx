import './hopcard.css'

export const HopCard = ({ name, price}) => {
  return (
    <div className="card-wrapper">
      <div className="image"></div>
      <div className="description">
        <p className="name">{ name }</p>
        <p className="price">{ price }</p>
      </div>
    </div>
  )
}
