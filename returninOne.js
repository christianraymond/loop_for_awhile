function totalPhoneBill(){
  stringSplit = 'call, sms, call, sms, sms';
  stringRecord = stringSplit.split(',');
  emptyrecord = [];

  for( var x=0;x<stringRecord.length;x++){
    return emptyrecord.push(stringRecord[x])

  if(emptyrecord.startsWtih('ca')){
    return emptyrecord
  }
  if(emptyrecord.startsWtih('sm')){
    return emptyrecord
  };

  }
};
console.log(totalPhoneBill());
