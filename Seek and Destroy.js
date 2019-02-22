function destroyer(arr) {
   var args = arguments;                //******arguments
  return arr.filter(function(val){      //filter()
    for(var i=1;i<args.length;i++){
      if(val == args[i]){
        return false;
      }
    }
    return true;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
