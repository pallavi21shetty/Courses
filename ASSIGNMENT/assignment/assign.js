//Find the Max and Min num bin an Array
// const arr = [50, 60, 20, 10, 40];
// const min = Math.min(...arr);
// const max = Math.max(...arr);
// console.log(min, max); 

// const arr = [50, 60, 20, 10, 40];
// const min = Math.min.apply(null, arr);
// const max = Math.max.apply(null, arr);
// console.log(min, max);

// const arr = [50, 60, 20, 10, 40];
// const min = arr.reduce((a, b) => Math.min(a, b), Infinity);
// const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
// console.log(min, max); 

// function findMinMax(arr) {
//   let min = Infinity;
//   let max = -Infinity;
//   for (const num of arr) {
//     if (num < min) min = num;
//     if (num > max) max = num;
//   }
//   return { min, max };
// }
// const result = findMinMax([50, 60, 20, 5, 99, 10, 40]);
// console.log(result.min, result.max); 


// function findLargest(arr) {
//   if (arr.length === 0) return null; 
//   let max = arr[0]; 
//   let min=arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//       if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return { min, max };
// }
// console.log(findLargest([10, 25, 3, 99, 42])); 




//2. 	Find a 2nd maximum and Minimum number in an array 
// function findSecondMinMax(arr) {
//    if (arr.length < 2) return null; 
//   let min = Infinity,
//       secondMin = Infinity;
//   let max = -Infinity,
//       secondMax = -Infinity;
//   for (const n of arr) {
//     if (n > max) {
//       secondMax = max;
//       max = n;
//     } else if (n > secondMax && n < max) {
//       secondMax = n;
//     }
//     if (n < min) {
//       secondMin = min;
//       min = n;
//     } else if (n < secondMin && n > min) {
//       secondMin = n;
//     }
//   }
//   if (secondMax === -Infinity) secondMax = null;
//   if (secondMin === Infinity) secondMin = null;
//   return {
//     min, secondMin,
//     max, secondMax
//   };
// }
// const arr = [7, 2, 5, 2, 9, 9, 3];
// const res = findSecondMinMax(arr);
// console.log(res);

// // second largest
// function findSecondLargest(arr) {
//   if (arr.length < 2) return null; 
//   let largest = -Infinity;
//   let secondLargest = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (num > largest) {
//       secondLargest = largest;
//       largest = num;
//     } else if (num > secondLargest && num < largest) {
//       secondLargest = num;
//     }
//   }
//   return secondLargest === -Infinity ? null : secondLargest;
// }
// console.log(findSecondLargest([2,77,4,55,43,63,25,98,1])); 


// function secondMinMax(arr) {
//   const unique = [...new Set(arr)];        
//   if (unique.length < 2) return { secondMin: null, secondMax: null };
//   unique.sort((a, b) => a - b);       
//   return {
//     secondMin: unique[1],                   
//     secondMax: unique[unique.length - 2]     
//   };
// }
// console.log(secondMinMax([5, 1, 3, 5, 2]));  


//3. Sort an array without using built in methods
// function bubbleSort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort([10, 2, 5, 1])); 


// const arr = [40, 100, 1, 5, 25, 10];
// arr.sort((a, b) => a - b);
// console.log(arr); 


// const months = ["March", "Jan", "Feb", "Dec"];
// months.sort();
// console.log(months); 



//4. write a function to remove the duplicate element from an array
// const arr1 = [40, 100, 1, 5, 25, 5, 1, 25, 10];
// function unique(arr1) {
//   return [...new Set(arr1)];
// }
// console.log(unique(arr1));



// const arr = [40, 1, 1, 5, 25, 6, 5, 25, 10];
// function uniquee(arr) {
//   return arr.filter((value, index) => arr.indexOf(value) === index);
// }
// console.log(uniquee(arr));


