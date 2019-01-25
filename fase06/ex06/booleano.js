function booleanos (arr){
    var i = arr.length;
    while (i >= 0){
        if (arr[i] === true || arr[i] === false)
            arr.splice(i,1)            
    i--
    }
    return arr
    
}
