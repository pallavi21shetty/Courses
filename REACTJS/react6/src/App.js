
// import React,{useMemo, useState } from 'react';


// let ExpensiveCalc = ({number}) => {
//   console.log('Expensive Calculation');
  
//   let CalcSomething = (num) =>{
//     let value=0;
//     for(let i =0; i<1000000000; i++) {
//       value+=num*Math.random()
//     }
//     return value
//   }
//    let out = useMemo(() => CalcSomething(number), [number])
//   // let out = CalcSomething(number)
//     console.log('Expensive Calculation',out);
//   return<h1>the output of complex function is {out} </h1>
// }

// let App = () => {
//   let number = 5
//   let [count,setCount] = useState(0)
//   return (
//     <>
//     <ExpensiveCalc number={number}/>
//     <button onClick={ ()=> setCount(count+1)}>Increment</button>
//     <p>Count:{count}</p>
//     </>
//   );
// }

// export default App;







import React, {useCallback, useState} from 'react';

let ChildComponent =React.memo(({handleClick})=>{
  console.log("child component");
  return(
    <button onClick={handleClick}>Click me</button>
  ) })

let App = ()=> {
let [count, setCount] = useState(0)
// let handleClick =() => {
//   console.log('============');
//   console.log('Button Clicked');
//   console.log('===========');
// }
let handleClick =useCallback(() => {
  console.log('============');
  console.log('Button Clicked');
  console.log('===========');
},[])
console.log("parent component");

  return( <>
  <ChildComponent handleClick = { handleClick}/>
  <button onClick={()=> setCount(count+1)}> Increment Function </button>
  <h2>Count = {count}</h2>
  </>);
}


export default App;