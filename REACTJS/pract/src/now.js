import { useState } from "react";

function Now(){
    let [count, setcount] =useState(0)
    // let callback =()=>{
    //     setcount((count)=>count+1)
    // }
    // function handlebtn(){
    //     setcount((count)=>count-1)
    // }

    // return(
    //     <div>
    //         <p>count:{count}</p>
    //         <button onClick={callback}>increment</button>
    //         <button onClick={handlebtn}>decrement</button>
    //     </div>
    // )


     return(
        <div>
            <p>count:{count}</p>
            <button onClick={()=>setcount(count+1) }>increment</button>
            <button onClick={()=>setcount(count-1)}>decrement</button>
        </div>
    )
}
export default Now;