// function bubbleSort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// let array = [64, 25, 12, 22, 11];
// console.log("Sorted array:", bubbleSort(array));
// console.log("fourth min array:",array[3]);



// reverse astring
// function reverse (str){
//     let result=""
//     for(let i=str.length-1; i>=0; i--){
//         result=result+str[i]
//     }
//     console.log(result)
// }
// reverse("hello")


// function reverse(str) {
//     let result = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         let ch = str[i];
//         if (i % 2 === 0) {
//             result += ch.toUpperCase();
//         } else {
//             result += ch.toLowerCase();
//         }
//     }
//     console.log(result);
// }
// reverse("hello");


// function reverse(str) {
//     let result = "";
//     let len = 0;
//     while (str[len] !== undefined) len++;
//     for (let i = len - 1; i >= 0; i--) {
//         let ch = str[i];
//         if (i % 2 === 0 && ch >= 'a' && ch <= 'z') {
//             ch = String.fromCharCode(ch.charCodeAt(0) - 32);
//         }
//         else if (i % 2 !== 0 && ch >= 'A' && ch <= 'Z') {
//             ch = String.fromCharCode(ch.charCodeAt(0) + 32);
//         }

//         result += ch;
//     }
//     console.log(result);
// }
// reverse("hello");




// function reverseAltCaps(str) {
//   let result = "";
//   let len = 0;
//   while (str[len] !== undefined) len++;
//   const lowerToUpper = {
//     a: "A", b: "B", c: "C", d: "D", e: "E", f: "F", g: "G", h: "H", i: "I",
//     j: "J", k: "K", l: "L", m: "M", n: "N", o: "O", p: "P", q: "Q", r: "R",
//     s: "S", t: "T", u: "U", v: "V", w: "W", x: "X", y: "Y", z: "Z"
//   };
//   const upperToLower = {
//     A: "a", B: "b", C: "c", D: "d", E: "e", F: "f", G: "g", H: "h", I: "i",
//     J: "j", K: "k", L: "l", M: "m", N: "n", O: "o", P: "p", Q: "q", R: "r",
//     S: "s", T: "t", U: "u", V: "v", W: "w", X: "x", Y: "y", Z: "z"
//   };
//   for (let i = len - 1, j = 0; i >= 0; i--, j++) {
//     let ch = str[i];
//     if (j % 2 === 0 && lowerToUpper[ch]) {
//       result += lowerToUpper[ch];
//     } else if (j % 2 !== 0 && upperToLower[ch]) {
//       result += upperToLower[ch];
//     } else {
//       result += ch; // Non-alphabetic characters stay the same
//     }
//   }
//   console.log(result);
// }
// reverseAltCaps("pallavi");



// reverse an array
// function reverse (arr){
//     let result=[]
//     for(let i=arr.length-1; i>=0; i--){
//         result.push(arr[i]);
//     }
//     console.log(result)
// }
// reverse([2,7,9,3,8])


// function reverse(arr) {
//     let result = [];
//     for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
//         result[j] = arr[i]; // Direct assignment, no push
//     }
//     console.log(result);
// }
// reverse([2, 7, 9, 3, 8]);


// function reverse(arr) {
//     let result = [];
//     let j = 0;
//     for (let i = arr.length - 1; i >= 0; i--) {
//         result[j] = arr[i];  // Add reversed element
//         j++;
//         if (i !== 0) {        // Avoid adding 0 after the last element
//             result[j] = 0;    // Add 0 after each element
//             j++;
//         }
//     }
//     console.log(result);
// }
// reverse([2, 7, 9, 0, 3, 8]);




// function reverseArray(arr) {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start < end) {
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;

//     start++;
//     end--;
//   }
//   return arr;
// }
// let array = [1, 2, 3, 4, 5];
// console.log("Reversed array:", reverseArray(array));


// function getLength(str) {
//     let count = 0;
//     while (str[count] !== undefined) {
//         count++;
//     }
//     return count;
// }
// console.log("Length is:", getLength("hello"));  // Output: 5



// remove vowel
// function removevowel(str){
//     let result  =""
//     let vowel= "aeiouAEIOU"
//     for (let i=0;i<str.length;i++){
//         if(!vowel.includes(str[i])){
//             result=result+str[i];
//         }
//     }
//     console.log(result);
    
// }
// removevowel("pallavi")


// function removevowel(str) {
//     let result = "";
//     let vowels = "aeiouAEIOU";
//     for (let i = 0; str[i] !== undefined; i++) {
//         let isVowel = false;
//         // Check manually if str[i] is a vowel
//         for (let j = 0; vowels[j] !== undefined; j++) {
//             if (str[i] === vowels[j]) {
//                 isVowel = true;
//                 break;
//             }
//         }
//         if (!isVowel) {
//             result = result + str[i];
//         }
//     }
//     console.log(result);
// }
// removevowel("pallavi");


// function removeVowel(str) {
//     let result = "";
//     let vowels = "aeiouAEIOU";
//     for (let i = 0; i < str.length; i++) {
//         let isVowel = false;
//         // Manually compare current character with each vowel
//         for (let j = 0; j < vowels.length; j++) {
//             if (str[i] === vowels[j]) {
//                 isVowel = true;
//                 break;
//             }
//         }
//         if (!isVowel) {
//             result = result + str[i];
//         }
//     }
//     console.log(result);
// }
// removeVowel("pallavi");




// revome duplicate in array
function removeDuplicates(arr) {
  let result = [];
  let resultLength = 0;
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < resultLength; j++) {
      if (arr[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      result[resultLength] = arr[i];
      resultLength++;
    }
  }
  for (let k = 0; k < resultLength; k++) {
    console.log(result[k]);
  }
}
removeDuplicates([2, 5, 2, 7, 4, 7, 4, 6]);



function maskNumber(num) {
    let str = "" + num; // Convert number to string manually
    let result = "";
    let i = 0;

    // Calculate length manually
    let len = 0;
    while (str[len] !== undefined) len++;

    // Build result manually
    while (i < len) {
        if (i === 0 || i === len - 1) {
            result = result + str[i];  // Keep first and last digit
        } else {
            result = result + "*";     // Mask middle digits
        }
        i++;
    }

    console.log(result);
}

maskNumber(9876543210);



function maskNumber(num) {
    let str = "" + num; // Convert number to string
    let result = "";
    
    // Manually calculate the length
    let len = 0;
    while (str[len] !== undefined) {
        len++;
    }

    // Loop through each character
    let i = 0;
    while (i < len) {
        if (i < 2 || i >= len - 2) {
            result = result + str[i]; // First 2 and last 2 digits
        } else {
            result = result + "*";    // Mask middle digits
        }
        i++;
    }

    console.log(result);
}
maskNumber(9876543210);




