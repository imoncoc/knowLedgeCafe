import React from 'react';
import { dateFormatter } from '../../utilities/utilities';
import './SingleBlog.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const SingleBlog = ({blog}) => {
    console.log(blog)
    const dateAfterFormate = dateFormatter(blog.publish_date);
    return (
      <div className="mb-5">
        <div>
          <img
            className="img-fluid rounded blog-img"
            src={blog.blogCoverImage}
            alt=""
          />
          <div className="my-3 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img className="author-img" src={blog.author_image} alt="" />
              <div className="ms-3">
                <p className="author-name">{blog.author_name}</p>
                <p className="author-date">{dateAfterFormate}</p>
              </div>
            </div>
            <div>
              <p>
                <span className="me-2 read-time">
                  {blog.read_time} min read
                </span>
                <FontAwesomeIcon icon={faBookmark} />
              </p>
            </div>
          </div>
          <h3 className="blog-title mb-4">{blog.blogTitle}</h3>
          <div className='d-flex'>
            {blog.keyWord.map((item) => (
              <p className='me-3 item-keyWord'>{item}</p>
            ))}
          </div>

          <p className='mark-read'>Mark as Read</p>
        </div>
      </div>
    );
};

export default SingleBlog;