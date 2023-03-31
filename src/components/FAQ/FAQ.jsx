import React from 'react';

const FAQ = () => {
    return (
      <div className="my-5">
        <h2 className='text-center my-5 text-primary faq-title'>FAQ Section</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button p-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                #1 Props vs state?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body my-2 p-3">
                <strong>State and Props:</strong> State is used to store data
                that can change over time within a component, while props are
                used to pass data and event handlers between components. State
                is private to a component, while props are read-only and passed
                down from a parent component.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed p-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                #2 How does useState work?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body my-2 p-3">
                <strong>The useState():</strong> The useState() is a Hook that
                allows you to have state variables in functional components . so
                basically useState is the ability to encapsulate local state in
                a functional component. The useState hook makes it easy to add
                state to functional components in React, allowing for more
                dynamic and interactive user interfaces.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed p-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                #3 Purpose of useEffect other than fetching data?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body my-2 p-3">
                <strong>The useEffect: </strong> The useEffect in react js
                allows you to perform side effects in your components. The react
                useEffect examples of side effects include retrieving data,
                direct DOM updates, and timers. The second argument is optional.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed p-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                #4 How Does React work?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body my-2 p-3">
                <strong>React Work: </strong> Instead of manipulating the
                browser's DOM directly, React creates a virtual DOM in memory,
                where it does all the necessary manipulating, before making the
                changes in the browser DOM. React only changes what needs to be
                changed! React finds out what changes have been made, and
                changes only what needs to be changed.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FAQ;