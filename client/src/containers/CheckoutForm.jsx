import React from 'react'

import PersonalDetails from './PersonalDetails'
import AddressDetails from './AddressDetails'
import CheckoutButton from '../components/CheckoutButton'
import Validator from '../helpers/Validator'
import GoogleMapHelper from '../helpers/GoogleMapHelper'

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
      house_number: "",
      address: "",
      additional_info: "",
      latitude: "",
      longitude: "",
      invalid_fields: [],
      checkout_successfull: false,
      address_loading: false
    }
    this.validations = [
      [ 'first_name', Validator.notBlank ],
      [ 'last_name', Validator.notBlank ],
      [ 'email', Validator.notBlank ],
      [ 'phone', Validator.notBlank ],
      [ 'country', Validator.notBlank ],
      [ 'city', Validator.notBlank ],
      [ 'post_code', Validator.notBlank ],
      [ 'house_number', Validator.notBlank ],
      [ 'address', Validator.notBlank ],
      [ 'additional_info', Validator.none ],
      [ 'latitude', Validator.none ],
      [ 'longitude', Validator.none ]
    ]
    this.handleUpdate = this.handleUpdate.bind( this )
    this.handleCheckoutClicked = this.handleCheckoutClicked.bind( this )
  }

  handleUpdate( fieldName, newValue ) {
    if ( fieldName === 'post_code' ) {
      this.fetchAddressForPostCode( newValue )
    }
    else {
      const newInvalidFields = this.state.invalid_fields.slice( 0 )
      const fieldNameIndex = newInvalidFields.indexOf( fieldName )
      if ( fieldNameIndex != -1 ) newInvalidFields.splice( fieldNameIndex, 1 )

      const stateDiff = {}
      stateDiff[fieldName] = newValue
      stateDiff['invalid_fields'] = newInvalidFields

      this.setState( stateDiff )
    }
  }

  fetchAddressForPostCode( postCode ) {
    this.setState({
      address_loading: true
    })
    GoogleMapHelper.fetchDetailsForPostCode( postCode, ( addressDetails ) => {
      const stateDiff = addressDetails
      stateDiff.post_code = postCode
      stateDiff.address_loading = false
      this.setState( stateDiff )
    })
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
            disabled={ this.state.checkout_successfull }
          />
          <AddressDetails
            country={ this.state.country }
            latitude={ this.state.latitude }
            longitude={ this.state.longitude }
            city={ this.state.city }
            post_code={ this.state.post_code }
            house_number={ this.state.house_number }
            address={ this.state.address }
            additional_info={ this.state.additional_info }
            onUpdate={ this.handleUpdate }
            invalidFields={ this.state.invalid_fields }
            disabled={ this.state.checkout_successfull }
            addressLoading={ this.state.address_loading }
          />
          <div className="section-container">
            <div className="input-group">
              <textarea
                placeholder={ this.props.disabled ? "" : "Additional info" }
                value={ this.props.additional_info }
                onChange={ this.handleAdditionalInfoUpdate }
                disabled={ this.props.disabled }
              ></textarea>
            </div>
          </div>
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
