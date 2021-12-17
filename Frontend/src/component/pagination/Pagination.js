import React from "react";

const Pagination = () => {
  return (
    <div>
      <button
        onClick={() => {
          nextPreviousButton(mylink.previous);
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          nextPreviousButton(mylink.next);
          // navigate(mylink);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
