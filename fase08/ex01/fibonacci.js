function fibonacci (num) { 
   Math.floor(num);
   var i = 0;
   var array = [];
   while (i < num) {
        if (i < 2){
            array.push(1);
        }else{
        array.push(array[i-2] + array[i-1]);
   }
    i++;
   }
   return array;
} 