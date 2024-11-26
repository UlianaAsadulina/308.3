// Write some for loops to accomplish the following tasks:

// Count down from 10 to 1.
for (let i=10; i>=1; i--)
    console.log(i);

console.log("-------------");
// Output odd numbers from 1 to 10.
for (let i=1; i<=10; i++) {
    if (i%2!=0)
        console.log(i);
}
console.log("-------------");
// Output even number from 1 to 10.
for (let i=1; i<=10; i++) {
    if (i%2===0)
        console.log(i);
}
// Output multiples of 3, starting at 6 and ending at 60.
for (let i=6; i<=60; i++) {
    if (i%3===0)
        console.log(i);
}
console.log("-------------");

// Output an increasing number of # symbols, from 1 to 7, as shown below.
let string="";
for (let i=1; i<=7; i++)     
    console.log(string=string+"#");
console.log("-------------");


// Part 1: Fizz Buzz

// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

for (let i=1; i<=100; i++) {
    if (i%3==0){
        if (i%5 ==0)
            console.log("Fizz Buzz");
        else console.log("Fizz");    
    } else if (i%5 == 0) {
               console.log("Buzz");
            } else console.log(i);
