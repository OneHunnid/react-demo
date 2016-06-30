import valid from 'card-validator';
const hasWhitespace = new RegExp (/^\s+$/);

let PaymentStore = {
  displayError() {
    const field = document.querySelector('.js-error-hook');
    const newNode = document.createElement('span');
    const messageNode = document.createTextNode("Uh oh! Please fix the highlighted errors");
    const parentDiv = field.parentNode;

    newNode.classList.add('js-show-error', 'js-error');
    newNode.appendChild(messageNode);

    if (field.classList.contains('js-show-error') === false) {
      field.classList.add('js-show-error');
      const error = parentDiv.insertBefore(newNode, field);

      return error;
    }
  },
  removeError() {
    const field = document.querySelector('.js-error-hook');
    const node = document.querySelector('span.js-error');
    const parentNode = node.parentNode;

    if (node.classList.contains('js-show-error') === true) {
      field.classList.remove('js-show-error');
      parentNode.removeChild(node);
    }
  },
  handleErrors(obj) {
    const dataArray = Object.keys(obj).map(function(i) {
      return obj[i];
    });

    const checkForValidation = function(i) {
      return i;
    };

    if (dataArray.every(checkForValidation) === false) {
      this.displayError();
    }
    else {
      this.removeError();
    }
  },
  sanitizeNameInput(name, field) {

    if (hasWhitespace.test(name) || name === '') {
      field.classList.add('error');

      return false;
    }
    else {
      const isCleaned = name.replace(/[0-9]/g, '');
      const isSplit = isCleaned.split(" ");

      const isFormattedArray = isSplit.map(function(i) {
        const firstLetterIsCapitalized = i.charAt(0).toUpperCase();
        const capitalized = firstLetterIsCapitalized + i.substr(1).toLowerCase();

        return capitalized;
      });
      const isFormatted = isFormattedArray.join(" ").trim();

      field.classList.remove('error');

      return isFormatted;
    }
  },
  sanitizeCCNumber(numbers, field) {
    const numberValidation =  valid.number(numbers);
    const errorMsg = "Please enter a valid number";

    if (numberValidation.isValid === false) {
      field.classList.add('error');

      return false;
    }
    else {
      const splitNumbers = numbers.toString().match(/\d{1,4}/g);
      const spacedNumbers = splitNumbers.join(" ");

      field.classList.remove('error');

      const ccNumbObj = {
        'format' : spacedNumbers,
        'validation': numberValidation,
      }

      return ccNumbObj;
    }
  },
  sanitizeExpiration(exp, field) {
    const expObj = valid.expirationDate(exp);

    if (expObj.isValid === false) {
      field.classList.add('error');

      return false;
    }
    else {
      field.classList.remove('error');

      return expObj;
    }
  },
  sanitizeCVV(cvv, field) {
    const cvvObj = valid.cvv(cvv);

    if (cvvObj.isValid === false) {
      field.classList.add('error');

      return false;
    }
    else {
      field.classList.remove('error');

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

    // Displays and removes error messages
    this.handleErrors(ccData);


    // @TODO
    // 1) Format name, number and expiration when typing in real time
    // 2) If everything is valid, update state to display a thank you message

  },
  init(e) {
    e.preventDefault;
    this.validateFields();
  },
};

export default PaymentStore;
