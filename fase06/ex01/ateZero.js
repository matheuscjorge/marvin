function ateZero (num) {
    var arr = [];
    if (num < 0){   
        var i = Math.floor(num);
        while (i <= 0) {
           arr.push(i); 
           i++;
        }
        return arr;
    }else{
        var ii = Math.ceil(num);
        while (ii >= 0) {
           arr.unshift(ii);
           ii--;
        }
        return arr;
    }
}