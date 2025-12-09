import React from "react";

const HomeIcon = ({ className = "" }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M11 16.3337V13.667V16.3337Z" fill="currentColor" />
      <path
        d="M11 16.3337V13.667"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.28164 2.83997L3.12164 7.77331C2.42831 8.32442 1.98386 9.48886 2.13498 10.36L3.3172 17.4355C3.53053 18.6978 4.73942 19.72 6.01942 19.72H15.975C17.2461 19.72 18.4639 18.6889 18.6772 17.4355L19.8594 10.36C20.0016 9.48886 19.5572 8.32442 18.8728 7.77331L12.7128 2.84886C11.7616 2.08442 10.2239 2.08442 9.28164 2.83997Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HomeIcon;
