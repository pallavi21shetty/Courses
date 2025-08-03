import React, { useReducer } from 'react'

let initialState = { count :0}

let reducer =(state, action)=>{
    // switch(action.type){
      switch(action){
        case 'INCREMENT':
            return {count: state.count+1}
        case 'DECREMENT':
            return {count: state.count - 1}
        case 'RESET':
            return {count: 0}
        default:
            return {count: state.count}
    }
}

function App() {
    const  [state, dispatch] = useReducer(reducer, initialState)
  return (

    <div>
        <h1>The Count : {state.count}</h1>
        {/* <button onClick={()=> dispatch({type:'INCREMENT'})}>Increment</button>
        <button onClick={()=> dispatch({type: 'DECREMENT'})}>Decrement</button>
        <button onClick={()=> dispatch({type:'RESET'})}>Reset</button> */}
         <button onClick={()=> dispatch('INCREMENT')}>Increment</button>
        <button onClick={()=> dispatch('DECREMENT')}>Decrement</button>
        <button onClick={()=> dispatch('RESET')}>Reset</button>
    </div>
  )
}

export default App