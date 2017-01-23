import React from 'react'

class CheckoutButton extends React.Component {

  render() {

    let buttonText = "Checkout"
    if ( this.props.checkoutSuccessfull ) buttonText = "Successfull"
    return (
      <div className="section-container">
        <button type="submit" onClick={ this.props.onClick }>{ buttonText }</button>
      </div>
    )
  }

}

export default CheckoutButton
