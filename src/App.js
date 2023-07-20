import React from "react";
import "./style.css";

export default function App() {
  let name = ["tamil","AP"]; 
  return (
    <div>
      <h1>Hello {name[1]}!</h1>
      <p>Start React :)</p>
    </div>
  );
}
