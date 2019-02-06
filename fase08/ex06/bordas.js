function bordas (h, v) {
    var i = 0;
    var ii = 0;
    var text = ""
    var B = "B"
    var x = "0"
    while (i < v) {
        if (i < 1) 
            console.log ("A" + B.repeat(h - 2) + "C")
        else if (i < v - 1)
            console.log ("B" + x.repeat(h - 2) + "B")
        else
            console.log ("C" + B.repeat(h - 2) + "A")
        
        i++;
    }
}