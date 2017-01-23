var React = require('react');
var ReactDOM = require('react-dom');

import CheckoutForm from './containers/CheckoutForm'

window.onload = function(){
  ReactDOM.render(
    <CheckoutForm />,
    document.getElementById('app')
  );
}
