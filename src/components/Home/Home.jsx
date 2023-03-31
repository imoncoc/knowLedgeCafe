import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Home = ({ handleWatchTime, handleBookMark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="blog-container">
      {blogs.map((blog) => (
        <SingleBlog
          blog={blog}
          handleWatchTime={handleWatchTime}
          handleBookMark={handleBookMark}
          key={blog.id}
        ></SingleBlog>
      ))}
    </div>
  );
};

export default Home;