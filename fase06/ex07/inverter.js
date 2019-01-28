function inverter (item){
    if (typeof item === 'string'){
        var a = item.split("");
        var b = a.reverse();
        var c = b.join("");
        return c;

    }else{
    item.reverse();
        return item;
    }
}
