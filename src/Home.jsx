import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My name is adib",
      body: "lorem ipsum ...Home....",
      author: "adib",
      id: 1,
    },
    {
      title: "My name is adib",
      body: "lorem ipsum ...Home....",
      author: "adib",
      id: 2,
    },
    {
      title: "My name is adib",
      body: "lorem ipsum ...Home....",
      author: "adib",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blog" />
    </div>
  );
};

export default Home;
