import React from 'react';
import PaymentStore from './../store/paymentStore';

class InitialPaymentScreen extends React.Component {
  constructor(props) {
    super(props) 
  }
  render() {
    console.log(this.props);
    return (
      <div className="pay-form">
        <div className="pay-form-wrapper">
          <div className="pay-form-title">Payment Information</div>
          <form className="payment-form js-error-hook" onSubmit={this.props.store.init.bind(this.props.store)}>
            <div className="payment-form-wrap payment-form-cc-name">
              <label className="payment-form-label">Name on Card</label>
              <input className="payment-form-input js-cc-name" maxLength="50" placeholder="Enter your name..." type="text"/>
            </div>
            <div className="payment-form-wrap payment-form-cc">
              <label className="payment-form-label">Card Number</label>
              <input className="payment-form-input js-cc-number" placeholder="1234 5678 9012 3456" type="number"/>
            </div>
            <div className="payment-form-wrap payment-form-exp">
              <label className="payment-form-label">Expiration</label>
              <input className="payment-form-input js-cc-expiration" placeholder="04/17" type="number" min="0"/>
            </div>
            <div className="payment-form-wrap payment-form-cvv">
              <label className="payment-form-label">CVV</label>
              <input className="payment-form-input js-cc-cvv" placeholder="123" type="number"/>
            </div>
            <input type="submit" className="payment-form-submit" onClick={this.props.store.init.bind(this.props.store)} value="Next" />
          </form>
        </div>
      </div>
    );
  }
}

class ThankYouMessage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>Thanks!</div>
    );

  }
}

class PaymentForm extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section className="main-content payment-form-wrapper">
        <InitialPaymentScreen store={this.props.store} />
      </section>
    );
  }
}

export default class PaymentFormWrapper extends React.Component {
  render() {
    return (
      <PaymentForm store={PaymentStore}/>
    );
  }
}
