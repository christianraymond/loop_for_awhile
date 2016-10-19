const assert = require('assert');

function totalPhoneBill(phoneString){
  var dataSplit = phoneString.split(',');

  var totalBill = 0;

  for(x=0;x<dataSplit.length;x++){
    var phoneRecord = dataSplit[x].trim();

    if(phoneRecord == 'call'){
      totalBill += 2.75;
    }
    if(phoneRecord == 'sms'){
      totalBill += 0.65;
    }
  }
  return totalBill;
};
//one call
assert.equal(totalPhoneBill('call'), 2.75);
// three calls
assert.equal(totalPhoneBill('call,call'), 5.5);
//two sms's
assert.equal(totalPhoneBill('sms,sms'), 1.3);

console.log(totalPhoneBill('call, sms, call,sms,sms'));
