import React from 'react'

import PersonalDetails from './PersonalDetails'
import AddressDetails from './AddressDetails'

class CheckoutForm extends React.Component {

  constructor() {
    super()
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      post_code: "",
      address: "",
      additional_info: ""
    }
    this.handleUpdate = this.handleUpdate.bind( this )
    this.handleSubmitClicked = this.handleSubmitClicked.bind( this )
  }

  handleUpdate( fieldName, newValue ) {
    const stateDiff = {}
    stateDiff[fieldName] = newValue
    this.setState( stateDiff )
  }

  handleSubmitClicked( ev ) {
    ev.preventDefault()
  }

  render() {
    return (
      <div id="main-container">
        <h1>Checkout Form</h1>
        <form>
          <PersonalDetails
            first_name={ this.state.first_name }
            last_name={ this.state.last_name }
            email={ this.state.email }
            phone={ this.state.phone }
            onUpdate={ this.handleUpdate }
          />
          <AddressDetails
            country={ this.state.country }
            city={ this.state.city }
            post_code={ this.state.post_code }
            address={ this.state.address }
            additional_info={ this.state.additional_info }
            onUpdate={ this.handleUpdate }
          />
          <div className="section-container">
            <button type="submit" onClick={ this.handleSubmitClicked }>Checkout</button>
          </div>
        </form>
      </div>
    )
  }

}

export default CheckoutForm
