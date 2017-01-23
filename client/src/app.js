import React from 'react'
import ReactDOM from 'react-dom'

import CheckoutForm from './containers/CheckoutForm'

window.onload = () => {
  ReactDOM.render(
    <CheckoutForm />,
    document.getElementById('app')
  )
}
