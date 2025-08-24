
// import React, { Component } from 'react'
// import B_Regular from './B_Regular'
// import A_class from './A_class'

//  class App extends React.Component {
// state= {
//     name: 'Sachin'
// }
// componentDidMount(){
//     setInterval(()=>{
//         this.setState({name:'Sachin'})
//     },1000)
// }
// render(){
//     return(<>
//     <B_Regular name={this.state.name}/>
//     <A_class name={this.state.name}/>
//     </>)
// }
// }


import React, { useRef, useState } from "react"

let App =()=>{
let inputRef= useRef(null)

let [data, setdata] = useState('ok')

    let handleSubmit = (event) =>{
        event.preventDefault()
        //console.log(document.querySelector('#something').value);
        console.log(inputRef.current.value);
    }

    let handleData =(event) =>{
        setdata(event.target.value) 
    }

    return(<>
        <form onSubmit={handleSubmit}>
            {/* <input type="text" id='something'/> */}
                  {/* <input type="text" ref={inputRef}/> */}
                     {/* <input type="text" value={"ok"}/> App.js:37 You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`. */}
                     <input type="text" value={data} onChange={handleData}/>
            <button type="submit">submit</button>
        </form>
    </>)
}
export default App