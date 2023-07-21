import React from "react";
import "./style.css";
import Car from './Car';
import { useState } from "react";

// const App = () => {
function App() {
  const names = ["tamil","AP"];
 // let name = "tamil";
 const [name, setName] = useState("tamil");

  const cars = [
    {
      color: "red",
      brand: "Ford",
      year: 1999
    },
    {
      color: "white",
      brand: "indica",
      year: 2022
    },
    {
      color: "black",
      brand: "indica",
      year: 2022
    }
  ]
  const onbtnclick = () => {
    alert("hi");
  }
  const textinputchanged = (value) => {
    setName(value);
    console.log(value);
  }
  return (
    <div>
      {names.map(name => <h1 key={name}>Hello {name}!</h1>)}
      <p>Start React :)</p>
      <button onClick={onbtnclick}>Click me</button>
      {cars.map(car => <Car key={car.color} color={car.color} brand={car.brand} year={car.year} />)}
      <input
        type="text" 
        value={name}
        onChange={(e) => textinputchanged(e.target.value)}
      />
      <h1>{name}</h1>
    </div>
  );
}

export default App;