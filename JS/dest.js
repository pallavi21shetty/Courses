// let [x,y,z] =[1,3,6]
// console.log(z);
// console.log(y);


// let [x,y,z] =[1,3,6,5,86,89,84,34]
// console.log(z);
// console.log(y);


// let [x,y,  ...z] =[1,3,6,5,86,89,84,34]
// console.log(z);
// console.log(y);


// let x = [12,23,24]
// let y = ["A","B","C"]
// let z =[...x, ...y]
// console.log(z);


// let x = [12,23,24]
// let y = ["A","B","C"]
// let z =[...x, ...y, 1, 2, 3]
// console.log(z);

// let x =[12, 23, 24]
// let y = x
// x.push(100)
// console.log(y);
// console.log(x);

// let x =[12, 23, 24]
// let y = x
// x ="ABS"
// y.push(100)
// console.log(y);
// console.log(x);

// let x =[12, 23, 24]
// let y = x
// x =["ABS"]
// y.push(100)
// console.log(y);
// console.log(x);

// let x =[12, 23, 24]
// let y = [...x]
// y.push(100)
// console.log(x);
// console.log(y);

// let x =[12, 23, 24]
// let y = [...x]
// y.push(100)
// x.push(300)
// console.log(x);
// console.log(y);

// let add= (...args) => {
//     console.log(args);
// }
// add(10, 202, 30)


// let mobile ={
//     "name":"samsung",
//     "price": 20000,
//     "color":"Black"
// }
// let {name,price, color}=mobile
// console.log(price);


// let mobile ={
//     "name":"samsung",
//     "price": 20000,
//     "color":"Black"
// }
// let {mbl_name,cost, clr}=mobile
// console.log(cost);


// let mobile ={
//     "name":"samsung",
//     "price": 20000,
//     "color":"Black"
// }
// let {name:mbl_name,price:cost, color:clr}=mobile
// console.log(mbl_name,cost, clr);



//Reg ex

// let str1 = "good morning"
// let out= str1.match(/good/)
// console.log(out);


// let str1 = "Raja and Sonam Raghuvanshi's youtube@gmail.com in Meghalaya google@gamil.com tragic when Raja was found murdered. Police claimed ok@gmail.com and her lover planned the crime. "
// let out= str1.match(/\w+\@\w+\.\w+/g)
// console.log(out);


// let str1 = "Raja and Sonam Raghuvanshi's youtube@gmail.com in Meghalaya google@gamil.com tragic when Raja was found murdered. Police claimed ok@gmail.com and her lover planned the crime. "
// let pattern =/\w+\@\w+\.\w+/gi
// let out= str1.match(pattern)
// console.log(out);

// let str1 = "Raja and Sonam Raghuvanshi's youtube@gmail.com in Meghalaya google@gamil.com tragic when Raja was found murdered. Police claimed ok@gmail.com and her lover planned the crime. "
// let pattern =/\w+/gi
// let out= str1.match(pattern)
// console.log(out);

// let str1 = "Raja and 1234 Raghuvanshi's youtube@gmail.com in Meghalaya google@gamil.com tragic when Raja was found murdered. Police claimed ok@gmail.com and her lover planned the crime. "
// let pattern =/\w+/gi
// let out= str1.match(pattern)
// console.log(out);

// let str1 = "Raja and 1234 Raghuvanshi's youtube@gmail.com in Meghalaya google@gamil.com tragic when Raja was found murdered. Police claimed ok@gmail.com and her lover planned the crime. "
// let pattern =/\w+\s\d+/gi
// let out= str1.match(pattern)
// console.log(out);

// let str1 = "Raja and 1234 Raghuvanshi's youtube@gmail.com in Meghalaya google@gamil.com tragic when Raja was found murdered. Police claimed ok@gmail.com and her lover planned the crime. "
// let pattern =/\w+\@\w+\.\w+/gi
// let out= str1.match(pattern)
// console.log(out);

// let str1 = "Raja and 1234 Raghuvanshi's youtube@gmail.com in Meghalaya google@gamil.com tragic when Raja was found murdered. Police claimed ok@gmail.com and her lover planned the crime. "
// let pattern =/\w+\@\w+\./gi
// let out= str1.match(pattern)
// console.log(out);

// let str1 = "you Raja and 1234 Raghuvanshi's youtube@gmail.com in Meghalaya google@gamil.com tragic when Raja was found murdered. Police claimed ok@gmail.com and her lover planned the crime. "
// let pattern =/^a/gi
// let out= str1.match(pattern)
// console.log(out);

// let str1 = "you Raja and 1234 Raghuvanshi's youtube@gmail.com in Meghalaya google@gamil.com tragic when Raja was found murdered. Police claimed ok@gmail.com and her lover planned the crime. "
// let pattern =/^y\w+/gi
// let out= str1.match(pattern)
// console.log(out);

// let str1 = "you Raja and 1234 Raghuvanshi's youtube@gmail.com in Meghalaya google@gamil.com tragic when Raja was found murdered. Police claimed ok@gmail.com and her lover planned the crime."
// let pattern =/crime.$/gi
// let out= str1.match(pattern)
// console.log(out);


// let str1 = "you Raja and 1234 Raghuvanshi's youtube@gmail.com in Meghalaya google@gamil.com tragic when Raja was found murdered. Police claimed ok@gmail.com and her lover planned the crime."
// let pattern =/\w{10,}/gi
// let out= str1.match(pattern)
// console.log(out);

// let str1 = "you Raja and 1234 Raghuvanshi's youtube@gmail.com in Meghalaya google@gamil.com tragic when Raja was found murdered. Police claimed ok@gmail.com and her lover planned the crime."
// let pattern =/\w{5,8}/gi
// let out= str1.match(pattern)
// console.log(out);

// let str1 = "you Raja and 1234 Raghuvanshi's youtube@gmail.com in Meghalaya google@gamil.com tragic when Raja was found murdered. Police claimed ok@gmail.com and her lover planned the crime."
// let pattern =/[ft\@]+/gi
// let out= str1.match(pattern)
// console.log(out);

// let str1 = "you Raja and 1234 Raghuvanshi's youtube@gmail.com in Meghalaya google@gamil.com tragic when Raja was found murdered. Police claimed ok@gmail.com and her lover planned the crime."
// let pattern =/[a-z0-9]+/gi
// let out= str1.match(pattern)
// console.log(out);

let str1 = "you Raja and 1234 Raghuvanshi's youtube@gmail.com in Meghalaya google@gamil.com tragic when Raja was found murdered. Police claimed ok@gmail.com and her lover planned the crime."
let pattern =/[a-c0-9]+/gi
let out= str1.match(pattern)
console.log(out);