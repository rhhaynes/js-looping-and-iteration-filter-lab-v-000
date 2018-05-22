function findMatching(arr, str){
  return arr.filter(
    function(elem){
      return elem.toUpperCase() === str.toUpperCase();
    }
  );
}

function fuzzyMatch(arr, str){
  return arr.filter(
    function(elem){
      return elem.startsWith(str);
    }
  )
}

function matchName(){
}
