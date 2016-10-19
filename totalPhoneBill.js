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
console.log(totalPhoneBill('call, sms, call,sms,sms'));
