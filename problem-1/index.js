const limit = 1000;
const smallerNumber = 3;
const largerNumber = 5;

let sum = 0;

for (let i = smallerNumber, j = largerNumber; i < limit; i += smallerNumber, j += largerNumber) {
    sum += i;

    if (j < limit && j % smallerNumber !== 0) {
        sum += j;
    }
}

console.log('Result:', sum);