const number = 1000;

// Creating an array from 0 to 1000
const arrayElements = [...Array(number).keys()];

//New array just with the prime numbers and falses
const mapPrimeNumbers = arrayElements.map((number) => {
    for (let i = 2; i < number; i++) {
        if(number % i == 0) {
            return false;
        }
    }   
    return number;
})

//Filtering the false elements
const primeNumbers = mapPrimeNumbers.filter(number => (number != false && number > 1));

 //Sum all prime numbers till 1000
 const primesSum = primeNumbers.reduce((sum, number) => sum + number, 0);

 console.log(primesSum);
   n    