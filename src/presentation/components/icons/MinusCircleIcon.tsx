import React from "react";

const MinusCircleIcon = ({ className = "" }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.4219 22C17.9219 22 22.4219 17.5 22.4219 12C22.4219 6.5 17.9219 2 12.4219 2C6.92188 2 2.42188 6.5 2.42188 12C2.42187 17.5 6.92188 22 12.4219 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.42188 12H16.4219"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MinusCircleIcon;
