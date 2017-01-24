import React from 'react'

import CountrySelect from '../components/CountrySelect'
import InputWithIcon from "../components/InputWithIcon"

class AddressDetails extends React.Component {

  constructor() {
    super()
    this.handleCountrySelected = this.handleCountrySelected.bind( this )
    this.handleAdditionalInfoUpdate = this.handleAdditionalInfoUpdate.bind( this )
  }

  handleCountrySelected( ev ) {
    console.log( "ev", ev.target.value );
    this.props.onUpdate( 'country', ev.target.value )
  }

  handleAdditionalInfoUpdate( ev ) {
    this.props.onUpdate( 'additional_info', ev.target.value )
  }

  render() {

    return (
      <div className="section-container">
        <div className="input-group">
          <InputWithIcon
            placeholder="Post code"
            fieldName="post_code"
            dataValue={ this.props.post_code }
            onUpdate={ this.props.onUpdate }
            invalidFields={ this.props.invalidFields }
            locked={ this.props.disabled }
          />
          <InputWithIcon
            placeholder="Latitude"
            fieldName="latitude"
            dataValue={ this.props.latitude }
            onUpdate={ this.props.onUpdate }
            locked={ this.props.disabled }
            type="number"
          />
          <InputWithIcon
            placeholder="Longitude"
            fieldName="longitude"
            dataValue={ this.props.longitude }
            onUpdate={ this.props.onUpdate }
            locked={ this.props.disabled }
            type="number"
          />
        </div>
        <div className="input-group">
          <CountrySelect
            onUpdate={ this.handleCountrySelected }
            country={ this.props.country }
            invalidFields={ this.props.invalidFields }
            locked={ this.props.disabled }
          />
          <InputWithIcon
            placeholder="City"
            fieldName="city"
            dataValue={ this.props.city }
            onUpdate={ this.props.onUpdate }
            invalidFields={ this.props.invalidFields }
            locked={ this.props.disabled }
          />
        </div>
        <div className="input-group">
          <InputWithIcon
            placeholder="Address"
            fieldName="address"
            dataValue={ this.props.address }
            onUpdate={ this.props.onUpdate }
            invalidFields={ this.props.invalidFields }
            locked={ this.props.disabled }
          />
        </div>
        <div className="input-group">
          <textarea
            placeholder={ this.props.disabled ? "" : "Additional info" }
            value={ this.props.additional_info }
            onChange={ this.handleAdditionalInfoUpdate }
            disabled={ this.props.disabled }
          ></textarea>
        </div>
      </div>
    )
  }

}

export default AddressDetails
