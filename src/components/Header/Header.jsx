import React from 'react';
import './Header.css'

const Header = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container mx-auto my-3">
            <a className="navbar-brand fs-2 fw-bold" href="#">
              Knowledge Cafe
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="ms-auto">
                <img className='avatar-img'
                  src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1680192778~exp=1680193378~hmac=e0aff0adb09df21151172ec0ae534f1a69763a28e98fd7124fdb1cf1438f298d"
                  alt=""
                />
              </div>
          
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Header;