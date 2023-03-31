import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
      <div className="ms-3">
        <div className="spent-time text-center">
          <p className="p-3 spent-time-text">Spent time on read: 10 min</p>
        </div>

        <div className="book-mark mt-3 pb-1">
          <p className='book-mark-text pt-3 ps-3'>BookMarked Blog: 18</p>
          <div className='book-mark-item m-3 p-2'>
            <p className='book-mark-item-text'>Master Microsoft Power Platform and Become an In-Demand!</p>
          </div>
        </div>
      </div>
    );
};

export default Cart;