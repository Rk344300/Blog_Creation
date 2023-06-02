import React, { useState, useEffect } from "react";
import { getLocalStorageData } from "../utils";
import '../styles/Home.css';

function Home() {
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    const data = getLocalStorageData("blogDetails");
    if (data) {
      setBlogs(data);
    } else {
      setBlogs([]);
    }
  }, []);
  console.log(blogs);


  return (
    <div className="home">
      <h1 style={{ color: "seagreen" }}> Blog</h1>

      {blogs.length === 0 && <h3>There is no blogs</h3>}
      {blogs.map((blog, index) => (

        <div className="blog" key={`blog-${index}`}>
          <h2 style={{ color: "seagreen" }}>Blog-Title : {blog.title}</h2>
          <h4>Blog-Desc : {blog.description}</h4>

          <h4> Blog-Content :  <div dangerouslySetInnerHTML={{ __html: blog.content }}></div></h4>


        </div>
      ))}
    </div>
  );
}

export default Home;
