import { useState } from "react";

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
      {blogs.map((blog) => (
        <div className="blog-priview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>The author of this blog {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
