import React from "react";

const SearchIcon = ({ className = "" }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      a
      <path
        d="M15.8045 14.862L11.2545 10.3121C12.1359 9.22342 12.6665 7.84009 12.6665 6.33345C12.6665 2.84148 9.82522 0.000167847 6.33325 0.000167847C2.84128 0.000167847 0 2.84145 0 6.33342C0 9.82538 2.84132 12.6667 6.33328 12.6667C7.83992 12.6667 9.22325 12.136 10.3119 11.2547L14.8619 15.8047C14.9919 15.9347 15.1625 16 15.3332 16C15.5039 16 15.6745 15.9347 15.8045 15.8047C16.0652 15.544 16.0652 15.1227 15.8045 14.862ZM6.33328 11.3334C3.57597 11.3334 1.33333 9.09074 1.33333 6.33342C1.33333 3.5761 3.57597 1.33347 6.33328 1.33347C9.0906 1.33347 11.3332 3.5761 11.3332 6.33342C11.3332 9.09074 9.09057 11.3334 6.33328 11.3334Z"
        fill="currentColor"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4_959"
          x1="8.00001"
          y1="0.000167847"
          x2="8.00001"
          y2="16"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6AAEF2" />
          <stop offset="1" stopColor="#4884FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SearchIcon;