// function removeDuplicates(arr) {
//   let result = [];
//   let resultLength = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false;
//     for (let j = 0; j < resultLength; j++) {
//       if (arr[i] === result[j]) {
//         isDuplicate = true;
//         break;
//       }
//     }
//     if (!isDuplicate) {
//       result[resultLength] = arr[i];
//       resultLength++;
//     }
//   }
//   for (let k = 0; k < resultLength; k++) {
//     console.log(result[k]);
//   }
// }
// removeDuplicates([2, 5, 2, 7, 4, 7, 4, 6]);



// //5. write a function to remove duplicate elements in a string "HelloWorld"
// function removeDuplicateChars(str) {
//   return [...new Set(str)].join('');
// }
// console.log(removeDuplicateChars("hello")); 


// function removeDuplicateChars(str) {
//   return str
//     .split('')
//     .reduce((acc, char) => acc.includes(char) ? acc : acc + char, '');
// }
// console.log(removeDuplicateChars("hello world"));



// function removeDuplicateChars(str) {
//   let result = ''; 
//   for (let i = 0; i < str.length; i++) {
//     let isDuplicate = false;
//     for (let j = 0; j < result.length; j++) {
//       if (str[i] === result[j]) {
//         isDuplicate = true;
//         break;
//       }
//     }

//     if (!isDuplicate) {
//       result += str[i];
//     }
//   }

//   return result;
// }
// console.log(removeDuplicateChars("banana"));


// 6)	Write function to convert camelCase to snake_case
// function camelToSnake(str) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     const ch = str[i];
//     if (ch >= 'A' && ch <= 'Z') {
//       result += '_' + ch.toLowerCase();
//     } else {
//       result += ch;
//     }
//   }
//   return result;
// }
// console.log(camelToSnake("camelCase"));        
// console.log(camelToSnake("camelCaseString")); 
// console.log(camelToSnake("simpleTestCase"));   


// const camelToSnakee = str => str.replace(/([A-Z])/g, "_$1").toLowerCase();
// console.log(camelToSnakee("simpleTestCase")); 




// 7)	write a function to conver snake_case to camelCase
// function snakeToCamel(str) {
//   return str
//     .split('_')
//     .map((word, index) => {
//       if (index === 0) return word; // first word stays lowercase
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join('');
// }
// console.log(snakeToCamel("this_is_snake_case"));  



// function snakeToCamel(str) {
//   let result = '';
//   let makeUpper = false;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '_') {
//       makeUpper = true;
//     } else {
//       if (makeUpper) {
//         result += str[i].toUpperCase();
//         makeUpper = false;
//       } else {
//         result += str[i];
//       }
//     }
//   }
//   return result;
// }
// console.log(snakeToCamel("hello_world_test")); // helloWorldTest




// function snakeToCamel(str) {
//   let result = '';
//   let makeUpper = false;
//   for (let i = 0; i < str.length; i++) {
//     let ch = str[i];
//     if (ch === '_') {
//       makeUpper = true;  
//     } else {
//       if (makeUpper) {
//         if (ch >= 'a' && ch <= 'z') {
//           result += String.fromCharCode(ch.charCodeAt(0) - 32);
//         } else {
//           result += ch;
//         }
//         makeUpper = false;
//       } else {
//         result += ch;
//       }
//     }
//   }

//   return result;
// }
// console.log(snakeToCamel("this_is_snake_case"));  // thisIsSnakeCase



// 8)	write a function to flatten the nested array
// function flattenArray(arr) {
//   return arr.flat(Infinity);
// }
// console.log(flattenArray([1, [2, [3, 4], 5], 6]));  // [1,2,3,4,5,6]



// function flattenArray(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       let flat = flattenArray(arr[i]);
//       for (let j = 0; j < flat.length; j++) {
//         result.push(flat[j]);
//       }
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(flattenArray([1, [2, [3, 4], 5], 6]));  // [1,2,3,4,5,6]


