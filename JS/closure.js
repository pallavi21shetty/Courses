// //closure
// function outer() {
//     let outerVar = "I'm in the outer scope!";
//     function inner() {
//         console.log(outerVar);
//     }
//     return inner;
// }
// const closure = outer(); 
// closure();




// //callback
// function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }
// function sayBye() {
//     console.log("Goodbye!");
// }
// greet("Ajay", sayBye);





// Meghalaya murder case: Police get 7-day remand of another accused
// Three other accused arrested in the Raja Raghuvanshi murder case - Raj Kushwaha, Vishal Chauhan and Akash Rajput - were sent to the Meghalaya police's transit custody for seven days by the court on Monday
// Updated - June 10, 2025 12:47 pm IST - Indore


// function reverse(str){
// //let x = ""
//     for(let i=str.length-1; i>=0; i--){
//         // console.log(str[i]);
//          x= x+ str[i];
//     }
//   console.log(x);
// }
// reverse("Hello")



//check pallindrome
// function isPalindrome(str) {
//     const reversed = str.split("").reverse().join("");
//     return str === reversed;
// }
// console.log(isPalindrome("madam")); 



// function isPalindrome(str) {
//     let length = 0;
//     // Find string length manually
//     while (str[length] !== undefined) {
//         length++;
//     }
//     // Compare characters from both ends
//     for (let i = 0; i < length / 2; i++) {
//         if (str[i] !== str[length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPalindrome("madam"));  



// function isPalindrome(str) {
//     let length = 0;
//     // Compare characters from both ends
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] !== str[str.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPalindrome("madam"));  




//find owel in string
// function findVowels(str) {
//     const vowels = "aeiouAEIOU";
//     let result = [];
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             result.push(char);
//         }
//     }
//     return result;
// }
// console.log(findVowels("Hello World")); 



// function findVowels(str) {
//     const vowels = "aeiouAEIOU";
//     let result = [];
//     for (let char of str) {
//         if (!vowels.includes(char)) {
//             result.push(char);
//         }
//     }
//     return result;
// }


// function findVowels(str) {
//     const vowels = "aeiouAEIOU";
//     let result = "";
//     for (let char of str) {
//         if (!vowels.includes(char)) {
//             result= result+char;
//         }
//     }
//     return result;
// }



// function countVowels(str) {
//     const vowels = "aeiouAEIOU";
//     let count = 0;
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("Hello")); 


// function removeVowels(str) {
//     let result = "";
//     const vowels = "aeiouAEIOU";
//     for (let i = 0; i < str.length; i++) {
//         if (!vowels.includes(str[i])) {
//             result += str[i];
//         }
//     }
//     console.log(result);
// }

// removeVowels("Pallavi Shetty"); 


// function removeVowelsToArray(str) {
//     const vowels = "aeiouAEIOU";
//     let result = [];
//     for (let i = 0; i < str.length; i++) {
//         if (!vowels.includes(str[i])) {
//             result.push(str[i]);
//         }
//     }
//     console.log(result);
// }

// removeVowelsToArray("Pallavi Shetty");  



//remove dublicate from array
// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }
// const nums = [1, 2, 2, 3, 4, 4, 5];
// console.log(removeDuplicates(nums)); 



// function removeDuplicates(arr) {
//     return arr.filter((value, index) => arr.indexOf(value) === index);
// }

// console.log(removeDuplicates(["apple", "banana", "apple", "orange"]));



// let arr = ["apple", "banana", "apple", "orange"]
// let out = arr.filter((value, index) => arr.indexOf(value) === index);
// console.log(out);



// let arr = ["apple", "banana", "apple", "orange"]
// function removeDuplicates(arr) {
//     return arr.filter((value, index) => arr.indexOf(value) === index);
// }
// console.log(removeDuplicates(arr));


//factoirial of number
// function factorial(n) {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(5)); 


// function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//           console.log(result);
//     }
// }
// console.log(factorial(5)); 


// function printFactorialSeries(n) {
//     let fact = 1;
//     for (let i = 1; i <= n; i++) {
//         fact = fact * i;
//         console.log("Factorial of " + i + " is: " + fact);
//     }
// }
// printFactorialSeries(5);


//sum of array elemnt
// function sumArray(arr) {
//     let sum = 0;
//     for (let num of arr) {
//         sum += num;
//     }
//     return sum;
// }
// console.log(sumArray([1, 2, 3]));



//fibonacci
function getNthFibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1, fib;
    for (let i = 2; i <= n; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }
    return b;
}
console.log(getNthFibonacci(6));  



function printFibonacciSeries(n) {
    let a = 0, b = 1;
    console.log(a); 
    if (n > 1) {
        console.log(b); 
    }
    for (let i = 2; i < n; i++) {
        let next = a + b;
        console.log(next);
        a = b;
        b = next;
    }
}
printFibonacciSeries(10);