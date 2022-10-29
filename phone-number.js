// Take input and remove non-digit characters then process the remaining data for 10 digit cleansed output

export const clean = (phoneNbr) => {
  var cleanNumber = phoneNbr.replace(/[^\d]/g, '');

  if(cleanNumber.length != 10) {
    //Evaluate for number greater than 10 or smaller than 10
  } else {
    //Evaluate the initial digit to verify it is not a 0 or 1
  }

};
