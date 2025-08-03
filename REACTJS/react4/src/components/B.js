import D from './D'
let B = (props) => {
    return (<>
     <h1>i am component B </h1>
     <D username = {props.username}/>
     </>

    )
  }


export default B