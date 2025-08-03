
// let res = 
//    `[{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},{"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259}},{"id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men's clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg","rating":{"rate":4.7,"count":500}},{"id":4,"title":"Mens Casual Slim Fit","price":15.99,"description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.","category":"men's clothing","image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg","rating":{"rate":2.1,"count":430}},{"id":5,"title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet","price":695,"description":"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.","category":"jewelery","image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":4.6,"count":400}}]
//     `
// // let data =json.stringify('res');
// let data =JSON.parse(res);
// console.log(data);


// let x;
// console.log(typeof x, x);
//out put undefined undefined


// greet();
// var greet = function() {
//  console.log('Hi');
//  }
//output: TypeError: greet is not a function



// const obj = {
// name: "JS",
// getName: function () {
// return this.name;
// }
// };
// const getName = obj.getName;
// console.log(getName());
//output: undefined
//The function is now called in the global context (or undefined in strict mode).this.name will be undefined.


// Promise.resolve(1)
// .then(x => x + 1)
// .then(x => { throw new Error("Oops"); })
// .then(x => console.log(x))
// .catch(err => console.log(err.message));
//output: Oops


//console.log(Boolean(null), Boolean (undefined), Boolean (NaN));
//output: false false false


// console.log("1");
// setTimeout(() => console.log("2"), 0);
// Promise.resolve().then(() => console.log("3"));
// console.log("4");
//output: 1
//4
//3
//2


//console.log([] == false);
//output: true
//explain [] → ""  (empty string), "" == false, false → 0 "" → 0, 0 == 0  



//console.log([] === false);
//output: false



// console.log(1 + "2" + 3);
// console.log(1 + 2 + "3");
//output: 123
//33     1st Line: 1 + "2" + 3   1 + "2" → "12"   (Number + String → String concatenation)  "12" + 3 → "123"   (String + Number → again, concatenation)   Output: "123"
//2nd Line: 1 + 2 + "3"    1 + 2 → 3    (Number + Number → arithmetic addition)   3 + "3" → "33"   (Number + String → concatenation)    Output: "33"


// let x=y= 5;
// console.log(typeof x);
// console.log(typeof y);
// output: number
// number




// const obj = {
// value: 100, 
// getValue: function () { 
// return this.value
// }
// };
// const fn = obj.getValue;
//  console.log(fn());
//  output: undefined




// console.log(parseInt('08'));
//  console.log(parseInt('08', 10));
//  output: 8
// 8




// console.log([] + []);
// console.log([] + {});
// console.log({} + []);
// output: 
// [object Object]
// [object Object]




// let a = 1;
//  function outer() {
//  let b = 2;
//  function inner() {
//  console.log(a + b);
//  }
//  return inner;
// }
// outer()();
// output: 3
// 1. let a = 1;
// Global variable a is declared with value 1.
// 2. outer() is called
// Inside outer, variable b = 2 is declared.
// 3. outer() returns the inner function
// inner is not called yet, just returned.
// 4. outer()() → the returned inner() function is immediately invoked
// Now inner() runs and logs a + b




// console.log(null ?? "default");
//  console.log(0?? "default");
//  output:default
// 0




//console.log("" ? "Yes" : "No");
//output: no


//console.log(0 ? "Truthy" : "Falsy");
//output:Falsy

//console.log([] ? "Array is truthy" : "Array is falsy");
//output:Array is truthy


//console.log(null ? "Has value" : "No value");
//output: No value


//let val = NaN;
//console.log(val ? "Number exists" : "Invalid number");
//output:Invalid number


//let isLoggedIn = false;
//console.log(isLoggedIn ? "Welcome" : "Please log in");
//output:Please log in


// console.log(false || true ? "Yes" : "No");
//output: Yes


//console.log(null ?? "default");
//output:default