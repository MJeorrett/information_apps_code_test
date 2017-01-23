import React from 'react'

import PersonalDetails from './PersonalDetails'
import AddressDetails from './AddressDetails'
import CheckoutButton from '../components/CheckoutButton'
import Validator from '../helpers/Validator'

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
      additional_info: "",
      invalid_fields: [],
      checkout_successfull: false
    }
    this.validations = [
      [ 'first_name', Validator.notBlank ],
      [ 'last_name', Validator.notBlank ],
      [ 'email', Validator.notBlank ],
      [ 'phone', Validator.notBlank ],
      [ 'country', Validator.notBlank ],
      [ 'city', Validator.notBlank ],
      [ 'post_code', Validator.notBlank ],
      [ 'address', Validator.notBlank ],
      [ 'additional_info', Validator.none ]
    ]
    this.handleUpdate = this.handleUpdate.bind( this )
    this.handleCheckoutClicked = this.handleCheckoutClicked.bind( this )
  }

  handleUpdate( fieldName, newValue ) {
    const newInvalidFields = this.state.invalid_fields.slice( 0 )
    const fieldNameIndex = newInvalidFields.indexOf( fieldName )
    if ( fieldNameIndex != -1 ) newInvalidFields.splice( fieldNameIndex, 1 )

    const stateDiff = {}
    stateDiff[fieldName] = newValue
    stateDiff['invalid_fields'] = newInvalidFields

    this.setState( stateDiff )
  }

  handleCheckoutClicked( ev ) {
    ev.preventDefault()
    const newInvalidFields = []
    this.validations.forEach( (validation) => {
      const field = validation[0]
      const validator = validation[1]
      const value = this.state[ field ]
      if ( !validator( value ) ) newInvalidFields.push( field )
    })
    const checkoutSuccessfull = newInvalidFields.length === 0
    this.setState({
      invalid_fields: newInvalidFields,
      checkout_successfull: checkoutSuccessfull
    })
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
            invalidFields={ this.state.invalid_fields }
          />
          <AddressDetails
            country={ this.state.country }
            city={ this.state.city }
            post_code={ this.state.post_code }
            address={ this.state.address }
            additional_info={ this.state.additional_info }
            onUpdate={ this.handleUpdate }
            invalidFields={ this.state.invalid_fields }
          />
        <CheckoutButton
          checkoutSuccessfull={ this.state.checkout_successfull }
          onClick={ this.handleCheckoutClicked }
        />
        </form>
      </div>
    )
  }

}

export default CheckoutForm
