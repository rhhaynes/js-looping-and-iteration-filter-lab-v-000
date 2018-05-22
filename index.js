function findMatching(arr, str){
  return arr.filter( function(elem){return elem === str;} );
}

function fuzzyMatch(arr, str){
  arr.filter( function(elem){return elem.startsWith(str)} )
}

function matchName(){
}
