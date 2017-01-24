import React from 'react'

import XmlHttpHelper from '../helpers/XmlHttpHelper'

class CountrySelect extends React.Component {

  constructor() {
    super()
    this.state = {
      countries: []
    }
  }

  componentDidMount() {
    const url = 'data/country_names.json'
    XmlHttpHelper.get( url, ( countries ) => {
      this.setState({
        countries: countries
      })
    })
  }

  render() {

    let className = ""
    let defaultText = "Country"
    if ( this.props.invalidFields && this.props.invalidFields.indexOf( 'country' ) != -1 ) {
      className = "invalid"
      defaultText = "Required"
    }

    if ( this.props.locked ) className += "final"

    const options = this.state.countries.map( (country, index) => {
      return <option key={ index } value={ country }>{ country }</option>
    })

    options.unshift(
      <option key="please-select" value="" disabled>
        { defaultText }
      </option>
    )

    return(
      <select
        className={ className }
        value={ this.props.country }
        onChange={ this.props.onUpdate }
        disabled={ this.props.locked }
      >
        { options }
      </select>
    )
  }

}

export default CountrySelect
