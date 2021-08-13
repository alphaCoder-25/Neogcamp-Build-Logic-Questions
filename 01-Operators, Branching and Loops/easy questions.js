// Q1.) Write a program to add 5 numbers.

function add(num1,num2,num3,num4,num5){
    return sum = num1+num2+num3+num4+num5;
}
add(5,13,7,21,48);
console.log("Sum = ", sum);


// Q2.) Write a program to take a number input from user and determine whether the number is odd or even.

var readlineSync = require('readline-sync');
const input = readlineSync.question("Give a number ! ");
console.log(input);

if(input % 2 === 0){
    console.log("The given number is Even");
} else{
    console.log("The given number is Odd");
}


// Q3.) Write a program to find the minimum & maximum of 2 given numbers.

const num1 = 129; num2 = 251;

if(num1 > num2 ){
    console.log(num1, " is maximum &", num2, " is minimum");
}else{
    console.log(num2, " is maximum &", num1, " is minimum");
}

// Q4.) Write a program to find the maximum out of 3 given numbers.

const num1 = 8; num2 = 23; num3 = 17;

if (num1 > num2 && num1 > num3) {
    console.log("The maximum number is: ", num1);
} else if (num2 > num1 && num2 > num3) {
    console.log("The maximum number is: ", num2);
} else if (num3 > num1 && num3 > num2) {
    console.log("The maximum number is: ", num3);
} else {
    console.log("All numbers are Equal");
}

// Q5.) Write a program to find the minimum out of 3 given numbers.

const num1 = 35; num2 = 29; num3 = 46;

if (num1 < num2 && num1 < num3) {
    console.log("The minimum number is: ", num1);
} else if (num2 < num1 && num2 < num3) {
    console.log("The minimum numnber is: ", num2);
} else if (num3 < num1 && num3 < num2) {
    console.log("The minimum number is: ", num3);
} else {
    console.log("All numbers are Equal");
}

// Q6.) Write a program to take a month as an input from the user and find out whether the month has 31 days or not.

var readlineSync = require('readline-sync');
const month = readlineSync.question("Enter the month ");
console.log("You entered ", month);
 
if( month === 'january' || month === 'march' || month === 'may' || month === 'july' || month === 'august' || month === 'october' || month === 'december' ) {
    console.log("The given month has 31 days. ");
} else {
    console.log("The given month has no 31 days. ");
}




