import React from "react";

const WalletIcon = ({ className = "" }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.58337 5.25H4.08337"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8333 6.39869V7.60039C12.8333 7.92122 12.5766 8.1837 12.25 8.19536H11.1066C10.4766 8.19536 9.89913 7.73453 9.84663 7.10453C9.81163 6.73703 9.95162 6.39286 10.1966 6.1537C10.4125 5.93203 10.71 5.80371 11.0366 5.80371H12.25C12.5766 5.81538 12.8333 6.07785 12.8333 6.39869Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1966 6.15448C9.95161 6.39365 9.81163 6.73782 9.84663 7.10532C9.89913 7.73532 10.4766 8.19615 11.1066 8.19615H12.25V9.04199C12.25 10.792 11.0833 11.9587 9.33329 11.9587H4.08329C2.33329 11.9587 1.16663 10.792 1.16663 9.04199V4.95866C1.16663 3.37199 2.12329 2.26366 3.61079 2.07699C3.76246 2.05366 3.91996 2.04199 4.08329 2.04199H9.33329C9.48496 2.04199 9.63079 2.04782 9.77079 2.07115C11.2758 2.24615 12.25 3.36033 12.25 4.95866V5.8045H11.0366C10.7099 5.8045 10.4124 5.93282 10.1966 6.15448Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WalletIcon;
