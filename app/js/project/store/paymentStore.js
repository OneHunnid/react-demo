let mode = "foo";

let PaymentStore = {
  displayThankYou(ccName) {
      console.log(ccName)
  },
  handleClickNext() {
    const ccName = document.querySelector('.js-cc-name').value;
    const ccNumber = document.querySelector('.js-cc-number').value;
    const ccExpiration = document.querySelector('.js-cc-expiration').value;
    const ccCVV = document.querySelector('.js-cc-cvv').value;

    console.log("hello")
  }
}

export default PaymentStore;
