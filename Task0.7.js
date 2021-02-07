function celciusToFarenheit(degrees){
    var farenheit = (degrees * 1.8) + 32;
    return degrees +" degrees Celcius is = "+ farenheit+" Farenheit.";
}

function farenheitToCelcius(fahrenheit){
    var celcius = (fahrenheit -32)/1.8;
    return fahrenheit +" fahrenheit is = "+ celcius+ " degrees Celcius.";
}
console.log(celciusToFarenheit(10));
console.log(farenheitToCelcius(50));