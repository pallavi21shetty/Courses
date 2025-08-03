import F from './F'
import { UserContext, EmailContext } from './App'
import React from 'react'
import { useContext } from 'react'
let E = () => {
    return ( <>
      {/* <h1>i am component E and user name is {props.username}  </h1>
      <F username = {props.username}/> */}
      let name = useContext(UserContext)
        let email = useContext(EmailContext)
      {/* <EmailContext.Consumer>
        { email =>
      <UserContext.Consumer>
            {value => */}
             <h1>i am component E and i am {name} and email is {email}</h1>
            {/* }
      </UserContext.Consumer>
        }
      </EmailContext.Consumer> */}
      </>
    )
  }


export default E