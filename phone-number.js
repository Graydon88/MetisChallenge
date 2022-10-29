// Take input and remove non-digit characters then process the remaining data for 10 digit cleansed output

export const clean = (phoneNbr) => {
  //Variables to be used when processing:
  
  var inputNumber = phoneNbr.replace(/[^\d]/g, '');
  
  const nbrLength = inputNumber.length;
    let outputNumber = '';

  // Functions to handle checks for area and exchange code values

  function codeCheck(number) {
    let firstNbr = Array.from(number[0]);
    if(firstNbr == 0) {
      return ''
    }
  }

  // logic for processing number after spaces and non-digit characters removed

  if (nbrLength > 11) {
    throw new Error('More than 11 digits')
  } else if(nbrLength < 10) {
    throw new Error('Incorrect number of digits')
  } else if(nbrLength == 11) {
    if(firstNbr === '1') {

    }
  }

  
};
