// function fib(n){
//     let a=0
//     let b=1, f
//     console.log(a);
//     console.log(b);
//     for(let i=1; i<=n; i++)
//     {
// f=a+b
// a=b
// b=f
// console.log(f);
//     }
// }
// fib(500)
// 0 1 1 2 3 5 8 


// 1. Check if a Number is Positive or Negative
function checkNumber(n) {
    if (n > 0) console.log("Positive");
    else if (n < 0) console.log("Negative");
    else console.log("Zero");
}
checkNumber(-5); 


// 2. Find the Largest of 3 Numbers
function findLargest(a, b, c) {
    let largest = a;
    if (b > largest) largest = b;
    if (c > largest) largest = c;
    console.log("Largest is:", largest);
}
findLargest(5, 8, 3);


//3. Count Vowels in a String
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    console.log("Vowel count:", count);
}
countVowels("Hello World"); 


// 4. Sum of First N Natural Numbers
function sumN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log("Sum:", sum);
}
sumN(5);

//5. Check if a Number is Prime
function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); 


//6. Reverse a Number
function reverseNumber(n) {
    let rev = 0;
    while (n > 0) {
        rev = rev * 10 + (n % 10);
        n = Math.floor(n / 10);
    }
    console.log("Reversed:", rev);
}
reverseNumber(1234); 


//7. Check if a String is Palindrome
javascript
Copy
Edit
function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
}
console.log(isPalindrome("level")); 


//8. Count Even and Odd Numbers in an Array
function countEvenOdd(arr) {
    let even = 0, odd = 0;
    for (let num of arr) {
        if (num % 2 === 0) even++;
        else odd++;
    }
    console.log("Even:", even, "Odd:", odd);
}
countEvenOdd([1, 2, 3, 4, 5]); 


//9. Check if a Year is Leap Year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
        console.log(year + " is a leap year");
    else
        console.log(year + " is not a leap year");
}
isLeapYear(2024);


//10. Generate Multiplication Table
function printTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
printTable(7);



//merging array
const a1 = [1, 2];
const a2 = [3, 4];
const merged = [...a1, ...a2];
console.log(merged)


// merging object
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const combined = { ...obj1, ...obj2 };
console.log(combined)
