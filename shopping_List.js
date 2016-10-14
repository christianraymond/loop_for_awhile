var shoppingList = function(){
var string = '1x bread,6x hotdog rolls,2x tubs of margarine,12 cool drinks,23 packet of sweet';

var list = string.split(',');
  for(var x=0;x<list.length;x++){
    console.log('*'+list[x]);
  }
}
shoppingList();
