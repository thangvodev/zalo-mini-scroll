import React from "react";

const UserIcon = ({ className = "" }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.1067 11.6933C11.0445 11.6844 10.9645 11.6844 10.8934 11.6933C9.32892 11.64 8.08447 10.36 8.08447 8.78665C8.08447 7.17776 9.38225 5.87109 11 5.87109C12.6089 5.87109 13.9156 7.17776 13.9156 8.78665C13.9067 10.36 12.6711 11.64 11.1067 11.6933Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.9911 17.56C15.4089 19.0089 13.3111 19.8889 11 19.8889C8.68891 19.8889 6.59113 19.0089 5.00891 17.56C5.0978 16.7245 5.63113 15.9067 6.58224 15.2667C9.0178 13.6489 13 13.6489 15.4178 15.2667C16.3689 15.9067 16.9022 16.7245 16.9911 17.56Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 19.8889C15.9092 19.8889 19.8889 15.9092 19.8889 11C19.8889 6.09078 15.9092 2.11108 11 2.11108C6.09078 2.11108 2.11108 6.09078 2.11108 11C2.11108 15.9092 6.09078 19.8889 11 19.8889Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserIcon;
