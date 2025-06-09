// let x="india"
// x.length
// x.toUpperCase

// let student ={}
// console.log(student);
// console.log(typeof(student));


// let student ={
// fname: "virat",
// lname :"kohli"
// }
// console.log(student);
// console.log(student.fname);
// console.log(typeof(student));


// let fname="rahul"
// let lname="dikshit"
// let student ={
// fname: "virat",
// lname :"kohli",
// fullname: function(){
//     return this.fname + ' ' + this.lname
// }
// }
// console.log(student);
// console.log(student.fname);
// console.log(student.fullname());
// console.log(typeof(student));




// let fname="rahul"
// let lname="dikshit"
// let student ={
// fname: "virat",
// lname :"kohli",
// fullname: function(){
//     return fname + ' ' + lname
// }
// }
// console.log(student);
// console.log(student.fname);
// console.log(student.fullname());
// console.log(typeof(student));


// let fname="rahul"
// let lname="dikshit"
// let student ={
// fname: "virat",
// lname :"kohli",
// fullname: function(){
//     return this.fname + ' ' + this.lname
// }
// }
// student.age='36'
// console.log(student);
//  console.log(student.fullname());


//  student = Object.assign({}, student, {skills:['batting','feilding']})
//  //student.skills=['bating','feilding']
//  console.log(student);
 



// let fname="rahul"
// let lname="dikshit"
// let student1 ={
// fname: "virat",
// lname :"kohli",
// fullname: function(){
//     return this.fname + ' ' + this.lname
// }
// }
// student1.age='36'
// console.log(student1);
//  console.log(student1.fullname());
//  student = Object.assign({}, student1, {skills:['batting','feilding']})
//  //student.skills=['bating','feilding']
//  console.log(student);
//  let student2 =Object.assign({}, student)
//  console.log('student1',student1);
//   console.log('student2',student2);
 



//prototype
// let x=10
// let y="some"
// let z=[1,4,5]
// console.log(x);
// console.log(y);
// console.log(z);


// let x=10
// let y="some"
// let z=[1,4,5]
// console.log(x.__proto__);
// console.log(y.__proto__);
// console.log(z.__proto__);


// let college={
//     collegeName :"SIT"
// }
// Object.setPrototypeOf(student, college)
// console.log(Object.getPrototypeOf(student));
// console.log(student);



// let student={
//     fullName : function(){
//          return this.fname + ' ' + this.lname
//     }
// }
// let virat ={
// fname: "virat",
// lname :"kohli",
// }

// let sachin ={
// fname: "sachin",
// lname :"tendulkar",
// }

// let out= student.fullName.call(sachin)
// console.log(out);


// let student={
//     fullName : function(age, city){
//          return this.fname + ' ' + this.lname
//     }
// }
// let virat ={
// fname: "virat",
// lname :"kohli",
// }

// let sachin ={
// fname: "sachin",
// lname :"tendulkar",
// }

// let out= student.fullName.call(sachin, 40, 'Mumbai')
// console.log(out);



let student={
    fullName : function(age, city){
         return this.fname + ' ' + this.lname + "is" +`${age}` + "and living in" + `${city}`
    }

    }

let virat ={
fname: "virat",
lname :"kohli",
}

let sachin ={
fname: "sachin",
lname :"tendulkar",
}

let out= student.fullName.apply(sachin, [40, 'Mumbai'])
console.log(out);



// let student={
//     fullName : function(age, city){
//          return this.fname + ' ' + this.lname + "is" +`${age}` + "and living in" + `${city}`
//     }
// }
// let virat ={
// fname: "virat",
// lname :"kohli",
// }

// let sachin ={
// fname: "sachin",
// lname :"tendulkar",
// }

// let out= student.fullName.bind(sachin, 40, 'Mumbai')
// console.log(out);