function xp (num) { 
    var i = 0;
    var XP = 0;
    
    while (XP < num) {
        XP += 100 + (50 * (i));
        i++;
        
    }
    return i; 
}