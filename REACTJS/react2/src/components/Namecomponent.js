import {useState} from "react"

// let GreenBox=()=>{
//     return <div style={{backgroundColor:"Green", width:"100%", height:"100px"}}>

//     </div>
// }

// let RedBox=()=>{
//     return <div style={{backgroundColor:"Red", width:"100%", height:"100px"}}>

//     </div>
// }


let SomeDiv =(props)=>{
    return (<div style={{backgroundColor:"#f0f0f0", height:"100px", width:"100%", padding:"20px"}}>
            <h1>props.car_name</h1>
    </div>)

}


let NameComponent = (props) => {
//   return (<div>
//     <h1> Hello {props.Name}, Welcome to ITD</h1>
//     <p>You are {props.age} years old and you are from {props.country}</p>
//   </div>)

// return <h1 style={{backgroundColor:"red","color":"white"}}>welcome {props.Name}</h1>


// let Name=""
// return  Name? <h1 style={{backgroundColor:"red","color":"white"}}>welcome {props.Name}</h1> :
//               <h1 style={{backgroundColor:"red","color":"white"}}>welcome user</h1>


//return props.box === "Green"? <GreenBox/> : <RedBox/>


// return <button onClick={()=>alert("OK")}>Click me</button>


// let [data, setData] = useState(props.box)
// return (<>
// <button onClick={()=>{setData("Red")}}>Click me</button>
// {data === "Green"? <GreenBox/> : <RedBox/>}
// </>
// )


let datas= ["Honda", "Hyunadi", "Suzuki", "Tata"]
return (<ul>
{datas.map(el=> <SomeDiv car_name={el}/>)}
</ul>)

}

export default NameComponent;