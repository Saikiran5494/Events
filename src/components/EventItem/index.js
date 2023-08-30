// Write your code here
import './index.css'

const EventItem = props => {
  const {item, iconClicked, isActive} = props
  const {imageUrl, name, location, id} = item
  const imageCls = isActive ? 'image-active' : 'image'

  const buttonClicked = () => {
    iconClicked(id)
  }

  return (
    <li className="list-container">
      <button type="button" className="button" onClick={buttonClicked}>
        <img src={imageUrl} alt="event" className={imageCls} />
      </button>
      <p className="name">{name}</p>
      <p className="name">{location}</p>
    </li>
  )
}

export default EventItem
