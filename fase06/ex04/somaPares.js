function somaPares (num1,num2) {
    num1 = Math.ceil(num1);
    num2 = Math.floor(num2);
    var i = num1
    var sum = 0
    while (i <= num2){
    if (i % 2 === 0)
    sum += i
    i++;
    }
    return (sum)

}