// function flattenArray(arr) {
//   let result = [];
//   let index = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'object' && arr[i] !== null && typeof arr[i].length === 'number') {
//       let flat = flattenArray(arr[i]);
//       for (let j = 0; j < flat.length; j++) {
//         result[index] = flat[j];
//         index++;
//       }
//     } else {
//       result[index] = arr[i];
//       index++;
//     }
//   }
//   return result;
// }
// console.log(flattenArray([1, [2, [3, 4], 5], 6]));  // Output: [1, 2, 3, 4, 5, 6]




//9)	Write a function to find the 2nd largest number in a nested array
// function secondLargestNested(arr) {
//   let flat = arr.flat(Infinity);
//   let unique = [...new Set(flat)];
//   unique.sort((a, b) => b - a);
//   return unique[1];
// }
// console.log(secondLargestNested([1, [4, [3, 5]], 2])); 



// function findSecondLargestInNestedArray(arr) {
//   // Step 1: Flatten the nested array manually
//   let result = [];
//   let resultIndex = 0;

//   function flatten(input) {
//     for (let i = 0; i < input.length; i++) {
//       if (typeof input[i] === 'object' && input[i] !== null && typeof input[i].length === 'number') {
//         flatten(input[i]);
//       } else {
//         result[resultIndex] = input[i];
//         resultIndex++;
//       }
//     }
//   }

//   flatten(arr);
//   // Step 2: Find the 1st and 2nd largest numbers
//   let max = -Infinity;
//   let secondMax = -Infinity;
//   for (let i = 0; i < result.length; i++) {
//     let num = result[i];
//     if (num > max) {
//       secondMax = max;
//       max = num;
//     } else if (num > secondMax && num < max) {
//       secondMax = num;
//     }
//   }
//   return secondMax;
// }
// console.log(findSecondLargestInNestedArray([1, [4, [3, 5, [9]], 9, 2]]));  // Output: 5




// 10)	write a function to generate below pattern
// a.	1
// b.	2 9
// c.	3 8 10
// d.	4 7 11 14
// e.	5 6 12 13 15
function generatePattern(numRows) {
    if (numRows <= 0) {
        return [];
    }
    const pattern = Array(numRows).fill(null).map((_, rowIndex) => Array(rowIndex + 1).fill(null));
    let currentNumber = 1;
    for (let col = 0; col < numRows; col++) {
        if (col % 2 === 0) {
            for (let row = col; row < numRows; row++) {

                if (row >= col) { 
                    pattern[row][col] = currentNumber++;
                }
            }
        } else {
            for (let row = numRows - 1; row >= col; row--) {
                if (row >= col) {
                    pattern[row][col] = currentNumber++;
                }
            }
        }
    }
    const formattedOutput = pattern.map(row => {
        return row.filter(val => val !== null).join(' ');
    });
    return formattedOutput;
}
console.log(generatePattern(5).join('\n'));





// 11)	program for adding zeros after 3 values in array 
// a.	Example: [1, 2,3,4,5,6,6,7,8]
// b.	Output: [1, 2,3,0,4,5,6,0,6,7,8,0]
// function insertZerosAfterEveryThree(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i]);
//     if ((i + 1) % 3 === 0) {
//       result.push(0);
//     }
//   }
//   return result;
// }
// let input = [1, 2, 3, 4, 5, 6, 6, 7, 8];
// console.log(insertZerosAfterEveryThree(input));



// function insertZerosNoBuiltins(arr) {
//   let result = [];
//   let index = 0;
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     result[index] = arr[i];
//     index++;
//     count++;
//     if (count === 3) {
//       result[index] = 0;
//       index++;
//       count = 0;
//     }
//   }
//   return result;
// }
// let input2 = [1, 2, 3, 4, 5, 6, 6, 7, 8];
// let output2 = insertZerosNoBuiltins(input2);
// console.log(output2);


//12)	Reverse a string a without using built in method 
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }
// console.log(reverseString("hello")); 


