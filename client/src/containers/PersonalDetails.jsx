import React from 'react'

import InputWithIcon from '../components/InputWithIcon'

class PersonalDetails extends React.Component {

  render() {
    return (
      <div className="section-container">
        <div className="input-group">
          <InputWithIcon placeholder="First Name"/>
          <InputWithIcon placeholder="Last Name"/>
        </div>
        <div className="input-group">
          <InputWithIcon placeholder="E-mail"/>
          <InputWithIcon placeholder="Phone"/>
        </div>
      </div>
    )
  }

}

export default PersonalDetails
