var fs = require( 'fs' )

var all_countries_data = require( './all_countries_data' )

var countryNames = all_countries_data.map( (countryData) => {
  return countryData.name
})

var writeStream = fs.createWriteStream( 'client/build/data/country_names.json' )
writeStream.write( JSON.stringify( countryNames ) )
writeStream.close()
