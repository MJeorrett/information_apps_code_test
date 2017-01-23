import React from 'react'

import CountrySelect from '../components/CountrySelect'
import InputWithIcon from "../components/InputWithIcon"

class AddressDetails extends React.Component {

  render() {
    return (
      <div>
        <h1>Address Details</h1>
        <CountrySelect />
        <InputWithIcon placeholder="City" />
        <InputWithIcon placeholder="Post code" />
        <InputWithIcon placeholder="Address" />
        <InputWithIcon placeholder="Additional info" />
      </div>
    )
  }

}

export default AddressDetails
