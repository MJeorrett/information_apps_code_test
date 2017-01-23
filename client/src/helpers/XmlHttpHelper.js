const XmlHttpHelper = {
  get( url, onloadCallback ) {
    const req = new XMLHttpRequest()
    req.open( 'GET', url )
    req.onload = () => {
      if ( req.status === 200 ) {
        const responseObj = JSON.parse( req.responseText )
        onloadCallback( responseObj, false )
      }
      else {
        console.log( `Error: GET from ${url} rreturned status code ${req.status}` )
      }
    }
    req.send( null )
  }
}

export default XmlHttpHelper
