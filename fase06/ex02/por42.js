function por42 (x,y) {
    x = Math.ceil(x /42 + 1) * 42
    if (x<=y){
    return x; 
    }else{
        console.log ("N�o encontrado")
        return false;
    }
}