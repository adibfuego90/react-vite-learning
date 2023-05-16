const Home = () => {
  const clickHandler = (e) => {
    console.log("Hello, Programmer", e.target);
  };
  const clickAgainHandler = (name, e) => {
    console.log(`Hello, ${name}`, e.target);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={clickHandler}>Click Me</button>
      <button
        onClick={(e) => {
          clickAgainHandler("adib", e);
        }}>
        Click me again
      </button>
    </div>
  );
};

export default Home;
