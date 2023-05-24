import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [age, setAge] = useState(90);
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
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("USE Effect hook");
  }, [age]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blog" handleDelete={handleDelete} />
      <button onClick={() => setAge(121)}>Change Name</button>
      <p>My name is {age}</p>
    </div>
  );
};

export default Home;
