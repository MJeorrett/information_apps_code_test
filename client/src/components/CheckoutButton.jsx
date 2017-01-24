import React from 'react'

class CheckoutButton extends React.Component {

  render() {

    let buttonText = "Checkout"
    let className = ""
    if ( this.props.checkoutSuccessfull ) {
      buttonText = "Successfull ✓"
      className = "checkout-successfull"
    }

    return (
      <div className="section-container">
        <button
          className={className}
          type="submit"
          onClick={ this.props.onClick }
          disabled={ this.props.locked }
        >{ buttonText }</button>
      </div>
    )
  }

}

export default CheckoutButton
