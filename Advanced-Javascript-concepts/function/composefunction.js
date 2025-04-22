var compose = function(functions) {
    
    return function(x) {
        return functions.reduceRight((acc,fn)=>fn(acc),x)
      //  reduce is a Araay method which iterate from right to left 
        
    }
};
