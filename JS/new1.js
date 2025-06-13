// function palindrome(str){
//     for(let i=0; i<=str.length/2;i++){
//         if(!str[i]==str[str.length-1-i]){
//            return console.log("not pallindrome")
//         }
//     }
//    return  console.log(" palindrome"); 
// }
// palindrome("madam")
// palindrome("hello")


// function isPalindrome(str) {
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] !== str[str.length - 1 - i]) return false;
//     }
//     return true;
// }
// console.log(isPalindrome("level")); 
// i=0 i<2.5
// l != 5-1-0 4 = l
//i=1 
// e! =5-1-1 3 = e
//i=2 
// v ! = 5-1-2 =v


// function palindrome(str){
//     let result = str.split("").reverse().join("");
//     if(str== result){
//         console.log("palindrome");
//     }
//     else{
//     console.log("not palindrome");
//     } 
// }
// palindrome("hello")
// // palindrome("madam")



function reverse(str){
let x = ""
    for(let i=str.length-1; i>=0; i--){
        // console.log(str[i]);
         x= x+ str[i];
    }
  //console.log(x);
  if(str==x){
    console.log("palindrome");
  }
  else{
  console.log("not");
}
}
// reverse("madam")
reverse("hello")

// let a =[2,5,2,7,4,7,4,6]
//   let result=[]
//   for(let i=0;i<a.length;i++){
//     if(!result.includes(a[i])){
//       result.push(a[i]);
//     }
//   }
//   console.log(result);



  function dublicate(a){
  let result=[]
  for(let i=0;i<a.length;i++){
    if(!result.includes(a[i])){
      result.push(a[i]);
    }
  }
  console.log(result);
  }
  dublicate([2,5,2,7,4,7,4,6])