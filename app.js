
const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
];
const primes = numbers.filter((num) => {
    if (num <= 1) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false
    }
    console.log("Prime numbers:", primes)
});
//Primes are:[19,23,13,31,29,11,17,5,2]

let primesarray = [19, 23, 13, 31, 29, 11, 17, 5, 2]
let max = primesarray[0];
for (let i = 0; i < primesarray.length; i++) {
    if (primesarray[i] > max) {
        max = primesarray[i]
    }
    console.log(max)
};
let primesarray1 = [19, 23, 13, 31, 29, 11, 17, 5, 2]
let min = primesarray1[0];
for (let i = 0; i < primesarray1.length; i++) {
    if (primesarray1[i] < min) {
        max = primesarray1[i]
    }
    console.log(min)
};


function findsum(prime) {
    let sum = 0;
    for (let i = 0; i < prime.length; i++) {

        sum += prime[i]; 
    }
    return sum;
}
