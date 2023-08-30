// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {active} = props

  const renderNoActive = () => (
    <div className="registration-container">
      <p className="heading">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const renderYetToRegister = () => (
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

  const renderRegisteredEvent = () => (
    <div className="registration-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="image"
      />
      <h1 className="heading">You have already registered for the event</h1>
    </div>
  )

  const renderRegistrationClosed = () => (
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

  const renderActive = () => {
    switch (active) {
      case 'YET_TO_REGISTER':
        return renderYetToRegister()
      case 'REGISTERED':
        return renderRegisteredEvent()
      case 'REGISTRATIONS_CLOSED':
        return renderRegistrationClosed()
      default:
        return renderNoActive()
    }
  }
  return <div className="registration-container">{renderActive()}</div>
}

export default ActiveEventRegistrationDetails
