// Write your code here.
import './index.css'

const CardItem = props => {
  const {srcObj} = props
  const {title, description, imgUrl, className} = srcObj

  return (
    <li className={className}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <img src={imgUrl} className="card-image" alt={title} />
    </li>
  )
}

export default CardItem
