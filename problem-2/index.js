const limit = 4_000_000;

let sum = 0;
let current = 2;
let previous = 1;

while (current < limit) {
    if (current % 2 === 0) {
        sum += current;
    }

    const tempPrevious = previous;

    previous = current;
    current += tempPrevious;
}

console.log('Result:', sum);