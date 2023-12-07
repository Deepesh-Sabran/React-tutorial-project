import React, { useState } from "react";

const FunctionComponent = (props) => {
  // here we are using HOOK to deal with state information
  const [count, setCount] = useState(0);
  const [changeName, setChangeName] = useState("");
  // declare reduceCount where we implement setCount()
  const reduceCount = () => {
    setCount(count - 1);
  };
  // declare changingName where we implement setChangeName()
  const changingName = (e) => {
    setChangeName(e.target.value);
  };
  return (
    <div>
      <p>This is Functional Component</p>
      {/* one approch for setCount() function */}
      <button onClick={() => setCount(count + 1)}>
        click me to incerment by 1
      </button>
      <h2>{count}</h2>
      {/* another approch for setCount() function */}
      <button onClick={reduceCount}>click me to decrement by 1</button>
      <h4>
        {/* to use js within html we know we need to use {} */}
        Hi, My name is {props.name} & I'm {props.age} year old. I have a{" "}
        {props.car} !!
      </h4>
      <input type="text" onChange={changingName} />
      {/* what else we change in setChangeName() it'll reflect on changeName automatically */}
      <button onClick={() => props.setName(changeName)}>
        click to change name according to input data ...
      </button>
    </div>
  );
};

export default FunctionComponent;
