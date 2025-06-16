//  1. Find the Maximum Number in an Array

// function findMax(arr) {
//   return Math.max(...arr);
// }
// let result = findMax([10, 25, 7, 99, 4]);
// console.log("Max value is:", result);

//  2. Check if a String is Anagram of Another

// function isAnagram(str1, str2) {
//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// }
// let res=isAnagram("amma","mama")
// console.log(res);


//  3. Count the Frequency of Each Element in an Array

// function countFrequency(arr) {
//   const freq = {};
//   for (let item of arr) {
//     freq[item] = (freq[item] || 0) + 1;
//   }
//   return freq;
// }
// let result = countFrequency([2,5,6,2,44,2,7,44,99])
// console.log(result);


// 4. Find the Factorial of a Number

// function factorial(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
// console.log(factorial(5));

//  5. Check if a Number is Prime

// function isPrime(n) {
//   if (n <= 1) return false;
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }
// let res=isPrime(6)
// console.log(res);


//  6. Sum of Digits of a Number

// function sumDigits(n) {
//   let sum = 0;
//   while (n > 0) {
//     sum += n % 10;
//     n = Math.floor(n / 10);
//   }
//   return sum;
// }
// console.log(sumDigits(234));


//  7. Find the Second Largest Number in an Array

// function secondLargest(arr) {
//   const unique = [...new Set(arr)].sort((a, b) => b - a);
//   return unique[1];
// }
// let r = secondLargest([2,5,6,1,0,7,5])
// console.log(r);


//  8. Move All Zeros to End of an Array

// function moveZeros(arr) {
//   let result = arr.filter(num => num !== 0);
//   let zeros = arr.length - result.length;
//   return result.concat(Array(zeros).fill(0));
// }
// console.log(moveZeros([0,5,6,77,0,2,4,0]));


//  9. Reverse Each Word in a Sentence

// function reverseWords(sentence) {
//   return sentence.split(" ").map(word => word.split("").reverse().join("")).join(" ");
// }
// let result= reverseWords('father')
// console.log(result);


//  10. Check if All Elements in Array Are Unique

// function areUnique(arr) {
//   return new Set(arr).size === arr.length;
// }
// console.log(areUnique([2,6,2,9,7,8]));



//  11. Find Maximum in Array (No Math.max)

// function findMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// let result = findMax([10, 25, 7, 99, 4]);
// console.log("Max value is:", result);

//  12. Check if Two Strings are Anagrams (No sort, split)

// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   let count = {};
//   for (let i = 0; i < str1.length; i++) {
//     let ch = str1[i];
//     count[ch] = (count[ch] || 0) + 1;
//   }
//   for (let i = 0; i < str2.length; i++) {
//     let ch = str2[i];
//     if (!count[ch]) return false;
//     count[ch]--;
//   }
//   return true;
// }
// let res=isAnagram("amma","mama")
// console.log(res);

// 13. Count Frequency of Elements

// function countFrequency(arr) {
//   let freq = {};
//   for (let i = 0; i < arr.length; i++) {
//     let el = arr[i];
//     if (freq[el]) {
//       freq[el]++;
//     } else {
//       freq[el] = 1;
//     }
//   }
//   return freq;
// }
// let result = countFrequency([2,5,6,2,44,2,7,44,99])
//  console.log(result);

// 14. Factorial of a Number

// function factorial(n) {
//   let fact = 1;
//   for (let i = 1; i <= n; i++) {
//     fact *= i;
//   }
//   return fact;
// }
// console.log(factorial(5));

// 15. Check Prime Number

// function isPrime(n) {
//   if (n <= 1) return false;
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }
// let res=isPrime(6)
// console.log(res);

// 16. Sum of Digits of a Number

// function sumOfDigits(n) {
//   let sum = 0;
//   while (n > 0) {
//     let digit = n % 10;
//     sum += digit;
//     n = Math.floor(n / 10);
//   }
//   return sum;
// }
// console.log(sumOfDigits(234));

//  17. Second Largest in Array (No sort)

// function secondLargest(arr) {
//   let first = -Infinity;
//   let second = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > first) {
//       second = first;
//       first = arr[i];
//     } else if (arr[i] > second && arr[i] !== first) {
//       second = arr[i];
//     }
//   }
//   return second;
// }
// let r = secondLargest([2,5,6,1,0,7,5])
// console.log(r);

//  18. Move All Zeros to End

