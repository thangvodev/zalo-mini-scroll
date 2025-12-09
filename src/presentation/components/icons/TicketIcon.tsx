import React from "react";

const TicketIcon = ({ className = "" }) => {
  return (
    <svg
      width="23"
      height="18"
      viewBox="0 0 23 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19 9.5C19 8.12 20.12 7 21.5 7V6C21.5 2 20.5 1 16.5 1H6.5C2.5 1 1.5 2 1.5 6V6.5C2.88 6.5 4 7.62 4 9C4 10.38 2.88 11.5 1.5 11.5V12C1.5 16 2.5 17 6.5 17H16.5C20.5 17 21.5 16 21.5 12C20.12 12 19 10.88 19 9.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 1L9.5 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="5 5"
      />
    </svg>
  );
};

export default TicketIcon;
