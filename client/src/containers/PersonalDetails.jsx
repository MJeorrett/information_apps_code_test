import React from 'react'

import InputWithIcon from '../components/InputWithIcon'

class PersonalDetails extends React.Component {

  render() {
    return (
      <div className="section-container">
        <div className="input-group">
          <InputWithIcon
            placeholder="First Name"
            fieldName="first_name"
            dataValue={ this.props.first_name }
            onUpdate={ this.props.onUpdate }
            imageName="person"
          />
          <InputWithIcon
            placeholder="Last Name"
            fieldName="last_name"
            dataValue={ this.props.last_name }
            onUpdate={ this.props.onUpdate }
            imageName="person" />
        </div>
        <div className="input-group">
          <InputWithIcon
            placeholder="E-mail"
            fieldName="email"
            dataValue={ this.props.email }
            onUpdate={ this.props.onUpdate }
            imageName="envelope"
          />
          <InputWithIcon
            placeholder="Phone"
            fieldName="phone"
            dataValue={ this.props.phone }
            onUpdate={ this.props.onUpdate }
            imageName="phone"
          />
        </div>
      </div>
    )
  }

}

export default PersonalDetails
