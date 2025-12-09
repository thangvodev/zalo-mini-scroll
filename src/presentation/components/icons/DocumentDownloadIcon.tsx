import React from "react";

const DocumentDownloadIcon = ({ className = "" }) => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.5 8.25V12.75L9 11.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 12.75L6 11.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.25 7.5V11.25C17.25 15 15.75 16.5 12 16.5H7.5C3.75 16.5 2.25 15 2.25 11.25V6.75C2.25 3 3.75 1.5 7.5 1.5H11.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.25 7.5H14.25C12 7.5 11.25 6.75 11.25 4.5V1.5L17.25 7.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DocumentDownloadIcon;
