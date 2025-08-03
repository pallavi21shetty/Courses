import React,  {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
// import {BrowserRouter, Routes, Route} from "react-router-dom"
// import Home from './pages/home'
// import About from './pages/about';
// import Contact from './pages/contact';
// import Layout from './pages/dashboard';



// let App = () => {
//   return ( <>
//   <BrowserRouter>
//   <Routes>
//     <Route path='/' element ={<Layout/>}>
//   {/* <Route path = '/' element = {<Home/> } /> */}
//     <Route index element = {<Home/> } />
//   <Route path = '/about' element = {<About/> } />
//   <Route path = '/contact' element = {<Contact/> } />
//   </Route>
//   </Routes>
//   </BrowserRouter>
  
//   </>)
// }






let App = () =>{

  // let [color, setColor] = useState("Orange")
   let [counter, setcounter] = useState(0)
    let [doubler, setDoubler] = useState(0)
let callback = () => {
  // setColor("red")
  // console.log('================================');
  // console.log(color);
  // console.log('================================');
  setcounter((counter) => counter+1)
}
useEffect(()=>{
  setDoubler((doubler)=> doubler+2)
  // console.log(counter)
}, [counter])

return (
  <>
   {/* <h1>Welcome to ITD's  React Color Toutorial, and color is {color}</h1> */}
  <h1>you have visited out website {counter} times</h1>
  <h1>Doubler counter {doubler}</h1>
  <button onClick={callback}> Change color</button>
  </>
)
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
