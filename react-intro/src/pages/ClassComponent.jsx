import React from "react";
import BaseHoc from "../Layout-HOC/BaseHoc";

class ClassComponent extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>class component !!</p>
        </header>
      </div>
    );
  }
}

export default BaseHoc(ClassComponent);
