import React from "react";

const UserFilledIcon = ({ className = "" }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 0C31.0276 0 40 8.9725 40 20C40 31.0276 31.0276 40 20 40C8.9725 40 0 31.0276 0 20C0 8.9725 8.9725 0 20 0ZM32.4812 30.0002C29.5462 33.6558 25.0416 36 20 36C14.9583 36 10.4535 33.6556 7.51862 29.9998C10.4535 26.3442 14.9582 24 19.9998 24C25.0414 24 29.5462 26.3444 32.4812 30.0002ZM20 20C23.3138 20 26 17.3137 26 14C26 10.6863 23.3138 8 20 8C16.6863 8 14 10.6863 14 14C14 17.3137 16.6863 20 20 20Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default UserFilledIcon;
