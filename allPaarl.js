function allPaarl(){
  var  plateNum = 'CJ 347 374,CJ 393 029,CJ 938 734,CJ 738 934,CJ 733 924';
  var  regPlate = plateNum.split(',');

    for(n=0;n<=regPlate.length;n++){
    console.log(regPlate[n]);
  }
}
allPaarl();