// function moveZeros(arr) {
//   let result = [];
//   let zeroCount = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       zeroCount++;
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   for (let i = 0; i < zeroCount; i++) {
//     result.push(0);
//   }
//   return result;
// }
// console.log(moveZeros([0,5,6,77,0,2,4,0]));

// 19. Reverse Each Word in a Sentence

// function reverseWords(sentence) {
//   let word = "";
//   let result = "";
//   for (let i = 0; i <= sentence.length; i++) {
//     if (sentence[i] === " " || i === sentence.length) {
//       for (let j = word.length - 1; j >= 0; j--) {
//         result += word[j];
//       }
//       if (i !== sentence.length) result += " ";
//       word = "";
//     } else {
//       word += sentence[i];
//     }
//   }
//   return result;
// }
// let result= reverseWords('father')
// console.log(result);

// 20. Check for Unique Elements in Array

// function areUnique(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
// console.log(areUnique([2,6,2,9,7,8]));


// 21. Basic Callback Example

// function greet(name, callback) {
//   console.log("Hello, " + name);
//   callback();
// }
// function sayBye() {
//   console.log("Goodbye!");
// }
// greet("Pallavi", sayBye);

// 22. Callback with Delay using setTimeout()

// function download(callback) {
//   console.log("Downloading file...");
//   setTimeout(() => {
//     console.log("Download complete");
//     callback();
//   }, 2000);
// }
// function afterDownload() {
//   console.log("Processing file...");
// }
// download(afterDownload);

// 23. Add Numbers using Callback

// function add(a, b, callback) {
//   let result = a + b;
//   callback(result);
// }
// add(4, 5, function(sum) {
//   console.log("Sum is: " + sum);
// });

// 24. Array Iteration using Callback (like forEach)

// function processArray(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// }
// processArray([1, 2, 3], function(item) {
//   console.log("Value: " + item);
// });

// 25. Custom Filter Function with Callback

// function customFilter(arr, callback) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// const evenNumbers = customFilter([1, 2, 3, 4, 5], function(n) {
//   return n % 2 === 0;
// });
// console.log(evenNumbers); // Output: [2, 4]

// 26. Execute After User Input (Simulated)

// function askUser(name, callback) {
//   console.log("Welcome " + name);
//   callback();
// }
// askUser("Ravi", function() {
//   console.log("Thanks for logging in!");
// });

// 27. Callback to Handle Success or Error

// function checkAge(age, success, error) {
//   if (age >= 18) {
//     success();
//   } else {
//     error();
//   }
// }
// checkAge(20,
//   () => console.log("Access granted."),
//   () => console.log("Access denied.")
// );

//  28. Sorting with Custom Callback (Manual Sort)

// function customSort(arr, compare) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (compare(arr[i], arr[j]) > 0) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }
// let result = customSort([3, 1, 4, 2], function(a, b) {
//   return a - b;
// });
// console.log(result); // Output: [1, 2, 3, 4]

// 29. Nesting Callbacks (Callback Hell Example)

// function task1(cb) {
//   console.log("Task 1 complete");
//   cb();
// }
// function task2(cb) {
//   console.log("Task 2 complete");
//   cb();
// }
// function task3() {
//   console.log("Task 3 complete");
// }
// task1(() => {
//   task2(() => {
//     task3();
//   });
// });

// 30. Create a Timer Function with Callback

// function waitAndRun(seconds, callback) {
//   console.log(`Waiting for ${seconds} seconds...`);
//   setTimeout(() => {
//     callback();
//   }, seconds * 1000);
// }
// waitAndRun(2, function() {
//   console.log("Time's up!");
// });


// 31. Basic Closure Example

// function outer() {
//   let message = "Hello from outer!";
//   return function inner() {
//     console.log(message); // inner still has access to outer's message
//   };
// }
// const greet = outer();
// greet(); // Output: Hello from outer!

// 32. Counter using Closure

// function createCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }
// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2

// 33. Private Variables using Closure

// function secretHolder(secret) {
//   return {
//     getSecret: function () {
//       return secret;
//     },
//     setSecret: function (newSecret) {
//       secret = newSecret;
//     }
//   };
// }
// const secret = secretHolder("p@ss123");
// console.log(secret.getSecret()); // p@ss123
// secret.setSecret("newSecret!");
// console.log(secret.getSecret()); // newSecret!

// 34. Closure Inside a Loop with let

// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log("Index:", i);
//   }, 1000);
// }
// Output: Index: 0, 1, 2 (because let creates block scope)

// 35. Closure for Delayed Greeting

// function delayedGreeting(name) {
//   return function () {
//     console.log("Hello, " + name);
//   };
// }
// const greetJohn = delayedGreeting("John");
// setTimeout(greetJohn, 2000); // Output: Hello, John (after 2 sec)

// 36. Function Factory using Closure

// function makeMultiplier(x) {
//   return function (y) {
//     return x * y;
//   };
// }
// const double = makeMultiplier(2);
// console.log(double(5)); // 10

// 37. Closure with Event Listener

// function setupButton(name) {
//   return function () {
//     console.log("Button clicked by " + name);
//   };
// }
// const buttonClick = setupButton("Pallavi");
// document.body.addEventListener("click", buttonClick);

// 38. Closure with Timer and Counter

// function countdown(start) {
//   return function () {
//     if (start > 0) {
//       console.log(start--);
//     } else {
//       console.log("Time's up!");
//     }
//   };
// }
// const timer = countdown(3);
// timer(); // 3
// timer(); // 2
// timer(); // 1
// timer(); // Time's up!

// 39. Closure in Immediately Invoked Function Expression (IIFE)

// const result = (function () {
//   let name = "Inside IIFE";
//   return function () {
//     return name;
//   };
// })();
// console.log(result()); // Inside IIFE

// 40. Create Bank Account using Closures

// function createAccount(initialBalance) {
//   let balance = initialBalance;
//   return {
//     deposit: function (amount) {
//       balance += amount;
//       return balance;
//     },
//     withdraw: function (amount) {
//       if (amount <= balance) {
//         balance -= amount;
//         return balance;
//       } else {
//         return "Insufficient funds";
//       }
//     },
//     checkBalance: function () {
//       return balance;
//     }
//   };
// }
// const myAccount = createAccount(1000);
// console.log(myAccount.deposit(500));     // 1500
// console.log(myAccount.withdraw(200));    // 1300
// console.log(myAccount.checkBalance());   // 1300


//41. find owel in string
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



//42.
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


//43.
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



//44.
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


//45.
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


//46.
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


