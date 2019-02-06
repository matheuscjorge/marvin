function bordas (h, v) {
    var i = 0;
    var ii = 0;
    var text = "";
    var B = "B";
    var x = "0";
    while (i < v) {
        if (h <= 1) {
            if (i < 1)
                text += "A" + "\n";
            else if (i < v - 1)
                text += "B" + "\n";
            else
                text += "C" + "\n";
        }else{
            if (i < 1) 
                text += ("A" + B.repeat(h - 2) + "C" + "\n");
            else if (i < v - 1)
                text += ("B" + x.repeat(h - 2) + "B" + "\n");
            else
                text +=  ("C" + B.repeat(h - 2) + "A"+ "\n");
        }
        i++;
    }
    console.log (text);
}