import React from 'react'

import PersonalDetails from './PersonalDetails'
import AddressDetails from './AddressDetails'

class CheckoutForm extends React.Component {

  render() {
    return (
      <div>
        <h1>Checkout Form</h1>
        <PersonalDetails />
        <AddressDetails />
      </div>
    )
  }

}

export default CheckoutForm
