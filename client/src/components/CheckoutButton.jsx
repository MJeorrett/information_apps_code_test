import React from 'react'

class CheckoutButton extends React.Component {

  render() {
    return (
      <div className="section-container">
        <button type="submit" onClick={ this.props.onClick }>Checkout</button>
      </div>
    )
  }

}

export default CheckoutButton
