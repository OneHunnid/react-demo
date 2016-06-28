import valid from 'card-validator';
let mode = "foo";

console.log(valid)

let PaymentStore = {
  displayThankYou(ccName) {
      // console.log(ccName)
  },
  sanitizeNameInput(name, field) {
    const hasWhitespace = new RegExp (/^\s+$/);

    if (hasWhitespace.test(name) || name === '') {
      field.classList.add('error');
      console.log("Error: Please enter the first and last name on your credit card");

      return false;
    }
    else {
      field.classList.remove('error');
      const isCleaned = name.replace(/[0-9]/g, '');
      const isSplit = isCleaned.split(" ");

      const isFormattedArray = isSplit.map(function(i) {
        const firstLetterIsCapitalized = i.charAt(0).toUpperCase();
        const capitalized = firstLetterIsCapitalized + i.substr(1).toLowerCase();
        return capitalized;
      })
      const isFormatted = isFormattedArray.join(" ").trim();
      return isFormatted;
    }
  },
  sanitizeCCNumber(numbers, field) {
    if (numbers.length < 16) {
      field.classList.add('error');

      console.log("Error: Please enter a valid credit card number");
      return false;
    } else {
      field.classList.remove('error');
      const splitNumbers = numbers.toString().match(/\d{1,4}/g);
      const spacedNumbers = splitNumbers.join(" ");

      const numberValidation =  valid.number(numbers);

      const ccNumbObj = {
        'format' : spacedNumbers,
        'validation': numberValidation,
      }
      return ccNumbObj;
    }
  },
  sanitizeExpiration(exp, field) {
    if (exp === '') {
      field.classList.add('error');

      console.log("Error: Please enter a valid expiration date");
    }
    else {
      field.classList.remove('error');
      const expObj = valid.expirationDate(exp);

      return expObj;
    }
  },
  sanitizeCVV(cvv, field) {
    if (cvv === '') {
      field.classList.add('error');

      console.log("Error: Please enter a valid CVV");
    }
    else {
      field.classList.remove('error');
      const cvvObj = valid.cvv(cvv);

      return cvvObj;
    }
  },
  validateFields() {
    const ccNameField = document.querySelector('.js-cc-name');
    const ccName = ccNameField.value;
    const ccNumberField = document.querySelector('.js-cc-number');
    const ccNumber = ccNumberField.value;
    const ccExpirationField = document.querySelector('.js-cc-expiration');
    const ccExpiration = ccExpirationField.value;
    const ccCVVField = document.querySelector('.js-cc-cvv');
    const ccCVV = ccCVVField.value;

    const ccnameNode = this.sanitizeNameInput(ccName, ccNameField);
    const ccNumberNode = this.sanitizeCCNumber(ccNumber, ccNumberField);
    const ccExpirationNode = this.sanitizeExpiration(ccExpiration, ccExpirationField);
    const ccCVVNode = this.sanitizeCVV(ccCVV, ccCVVField);

  },
  init() {
    this.validateFields();
  },
};

export default PaymentStore;
