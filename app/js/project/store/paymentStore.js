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

      return "Error: Please enter the first and last name on your credit card";
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
      console.log(isFormatted)
      return isFormatted;
    }
  },
  santizeCCNumber(numbers, field) {
    if (numbers.length < 16) {
      field.classList.add('error');

      console.log("Error: Please enter a valid credit card number");
      return "Error: Please enter a valid credit card number";
    } else {
      field.classList.remove('error');
      const splitNumbers = numbers.toString().match(/\d{1,4}/g);
      const spacedNumbers = splitNumbers.join(" ");

      const numberValidation =  valid.number(numbers);

      const foo = {
        'format' : spacedNumbers,
        'validation': numberValidation,
      }
      return foo;
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

    // returns formatted/santized name
    const nameNode = this.sanitizeNameInput(ccName, ccNameField);
    // returns formatted/detailed card info
    const ccNumberNode = this.santizeCCNumber(ccNumber, ccNumberField);
    // returns card type
    const ccCardType = ccNumberNode.validation.card.type;

    console.log(ccCardType)
  },
  init() {
    this.validateFields();
  },
};

export default PaymentStore;
