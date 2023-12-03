const number = 600851475143;
const factors = [];

const calculateLargestPrimeFactor = number => {
    let max = 0;
    let current = 2;

    while (number >= current) {
        if (number % current === 0) {
            if (current > max) {
                max = current;
            }

            number /= current;
            current = 2;
        } else {
            current++;
        }
    }

    return max;
}

console.log(`The largest prime factor of the number ${number} is ${calculateLargestPrimeFactor(number)}.`);

/*--
const isPrime = number => {
    let numberIsPrime = true;
    
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            numberIsPrime = false;
        }
    }

    return numberIsPrime;
}
--*/

/*
const calculateFactors = (number, current) => {
    if (number <= current) {  // isPrime(number)
        factors.push(number);
    } else if (number % current === 0) {
        factors.push(current);

        calculateFactors((number / current), 2);
    } else {
        calculateFactors(number, ++current);
    }
}
*/