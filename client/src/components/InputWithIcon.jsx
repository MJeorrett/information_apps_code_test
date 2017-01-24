import React from 'react'

class InputWithIcon extends React.Component {

  constructor() {
    super()
    this.handleUpdate = this.handleUpdate.bind( this )
    this.resetPlaceholderText = this.resetPlaceholderText.bind( this )
  }

  handleUpdate( ev ) {
    if ( this.props.loading ) return
    const newValue = ev.target.value
    this.props.onUpdate( this.props.fieldName, newValue )
  }

  resetPlaceholderText( ev ) {
    ev.target.placeholder = this.props.placeholder
  }

  render() {
    let style = {
      flexGrow: this.props.proportion,
      felxShrink: this.props.proportion
    }

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

    if ( this.props.loading ) {
      style = {
        backgroundImage: `url(/images/loading.gif)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        backgroundPosition: "103px -12px",
        backgroundSize: "80px 60px",
      }
    }

    let className = ""
    let placeholder = this.props.placeholder
    if ( this.props.invalidFields && this.props.invalidFields.indexOf( this.props.fieldName ) != -1 ) {
      className = "invalid"
      placeholder = "Required"
    }
    else if ( this.props.locked ) {
      placeholder = ""
    }

    return (
      <input
        className={ className }
        type={ this.props.type || "text" }
        min={ this.props.min || "" }
        step={ this.props.step || "" }
        placeholder={ placeholder }
        style={ style }
        onChange={ this.handleUpdate }
        value={ this.props.dataValue }
        onFocus={ this.resetPlaceholderText }
        disabled={ this.props.locked }
      />
    )
  }

}

export default InputWithIcon
