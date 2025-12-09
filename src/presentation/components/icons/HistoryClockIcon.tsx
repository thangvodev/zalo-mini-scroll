import React from "react";

const HistoryClockIcon = ({ className = "" }) => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.44314 1.20313V3.96876M1.44314 3.96876H4.20878M1.44314 3.96876C2.39953 2.31547 4.18705 1.20313 6.23441 1.20313H11.7657C14.8205 1.20313 17.2969 3.67953 17.2969 6.73436V12.2656C17.2969 15.3205 14.8205 17.7969 11.7657 17.7969H6.23441C3.17958 17.7969 0.70314 15.3205 0.70314 12.2656V9.5M11.7657 12.2656L9.00001 9.5V5.35156"
        stroke="currentColor"
        strokeWidth="1.40625"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HistoryClockIcon;
