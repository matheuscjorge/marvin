function organizarDatas (arrobj) {
    var i = 0;
    var ii = 0;
    var x = 0;
    var array = [];
    var arr = []; 
    while (i < arrobj.length){
        var dataNum = (
            arrobj[i].dataDeChegada.slice(6,arrobj[i].dataDeChegada.length) +
            arrobj[i].dataDeChegada.slice(0,2) +
            arrobj[i].dataDeChegada.slice(3,5)
            );
        array.push(dataNum);   
        array.sort();
        
        i++;
    }
     
    while (ii < arrobj.length){
        dataNum2 = (
            arrobj[ii].dataDeChegada.slice(6,arrobj[ii].dataDeChegada.length) +
            arrobj[ii].dataDeChegada.slice(0,2) +
            arrobj[ii].dataDeChegada.slice(3,5)
            );    
        arr[array.indexOf(dataNum2)] = arrobj[ii];
        ii ++;
    }
    return arr;
}
