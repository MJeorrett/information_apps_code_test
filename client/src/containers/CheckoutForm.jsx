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
      phone: ""
    }
    this.handleUpdate = this.handleUpdate.bind( this )
  }

  handleUpdate( fieldName, newValue ) {
    const stateDiff = {}
    stateDiff[fieldName] = newValue
    this.setState( stateDiff )
  }

  render() {
    return (
      <div id="main-container">
        <h1>Checkout Form</h1>
        <PersonalDetails
          first_name={ this.state.first_name }
          last_name={ this.state.last_name }
          email={ this.state.email }
          phone={ this.state.phone }
          onUpdate={ this.handleUpdate }
        />
        <AddressDetails />
        <div className="section-container">
          <button type="submit">Checkout</button>
        </div>
      </div>
    )
  }

}

export default CheckoutForm
