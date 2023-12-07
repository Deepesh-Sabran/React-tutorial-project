import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";
import { useState } from "react";

// here App.js id a parent component
function App() {
  const [name, setName] = useState("DS");
  const car = "mustang";
  return (
    <div className="App">
      <p>Jay Shree Ram !!</p>
      <ClassComponent /> {/* child component */}
      {/* passing the props here */} {/* child component */}
      <FunctionComponent name={name} age={25} car={car} setName={setName} />
      {/* {name} it is internal defined variable, car also */}
      {/* {setName} it is internal ddefined function */}
      {/* where as age={25} is statically passed */}
    </div>
  );
}

export default App;
