import React, { useState } from "react";
import ReactDOM from "react-dom";
//import Counter from "./counter";
//import ColoredSquare from "./ColoredSquare";
//import ColorizerButton from "./ColorizerButton";
import Order from "./Order";

const order = {
  food: "pizza",
  flavor: "portuguesa"
};

function App() {
  // const [color, setColor] = useState("black");

  return (
    <div>
      <Order {...order} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
