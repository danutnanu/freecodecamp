function telephoneCheck(str) {
 
    var phoneNumber = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(str);
   return(phoneNumber);
 }
 
 telephoneCheck("555-555-5555");