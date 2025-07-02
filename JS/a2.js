//1.  nth factorial
// function factorial(n){
// let fact=1;
// for(let i=2;i<=n;i++){
//     fact=fact*i
// }
// return fact;
// }
// console.log(factorial(5))


//2. factorial series
// function factorial(n){
// let fact=1;
// for(let i=1;i<=n;i++){
//     fact=fact*i
//     console.log(fact)
// }
// }
// factorial(5)

//3 nth fibonocci
// function fibonacci(n){
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
// console.log(fibonacci(4))


//4. fibonacci series
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


//5 reverse astring
// function reverse (str){
//     let result=""
//     for(let i=str.length-1; i>=0; i--){
//         result=result+str[i]
//     }
//     console.log(result)
// }
// reverse("hello")


//6 reverse an array
// function reverse (arr){
//     let result=[]
//     for(let i=arr.length-1; i>=0; i--){
//         result.push(arr[i]);
//     }
//     console.log(result)
// }
// reverse([2,7,9,3,8])


//7 palindrome
// function palindrome(str){
//    let reverse= str.split("").reverse().join("")
//    if(str==reverse){
//     console.log("palindrome")
//    }
//    else{
//     console.log("not");
//    }
// }
// palindrome("hello")


//8. 
// function palindrome(str){
//     let result=""
//     for(let i=str.length-1; i>=0; i--){
//         result=result+str[i]
//     }
// if(str==result){
//     console.log("yes"); 
// }
// else{
//     console.log("not");
// }
// }
// palindrome("madam")



//9.
// function palindrome(str){
//     for(let i=0; i<str.length/2;i++){
//         if(str[i]!= str[str.length-i-1]){
//             return false
//         }
//     }
//     return true
// }
// console.log(palindrome("madam"))


//10 remove vowel
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


//10 remove vowel
// function removevowel(str){
//     let result  =""
//     let vowel= "aeiouAEIOU"
//     for (let i=0;i<str.length;i++){
//         if(!vowel.includes(str[i])){
//             result=result+str[i];
//         }
//     }
//   return result
    
// }
// console.log(removevowel("pallavi"))

//11 count vowel
// function removevowel(str){
//     let vowel= "aeiouAEIOU"
//     let count =0
//     for (let i=0;i<str.length;i++){
//         if(!vowel.includes(str[i])){
//          count++
//         }
//     }
//     console.log(count);
// }
// removevowel("pallavi")



//12 remove dublicate from array
// function removeDuplicates(arr) {
//   let uniqueArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false;
//     // Check if arr[i] already exists in uniqueArr
//     for (let j = 0; j < uniqueArr.length; j++) {
//       if (arr[i] === uniqueArr[j]) {
//         isDuplicate = true;
//         break;
//       }
//     }
//     if (!isDuplicate) {
//       uniqueArr.push(arr[i]);
//     }
//   }
//   return uniqueArr;
// }
// console.log(removeDuplicates([2, 5, 3, 2, 8, 3, 1])); // Output: [2, 5, 3, 8, 1]



//13 remove dublicate from string
// function removeDuplicates(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     let isDuplicate = false;
//     // Check if character is already in result
//     for (let j = 0; j < result.length; j++) {
//       if (result[j] === str[i]) {
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
// console.log(removeDuplicates("programming")); // Output: "progamin"



//14
// function dublicate(a){
//   let result=[]
//   for(let i=0;i<a.length;i++){
//     if(!result.includes(a[i])){
//       result.push(a[i]);
//     }
//   }
//   console.log(result);
//   }
//   dublicate([2,5,2,7,4,7,4,6])




//15 prime or not
// function prime(n){
//     if(n<=1) return false
//     for(let i=2;i<n;i++){
//         if(n%i==0)
//             return false
//     }
//     return true
// }
// console.log(prime(9));


//16 year leap
// function leapyear(year){
//     if((year%4==0 && year %100 != 0) || year%400 ==0){
//         console.log("leap year");
//     }
//     else{
//         console.log("not");
//     }
// }
// leapyear(2025)



