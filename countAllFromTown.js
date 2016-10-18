function countAllFromTown(stringNumber){
  stringNumber = 'CL 124,CY 567,CL 345, CJ 456,CL 341','CL';
  splitedString = stringNumber.split(',');
  splitedString.length;
  console.log(splitedString.length);
};
const assert = require('assert')
assert.deepEqual(countAllFromTown, 5)

countAllFromTown();
