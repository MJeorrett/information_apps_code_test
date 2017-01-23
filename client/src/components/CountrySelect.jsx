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
    const options = this.state.countries.map( (country, index) => {
      return <option key={ index } value={ country }>{ country }</option>
    })

    options.unshift(<option key="please-select" value="" disabled>Country</option>)

    return(
      <select value={ this.props.country } onChange={ this.props.onUpdate }>
        { options }
      </select>
    )
  }

}

export default CountrySelect
