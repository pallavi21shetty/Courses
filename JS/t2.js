//let age =30;
let height=5.6;
//let height="5.6";
//let height='5.6';
//let height=[];
//let height=undefined;
//let height=null;
//let height={};
//let heights

// console.log("\n___________")
// console.log("the type of age variable is",age, typeof(age))

// console.log("the type of height variable is",height, typeof(height))
// console.log("___________\n\n")

// height =4.9

// console.log("\n___________")
// console.log("the type of age variable is",age, typeof(age))

// console.log("the type of height variable is",height, typeof(height))
// console.log("___________\n\n")



// let name="India"

// console.log(name)


let _name="Virat"
let city="Banglore"
let age=36
let team="India"

let output="Hi I am " +_name +",I'm " + age + "year old "
+ "and I am from " + city + " "+ team

console.log(output)

let fname="virat"
let lname="kohli"
let fullname1=fname +' ' + lname
let fullname2= fname.concat(" ", lname, " I am")
let fullname3= `${fname} ${lname}`

console.log(fullname1)
console.log(fullname2)
console.log(fullname3)

console.log(fullname3.length)
console.log(typeof(fullname3))
console.log(fname[2])
console.log(fname[fname.length-2])

let m="Rcb".toUpperCase()
let n="Rcb".toLowerCase()

let city1= "         Banglore"
console.log(city1.length)
city1= city1.trim()
console.log(city1.length)

console.log(city1.includes('lore'))
console.log(city1.lastIndexOf('lore'))
console.log(city1.startsWith('lore'))
console.log(city1.endsWith('lore'))
console.log(city1.charAt(5))
console.log(city1.search(/l/))
console.log(city1.replace('r','s'))