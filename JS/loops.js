// let x =[1,22,3,4,5,6,7]
//ex 1
// console.log(x[0]);
// console.log(x[1]);
// console.log(x[2]);
// console.log(x[3]);
// console.log(x[4]);
// console.log(x[5]);
// console.log(x[6]);
// console.log(x[7]);

// for(let i of x){
//     console.log(i);
// }


//ex2
// for(let i=0; i<10;i++){
//     console.log(i);
    
// }


//ex 3
// for(let i=3; i<8; i=i+3){
// console.log(i);
// }

// ex 4
// let x=["Ind",'NZ',"Pak",'Sl','AUS']
// for(let i=0; i< x.length; i=i+1){
// console.log(x[i]);
//  }

//ex 5
// for(let i=0; i<1000; i++){
//     if(i==10){
//         break;
//     }
// console.log(i);
// }

//ex 6
// let x=["Ind",'NZ',"Pak",'Sl','AUS']
// for(let i=0; i< x.length; i=i+1){
//     if(x[i].startsWith('P')){
//         break;
//     }
// console.log(x[i]);
//  }


//ex 7
// let x=["Ind",'NZ',"Pak",'Sl','AUS']
// for(let i=0; i< x.length; i=i+1){
//     if(x[i].startsWith('P')){
//         continue;
//     }
// console.log(x[i]);
//  }


//ex 8
// let num=3
// for(let i=1; i<=10; i++){
//     console.log(`${num} x ${i} = ${num*i}`);
//     console.log(num+ " x " + i + " = ", num*i); 
// }


//ex 9
// for(let i=1; i< 4; i++){
//     let line="hello"
//     console.log(line);
// }


//ex 10
// for(let i=1; i< 4; i++){
//     let line= ""
//     for(let j=1; j< 4; j++){
//         line += j + " "
//     }
//     console.log(line);
// }


//ex 11
// for(let i=1; i< 4; i++){
//     let line= ""
//     for(let j=1; j< 4; j++){
//         line += j*i + " "
//     }
//     console.log(line);
// }


//ex 12
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

//ex 13
// let x= [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// for(let data of x){
//       console.log(data);
//     for(let el of data){
//         console.log(el);
//     }
// }


// ex 14
let x= [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let flatened_array=[]
for(let data of x){
    for(let el of data){
   flatened_array.push(el)
    }
}
console.log(flatened_array)

//for of
// let x=["Ind",'NZ',"Pak",'Sl','AUS']
//     for(let el of x){
//         console.log(el);
        
//     }



//for in
//ex1
// let x=["Ind",'NZ',"Pak",'Sl','AUS']
//     for(let el in x){
//         console.log(el);   
 //   }

    //ex 2
    // let y=["Ind",'NZ',"Pak",'Sl','AUS']
    // for(let el in y){
    //     console.log(y[el]);   
    // }


    //ex 3
    // let x=["Ind",'NZ',"Pak",'Sl','AUS']
    // for(let el in x){
    //     console.log(el,x[el]);  
    // }


    //ex4
    // let x=["Ind",'NZ',"Pak",'Sl','AUS']
    // for(let el in x){
    //     console.log(el,`x[${el}]`,x[el]);  
    // }


    //while
    //ex 1
    // while (true) {
    //     console.log("hello");
    // }

    // ex 2
    //     let a=true
    // while (a) {
    //    console.log("hello");
    //     a= false
    // }
    // console.log("out side");

    //ex 3
    // let a=false
    // while (a) {
    //    console.log("hello");
    //     a= false
    // }
    // console.log("out side");
    
  //ex 4
//   let a=4
//     while (a<10) {
//        console.log("hello");
//         a++
//     }
//     console.log("out side");


// ex 5
// let a=4
// let x= true
//     while (x) {
//        console.log(x, a,"hello");
//         if(a==7){
//             x= false
//         }
//         a++
//     }
//     console.log("out side");
    


//ex 6
// let a=4
// let x= true
//     while (x) {
//        console.log(x, a,"hello");
//         if(a==7){
//             break;
//         }
//         a++
//     }
//     console.log("out side");



    //do while
    //ex 1
//     let a=4
// let x= false
//     do {
//        console.log(x, a,"hello");
//         }while (x)
//     console.log("out side");


//ex 2
//  let a=4
// let x= true
//     do {
//        console.log(x, a,"hello");
//         }while (x)
//     console.log("out side");

//ex 3
//  let a=4
// let x= true
//     do {
//        console.log(x, a,"hello");
//        x=false
//         }while (x)
//     console.log("out side");


//ex 4
//  let a=4
// let x= true
//     do {
//        console.log(x, a,"hello");
//        a++
//        if(a==6){
//         x=false
//        }
//         }while (x)
//     console.log("out side");



