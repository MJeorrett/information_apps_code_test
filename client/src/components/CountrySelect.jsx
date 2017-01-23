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
      return <option key={ index } value={ index }>{ country }</option>
    })

    options.unshift(<option key="please-select" value="" selected disabled>Country</option>)

    return(
      <select>
        { options }
      </select>
    )
  }

}

export default CountrySelect
