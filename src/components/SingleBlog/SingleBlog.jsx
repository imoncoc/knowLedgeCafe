import React from 'react';
import { dateFormatter } from '../../utilities/utilities';
import './SingleBlog.css'

const SingleBlog = ({blog}) => {
    console.log(blog)
    const dateAfterFormate = dateFormatter(blog.publish_date);
    return (
      <div className="">
        <div>
          <img
            className="img-fluid rounded blog-img"
            src={blog.blogCoverImage}
            alt=""
          />
          <div className="my-3">
            <div className="d-flex">
              <img className="author-img" src={blog.author_image} alt="" />
              <div>
                <p>{blog.author_name}</p>
                <p>{dateAfterFormate}</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    );
};

export default SingleBlog;