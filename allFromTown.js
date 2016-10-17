function allFromTown(regNumbers){
  if(regNumbers.startsWith('CL')){
    return 'FromStellies';
  }
  else{
    return 'FromKuilsriver';
  }
};

console.log(allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
