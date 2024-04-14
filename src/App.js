import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import LoginPage from "./pages/Login";

// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { color: "red" };
//   }

//   render() {
//     return (
//       <div>
//         <span>Color of car: {this.state.color}</span>
//         <button
//           onClick={() => {
//             this.setState({ color: "blue" });
//           }}
//         >
//           Change color
//         </button>
//       </div>
//     );
//   }
// }

// const CarFunc = ({ color, setColor }) => {
//   return (
//     <div>
//       <span>Color of the car:{color}</span>
//       <button
//         onClick={() => {
//           setColor("blue");
//         }}
//       >
//         Change Color
//       </button>
//     </div>
//   );
// };

function App() {
  // const [color, setColor] = useState("red");
  // const [cars, setCars] = useState([
  //   { id: 1, name: "Toyota" },
  //   { id: 2, name: "Ferrari" },
  //   { id: 3, name: "Buggati" },
  // ]);
  // const [show, setShow] = useState(false);
  // const [buttonText, setButtonText] = useState("");
  // useEffect(() => {
  //   if (show) {
  //     setButtonText("Hello College");
  //   } else {
  //     setButtonText("Bye Bye");
  //   }
  // }, [show]);
  return (
    <div className="App">
      {/* {cars.map((item, index) => (
        <span className="text">
          {item.id}. {item.name}
          <br />{" "}
        </span>
      ))}
      {show && <span>{color}</span>}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide" : "Show"}
      </button>
      <br />
      <span>{buttonText}</span> */}
      <LoginPage />
    </div>
  );
}

export default App;
