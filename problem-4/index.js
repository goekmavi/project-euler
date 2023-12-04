let maxPalindrome = 0;
let productOne;
let productTwo;

for (let i = 999; i > 99; i--) {
    for (let j = 999; j > 99; j--) {
        const result = i * j;

        if (result.toString() === result.toString().split('').reverse().join('')) {
            if (result > maxPalindrome) {
                maxPalindrome = result;
                productOne = i;
                productTwo = j;
            }
        }
    }
}

console.log(`${maxPalindrome} = ${productOne} x ${productTwo}`);