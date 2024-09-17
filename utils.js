function generatRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function celciusToFahrenheit(celcius) {
    return (celcius * 9) / 5 + 32;
}

// Export single function in CommonJs [Default export] 
//module.exports = generatRandomNumber;

// Export multiple functions as Object in CommonJs 
module.exports = {
    generatRandomNumber,
    celciusToFahrenheit
};