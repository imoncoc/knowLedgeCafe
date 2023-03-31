import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './Cart.css'

const Cart = ({watchTime}) => {
    const [time, setTime] = useState(watchTime);

    useEffect(()=> {
        let getWatchTimeFromStorage = localStorage.getItem("watchTime");
        if(getWatchTimeFromStorage === null){
            getWatchTimeFromStorage = 0;
        }
        setTime(getWatchTimeFromStorage);
    }, [watchTime])

    const deleteSpentTime = () =>{
        localStorage.removeItem("watchTime");
        setTime("0")
    }



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
            
          </p>
        </div>

        <div className="book-mark mt-3 pb-1">
          <p className="book-mark-text pt-3 ps-3">BookMarked Blog: 18</p>
          <div className="book-mark-item m-3 p-3">
            <p className="book-mark-item-text">
              Master Microsoft Power Platform and Become an In-Demand!
            </p>
          </div>
        </div>
      </div>
    );
};

export default Cart;