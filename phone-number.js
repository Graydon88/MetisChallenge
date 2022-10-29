// Take input and remove non-digit characters then process the remaining data for 10 digit cleansed output

export const clean = (phoneNbr) => {
  //Variables to be used when processing:
  
  var inputNumber = phoneNbr.replace(/[^\d]/g, '');
  
  const nbrLength = inputNumber.length;
  let areaCode;
  let exchangeCode;
  let outputNumber;

  // Functions to handle checks for area and exchange code values

  function codeCheck(number) {
    let firstNbr = Array.from(number[0]);
    if(firstNbr == 0) {
      return '0';
    } else if(firstNbr == 1) {
      return '1';
    } else {
      return 'other';
    }
  }

  // logic for processing number after spaces and non-digit characters removed

  if (nbrLength > 11) {
    throw new Error('More than 11 digits')
  } else if(nbrLength < 10) {
    throw new Error('Incorrect number of digits')
  } else if(nbrLength == 11) {
    let countryCode = codeCheck(inputNumber);
    if(countryCode != '1') {
      throw new Error('11 digits must start with 1')
    }

  } else if(nbrLength == 10) {
    areaCode = codeCheck(inputNumber);
    exchangeCode = codeCheck(inputNumber.slice(3));

    switch (areaCode) {

      case '1':
        throw new Error('Area code cannot start with one');

      case '0':
        throw new Error('Area code cannot start with zero');

      default:
        break;   
    }

    switch (exchangeCode) {
      case '1':
        throw new Error('Exchange code cannot start with one');

      case '0':
        throw new Error('Exchange code cannot start with zero');

      default:
        break;  
    }
  }
  }

  
};
