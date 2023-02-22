import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [value, setValue] = useState(0);

  const changeValue = async (updatedValue) => {
    try {
      await axios.post("/change-value", {
        value: Number(updatedValue),
      });
      setValue(updatedValue);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getValue = async () => {
      try {
        const { data } = await axios.get("/get-value");
        setValue(data.value.value);
      } catch (error) {
        console.log(error);
      }
    };
    getValue();
  });

  return (
    <div className="container">
      <div className="counter-container">
        <div className="value-container">{value}</div>
        <div className="btn-container">
          <div className="plus-container">
            <button type="button" onClick={() => changeValue(value + 1)}>
              +
            </button>
          </div>
          <div className="minus-container">
            <button type="button" onClick={() => changeValue(value - 1)}>
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
