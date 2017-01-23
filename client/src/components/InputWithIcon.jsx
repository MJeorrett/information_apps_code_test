import React from 'react'

class InputWithIcon extends React.Component {

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
      <input type="text" placeholder={ this.props.placeholder } style={ style } />
    )
  }

}

export default InputWithIcon
