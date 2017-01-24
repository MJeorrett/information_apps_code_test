import React from 'react'
import ReactDOM from 'react-dom'
import Favicon from 'react-favicon'

import CheckoutForm from './containers/CheckoutForm'

import css from './checkout_form.less'

window.onload = () => {
  ReactDOM.render(
    <div>
      <CheckoutForm />
      <Favicon url="/favicon.ico"/>
    </div>,
    document.getElementById('app')
  )
}
