// import React, { useRef } from "react";

// const ColorChange = () => {
//   const inputElement = useRef();

//   function handleGreen() {
//     inputElement.current.style.backgroundColor = "green";
//   }

//   function handleRed() {
//     inputElement.current.style.backgroundColor = "red";
//   }

//   function handleBlue() {
//     inputElement.current.style.backgroundColor = "blue";
//   }

//   return (
//     <div>
//       <h1>Click the button:</h1>
//       <input ref={inputElement} type="text" placeholder="Watch my color change" />
//       <br /><br />
//       <button onClick={handleGreen}>Green</button>
//       <button onClick={handleRed}>Red</button>
//       <button onClick={handleBlue}>Blue</button>
//     </div>
//   );
// };

// export default ColorChange;









import React, { useRef } from "react";

const ColorChange = () => {
  const inputElement = useRef();

  function changeColor(color) {
    inputElement.current.style.backgroundColor = color;
  }

  return (
    <div>
      <h1>Click the button:</h1>
      <input ref={inputElement} type="text" placeholder="Watch my color change" />
      <br /><br />
      <button onClick={() => changeColor("green")}>Green</button>
      <button onClick={() => changeColor("red")}>Red</button>
      <button onClick={() => changeColor("blue")}>Blue</button>
    </div>
  );
};

export default ColorChange;
