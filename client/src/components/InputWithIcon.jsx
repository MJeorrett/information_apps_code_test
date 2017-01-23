import React from 'react'

class InputWithIcon extends React.Component {

  constructor() {
    super()
    this.handleUpdate = this.handleUpdate.bind( this )
    this.resetPlaceholderText = this.resetPlaceholderText.bind( this )
  }

  handleUpdate( ev ) {
    const newValue = ev.target.value
    this.props.onUpdate( this.props.fieldName, newValue )
  }

  resetPlaceholderText( ev ) {
    ev.target.placeholder = this.props.placeholder
  }

  render() {
    let style = {}

    if ( this.props.imageName ) {
      style = {
        backgroundImage: `url(/images/${this.props.imageName}.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        backgroundPosition: "12px 9px",
        backgroundSize: "16px 16px",
        paddingLeft: "45px"
      }
    }

    let className = ""
    let placeholder = this.props.placeholder
    if ( this.props.invalidFields && this.props.invalidFields.indexOf( this.props.fieldName ) != -1 ) {
      className = "invalid"
      placeholder = "Required"
    }

    return (
      <input
        className={ className }
        type="text"
        placeholder={ placeholder }
        style={ style }
        onChange={ this.handleUpdate }
        value={ this.props.dataValue }
        onFocus={ this.resetPlaceholderText }
      />
    )
  }

}

export default InputWithIcon
