import XmlHttpHelper from './XmlHttpHelper'

const GoogleMapParser = {

  fetchDetailsForPostCode( postCode, callback ) {
    if ( postCode.length > 5 ) {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${postCode}`
      XmlHttpHelper.get( url, ( responseObject ) => {
        const status = responseObject.status
        if ( status !== "OK" ) {
          console.log( "Reverse geocoding error:", responseObject.status )
          callback( null )
        }
        else {
          const addressDetails = this.parseResponse( responseObject )
          callback( addressDetails )
        }
      })
    }
    else {
      callback( null )
    }
  },

  parseResponse( responseObject ) {
    const results = responseObject.results[0]
    const address = results.formatted_address
    const location = results.geometry.location
    const latitude = location.lat
    const longitude = location.lng
    const addressComponents = results.address_components
    const countryComponent = this.getAddressComponent( addressComponents, 'country' )
    const cityComponent = this.getAddressComponent( addressComponents, 'postal_town' )
    return {
      address: address,
      latitude: latitude,
      longitude: longitude,
      country: countryComponent ? countryComponent.long_name : "",
      city: cityComponent ? cityComponent.long_name : ""
    }
  },

  getAddressComponent( addressComponents, type ) {
    return addressComponents.find( (addressComponent) => {
      return addressComponent.types.indexOf( type ) !== -1
    })
  }

}

export default GoogleMapParser
