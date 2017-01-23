const Validator = {
  notBlank( value ) {
    return value.length > 0
  },
  none( value ) {
    return true
  }
}

export default Validator
