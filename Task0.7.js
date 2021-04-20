function celciusToFarenheit(degrees){
    var farenheit = (degrees * 1.8) + 32;
    return farenheit;
}

function farenheitToCelcius(fahrenheit){
    var celcius = (fahrenheit -32)/1.8;
    return celcius;
}
console.log(celciusToFarenheit(10));
console.log(farenheitToCelcius(50));