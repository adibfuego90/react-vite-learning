import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("adibur");
  const handleClick = () => {
    setName("adibur rahman ");
    console.log(name);
  };
  return (
    <div className="home">
      <h2>Home Page</h2>
      <button onClick={handleClick}>Click me </button>
    </div>
  );
};

export default Home;
