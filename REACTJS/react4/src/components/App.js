// import A1 from './A1' 
// import B from './B' 
import C from './C' 
import React from 'react'

export let UserContext = React.createContext()
export let EmailContext = React.createContext()
let App = () => {
let username ="Sachin"
let email ="sachin@gmail.com"
    return (
      <>
      {/* <A1 username = {props.username}/>
      <B username = {props.username}/>
      <C username = {props.username}/> */}
      <EmailContext.Provider value={email}>
      <UserContext.Provider value={username}>
        <C/>
      </UserContext.Provider>
      </EmailContext.Provider>
      </>
    )
  }


export default App