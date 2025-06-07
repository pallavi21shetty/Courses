// let fname
// let lname
// let full_name

// fname="virat"
// lname="kohli"
// full_name= fname + ' ' + lname
// full_name=full_name.toLocaleUpperCase()
// console.log(full_name);

// fname="Rachin"
// lname="Ravindra"
// full_name= fname + ' ' + lname
// full_name=full_name.toLocaleUpperCase()
// console.log(full_name);

// fname="Rohit"
// lname="Sharma"
// full_name= fname + ' ' + lname
// full_name=full_name.toLocaleUpperCase()
// console.log(full_name);

// fname="virat               "
// lname="kohli"
// full_name= fname + ' ' + lname
// full_name=full_name.toLocaleUpperCase()
// console.log(full_name);

// fname="virat"
// lname="kohli"
// full_name= fname.trim() + ' ' + lname.trim()
// full_name=full_name.toLocaleUpperCase()
// console.log(full_name);





//function
// function construct_fullname(fname,lname){
//     full_name= fname.trim() + ' ' + lname.trim()
//     full_name=full_name.toLocaleUpperCase()
//      console.log(full_name);
// }

// fname="virat"
// lname="kohli"
// construct_fullname(fname,lname)

// fname="Rachin"
// lname="Ravindra"
// construct_fullname(fname,lname)

// fname="Rohit"
// lname="Sharma"
// construct_fullname(fname,lname)




// function construct_fullname(fname,lname){
//     full_name= fname.trim().toUpperCase() + ' ' + lname.trim().toLowerCase()
//      console.log(full_name);
// }

// fname="virat"
// lname="kohli"
// construct_fullname(fname,lname)

// fname="Rachin"
// lname="Ravindra"
// construct_fullname(fname,lname)

// fname="Rohit"
// lname="Sharma"
// construct_fullname(fname,lname)




//normal function
        // declaration function
//ex 1
// function greet() {
//     console.log("Good Morning!!");
// }
// greet()
// greet()

//ex 2
// function greet(name){
//     console.log("hi " + name + ", good morning");
// }
// greet('sachin')

//ex 3
// function displaydetails(name, age, city){
//     let out =   `hi, my  name is ${name}, i am ${age} year old and i live in ${city}`
//     console.log(out);
// }
// displaydetails('virat', 38, 'Delhi')
// displaydetails('rohit', 38, 'mumbai')
// displaydetails('rahul', 28, 'banglore')
// displaydetails('rachin', 38)  //undefined for city

//ex 4
// function printAll(num1, num2, num3, num4){
//     console.log(`argument #1 is  ${num1}`);
//     console.log(`argument #2 is  ${num2}`);
//     console.log(`argument #3 is  ${num3}`);
//     console.log(`argument #4 is  ${num4}`);
// }
// printAll(123, 456, 654, 677,6889)

//ex 5
// function printAll(num1, num2, num3, num4){
//     console.log(arguments);
//      console.log(arguments[4]);
//    // console.log(`argument #1 is  ${num1}`);
// }
// printAll(123, 456, 654, 677,6889, 766, 987, 456, 56)


//ex 6
// function printAll(){
// for(let arg of arguments){
//    console.log(`argument #${arg} is  ${arguments[arg]}`);
// }
// }
// printAll(123, 456, 654, 677,6889, 766, 987, 456, 56)


//ex 7
// function printAll(){
// for(let arg in arguments){
//    console.log(`argument #${arg} is  ${arguments[arg]}`);
// }
// }
// printAll(123, 456, 654, 677,6889, 766, 987, 456, 56)

// function printAll(){
// for(let arg in arguments){
//     let new_arg= parseInt(arg)+1
//    console.log(`argument #${new_arg} is  ${arguments[arg]}`);
// }
// }
// printAll(123, 456, 654, 677,6889, 766, 987, 456, 56)




//anonymous function

// (function (num1){
//     let sqr=num1 + num1
//     console.log(sqr);
// })(10)



// express function
let square= function(num1){
     let sqr=num1 * num1
       console.log(sqr);
}
square(5)
square(3)