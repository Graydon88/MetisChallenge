// Take input and remove non-digit characters then process the remaining data for 10 digit cleansed output

export const clean = (phoneNbr) => {
  var inputNumber = phoneNbr.replace(/[^\d]/g, '');

  const nbrLength = inputNumber.length;

  //Variables to be used when processing:
  let outputNumber;
  let firstNbr;


  if(nbrLength != 10) {
    // Evaluate for smaller or larger lengths
  } else {
    firstNbr = Array.from(inputNumber[0]);
    if ( firstNbr == 1 || firstNbr == 0 ) {
      return null;
    } else {
      return inputNumber
    }
  }

};
