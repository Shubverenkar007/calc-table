import React from "react";

const Operation = (props) => {
  return (
    <div>

      {/* buttons for different operations */}

      <h2>SELECT TYPE OF OPERATION TO PERFORM</h2>
      <div>
        <button onClick={props.handleAdd}>ADD</button>
        <button onClick={props.handleSub}>SUBTRACT</button>
        <button onClick={props.handleMul}>MULTIPLY</button>
        <button onClick={props.handleDiv}>DIVIDE</button>
      </div>
      <hr />

      {/* Displaying result */}

      <h2>
        The answer is : <span className="result">{props.result}</span>
      </h2>
    </div>
  );
};

export default Operation;
