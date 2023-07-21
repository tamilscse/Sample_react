import React from "react";
import "./style.css";
import Car from './Car';

// const App = () => {
function App() {
  const names = ["tamil","AP"];
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
  return (
    <div>
      {names.map(name => <h1>Hello {name}!</h1>)}
      <p>Start React :)</p>
      <button onClick={onbtnclick}>Click me</button>
      {cars.map(car => <Car color={car.color} brand={car.brand} year={car.year} />)}
    </div>
  );
}

export default App;