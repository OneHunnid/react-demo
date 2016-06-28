import valid from 'card-validator';
const hasWhitespace = new RegExp (/^\s+$/);

let PaymentStore = {
  sanitizeNameInput(name, field) {
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
    if (numbers.length < 16 || hasWhitespace.test(numbers)) {
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
    if (exp === '' || hasWhitespace.test(exp)) {
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
    if (cvv === '' || hasWhitespace.test(cvv)) {
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

    const ccNameNode = this.sanitizeNameInput(ccName, ccNameField);
    const ccNumberNode = this.sanitizeCCNumber(ccNumber, ccNumberField);
    const ccExpirationNode = this.sanitizeExpiration(ccExpiration, ccExpirationField);
    const ccCVVNode = this.sanitizeCVV(ccCVV, ccCVVField);

    const ccData = {
      "Name" : ccNameNode,
      "CC Number": ccNumberNode,
      "CC EXP": ccExpirationNode,
      "CC CVV": ccCVVNode,
    }

    // @TODO
    // 1) Format name, number and expiration when typing in real time
    // 2) If everything is valid, update state to display a thank you message

  },
  init() {
    this.validateFields();
  },
};

export default PaymentStore;
