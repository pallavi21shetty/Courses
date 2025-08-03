import React, {useRef} from 'react'

function ClickCounter() {
    // const countRef ={current:0};
       const countRef =useRef(0);

    const handleClick =()=>{
        countRef.current += 1;
        console.log('Button clicked', countRef.current);
    }

  return (
    <div>
        <button onClick={handleClick}>Click me</button>
        <p>Click count: {countRef.current}</p>
    </div>
  )
}
export default ClickCounter;