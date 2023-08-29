import {Component} from 'react'
import EventItem from '../EventItem'
import './index.css'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]

class Events extends Component {
  state = {active: 'INITIAL'}

  iconClicked = status => {
    this.setState({active: status})
  }

  renderNoActive = () => (
    <div className="registration-container">
      <p className="heading">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  renderYetToRegister = () => (
    <div className="registration-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="image"
      />
      <p className="paragraph">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.{' '}
      </p>
      <button type="button" className="reg-button">
        Register Here
      </button>
    </div>
  )

  renderRegisteredEvent = () => (
    <div className="registration-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="image"
      />
      <h1 className="heading">You have already registered for the event</h1>
    </div>
  )

  renderRegistrationClosed = () => (
    <div className="registration-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="image"
      />
      <h1 className="heading">Registrations Are Closed Now!</h1>
      <p className="paragraph">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  renderActive = () => {
    const {active} = this.state

    switch (active) {
      case 'YET_TO_REGISTER':
        return this.renderYetToRegister()
      case 'REGISTERED':
        return this.renderRegisteredEvent()
      case 'REGISTRATIONS_CLOSED':
        return this.renderRegistrationClosed()
      default:
        return this.renderNoActive()
    }
  }

  render() {
    return (
      <div className="bg-container">
        <div className="events-container">
          <h1 className="events-heading">Events</h1>
          <ul className="cards-item-container">
            {eventsList.map(eachItem => (
              <EventItem
                item={eachItem}
                key={eachItem.id}
                iconClicked={this.iconClicked}
              />
            ))}
          </ul>
        </div>
        {this.renderActive()}
      </div>
    )
  }
}

export default Events
