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
