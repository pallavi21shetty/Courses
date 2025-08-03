// import React, {useEffect, useRef} from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// // import App from './components/App';

// let DomAceess =()=>{
//   let inputEl = useRef(null)

//   useEffect( ()=> {
//       // inputEl.current.focus()
//       inputEl.current.value =100
//   },[])

//   return(
//     <>
//     <input type='text' ref={inputEl} />
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<App />);
// root.render(< DomAceess/>);
















import React from 'react';
import ReactDOM from 'react-dom/client';
import ClickCounter from './components/clickCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ClickCounter/>);