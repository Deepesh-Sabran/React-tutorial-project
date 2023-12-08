import "./App.css";
import ClassComponent from "./pages/ClassComponent";
import FunctionComponent from "./pages/FunctionComponent";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// here App.js is a parent component
function App() {
  const [name, setName] = useState("DS");
  const car = "mustang";
  return (
    <Routes>
      <Route path="/" element={<ClassComponent />} />
      <Route
        path="/functional-component"
        element={
          <FunctionComponent name={name} age={25} car={car} setName={setName} />
        }
      />
    </Routes>
  );
}

export default App;