// function reverse (str){
//     let result=""
//     for(let i=str.length-1; i>=0; i--){
//         result=result+str[i]
//     }
//     console.log(result)
// }
// reverse("hello")



//13)	Write a function to return a fibonacci series
// function fibonaccii(n){
//     if(n==0) return 0
//     if(n==1) return 1
//     let a=0, b=1, fib;
//     for(let i=2; i<=n;i++){
// fib=a+b
// a=b
// b=fib
//     }
//     return b;
// }
// console.log(fibonaccii(4))


// function fibonacci(n){
//     let a=0, b=1, fib;
//     console.log(a);
//     if(n>1){
//       console.log(b);
//     }
//     for(let i=2; i<n;i++){
// fib=a+b
// console.log(fib);
// a=b;
// b=fib;
//     }
// }
// fibonacci(4)



//14)	Implement a deep clone(copy) function in JavaScript that creates a copy of a nested object or array without any reference to the original. 
// function deepCloneUsingJSON(obj) {
//   return JSON.parse(JSON.stringify(obj));
// }
// const original = { a: 1, b: { c: 2 } };
// const clone = deepCloneUsingJSON(original);
// clone.b.c = 99;
// console.log(original.b.c); 


// function deepClone(obj) {
//   if (obj === null || typeof obj !== 'object') {
//     return obj; // Return primitive types directly
//   }
//   // Detect if obj is an array by checking its constructor
//   let isArray = (obj.constructor === [].constructor);
//   let copy = isArray ? [] : {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       copy[key] = deepClone(obj[key]); // Recursively clone nested properties
//     }
//   }
//   return copy;
// }
// const original = {
//   x: 10,
//   y: [1, 2, { z: 3 }],
//   z: { a: { b: 5 } }
// };
// const cloned = deepClone(original);
// cloned.y[2].z = 99;
// console.log(original.y[2].z); 




// 15)	write a function to find how many times an elements are repeated in an array [1,2,3,3,5,2,1,7,6,8,7,8] and in string "abcdaabdlfjl'
// function countArrayFrequency(arr) {
//   return arr.reduce((freq, item) => {
//     freq[item] = (freq[item] || 0) + 1;
//     return freq;
//   }, {});
// }
// const array = [1, 2, 3, 3, 5, 2, 1, 7, 6, 8, 7, 8];
// console.log(countArrayFrequency(array));


// function countCharFrequency(str) {
//   return str.split('').reduce((freq, char) => {
//     freq[char] = (freq[char] || 0) + 1;
//     return freq;
//   }, {});
// }
// const str = "abcdaabdlfjl";
// console.log(countCharFrequency(str));


// function countArrayFrequency(arr) {
//   let frequency = {};
//   for (let i = 0; i < arr.length; i++) {
//     let item = arr[i];
//     if (frequency[item] === undefined) {
//       frequency[item] = 1;
//     } else {
//       frequency[item]++;
//     }
//   }
//   return frequency;
// }
// let array = [1, 2, 3, 3, 5, 2, 1, 7, 6, 8, 7, 8];
// console.log(countArrayFrequency(array));



// function countCharFrequency(str) {
//   let frequency = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (frequency[char] === undefined) {
//       frequency[char] = 1;
//     } else {
//       frequency[char]++;
//     }
//   }
//   return frequency;
// }
// let string = "abcdaabdlfjl";
// console.log(countCharFrequency(string));


//16)	write a function to capitalize the each words first letter to capital 
// function capitalizeWords(str) {
//   return str
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ');
// }
// const sentence = "hello world this is javascript";
// console.log(capitalizeWords(sentence));



