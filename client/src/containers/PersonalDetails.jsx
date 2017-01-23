import React from 'react'

import InputWithIcon from '../components/InputWithIcon'

class PersonalDetails extends React.Component {

  render() {
    return (
      <div>
        <h1>Personal Details</h1>
        <InputWithIcon placeholder="First Name"/>
        <InputWithIcon placeholder="Last Name"/>
        <InputWithIcon placeholder="E-mail"/>
        <InputWithIcon placeholder="Phone"/>
      </div>
    )
  }

}

export default PersonalDetails
