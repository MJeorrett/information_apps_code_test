import React from 'react'

class InputWithIcon extends React.Component {

  constructor() {
    super()
    this.handleUpdate = this.handleUpdate.bind( this )
  }

  handleUpdate( ev ) {
    const newValue = ev.target.value
    this.props.onUpdate( this.props.fieldName, newValue )
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

    return (
      <input
        type="text"
        placeholder={ this.props.placeholder }
        style={ style }
        onChange={ this.handleUpdate }
        value={ this.props.dataValue }
      />
    )
  }

}

export default InputWithIcon
