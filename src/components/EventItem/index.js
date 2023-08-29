// Write your code here
import './index.css'

const EventItem = props => {
  const {item, iconClicked} = props
  const {imageUrl, name, location, registrationStatus} = item

  const buttonClicked = () => {
    iconClicked(registrationStatus)
  }

  return (
    <li className="list-container">
      <button type="button" className="button" onClick={buttonClicked}>
        <img src={imageUrl} alt="event" className="image" />
      </button>
      <p className="name">{name}</p>
      <p className="name">{location}</p>
    </li>
  )
}

export default EventItem
