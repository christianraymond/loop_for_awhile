const assert = require('assert');

function allFromTown(regNumbers){
  if(regNumbers.startsWith('CL')){
    return 'FromStellies';
  }
  else{
    return 'FromKuilsriver';
  }
};
var FromStellies = allFromTown('CL 123,CY 567,CL 345, CJ 456, CL 341','CL');
assert.deepEqual(fromStellies, [CL 124, CL 345, CL 341]

var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
assert.deepEqual(fromKuilsriver, []);
