import React from 'react'

import InputWithIcon from '../components/InputWithIcon'

class PersonalDetails extends React.Component {

  render() {
    return (
      <div className="section-container">
        <div className="input-group">
          <InputWithIcon placeholder="First Name" imageName="person" />
          <InputWithIcon placeholder="Last Name" imageName="person" />
        </div>
        <div className="input-group">
          <InputWithIcon placeholder="E-mail" imageName="envelope" />
          <InputWithIcon placeholder="Phone" imageName="phone" />
        </div>
      </div>
    )
  }

}

export default PersonalDetails
