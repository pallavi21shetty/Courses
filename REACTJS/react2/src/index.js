import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import NameComponent from './components/Namecomponent';

// let NameComponent =() =>{
// return( <div>
//   <h1> Sachin</h1>
//    <h2> Sachin</h2>
// </div>
// )
// }

// let varCountry ="India"

// let Name ="Sachin"
// if(!Name){
//   Name="User"
// }



const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<NameComponent Name={"Sachin"} age={24} country={varCountry}/>);
// root.render(<NameComponent Name={Name}/>);
root.render(<NameComponent box={"Green"}/>);