
// function greeting(){
//     console.log("hello"); 
// }
// setTimeout(greeting, 3000)


// function greeting(name){
//     console.log("hello "+ name +" "); 
// }
// setTimeout(greeting, 3000, 'Ram')


// function greeting(name){
//     console.log("hello "+ name +" "); 
// }
// setInterval(greeting, 3000, 'Ram')


// let country = ['IND', 'pAK', 'SL', 'AUS', 'NZ']
// let country_lower = []
// country.forEach( (el, index, arr) => country_lower.push(el.toLowerCase()));
// console.log(country_lower);


// let country = ['IND', 'pAK', 'SL', 'AUS', 'NZ']
// let callback= (el, index, arr) => console.log(el.toLowerCase())
// country.forEach(callback)


// let country = ['IND', 'pAK', 'SL', 'AUS', 'NZ']
// let callback= (el, index, arr) => console.log(el)
// country.forEach(callback)

// let country = ['IND', 'pAK', 'SL', 'AUS', 'NZ']
// function callback(el){
//     console.log(el);
// }
// country.forEach(callback)


// let country = ['IND', 'pAK', 'SL', 'AUS', 'NZ']
// function callback(el){
//     console.log(el.toLowerCase());
// }
// country.forEach(callback)

// let country = ['IND', 'pAK', 'SL', 'AUS', 'NZ']
// let callback= (el, i, arr) => console.log(el.toLowerCase(), i, arr)
// country.forEach(callback)

// let nums=[2,5,6,8,9]
// nums.forEach(el => console.log( el * el))


// let nums=[2,5,6,8,9]
// let out = nums.map(el => el * el)
// console.log(out);


// let nums=[2,5,6,8,9]
// let out = nums.filter(el => el % 2 == 0)
// console.log(out);


// let nums=[2,5,6,8,9]
// let out = nums.filter(el => el % 2 == 1)
// console.log(out);

// let nums=[2,5,6,8,9]
// let out = nums.reduce((acc, el) => acc+el)
// console.log(out);


// let nums=[2,5,6,8,9]
// let out = nums.reduce((acc, el) => acc+el, 50)
// console.log(out);

// let nums=[2,5,6,8,9]
// let out = nums.reduceRight((acc, el) => acc+el, 50)
// console.log(out);


// let nums=[2,5,6,8,9]
// let out = nums.reduceRight((acc, el) => acc-el, 50)
// console.log(out);

// let country = ['IND', 'pAK', 'SL', 'AUS', 'NZ']
// let out =country.reduceRight((acc, el) => acc+el, "===>")
//  console.log(out);


// let age=[21,52,16,18,69]
// let voters = age.every(el => el >= 18)
// console.log(voters);


// let age=[21,52,66,18,69]
// let voters = age.every(el => el >= 18)
// console.log(voters);

// let age=[21,52,16,18,69]
// let voters = age.some(el => el >= 18)
// console.log(voters);

// let age=[1,2,16,8,9]
// let voters = age.some(el => el >= 18)
// console.log(voters);

// let age=[1,2,16,8,9]
// let check_voter = el => el >= el
// let voters = age.some(check_voter)
// console.log(voters);

// let age=[1,2,16,8,9]
// let check_voter = el => el >= el
// let voters = age.every(check_voter)
// console.log(voters);


// let  matrix = [
//     [10, 20, 30],
//     [20, 30, 40],
//     [30, 40, 50]
// ]
// console.log(matrix.flat());




// let  matrix = [
//     [10, 20, 30],
//     [20, [30, 40], 90],
//     [30, 40, 50]
// ]
// console.log(matrix.flat());    //not flattend the inner array


// let  matrix = [
//     [10, 20, 30],
//     [20, [30, 40], 90],
//     [30, 40, 50]
// ]
// console.log(matrix.flat(2));


// let  matrix = [
//     [10, 20, 30],
//     [20, [30, 40], 90],
//     [30, 40, 50]
// ]
// console.log(matrix.flatMap(el => el));


// let  matrix = [
//     [10, 20, 30],
//     [20, [30, 40], 90],
//     [30, 40, 50]
// ]
// console.log(matrix.flatMap(el => [el*2]));


// let  matrix = [
//     [10, 20, 30],
//     [20, [30, 40], 90],
//     [30, 40, 50]
// ]
// console.log(matrix.flatMap(el_arr=> el_arr.map(el => el +2)));

// let  matrix = [
//     [10, 20, 30],
//     [20, 30, 40, 90],
//     [30, 40, 50]
// ]
// console.log(matrix.flatMap(el_arr => el_arr));


// let  matrix = [
//     [10, 20, 30],
//     [20, 30, 40, 90],
//     [30, 40, 50]
// ]
// console.log(matrix.flatMap(el_arr => el_arr.map(el => el*2)));


// let data = [
//   10, 20, 30, 20, 30,
//   40, 90, 30, 40, 50
// ]
// let out =data.find(el => el %4 ==0)
// console.log(out);


// let data = [
//   10, 20, 30, 20, 30,
//   40, 90, 30, 40, 50
// ]
// let out =data.filter(el => el %4 ==0)
// console.log(out);

// let data = [
//   10, 20, 30, 20, 30,
//   40, 90, 30, 40, 50
// ]
// let out =data.findIndex(el => el %4 ==0)
// console.log(out);



// let data = [
//   10, 20, 30, 20, 30,
//   40, 90, 30, 40, 50
// ]
// console.log((data.sort()));

// let data = [
//   10, 22, 30, 25, 50,
//   100, 90, 30, 40, 111
// ]
// console.log((data.sort()));



let data = [
  10, 22, 30, 25, 50,
  100, 90, 30, 40, 111
]
console.log(data.sort((a,b) => a-b));