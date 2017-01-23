import React from 'react'

import CountrySelect from '../components/CountrySelect'
import InputWithIcon from "../components/InputWithIcon"

class AddressDetails extends React.Component {

  render() {
    return (
      <div className="section-container">
        <div className="input-group">
          <CountrySelect />
          <InputWithIcon placeholder="City" />
          <InputWithIcon placeholder="Post code" />
        </div>
        <div className="input-group">
          <InputWithIcon placeholder="Address" />
        </div>
        <div className="input-group">
          <textarea placeholder="Additional info"></textarea>
        </div>
      </div>
    )
  }

}

export default AddressDetails
