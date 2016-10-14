function firstPaal(){
  var string = "CJ 893 309, CJ 303 734, CJ 239 3762, CJ 389 032,\n CJ 938 834";
  var splitString = string.split(',');

    var emptyString = [];

  for (var i=0;i<=splitString.length;i++){
    emptyString.push(splitString[i]);

  }

console.log(emptyString[0]);
}

firstPaal();
