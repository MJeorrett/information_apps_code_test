import React from 'react'
import ReactDOM from 'react-dom'

import CheckoutForm from './containers/CheckoutForm'

import css from './checkout_form.less'

window.onload = () => {
  ReactDOM.render(
    <CheckoutForm />,
    document.getElementById('app')
  )
}
