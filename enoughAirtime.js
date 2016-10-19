function enoughAirtime(airtime){
  var usageArtime = airtime.split(',');
  totalBill = 50;
    for(i=0;i<usageArtime.length;i++){
      var listOfarray = usageArtime[i];
if(listOfarray == 'call'){
  totalBill -= 1.88;
    }
if(listOfarray == 'sms'){
  totalBill -= 0.75;
}
if(listOfarray === 'data'){
  totalBill -= 12;
}
  }
return totalBill;
};
console.log(enoughAirtime('call,call,call,data,sms,sms,call,data'));
