function conversor (temperatura, de , para) { 
    if (de === "celsius" && para === "fahrenheit") {
        return Math.ceil((temperatura * (9/5)) + 32);
        
    }else if (de === "fahrenheit" && para === "celsius") {
        return Math.ceil((temperatura -  32) * 5/9);
    
    }else if (de === "kelvin" && para === "fahrenheit") {
        return Math.ceil((temperatura - 273.15) * (9/5) + 32);
    
    }else if (de === "fahrenheit" && para === "kelvin") {
        return Math.ceil((temperatura -  32) * 5/9 + 273.15);
    
    }else if (de === "celsius" && para === "kelvin") {
        return Math.ceil(temperatura + 273.15);
    
    }else if (de === "kelvin" && para === "celsius") {
        return Math.ceil(temperatura - 273,15);
    }
} 