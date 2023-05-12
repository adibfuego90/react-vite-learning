import { useState } from "react";
import "./App.css";

function App() {
  const title = "Welcome back react js developer";
  const person = {
    name: "adibur",
    age: 23,
  };
  const link = "https://www.google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>
          My name id {person.name}. My age is {person.age}.
        </p>
        <p>{2300}</p>
        <a href={link}>Go Google</a>
        <p>{Math.random() * 10}</p>
      </div>
    </div>
  );
}

export default App;
