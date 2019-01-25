function x (str) {
    str = str.toLowerCase();
    var i = 0;
    var arr = [];
        while (i <= str.length){
            if (str.substr(i,1) === "x")
            arr.push(str);
            i++;
        }
        return arr.length;
}