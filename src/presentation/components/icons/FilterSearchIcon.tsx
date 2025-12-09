import React from "react";

const FilterSearchIcon = ({ className = "" }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.54667 12.7134C9.54667 13.1201 9.27998 13.6534 8.93998 13.8601L8 14.4668C7.12667 15.0068 5.91333 14.4001 5.91333 13.3201V9.75342C5.91333 9.28008 5.64667 8.67342 5.37333 8.34009L2.81331 5.64675C2.47331 5.30675 2.20667 4.70676 2.20667 4.30009V2.75342C2.20667 1.94675 2.81334 1.34009 3.55334 1.34009H12.4467C13.1867 1.34009 13.7933 1.94675 13.7933 2.68675V4.16675C13.7933 4.70675 13.4533 5.38009 13.12 5.71342"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.7134 11.0132C11.8916 11.0132 12.8467 10.0581 12.8467 8.87992C12.8467 7.70172 11.8916 6.74658 10.7134 6.74658C9.53515 6.74658 8.58002 7.70172 8.58002 8.87992C8.58002 10.0581 9.53515 11.0132 10.7134 11.0132Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.2467 11.4132L12.58 10.7466"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FilterSearchIcon;
