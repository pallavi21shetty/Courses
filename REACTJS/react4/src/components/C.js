// import E from './E'
import React from "react"
import { UserContext } from "./App"
let C = () => {
    return (<>
    <UserContext.Consumer>
      {value =>
       <h1>i am component C and i am {value}</h1>
      }
    </UserContext.Consumer>
       {/* <E username = {props.username}/> */}
       </>
    )
  }


export default C