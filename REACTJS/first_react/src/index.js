import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
// function App(){
//   return (<>
//   <h1>welcome to React!!</h1>
//     <h1>welcome to React!!</h1>
//   </>)
// }

// let name = "Sachin"
// let el = <h1>welcome {name}</h1>
// root.render( el);


// let name = "Sachin"
// let el = (
// <>
// <h1>welcome {name}</h1>
// <p>welcome to react application</p>
// </>
// )
// root.render( el);

let name = "Sachin"
// function App(){
//   return(
// <>
// <h1>welcome {name}</h1>
// <p>welcome to react application</p>
// </>
//   )
// }
root.render(<App name={name}/>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