//17 merge array
// let a1 = [1, 2];
// let a2 = [3, 4];
// let merged = [...a1, ...a2];
// console.log(merged)



//18 merge object
// let obj1 = { a: 1, b: 2 };
// let obj2 = { b: 3, c: 4 };
// let combined = { ...obj1, ...obj2 };
// console.log(combined)




//19 flatened array
// let  matrix = [
//     [10, 20, 30],
//     [20, [30, 40], 90],
//     [30, 40, 50]
// ]
// console.log(matrix.flat(2)); 



//20 flattende array
// let x= [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// for(let data of x){
//     for(let el of data){
//         console.log(el);
//     }
// }




//21 anagram
// function isAnagram(str1, str2) {
//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// }
// let res=isAnagram("amma","mama")
// console.log(res);


//22
// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   let count = {};
//   for (let i = 0; i < str1.length; i++) {
//     let char = str1[i];
//     count[char] = (count[char] || 0) + 1;
//   }
//   for (let i = 0; i < str2.length; i++) {
//     let char = str2[i];
//     if (!count[char]) {
//       return false;
//     }
//     count[char]--;
//   }
//   return true;
// }
// console.log(isAnagram("listen", "silent")); 
// console.log(isAnagram("triangle", "integral")); 
// console.log(isAnagram("apple", "paler"));


//23 automorphic
// function isAutomorphic(num) {
//   let square = num * num;
//   let numStr = num.toString();
//   let squareStr = square.toString();
//   let endPart = squareStr.slice(-numStr.length);
//   return endPart === numStr;
// }
// console.log(isAutomorphic(5));    
// console.log(isAutomorphic(6)); 
// console.log(isAutomorphic(76));   
// console.log(isAutomorphic(25));   


//24
// function isAutomorphic(num) {
//   let square = num * num;
//   let temp = num;
//   while (temp > 0) {
//     if (temp % 10 !== square % 10) {
//       return false;
//     }
//     temp = Math.floor(temp / 10);
//     square = Math.floor(square / 10);
//   }

//   return true;
// }
// console.log(isAutomorphic(5));    
// console.log(isAutomorphic(6));    
// console.log(isAutomorphic(76));   
// console.log(isAutomorphic(25));   


//25
// function flattenArray(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(flattenArray(arr[i])); // Recursive step
//     } else {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }
// console.log(flattenArray([1, [2, [3, 4]], 5,[6,7,9]]));

//28
// function flattenArray(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let current = arr[i];
//     if (Array.isArray(current)) {
//       result = result.concat(flattenArray(current.slice()));
//     } else {
//       result.push(current);
//     }
//   }
//   return result;
// }
// console.log(flattenArray([1, [2, [3, 4]], 5]));


// 29. reverse number
// function reverseNumber(num) {
//   let reversed = 0;

//   while (num > 0) {
//     let digit = num % 10;           
//     reversed = reversed * 10 + digit; 
//     num = Math.floor(num / 10);     
//   }
//   return reversed;
// }
// console.log(reverseNumber(1002));


//30. palindrome num
// function isPalindrome(num) {
//   let original = num;
//   let reversed = 0;
//   while (num > 0) {
//     let digit = num % 10;
//     reversed = reversed * 10 + digit;
//     num = Math.floor(num / 10);
//   }
//   return original === reversed;
// }
// console.log(isPalindrome(123));   
// console.log(isPalindrome(1001)); 


// 31. Find the Maximum Number in an Array
// function findMax(arr) {
//   return Math.max(...arr);
// }
// let result = findMax([10, 25, 7, 99, 4]);
// console.log("Max value is:", result);


//32 largest no in array
// function findLargest(arr) {
//   if (arr.length === 0) return null; 
//   let max = arr[0]; 
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findLargest([10, 25, 3, 99, 42]));   


//33 second largest
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
// console.log(findSecondLargest([100,100])); 



//  34. Count the Frequency of Each Element in an Array
function countFrequency(arr) {
  const freq = {};
  for (let item of arr) {
    freq[item] = (freq[item] || 0) + 1;
  }
  return freq;
}
let result = countFrequency([2,5,6,2,44,2,7,44,99])
console.log(result);