// function capitalizeWordsManual(str) {
//   let result = '';
//   let capitalizeNext = true;
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (capitalizeNext && char >= 'a' && char <= 'z') {
//       result += String.fromCharCode(char.charCodeAt(0) - 32);
//       capitalizeNext = false;
//     } else {
//       result += char;
//       capitalizeNext = (char === ' ');
//     }
//   }
//   return result;
// }
// console.log(capitalizeWordsManual("hello world this is javascript"));


// 17)	Ex : ['abc','def','ghi']
// a.	output : ['Abc', 'Def','Ghi"]
// function capitalizeArray(arr) {
//   return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
// }
// const input = ['abc', 'def', 'ghi'];
// console.log(capitalizeArray(input));



// function capitalizeArrayNoPush(arr) {
//   let result = new Array(arr.length); 
//   for (let i = 0; i < arr.length; i++) {
//     let word = arr[i];
//     let firstChar = word[0];
//     let rest = '';
//     for (let j = 1; j < word.length; j++) {
//       rest += word[j];
//     }
//     let capitalized = '';
//     if (firstChar >= 'a' && firstChar <= 'z') {
//       capitalized = String.fromCharCode(firstChar.charCodeAt(0) - 32) + rest;
//     } else {
//       capitalized = firstChar + rest;
//     }
//     result[i] = capitalized; 
//   }
//   return result;
// }
// const input = ['abc', 'def', 'ghi'];
// console.log(capitalizeArrayNoPush(input));
// // Output: ['Abc', 'Def', 'Ghi']


// // 18)	write a function to calculate the sum of total marks in an array of objects 
// // a.	ex : [{sub:'Maths', marks:60},{sub:'Science', marks:70},{sub:'English', marks:90}]
// function totalMarks(arr) {
//   return arr.reduce((sum, obj) => sum + obj.marks, 0);
// }
// const subjects = [
//   { sub: 'Maths', marks: 60 },
//   { sub: 'Science', marks: 70 },
//   { sub: 'English', marks: 90 }
// ];
// console.log(totalMarks(subjects)); 


// function totalMarksManual(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i].marks;
//   }
//   return sum;
// }
// const subjects1 = [
//   { sub: 'Maths', marks: 60 },
//   { sub: 'Science', marks: 70 },
//   { sub: 'English', marks: 90 }
// ];
// console.log(totalMarksManual(subjects1));  



// //22)	Write a function to remove the duplicate from 2 arrays, let a = [1,2,3,4,5] let b = [5,3,7,8,9]
// function mergeUniqueArrays(a, b) {
//   return [...new Set(a.concat(b))];
// }
// let a = [1, 2, 3, 4, 5];
// let b = [5, 3, 7, 8, 9];
// console.log(mergeUniqueArrays(a, b));  


// function mergeUniqueArraysManual(a, b) {
//   let merged = [];
//   let index = 0;
//   for (let i = 0; i < a.length; i++) {
//     let found = false;
//     for (let j = 0; j < merged.length; j++) {
//       if (a[i] === merged[j]) {
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       merged[index] = a[i];
//       index++;
//     }
//   }
//   for (let i = 0; i < b.length; i++) {
//     let found = false;
//     for (let j = 0; j < merged.length; j++) {
//       if (b[i] === merged[j]) {
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       merged[index] = b[i];
//       index++;
//     }
//   }
//   return merged;
// }
// let a = [1, 2, 3, 4, 5];
// let b = [5, 3, 7, 8, 9];
// console.log(mergeUniqueArraysManual(a, b)); 





//23)	Write a JavaScript program that takes an array like [1, 1, 2, 3, 3, 3] and returns an object where the keys are the elements and the values are the count of how many times each element appears
function countFrequencies(arr) {
  const count = {};
  arr.forEach(num => {
    count[num] = (count[num] || 0) + 1;
  });
  return count;
}
const input = [1, 1, 2, 3, 3, 3];
console.log(countFrequencies(input));


function countFrequenciesManual(arr) {
  const count = {};
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (count[val] === undefined) {
      count[val] = 1;
    } else {
      count[val] = count[val] + 1;
    }
  }
  return count;
}
console.log(countFrequenciesManual([1, 1, 2, 3, 3, 3]));



