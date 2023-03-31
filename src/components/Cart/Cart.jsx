import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './Cart.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = ({ watchTime, bookMark }) => {
  const [time, setTime] = useState(watchTime);
  const [bookTitle, setBookTitle] = useState(bookMark)
  // console.log(bookMark.length)

  useEffect(() => {
    let getWatchTimeFromStorage = localStorage.getItem("watchTime");
    if (getWatchTimeFromStorage === null) {
      getWatchTimeFromStorage = 0;
    }
    setTime(getWatchTimeFromStorage);
  }, [watchTime]);
  // console.log(typeof bookTitle)

  const deleteSpentTime = () => {
    localStorage.removeItem("watchTime");
    setTime("0");
    toast.warn(" Successfully Deleted from localStorage !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  useEffect(() => {
    let getBookMarkStorage = JSON.parse(localStorage.getItem("bookMark"));
    if (getBookMarkStorage === null) {
      getBookMarkStorage = 0;
    }
    setBookTitle(getBookMarkStorage);
  }, [bookMark]);

  

  return (
    <div className="ms-3 sticky-md-top">
      <div className="spent-time text-center">
        <p className="p-3 spent-time-text">
          Spent time on read: {time} min
          <FontAwesomeIcon
            onClick={deleteSpentTime}
            className="mx-2 text-danger spent-time-icon"
            icon={faXmark}
          ></FontAwesomeIcon>
          <ToastContainer></ToastContainer>
        </p>
      </div>

      <div className="book-mark mt-3 pb-3">
        <p className="book-mark-text pt-3 ps-3">
          BookMarked Blog: {bookTitle.length? bookTitle.length: 0}
        </p>
        {
         bookTitle.length > 0 && bookTitle.map((book)=><div className='book-mark-item m-3 p-3'><p className='book-mark-item-text'>{book}</p></div>)
        }
      </div>
    </div>
  );
};

export default Cart;