import React from "react";

function Counter() {
  return (
    <div className="container">
      <div className="counter-container">
        <div className="value-container">12</div>
        <div className="btn-container">
          <div className="plus-container">
            <button type="button">-</button>
          </div>
          <div className="minus-container">
            <button type="button">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
